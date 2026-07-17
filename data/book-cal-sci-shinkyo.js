/* ============================================================
 * book-cal-sci-shinkyo.js — 理科×信州教育出版社（信教）単元カレンダー
 *
 * 出典: spec/信教-理科-単元カレンダー案.md（2026-07-16/17 データ起こし）
 *   原本は信州教育出版社 令和6年度用 小学校理科 年間指導計画（3〜6年 Excel）
 *   https://www.shinkyo-pub.or.jp/r6_kyokasyo_sp/r6_rika/rika_r6sp.html
 * 形式: spec/教科書えらび-設計メモ.md「カレンダー倉庫」節に準拠
 *   1行=1単元 {base:"<ベース単元id|null>", name, term:1|2|3, s:[月,日]}
 *   base:null は対応する既存qsが無い単元（エンジンが出題対象外にする）
 *   同じ base の複数行使用は分割流用。相乗りは最初の1つだけを base にしコメントで明記
 * 注意: このファイルはデータ倉庫のみ。エンジン配線（index.html / admin.html）は別担当。
 * ============================================================ */

var BOOK_CAL = (typeof BOOK_CAL === "undefined") ? {} : BOOK_CAL;
BOOK_CAL.sci = BOOK_CAL.sci || {};

BOOK_CAL.sci.shinkyo = {

  /* ---- 3年（14単元＋番号なし2件） ---- */
  3: [
    {base:null,    name:"学習の準備",                             term:1, s:[4,5]},
    {base:"c3s10", name:"太陽とかげを調べよう",                   term:1, s:[4,15]},
    {base:"c3s1",  name:"身近なしぜんのかんさつ",                 term:1, s:[4,25]}, /* 相乗り: c3s8 動物のすみか（動物のいる場所調べ） */
    {base:"c3s2",  name:"植物の育ち方(1) 植物を育てよう",         term:1, s:[5,15]},
    {base:"c3s10", name:"日なたと日かげをくらべよう",             term:1, s:[6,5]},  /* c3s10 を2分割で再流用 */
    {base:"c3s3",  name:"こん虫の育ち方(1) チョウを育てよう",     term:1, s:[6,15]},
    {base:"c3s4",  name:"植物の育ち方(2) 植物のからだ調べよう",   term:1, s:[7,5]},
    {base:null,    name:"自由研究",                               term:1, s:[7,15]},
    {base:"c3s3",  name:"こん虫の育ち方(2) こん虫のからだを調べよう", term:2, s:[8,25]}, /* c3s3 を2分割で再流用 */
    {base:"c3s9",  name:"植物の育ち方(3) 花がさいた後の植物を調べよう", term:2, s:[9,5]}, /* 相乗り: c3s6 植物の育ち方（花） */
    {base:"c3s5",  name:"風やゴムの力のはたらき",                 term:2, s:[9,25]},
    {base:"c3s11", name:"光のせいしつ",                           term:2, s:[10,15]},
    {base:"c3s12", name:"豆電球に明かりをつけよう",               term:2, s:[11,5]},
    {base:"c3s7",  name:"音のせいしつ",                           term:2, s:[12,5]},
    {base:"c3s13", name:"じしゃくのせいしつ",                     term:3, s:[1,5]},
    {base:"c3s14", name:"ものの重さをくらべよう",                 term:3, s:[2,15]}
  ],

  /* ---- 4年（16単元＋番号なし2件） ---- */
  4: [
    {base:null,    name:"学習の準備",                             term:1, s:[4,5]},
    {base:"c4s1",  name:"生き物のくらし〜春〜",                   term:1, s:[4,15]},
    {base:"c4s14", name:"とじこめた空気と水のせいしつ",           term:1, s:[5,15]}, /* 2026-07-17 に新設した c4s14 を充当 */
    {base:"c4s8",  name:"ものの温度と体積",                       term:1, s:[6,5]},
    {base:"c4s5",  name:"月と星(1) 夏の星",                       term:1, s:[6,25]}, /* c4s5 を3分割流用（1つ目） */
    {base:"c4s4",  name:"生き物のくらし〜夏〜",                   term:1, s:[7,5]},
    {base:null,    name:"自由研究",                               term:1, s:[7,15]},
    {base:"c4s5",  name:"月と星(2) 月の形と位置の変化",           term:2, s:[8,25]}, /* c4s5 を3分割流用（2つ目） */
    {base:"c4s6",  name:"雨水のゆくえ",                           term:2, s:[9,5]},
    {base:"c4s2",  name:"天気と気温",                             term:2, s:[9,25]},
    {base:"c4s7",  name:"生き物のくらし〜秋〜",                   term:2, s:[10,5]},
    {base:"c4s9",  name:"人の体のつくりと運動",                   term:2, s:[10,15]},
    {base:"c4s3",  name:"電流のはたらき",                         term:2, s:[11,15]},
    {base:"c4s10", name:"もののあたたまり方",                     term:2, s:[12,5]},
    {base:"c4s11", name:"生き物のくらし〜冬〜",                   term:3, s:[1,5]},
    {base:"c4s5",  name:"月と星(3) 星の位置の変化",               term:3, s:[1,20]}, /* c4s5 を3分割流用（3つ目） */
    {base:"c4s12", name:"水のすがたと温度",                       term:3, s:[2,5]},
    {base:"c4s13", name:"水のゆくえ",                             term:3, s:[2,25]}
  ],

  /* ---- 5年（11単元＋番号なし2件） ---- */
  5: [
    {base:null,    name:"学習の準備",                             term:1, s:[4,5]},
    {base:"c5s1",  name:"天気の変化（１）",                       term:1, s:[4,15]},
    {base:"c5s2",  name:"種子の発芽",                             term:1, s:[4,25]}, /* c5s2 を2分割流用（発芽） */
    {base:"c5s2",  name:"植物の成長",                             term:1, s:[5,15]}, /* c5s2 を2分割流用（成長） */
    {base:"c5s3",  name:"生命のたん生（魚）",                     term:1, s:[6,5]},
    {base:"c5s5",  name:"花のつくりと実",                         term:1, s:[6,25]},
    {base:null,    name:"自由研究",                               term:1, s:[7,15]},
    {base:"c5s10", name:"生命のたん生（人）",                     term:2, s:[8,25]},
    {base:"c5s4",  name:"天気の変化（２）",                       term:2, s:[9,5]},
    {base:"c5s6",  name:"流れる水のはたらき",                     term:2, s:[9,25]},
    {base:"c5s9",  name:"電じ石のはたらき",                       term:2, s:[11,15]},
    {base:"c5s7",  name:"もののとけ方",                           term:3, s:[1,15]},
    {base:"c5s8",  name:"ふりこの運動",                           term:3, s:[2,15]}
  ],

  /* ---- 6年（10単元＋番号なし3件） ---- */
  6: [
    {base:null,    name:"学習の準備",                             term:1, s:[4,5]},
    {base:"sc1",   name:"ものの燃え方と空気",                     term:1, s:[4,15]},
    {base:"sc3",   name:"人や他の動物の体",                       term:1, s:[5,15]},
    {base:"sc2",   name:"植物のからだとはたらき",                 term:1, s:[6,15]}, /* 相乗り: sc4 植物の体のつくりとはたらき（水）。sc2→sc4 の順で統合 */
    {base:null,    name:"自由研究(1)",                            term:1, s:[7,5]},
    {base:"sc5",   name:"生き物と自然",                           term:1, s:[7,15]},
    {base:null,    name:"自由研究(2)",                            term:2, s:[8,25]},
    {base:"sc6",   name:"月と太陽",                               term:2, s:[9,25]},
    {base:"sc8",   name:"大地のつくりと変化",                     term:2, s:[10,5]},
    {base:"sc9",   name:"てこのはたらき",                         term:2, s:[11,15]},
    {base:"sc7",   name:"水よう液の性質",                         term:2, s:[12,15]},
    {base:"sc10",  name:"電気の利用",                             term:3, s:[1,15]},
    {base:"sc11",  name:"人と環境",                               term:3, s:[3,5]}
  ]

};
