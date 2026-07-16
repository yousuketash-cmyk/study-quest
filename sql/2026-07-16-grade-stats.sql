-- ============================================================
-- スタディクエスト 測定基盤 第3段階の器：学年別平均の窓口（2026-07-16）
-- Supabase の SQL Editor に全文貼り付けて Run するだけ
-- ※このファイルには鍵そのものは入れない（リポジトリは公開のため）。
--   適用後、SQL Editor で管理人の鍵を1行 insert する：
--   insert into admin_keys(k) values('（推測されにくい長い文字列）');
-- ============================================================

-- 管理人の鍵（あいことばとは別系統。全家族の「平均」を見られる鍵）
create table if not exists admin_keys (
  k text primary key,
  created_at timestamptz not null default now()
);
alter table admin_keys enable row level security;

-- 学年別の平均（個別の子のデータは返さない・平均値だけ）
-- 平均は「遊んだ日」あたり（save_days の1行=1人×1日）
create or replace function sq_stats_grade(p_key text)
returns json
language sql stable security definer set search_path = public
as $func$
  select case
    when not exists (select 1 from admin_keys where k = p_key) then null
    else coalesce((
      select json_agg(json_build_object(
        'grade', t.grade, 'players', t.players, 'play_days', t.play_days,
        'avg_mins', t.avg_mins, 'avg_n', t.avg_n, 'acc', t.acc) order by t.grade)
      from (
        select grade,
               count(distinct player_id) as players,
               count(*) as play_days,
               round(avg(mins)::numeric, 1) as avg_mins,
               round(avg(n)::numeric, 1) as avg_n,
               round((sum(ok)::numeric / nullif(sum(n), 0)) * 100, 1) as acc
        from save_days
        where grade is not null and n > 0
        group by grade
      ) t
    ), '[]'::json)
  end
$func$;
