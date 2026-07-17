-- ============================================================
-- スタディクエスト 学年平均の窓口（親画面の「比べっこ」用・2026-07-17）
-- Supabase の SQL Editor に全文貼り付けて Run するだけ
-- ・鍵なしで呼べるが、返すのは学年ごとの「平均・合計」だけ
--   （個別の子・家族のデータは一切返さない。プライバシー設計は従来どおり）
-- ・全体の平均（時間・問題数・正解率）に加えて、分野別（教科×分野）の
--   集計も返す → 親画面で「文章問題が弱め」「社会が好き」等の見立てに使う
-- ・管理人用の sq_stats_grade（鍵つき）とは別の窓口
-- ============================================================

create or replace function sq_grade_avg()
returns json
language sql stable security definer set search_path = public
as $func$
  select coalesce((
    select json_agg(json_build_object(
      'grade', o.grade, 'players', o.players,
      'avg_mins', o.avg_mins, 'avg_n', o.avg_n, 'acc', o.acc,
      'cats', coalesce(c.cats, '[]'::json)) order by o.grade)
    from (
      select grade,
             count(distinct player_id) as players,
             round(avg(mins)::numeric, 1) as avg_mins,
             round(avg(n)::numeric, 1) as avg_n,
             round((sum(ok)::numeric / nullif(sum(n), 0)) * 100, 1) as acc
      from save_days
      where grade is not null and n > 0
      group by grade
    ) o
    left join (
      select grade, json_agg(json_build_object(
        'sub', sub, 'cat', cat, 'n', n, 'ok', ok, 'pl', pl) order by n desc) as cats
      from (
        select sd.grade, (e->>'sub') as sub, (e->>'cat') as cat,
               sum(coalesce((e->>'n')::int, 0)) as n,
               sum(coalesce((e->>'ok')::int, 0)) as ok,
               count(distinct sd.player_id) as pl
        from save_days sd, jsonb_array_elements(coalesce(sd.cats, '[]'::jsonb)) e
        where sd.grade is not null
        group by sd.grade, 2, 3
      ) cc
      group by grade
    ) c on c.grade = o.grade
  ), '[]'::json)
$func$;
