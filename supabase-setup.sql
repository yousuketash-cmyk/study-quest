-- ============================================================
-- スタディクエスト クラウド保存 初期設定 v1（2026-07-15）
-- Supabase の SQL Editor に全文貼り付けて Run するだけ
-- ============================================================

create extension if not exists pgcrypto;

-- かぞく（あいことば1つ＝1家族）
create table if not exists families (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  pin text not null,
  created_at timestamptz not null default now()
);

-- プレイヤー（きょうだい）
create table if not exists players (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references families(id) on delete cascade,
  name text not null,
  created_at timestamptz not null default now()
);

-- セーブデータ（1プレイヤー1件・丸ごとJSON）
create table if not exists saves (
  player_id uuid primary key references players(id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

-- テーブルへの直接アクセスは全部拒否（窓口は下の関数だけ）
alter table families enable row level security;
alter table players enable row level security;
alter table saves enable row level security;

-- あいことばを新しく登録（4文字未満は登録させない）
create or replace function sq_register_family(p_code text, p_pin text)
returns uuid
language sql security definer set search_path = public
as $func$
  insert into families(code, pin)
  select p_code, p_pin
  where length(p_code) >= 4 and length(p_pin) >= 4
  returning id
$func$;

-- あいことばが存在するか
create or replace function sq_check_family(p_code text)
returns boolean
language sql stable security definer set search_path = public
as $func$
  select exists(select 1 from families where code = p_code)
$func$;

-- 家族のプレイヤー一覧
create or replace function sq_get_players(p_code text)
returns json
language sql stable security definer set search_path = public
as $func$
  select coalesce(json_agg(json_build_object('id', p.id, 'name', p.name) order by p.created_at), '[]'::json)
  from players p join families f on f.id = p.family_id
  where f.code = p_code
$func$;

-- プレイヤー追加
create or replace function sq_add_player(p_code text, p_name text)
returns uuid
language sql security definer set search_path = public
as $func$
  insert into players(family_id, name)
  select f.id, left(p_name, 20) from families f where f.code = p_code
  returning id
$func$;

-- 名前変更
create or replace function sq_rename_player(p_code text, p_player uuid, p_name text)
returns void
language sql security definer set search_path = public
as $func$
  update players p set name = left(p_name, 20)
  from families f
  where f.id = p.family_id and f.code = p_code and p.id = p_player
$func$;

-- プレイヤー削除（セーブも道連れで消える）
create or replace function sq_delete_player(p_code text, p_player uuid)
returns void
language sql security definer set search_path = public
as $func$
  delete from players p
  using families f
  where f.id = p.family_id and f.code = p_code and p.id = p_player
$func$;

-- セーブの取得
create or replace function sq_get_save(p_code text, p_player uuid)
returns json
language sql stable security definer set search_path = public
as $func$
  select json_build_object('data', s.data, 'updated_at', s.updated_at)
  from saves s
  join players p on p.id = s.player_id
  join families f on f.id = p.family_id
  where f.code = p_code and p.id = p_player
$func$;

-- セーブの保存（新規でも上書きでも）
create or replace function sq_put_save(p_code text, p_player uuid, p_data jsonb)
returns void
language sql security definer set search_path = public
as $func$
  insert into saves(player_id, data, updated_at)
  select p_player, p_data, now()
  where exists (
    select 1 from players p join families f on f.id = p.family_id
    where p.id = p_player and f.code = p_code
  )
  on conflict (player_id) do update set data = excluded.data, updated_at = now()
$func$;

-- 親用：家族全員の記録まとめ（あいことば＋おうちのひと用ばんごうの両方が必要）
create or replace function sq_admin_overview(p_code text, p_pin text)
returns json
language sql stable security definer set search_path = public
as $func$
  select case
    when not exists (select 1 from families where code = p_code and pin = p_pin) then null
    else coalesce((
      select json_agg(json_build_object(
        'id', p.id, 'name', p.name,
        'updated_at', s.updated_at, 'data', s.data) order by p.created_at)
      from players p
      left join saves s on s.player_id = p.id
      join families f2 on f2.id = p.family_id
      where f2.code = p_code
    ), '[]'::json)
  end
$func$;
