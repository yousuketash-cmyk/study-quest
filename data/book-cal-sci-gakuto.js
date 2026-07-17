/*
 * 学校図書「みんなと学ぶ 小学校 理科」単元カレンダー（3〜6年）
 * 出典: spec/学図-理科-単元カレンダー案.md（2026-07-16/17 データ起こし。
 *       原本＝学図 年間指導計画作成資料 Excel R6_rika_nenkan3-6.xlsx＋3・6年PDF）
 * 形式: spec/教科書えらび-設計メモ.md「カレンダー倉庫」節に準拠
 *   1行=1単元 {base:"<ベース単元id|null>", name, term:1|2|3, s:[月,日]}
 *   base:null = 対応qsなし（エンジンが出題対象外にする）
 *   同じ base の複数行 = 分割流用。相乗りは最初の1つだけ base にしコメント
 * ※このファイルはデータ倉庫のみ。エンジン配線（resolveBookUnits 等）は別担当。
 */
var BOOK_CAL = (typeof BOOK_CAL === "undefined") ? {} : BOOK_CAL;
BOOK_CAL.sci = BOOK_CAL.sci || {};
BOOK_CAL.sci.gakuto = {
  3: [
    {base:null,    name:"理科の世界をぼうけんしよう", term:1, s:[4,1]},
    {base:"c3s1",  name:"1.しぜんのかんさつ", term:1, s:[4,4]},
    {base:"c3s2",  name:"2.植物を育てよう 2-1たねをまこう", term:1, s:[5,4]},
    {base:"c3s10", name:"3.かげと太陽", term:1, s:[5,13]},
    {base:"c3s4",  name:"●2-2ぐんぐんのびろ", term:1, s:[6,8]},
    {base:"c3s3",  name:"4.チョウを育てよう", term:1, s:[6,16]},
    {base:"c3s6",  name:"●2-3花がさいた", term:1, s:[7,10]},
    {base:null,    name:"わたしの自由研究", term:1, s:[7,12]},
    {base:"c3s8",  name:"5.こん虫を調べよう", term:2, s:[9,1]},
    {base:"c3s9",  name:"●2-4実ができるころ", term:2, s:[9,12]},
    {base:"c3s7",  name:"6.音を調べよう", term:2, s:[9,17]},
    {base:"c3s11", name:"7.光を調べよう", term:2, s:[10,12]},
    {base:"c3s5",  name:"8.風のはたらき", term:2, s:[11,3]},   /* c3s5 分割流用（風パート） */
    {base:"c3s5",  name:"9.ゴムのはたらき", term:2, s:[11,16]}, /* c3s5 分割流用（ゴムパート） */
    {base:"c3s12", name:"10.明かりをつけよう", term:2, s:[12,1]},
    {base:"c3s13", name:"11.じしゃくのひみつ", term:3, s:[1,1]},
    {base:"c3s14", name:"12.ものの重さを調べよう", term:3, s:[2,16]},
    {base:null,    name:"科学者を知ろう", term:3, s:[3,12]},
    {base:null,    name:"3年生で学んだこと", term:3, s:[3,15]},
  ],
  4: [
    {base:null,    name:"理科の世界をぼうけんしよう", term:1, s:[4,1]},
    {base:"c4s1",  name:"1.季節と生き物 ●1-1あたたかくなって", term:1, s:[4,3]},
    {base:"c4s2",  name:"2.1日の気温と天気", term:1, s:[5,1]},
    {base:"c4s14", name:"3.空気と水", term:1, s:[5,14]}, /* 2026-07-17 に新設した c4s14 を充当（spec起票時は未存在だった） */
    {base:"c4s3",  name:"4.電気のはたらき", term:1, s:[6,4]},
    {base:"c4s6",  name:"5.雨水の流れ", term:1, s:[6,20]},
    {base:"c4s4",  name:"●1-2暑い季節", term:1, s:[7,2]},
    {base:"c4s5",  name:"●夏の星", term:1, s:[7,9]},      /* c4s5 分割流用（#10・#15 と共用） */
    {base:null,    name:"わたしの自由研究", term:1, s:[7,13]},
    {base:"c4s5",  name:"6.月や星の動き", term:2, s:[9,1]}, /* c4s5 本編 */
    {base:"c4s7",  name:"●1-3すずしくなると", term:2, s:[10,1]},
    {base:"c4s13", name:"7.自然の中の水", term:2, s:[10,13]},
    {base:"c4s12", name:"8.水の3つのすがた", term:2, s:[10,26]},
    {base:"c4s8",  name:"9.ものの体積と温度", term:2, s:[11,21]},
    {base:"c4s5",  name:"●冬の星", term:3, s:[1,1]},       /* c4s5 分割流用 */
    {base:null,    name:"科学者を知ろう", term:3, s:[1,7]},
    {base:"c4s11", name:"●1-4寒さの中でも", term:3, s:[1,10]},
    {base:"c4s10", name:"10.ものの温まり方", term:3, s:[2,3]},
    {base:"c4s9",  name:"11.人の体のつくりと運動", term:3, s:[2,26]},
    {base:null,    name:"理科の世界をふりかえろう", term:3, s:[3,12]},
  ],
  5: [
    {base:null,    name:"理科の世界をぼうけんしよう", term:1, s:[4,1]},
    {base:"c5s8",  name:"1.ふりこの運動", term:1, s:[4,3]},
    {base:"c5s2",  name:"2.種子の発芽と成長", term:1, s:[5,14]},
    {base:"c5s3",  name:"3.魚のたんじょう", term:1, s:[6,18]},
    {base:"c5s4",  name:"●台風の接近", term:1, s:[7,7]},
    {base:null,    name:"●わたしの自由研究", term:1, s:[7,13]},
    {base:"c5s5",  name:"4.実や種子のでき方", term:2, s:[9,1]},
    {base:"c5s1",  name:"5.雲と天気の変化", term:2, s:[10,1]}, /* c5s1 分割流用（#12 と共用） */
    {base:"c5s6",  name:"6.流れる水のはたらき", term:2, s:[10,19]},
    {base:"c5s6",  name:"●川と災害", term:2, s:[11,10]},      /* c5s6 分割流用（#9 の続き扱い） */
    {base:"c5s9",  name:"7.電流のはたらき", term:2, s:[11,19]},
    {base:"c5s1",  name:"●冬から春へ", term:3, s:[1,1]},       /* c5s1 分割流用 */
    {base:"c5s7",  name:"8.もののとけ方", term:3, s:[1,5]},
    {base:null,    name:"科学者のでん記を読もう", term:3, s:[2,18]},
    {base:"c5s10", name:"9.人のたんじょう", term:3, s:[2,21]},
    {base:null,    name:"理科の世界をふりかえろう", term:3, s:[3,12]},
  ],
  6: [
    {base:null,   name:"理科の世界をぼうけんしよう", term:1, s:[4,1]},
    {base:"sc11", name:"●環境と私たちのくらし", term:1, s:[4,3]}, /* sc11 分割流用（#14「10.人と環境」の前置き） */
    {base:"sc1",  name:"1.ものの燃え方と空気", term:1, s:[4,5]},
    {base:"sc3",  name:"2.人や動物の体", term:1, s:[5,20]},
    {base:"sc2",  name:"3.植物の養分と水", term:1, s:[6,11]}, /* 相乗り: sc4（前半sc2・後半sc4の統合単元。エンジンv1は sc2 のみ） */
    {base:"sc5",  name:"4.生物のくらしと環境", term:1, s:[6,26]},
    {base:null,   name:"●わたしの自由研究", term:1, s:[7,12]},
    {base:"sc9",  name:"5.てこのしくみとはたらき", term:2, s:[9,1]},
    {base:"sc6",  name:"6.月の形と太陽", term:2, s:[10,1]},
    {base:"sc8",  name:"7.大地のつくりと変化", term:2, s:[10,21]},
    {base:"sc8",  name:"●火山の噴火と地震", term:2, s:[11,12]}, /* sc8 分割流用（#10 の続き扱い） */
    {base:"sc7",  name:"8.水溶液の性質", term:2, s:[11,21]},
    {base:"sc10", name:"9.電気と私たちの生活", term:3, s:[1,1]},
    {base:"sc11", name:"10.人と環境", term:3, s:[2,16]},        /* sc11 分割流用（#2 の本編） */
    {base:null,   name:"科学者のでん記を読もう", term:3, s:[3,12]},
    {base:null,   name:"理科の世界をふりかえろう", term:3, s:[3,15]},
  ],
};
