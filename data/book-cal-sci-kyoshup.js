/*
 * book-cal-sci-kyoshup.js — 理科×教育出版（未来をひらく 小学理科）単元カレンダー倉庫
 *
 * 出典: spec/教出-理科-単元カレンダー案.md（2026-07-16/17 データ起こし）
 *   原本: 教育出版 令和6年度版「未来をひらく 小学理科」年間指導計画・評価計画（案）Excel
 *   https://www.kyoiku-shuppan.co.jp/textbook/shou/rika/document/ducu1/r6plan.html
 *   3年: r6rika3_nenkeihyouka_2404.xlsx ／ 4年: r6rika4_nenkeihyouka_2404.xlsx
 *   5年: r6rika5_nenkeihyouka_2404.xlsx ／ 6年: r6rika6_nenkeihyouka_2404.xlsx
 *
 * 形式: spec/教科書えらび-設計メモ.md「カレンダー倉庫」節
 *   1行=1単元 {base:"<ベース単元id|null>", name, term, s:[月,日]}
 *   base:null は対応qsなし（エンジンが出題対象外にする）
 *   s の「日」は原本に記載なし・月内の並びからの比例配分（全行目安）
 *
 * このファイルはデータのみ。エンジン配線（resolveBookUnits 等）は別担当。
 */
var BOOK_CAL = (typeof BOOK_CAL === "undefined") ? {} : BOOK_CAL;
BOOK_CAL.sci = BOOK_CAL.sci || {};
BOOK_CAL.sci.kyoshup = {
  3: [
    {base:"c3s1",  name:"１ 生き物を調べよう",   term:1, s:[4,10]},
    {base:"c3s2",  name:"２ 植物を育てよう",     term:1, s:[4,20]},
    {base:"c3s3",  name:"３ チョウを育てよう",   term:1, s:[5,15]},
    {base:"c3s5",  name:"４ 風やゴムの力",       term:1, s:[6,15]},
    {base:"c3s4",  name:"○ 葉を出したあと",     term:1, s:[7,5]},
    {base:"c3s8",  name:"５ こん虫の世界",       term:2, s:[9,1]},  /* 既存qsでは「動物のすみか」が最近接 */
    {base:"c3s9",  name:"○ 花をさかせたあと",   term:2, s:[9,20]}, /* 相乗り候補: c3s6（花）の内容もここに含まれる可能性あり */
    {base:"c3s10", name:"６ 太陽と地面",         term:2, s:[10,1]},
    {base:"c3s11", name:"７ 光",                 term:2, s:[10,20]},
    {base:"c3s7",  name:"８ 音",                 term:2, s:[11,15]},
    {base:"c3s14", name:"９ ものの重さ",         term:2, s:[12,1]}, /* 東書では3学期だが教出は12月配当 */
    {base:"c3s12", name:"10 電気の通り道",       term:3, s:[1,10]},
    {base:"c3s13", name:"11 じしゃく",           term:3, s:[2,10]},
    {base:null,    name:"○ 作って遊ぼう",       term:3, s:[3,10]}, /* 対応qsなし（電気・磁石のものづくり・まとめ活動） */
  ],
  4: [
    {base:"c4s1",  name:"１ 季節と生き物",           term:1, s:[4,10]},
    {base:"c4s2",  name:"２ 天気による気温の変化",   term:1, s:[5,1]},
    {base:"c4s9",  name:"３ 体のつくりと運動",       term:1, s:[5,20]}, /* 既存qsは年後半配当だが教出は5〜6月 */
    {base:"c4s3",  name:"４ 電流のはたらき",         term:1, s:[6,10]},
    {base:"c4s4",  name:"○ 夏と生き物",             term:1, s:[7,1]},
    {base:"c4s5",  name:"○ 夏の星",                 term:1, s:[7,15]}, /* c4s5「星」パート（#8・#13にも再流用） */
    {base:"c4s6",  name:"５ 雨水と地面",             term:2, s:[9,1]},
    {base:"c4s5",  name:"６ 月の位置の変化",         term:2, s:[9,15]}, /* c4s5 再流用（「月」パート） */
    {base:"c4s14", name:"７ とじこめた空気や水",     term:2, s:[10,1]}, /* 2026-07-17 に新設した c4s14 を充当（spec起票時は未存在だった） */
    {base:"c4s7",  name:"○ 秋と生き物",             term:2, s:[10,15]},
    {base:"c4s8",  name:"８ ものの温度と体積",       term:2, s:[11,1]},
    {base:"c4s10", name:"９ もののあたたまり方",     term:2, s:[11,20]},
    {base:"c4s5",  name:"○ 冬の星",                 term:3, s:[1,10]}, /* c4s5 再流用（「星」パート） */
    {base:"c4s11", name:"○ 冬と生き物",             term:3, s:[1,15]},
    {base:"c4s12", name:"10 水のすがたの変化",       term:3, s:[1,25]},
    {base:"c4s13", name:"11 水のゆくえ",             term:3, s:[2,20]},
    {base:null,    name:"○ 生き物の１年",           term:3, s:[3,15]}, /* 対応qsなし（季節と生き物シリーズのまとめ活動） */
  ],
  5: [
    {base:"c5s1",  name:"１ 天気の変化",             term:1, s:[4,10]},
    {base:"c5s2",  name:"２ 植物の発芽や成長",       term:1, s:[5,1]},
    {base:"c5s3",  name:"３ メダカのたんじょう",     term:1, s:[6,10]},
    {base:"c5s8",  name:"４ ふりこ",                 term:1, s:[6,25]}, /* 既存qsは年後半配当だが教出は6〜7月 */
    {base:"c5s5",  name:"５ 花から実へ",             term:2, s:[9,1]},
    {base:"c5s4",  name:"○ 台風接近",               term:2, s:[9,25]},
    {base:"c5s6",  name:"６ 流れる水と土地",         term:2, s:[10,10]},
    {base:"c5s6",  name:"○ 川と災害",               term:2, s:[11,15]}, /* c5s6 再流用（「災害」パート） */
    {base:"c5s9",  name:"７ 電流が生み出す力",       term:2, s:[11,20]},
    {base:"c5s7",  name:"８ もののとけ方",           term:3, s:[1,10]},
    {base:"c5s10", name:"９ 人のたんじょう",         term:3, s:[2,20]},
    {base:null,    name:"○ 受けつがれる生命",       term:3, s:[3,15]}, /* 対応qsなし（生命のつながりのまとめ） */
  ],
  6: [
    {base:"sc1",  name:"１ ものの燃え方と空気",       term:1, s:[4,10]},
    {base:"sc3",  name:"２ 人や他の動物の体",         term:1, s:[5,15]},
    {base:"sc2",  name:"３ 植物の体",                 term:1, s:[6,15]}, /* 相乗り: sc4（教出は日光・水を1単元に統合。前半=sc4 水の通り道→後半=sc2 日光の順が目安） */
    {base:"sc5",  name:"４ 生き物と食べ物・空気・水", term:2, s:[9,1]},
    {base:"sc9",  name:"５ てこ",                     term:2, s:[9,20]}, /* 東書では2学期後半だが教出は9〜10月配当 */
    {base:"sc8",  name:"６ 土地のつくり",             term:2, s:[10,15]},
    {base:"sc8",  name:"○ 地震や火山と災害",         term:2, s:[11,20]}, /* sc8 再流用（「変化（地震・火山）」パート） */
    {base:"sc6",  name:"７ 月の見え方と太陽",         term:2, s:[12,1]}, /* 東書では9月ごろだが教出は12月配当 */
    {base:"sc7",  name:"８ 水溶液",                   term:3, s:[1,10]},
    {base:"sc10", name:"９ 電気の利用",               term:3, s:[2,10]},
    {base:"sc11", name:"○ 人の生活と自然環境",       term:3, s:[3,15]},
  ],
};
