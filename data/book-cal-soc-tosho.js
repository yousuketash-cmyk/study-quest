/*
 * 東京書籍「新編 新しい社会」単元カレンダー（4・5・6年）
 * 出典:
 *   - 4年・5年: spec/東書-理社4-5年-単元カレンダー案.md
 *     （原本: https://ten.tokyo-shoseki.co.jp/text/shou/shakai/data/shakai_keikaku_ryakuan_4.pdf ／ _5.pdf）
 *   - 6年: spec/東書-理社6年-単元カレンダー案.md
 *     （原本: https://ten.tokyo-shoseki.co.jp/text/shou/shakai/data/shakai_keikaku_ryakuan_6.pdf）
 * 3年は作らない（川口の SOC_UNITS_G3_KAWA を流用するため）。
 * base は既存qsの単元id（4年=c4o*・5年=c5o*・6年=so*）。base:null は対応qsなし（出題対象外）。
 * エンジン配線（resolveBookUnits 等）は別担当。このファイルはデータ倉庫のみ。
 */
var BOOK_CAL = (typeof BOOK_CAL === "undefined") ? {} : BOOK_CAL;
BOOK_CAL.soc = BOOK_CAL.soc || {};
BOOK_CAL.soc.tosho = {
  4: [
    {base:null,   name:"1＞導入（オリエンテーション）", term:1, s:[4,5]},
    {base:"c4o1", name:"1＞〇日本地図を広げて", term:1, s:[4,15]},   /* c4o1「47都道府県」側を分割流用 */
    {base:"c4o1", name:"1＞1 県の広がり", term:1, s:[4,25]},   /* c4o1「わたしたちの県」側 */
    {base:null,   name:"2＞導入（オリエンテーション）", term:1, s:[5,15]},
    {base:"c4o2", name:"2＞1 水はどこから", term:1, s:[5,25]},
    {base:"c4o3", name:"2＞2 ごみのしょりと利用", term:1, s:[6,25]},
    {base:null,   name:"3＞導入（オリエンテーション）", term:2, s:[9,5]},
    {base:"c4o4", name:"3＞1 風水害からくらしを守る", term:2, s:[9,15]},
    {base:null,   name:"4＞導入（オリエンテーション）", term:2, s:[10,15]},
    {base:"c4o5", name:"4＞1 残したいもの 伝えたいもの", term:2, s:[10,25]},
    {base:"c4o6", name:"4＞2 谷に囲まれた台地に水を引く", term:2, s:[11,25]},
    {base:null,   name:"5＞導入（オリエンテーション）", term:3, s:[1,5]},
    {base:"c4o7", name:"5＞1 こけしをつくるまち・蔵王町", term:3, s:[1,15]},   /* c4o7 を3小単元に分割流用 */
    {base:"c4o7", name:"5＞2 国際交流に取り組むまち・仙台市", term:3, s:[2,5]},
    {base:"c4o7", name:"5＞3 美しい景観を生かすまち・松島町／古いまちなみを生かすまち・登米市登米町（選択）", term:3, s:[2,25]},
    {base:null,   name:"5＞いかす（第5単元全体）", term:3, s:[3,15]}
  ],
  5: [
    {base:null,    name:"1＞導入（オリエンテーション）", term:1, s:[4,5]},
    {base:"c5o1",  name:"1＞1 世界の中の国土", term:1, s:[4,15]},
    {base:"c5o2",  name:"1＞2 国土の地形の特色", term:1, s:[4,25]},   /* c5o2「地形」側を分割流用 */
    {base:"c5o3",  name:"1＞3 低い土地のくらし／高い土地のくらし（選択）", term:1, s:[5,5]},   /* c5o3 を分割流用 */
    {base:"c5o2",  name:"1＞4 国土の気候の特色", term:1, s:[5,15]},   /* c5o2「気候」側 */
    {base:"c5o3",  name:"1＞5 あたたかい土地のくらし／寒い土地のくらし（選択）", term:1, s:[5,25]},
    {base:null,    name:"2＞導入（オリエンテーション）", term:1, s:[6,15]},
    {base:null,    name:"2＞1 くらしを支える食料生産", term:1, s:[6,25]},   /* 導入的小単元・単独の対応qsなし（内容の一部はc5o6に近い） */
    {base:"c5o4",  name:"2＞2 米づくりのさかんな地域", term:1, s:[7,5]},
    {base:"c5o5",  name:"2＞3 水産業のさかんな地域", term:2, s:[9,5]},
    {base:"c5o6",  name:"2＞4 これからの食料生産とわたしたち", term:2, s:[9,15]},
    {base:null,    name:"2＞いかす（第2単元全体）", term:2, s:[9,25]},
    {base:null,    name:"3＞導入（オリエンテーション）", term:2, s:[10,5]},
    {base:null,    name:"3＞1 くらしを支える工業生産", term:2, s:[10,15]},   /* 導入的小単元・単独の対応qsなし（内容の一部はc5o9に近い） */
    {base:"c5o7",  name:"3＞2 自動車をつくる工業", term:2, s:[10,25]},
    {base:"c5o8",  name:"3＞3 工業生産を支える運輸と貿易", term:2, s:[11,15]},
    {base:"c5o9",  name:"3＞4 これからの工業生産とわたしたち", term:2, s:[11,25]},
    {base:null,    name:"3＞いかす（第3単元全体）", term:2, s:[12,5]},
    {base:null,    name:"4＞導入（オリエンテーション）", term:2, s:[12,15]},
    {base:"c5o10", name:"4＞1 情報産業とわたしたちのくらし", term:2, s:[12,25]},
    {base:"c5o11", name:"4＞2 情報を生かす産業", term:3, s:[1,5]},
    {base:null,    name:"4＞3 情報を生かすわたしたち", term:3, s:[1,15]},   /* 情報活用の態度がテーマ・単独の対応qsなし（最寄りはc5o11） */
    {base:null,    name:"4＞いかす（第4単元全体）", term:3, s:[1,25]},
    {base:null,    name:"5＞導入（オリエンテーション）", term:3, s:[2,5]},
    {base:"c5o12", name:"5＞1 自然災害を防ぐ", term:3, s:[2,15]},
    {base:"c5o13", name:"5＞2 わたしたちの生活と森林", term:3, s:[2,25]},
    {base:"c5o14", name:"5＞3 環境を守るわたしたち", term:3, s:[3,5]},
    {base:null,    name:"5＞いかす（第5単元全体）", term:3, s:[3,15]}
  ],
  6: [
    {base:null,   name:"1＞導入（オリエンテーション）", term:1, s:[4,5]},
    {base:"so1",  name:"1＞1 わたしたちのくらしと日本国憲法", term:1, s:[4,15]},
    {base:"so2",  name:"1＞2 国の政治のしくみと選挙", term:1, s:[5,5]},
    {base:"so3",  name:"1＞3 子育て支援の願いを実現する政治／震災復興の願いを実現する政治（選択）", term:1, s:[5,25]},
    {base:null,   name:"1＞いかす", term:1, s:[6,5]},
    {base:null,   name:"2＞導入（オリエンテーション）", term:1, s:[6,15]},
    {base:"so4",  name:"2＞1 縄文のむらから古墳のくにへ", term:1, s:[6,25]},   /* 相乗り: so5（縄文・弥生=so4、古墳・くに=so5） */
    {base:"so6",  name:"2＞2 天皇中心の国づくり", term:1, s:[7,5]},
    {base:"so6",  name:"2＞3 貴族のくらし", term:1, s:[7,15]},   /* so6後半を分割流用（単独の既存qsなし） */
    {base:"so7",  name:"2＞4 武士の世の中へ", term:2, s:[9,5]},
    {base:"so8",  name:"2＞5 今に伝わる室町文化", term:2, s:[9,25]},
    {base:"so9",  name:"2＞6 戦国の世から天下統一へ", term:2, s:[10,5]},
    {base:"so10", name:"2＞7 江戸幕府と政治の安定", term:2, s:[10,25]},
    {base:"so11", name:"2＞8 町人の文化と新しい学問", term:2, s:[11,5]},
    {base:"so12", name:"2＞9 明治の国づくりを進めた人々", term:2, s:[11,25]},
    {base:"so13", name:"2＞10 世界に歩み出した日本", term:2, s:[12,15]},
    {base:"so14", name:"2＞11 長く続いた戦争と人々のくらし", term:3, s:[1,15]},
    {base:"so15", name:"2＞12 新しい日本、平和な日本へ", term:3, s:[1,25]},
    {base:null,   name:"2＞いかす", term:3, s:[2,5]},
    {base:null,   name:"3＞導入（オリエンテーション）", term:3, s:[2,15]},
    {base:"so16", name:"3＞1 日本とつながりの深い国々", term:3, s:[2,25]},
    {base:"so17", name:"3＞2 世界の未来と日本の役割", term:3, s:[3,5]},
    {base:null,   name:"3＞いかす", term:3, s:[3,15]}
  ]
};
