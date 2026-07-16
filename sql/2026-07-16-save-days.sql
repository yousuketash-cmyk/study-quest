-- ============================================================
-- スタディクエスト 測定基盤 第2段階：日別サマリーの倉庫（2026-07-16）
-- Supabase の SQL Editor に全文貼り付けて Run するだけ
-- （sq_put_save を差し替えるが、呼び出し方は同じ＝ゲーム側は無改修）
-- ============================================================

-- 日別サマリー（1プレイヤー×1日で1行。logが3,000問で消えても ここは残る）
create table if not exists save_days (
  player_id uuid not null references players(id) on delete cascade,
  d text not null,                                   -- 日付 "2026-07-16"
  n int not null default 0,                          -- といた問題数
  ok int not null default 0,                         -- 正解数
  ms numeric not null default 0,                     -- 回答時間の合計（ミリ秒）
  mins numeric not null default 0,                   -- 学習時間（分）
  grade int,                                         -- その時点の学年
  updated_at timestamptz not null default now(),
  primary key (player_id, d)
);
alter table save_days enable row level security;

-- セーブの保存（差し替え版）：保存と同時に log/sessions を日別集計して倉庫へ
-- 単文（CTE連結）で書く：Studio の DO ブロック構文解析バグを避けるため
create or replace function sq_put_save(p_code text, p_player uuid, p_data jsonb)
returns void
language sql security definer set search_path = public
as $func$
  with okp as (
    select 1 from players p join families f on f.id = p.family_id
    where p.id = p_player and f.code = p_code
  ), qd as (
    select e->>'d' as d, count(*)::int as n, sum(coalesce((e->>'ok')::int,0))::int as ok,
           sum(coalesce((e->>'ms')::numeric,0)) as ms
    from jsonb_array_elements(coalesce(p_data->'log','[]'::jsonb)) e
    where e->>'d' is not null group by 1
  ), sd as (
    select s->>'d' as d, sum(coalesce((s->>'mins')::numeric,0)) as mins
    from jsonb_array_elements(coalesce(p_data->'sessions','[]'::jsonb)) s
    where s->>'d' is not null group by 1
  ), merged as (
    select coalesce(qd.d, sd.d) as d, coalesce(qd.n,0) as n, coalesce(qd.ok,0) as ok,
           coalesce(qd.ms,0) as ms, coalesce(sd.mins,0) as mins
    from qd full join sd on qd.d = sd.d
  ), up_days as (
    insert into save_days(player_id, d, n, ok, ms, mins, grade, updated_at)
    select p_player, m.d, m.n, m.ok, m.ms, m.mins,
           coalesce(nullif(p_data->>'grade','')::int, 3), now()
    from merged m where exists (select 1 from okp)
    on conflict (player_id, d) do update
      set n=excluded.n, ok=excluded.ok, ms=excluded.ms, mins=excluded.mins,
          grade=excluded.grade, updated_at=now()
      where excluded.n >= save_days.n   -- logから消えかけの日は「過去最大の記録」を守る
    returning 1
  )
  insert into saves(player_id, data, updated_at)
  select p_player, p_data, now()
  where exists (select 1 from okp)
  on conflict (player_id) do update set data = excluded.data, updated_at = now()
$func$;

-- 親用：日別サマリーの取得（あいことば＋おうちのひと用ばんごう）
create or replace function sq_admin_days(p_code text, p_pin text)
returns json
language sql stable security definer set search_path = public
as $func$
  select case
    when not exists (select 1 from families where code = p_code and pin = p_pin) then null
    else coalesce((
      select json_agg(json_build_object(
        'player_id', sd.player_id, 'name', p.name, 'd', sd.d,
        'n', sd.n, 'ok', sd.ok, 'ms', sd.ms, 'mins', sd.mins, 'grade', sd.grade)
        order by sd.d, p.created_at)
      from save_days sd
      join players p on p.id = sd.player_id
      join families f on f.id = p.family_id
      where f.code = p_code
    ), '[]'::json)
  end
$func$;
