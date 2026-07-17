/*
 * 東京書籍「新編 新しい理科」単元カレンダー（4・5・6年）
 * 出典:
 *   - 4年・5年: spec/東書-理社4-5年-単元カレンダー案.md
 *     （原本: https://ten.tokyo-shoseki.co.jp/text/shou/rika/data/rika_nenkankeikaku_4.pdf ／ _5.pdf）
 *   - 6年: spec/東書-理社6年-単元カレンダー案.md
 *     （原本: https://ten.tokyo-shoseki.co.jp/text/shou/rika/data/rika_nenkankeikaku_6.pdf）
 * 3年は作らない（川口の SCI_UNITS_G3_KAWA を流用するため）。
 * base は既存qsの単元id（4年=c4s*・5年=c5s*・6年=sc*）。base:null は対応qsなし（出題対象外）。
 * エンジン配線（resolveBookUnits 等）は別担当。このファイルはデータ倉庫のみ。
 */
var BOOK_CAL = (typeof BOOK_CAL === "undefined") ? {} : BOOK_CAL;
BOOK_CAL.sci = BOOK_CAL.sci || {};
BOOK_CAL.sci.tosho = {
  4: [
    {base:null,    name:"●巻頭", term:1, s:[4,5]},
    {base:"c4s1",  name:"1．あたたかくなると", term:1, s:[4,15]},
    {base:"c4s9",  name:"2．動物のからだのつくりと運動", term:1, s:[4,25]},
    {base:"c4s2",  name:"3．天気と気温", term:1, s:[5,15]},
    {base:"c4s3",  name:"4．電流のはたらき", term:1, s:[5,25]},
    {base:"c4s6",  name:"5．雨水のゆくえと地面のようす", term:1, s:[6,15]},
    {base:"c4s4",  name:"●暑くなると", term:1, s:[6,25]},
    {base:"c4s5",  name:"●夏の星", term:1, s:[7,5]},   /* c4s5「星」側を分割流用（月や星の見え方・冬の星と同一qs） */
    {base:null,    name:"○わたしの研究", term:1, s:[7,15]},
    {base:"c4s5",  name:"6．月や星の見え方", term:2, s:[9,5]},   /* c4s5 本体 */
    {base:"c4s13", name:"7．自然のなかの水のすがた", term:2, s:[9,25]},
    {base:"c4s7",  name:"●すずしくなると", term:2, s:[10,15]},
    {base:"c4s14", name:"8．とじこめた空気と水", term:2, s:[10,25]},   /* 2026-07-17 に新設した c4s14 を充当 */
    {base:"c4s8",  name:"9．物の体積と温度", term:2, s:[11,15]},
    {base:"c4s10", name:"10．物のあたたまり方", term:2, s:[12,5]},
    {base:"c4s5",  name:"●冬の星", term:2, s:[12,25]},   /* c4s5「星」側を分割流用 */
    {base:"c4s11", name:"●寒くなると", term:3, s:[1,5]},
    {base:"c4s12", name:"11．水のすがたと温度", term:3, s:[1,15]},
    {base:null,    name:"12．生き物の１年をふり返って", term:3, s:[3,5]},   /* 季節単元の総まとめ・単独の対応qsなし */
    {base:null,    name:"1年間をふりかえろう／理科とSDGs・理科とプログラミング", term:3, s:[3,15]}
  ],
  5: [
    {base:null,    name:"●巻頭", term:1, s:[4,5]},
    {base:"c5s1",  name:"1．天気の変化", term:1, s:[4,15]},
    {base:"c5s2",  name:"2．植物の発芽と成長", term:1, s:[5,15]},
    {base:"c5s3",  name:"3．魚のたんじょう", term:1, s:[6,15]},
    {base:null,    name:"○わたしの研究", term:1, s:[7,15]},
    {base:"c5s5",  name:"4．花から実へ", term:2, s:[9,5]},
    {base:"c5s4",  name:"5．台風と天気の変化", term:2, s:[9,25]},
    {base:"c5s6",  name:"6．流れる水のはたらき", term:2, s:[10,15]},
    {base:"c5s7",  name:"7．物のとけ方", term:2, s:[11,15]},
    {base:"c5s10", name:"8．人のたんじょう", term:2, s:[12,15]},
    {base:"c5s9",  name:"9．電流がうみ出す力", term:3, s:[1,15]},
    {base:"c5s8",  name:"10．ふりこのきまり", term:3, s:[2,15]},
    {base:null,    name:"1年間をふりかえろう／理科とSDGs・理科とプログラミング", term:3, s:[3,15]}
  ],
  6: [
    {base:null,   name:"●地球と私たちのくらし（巻頭・導入）", term:1, s:[4,5]},
    {base:"sc1",  name:"1．物の燃え方と空気", term:1, s:[4,15]},
    {base:"sc3",  name:"2．動物のからだのはたらき", term:1, s:[5,15]},
    {base:"sc4",  name:"3．植物のからだのはたらき", term:1, s:[6,5]},   /* 相乗り: sc2（節②日光。エンジンv1は1単元1baseのため前半=sc4のみ） */
    {base:"sc5",  name:"4．生き物どうしのかかわり", term:1, s:[6,25]},
    {base:null,   name:"○私の研究", term:1, s:[7,15]},
    {base:"sc6",  name:"5．月の形と太陽", term:2, s:[9,5]},
    {base:"sc8",  name:"6．大地のつくり", term:2, s:[9,25]},   /* sc8「つくり」側 */
    {base:"sc8",  name:"7．変わり続ける大地", term:2, s:[10,15]},   /* sc8「変化」側を分割流用 */
    {base:"sc9",  name:"8．てこのはたらきとしくみ", term:2, s:[10,25]},
    {base:"sc10", name:"9．電気と私たちのくらし", term:2, s:[11,25]},
    {base:"sc7",  name:"10．水溶液の性質とはたらき", term:3, s:[1,15]},
    {base:"sc11", name:"11．地球に生きる", term:3, s:[2,25]},
    {base:null,   name:"1年間をふりかえろう／中学生になったら", term:3, s:[3,15]}
  ]
};
