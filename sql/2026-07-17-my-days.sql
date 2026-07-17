-- ============================================================
-- スタディクエスト 「この子の成長ものがたり」用の窓口（2026-07-17）
-- Supabase の SQL Editor に全文貼り付けて Run するだけ
-- ・自分の子の日別記録（save_days）を全期間ぶん返す
-- ・鍵は sq_get_save と同じ（あいことば＋その家族の子のIDが揃わないと何も返さない）
-- ・手元の記録（log）は直近3,000問で切れるため、長期の推移はこの倉庫が頼り
-- ============================================================

create or replace function sq_my_days(p_code text, p_player uuid)
returns json
language sql stable security definer set search_path = public
as $func$
  select coalesce(json_agg(json_build_object(
    'd', sd.d, 'n', sd.n, 'ok', sd.ok, 'mins', sd.mins, 'cats', sd.cats) order by sd.d), '[]'::json)
  from save_days sd
  join players p on p.id = sd.player_id
  join families f on f.id = p.family_id
  where f.code = p_code and p.id = p_player
$func$;
