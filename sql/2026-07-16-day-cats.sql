-- ============================================================
-- スタディクエスト 記録の土台：日別倉庫に「分野別の内訳」を追加（2026-07-16）
-- Supabase の SQL Editor に全文貼り付けて Run するだけ
-- （sq_put_save / sq_admin_days を差し替える。呼び出し方は同じ＝ゲーム側は無改修で互換）
--
-- ※新規構築のときは supabase-setup.sql → 2026-07-16-save-days.sql → このファイル の順に流す
-- ============================================================

-- 分野別の内訳（1日×分野ごとの 問題数・正解数・時間・復習の成績）
-- 形： [{"sub":"kokugo","cat":"kanji","n":12,"ok":9,"ms":48000,"rn":3,"rok":2}, ...]
--   rn＝🔁復習の出しなおし問題を といた数 ／ rok＝そのうち正解した数（＝定着の測定）
alter table save_days add column if not exists cats jsonb;

-- セーブの保存（差し替え版）：合計に加えて 分野別の内訳も 日別に集計して倉庫へ
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
  ), qc as (
    select e->>'d' as d, coalesce(e->>'sub','?') as sub, coalesce(e->>'cat','?') as cat,
           count(*)::int as n, sum(coalesce((e->>'ok')::int,0))::int as ok,
           sum(coalesce((e->>'ms')::numeric,0)) as ms,
           coalesce((count(*) filter (where e->>'r' = '1'))::int, 0) as rn,
           coalesce((sum(coalesce((e->>'ok')::int,0)) filter (where e->>'r' = '1'))::int, 0) as rok
    from jsonb_array_elements(coalesce(p_data->'log','[]'::jsonb)) e
    where e->>'d' is not null group by 1,2,3
  ), qcats as (
    select d, jsonb_agg(jsonb_build_object(
      'sub',sub,'cat',cat,'n',n,'ok',ok,'ms',ms,'rn',rn,'rok',rok) order by n desc) as cats
    from qc group by d
  ), sd as (
    select s->>'d' as d, sum(coalesce((s->>'mins')::numeric,0)) as mins
    from jsonb_array_elements(coalesce(p_data->'sessions','[]'::jsonb)) s
    where s->>'d' is not null group by 1
  ), merged as (
    select coalesce(qd.d, sd.d) as d, coalesce(qd.n,0) as n, coalesce(qd.ok,0) as ok,
           coalesce(qd.ms,0) as ms, coalesce(sd.mins,0) as mins, qcats.cats as cats
    from qd full join sd on qd.d = sd.d
    left join qcats on qcats.d = coalesce(qd.d, sd.d)
  ), up_days as (
    insert into save_days(player_id, d, n, ok, ms, mins, grade, cats, updated_at)
    select p_player, m.d, m.n, m.ok, m.ms, m.mins,
           coalesce(nullif(p_data->>'grade','')::int, 3), m.cats, now()
    from merged m where exists (select 1 from okp)
    on conflict (player_id, d) do update
      set n=excluded.n, ok=excluded.ok, ms=excluded.ms, mins=excluded.mins,
          grade=excluded.grade, cats=coalesce(excluded.cats, save_days.cats), updated_at=now()
      where excluded.n >= save_days.n   -- logから消えかけの日は「過去最大の記録」を守る（catsも古い方が残る）
    returning 1
  )
  insert into saves(player_id, data, updated_at)
  select p_player, p_data, now()
  where exists (select 1 from okp)
  on conflict (player_id) do update set data = excluded.data, updated_at = now()
$func$;

-- 親用：日別サマリーの取得（差し替え版・分野別の内訳つき）
create or replace function sq_admin_days(p_code text, p_pin text)
returns json
language sql stable security definer set search_path = public
as $func$
  select case
    when not exists (select 1 from families where code = p_code and pin = p_pin) then null
    else coalesce((
      select json_agg(json_build_object(
        'player_id', sd.player_id, 'name', p.name, 'd', sd.d,
        'n', sd.n, 'ok', sd.ok, 'ms', sd.ms, 'mins', sd.mins, 'grade', sd.grade,
        'cats', sd.cats)
        order by sd.d, p.created_at)
      from save_days sd
      join players p on p.id = sd.player_id
      join families f on f.id = p.family_id
      where f.code = p_code
    ), '[]'::json)
  end
$func$;
