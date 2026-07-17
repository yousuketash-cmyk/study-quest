/*
 * book-cal-sci-keirin.js — 理科×啓林館（わくわく理科）単元カレンダー倉庫
 *
 * 出典: spec/啓林館-理科-単元カレンダー案.md（2026-07-16/17 データ起こし）
 *   原本: 啓林館 令和6年度用「わくわく理科」年間指導計画 標準版 Excel（3学期制案）
 *   https://www.shinko-keirin.co.jp/keirinkan/sho_r6/rika/file/rika_guidance_plan_standard.xlsx
 *
 * 形式: spec/教科書えらび-設計メモ.md「カレンダー倉庫」節
 *   1行=1単元 {base:"<ベース単元id|null>", name, term, s:[月,日]}
 *   base:null は対応qsなし（エンジンが出題対象外にする）
 *   s の「日」は週からの機械換算（全行目安）
 *
 * このファイルはデータのみ。エンジン配線（resolveBookUnits 等）は別担当。
 */
var BOOK_CAL = (typeof BOOK_CAL === "undefined") ? {} : BOOK_CAL;
BOOK_CAL.sci = BOOK_CAL.sci || {};
BOOK_CAL.sci.keirin = {
  3: [
    {base:null,    name:"●理科のガイダンス",                     term:1, s:[4,8]},
    {base:"c3s1",  name:"1．生き物をさがそう",                   term:1, s:[4,8]},
    {base:"c3s2",  name:"植物を調べよう(1) 2．たねをまこう",     term:1, s:[4,22]},
    {base:"c3s3",  name:"3．チョウを育てよう",                   term:1, s:[5,8]},
    {base:"c3s4",  name:"植物を調べよう(2) ○植物の育ちとつくり", term:1, s:[6,8]},
    {base:"c3s5",  name:"4．風とゴムの力のはたらき",             term:1, s:[6,15]},
    {base:"c3s6",  name:"植物を調べよう(3) ○花のかんさつ",       term:1, s:[7,15]},
    {base:null,    name:"●自由研究",                             term:1, s:[7,15]},
    {base:"c3s8",  name:"5．こん虫のかんさつ",                   term:2, s:[9,8]},
    {base:"c3s9",  name:"植物を調べよう(4) ○植物の一生",         term:2, s:[9,22]},
    {base:"c3s10", name:"6．かげと太陽",                         term:2, s:[10,8]},
    {base:"c3s11", name:"7．光のせいしつ",                       term:2, s:[11,1]},
    {base:"c3s12", name:"8．電気で明かりをつけよう",             term:2, s:[12,1]},
    {base:"c3s13", name:"9．じしゃくのふしぎ",                   term:3, s:[1,8]},
    {base:null,    name:"●これまでの学習をつなげよう",           term:3, s:[2,1]},
    {base:"c3s7",  name:"10．音のせいしつ",                      term:3, s:[2,1]},
    {base:"c3s14", name:"11．ものと重さ",                        term:3, s:[2,22]},
    {base:null,    name:"○おもちゃランド",                       term:3, s:[3,8]},
  ],
  4: [
    {base:null,    name:"●理科のガイダンス",                                 term:1, s:[4,8]},
    {base:"c4s1",  name:"季節と生き物(1) 1．春の生き物",                     term:1, s:[4,8]},
    {base:"c4s2",  name:"2．天気と１日の気温",                               term:1, s:[5,8]},
    {base:"c4s6",  name:"自然の中の水のゆくえ(1) 3．地面を流れる水のゆくえ", term:1, s:[5,22]},
    {base:"c4s3",  name:"4．電気のはたらき",                                 term:1, s:[6,8]},
    {base:"c4s4",  name:"季節と生き物(2) 〇夏の生き物",                      term:1, s:[7,1]},
    {base:"c4s5",  name:"夜空を見上げると(1) 〇夏の夜空",                    term:1, s:[7,8]},  /* c4s5 前半に部分流用 */
    {base:null,    name:"●自由研究",                                         term:1, s:[7,15]},
    {base:"c4s5",  name:"夜空を見上げると(2) 5．月や星",                     term:2, s:[9,8]},  /* c4s5 本体 */
    {base:"c4s14", name:"6．とじこめた空気や水",                             term:2, s:[9,22]}, /* 2026-07-17 に新設した c4s14 を充当 */
    {base:"c4s9",  name:"7．ヒトの体のつくりと運動",                         term:2, s:[10,15]},
    {base:"c4s7",  name:"季節と生き物(3) 〇秋の生き物",                      term:2, s:[11,1]},
    {base:null,    name:"●みんなで使う理科室",                               term:2, s:[11,8]},
    {base:"c4s8",  name:"温度とものの変化(1) 8．ものの温度と体積",           term:2, s:[11,15]},
    {base:"c4s5",  name:"夜空を見上げると(3) ○冬の夜空",                     term:3, s:[1,8]},  /* c4s5 後半に部分流用 */
    {base:"c4s11", name:"季節と生き物(4) 〇冬の生き物",                      term:3, s:[1,8]},
    {base:"c4s10", name:"温度とものの変化(2) 9．もののあたたまり方",         term:3, s:[1,15]},
    {base:"c4s12", name:"温度とものの変化(3) 10．水のすがた",                term:3, s:[2,8]},
    {base:"c4s13", name:"自然の中の水のゆくえ(2) 11．水のゆくえ",            term:3, s:[3,1]},
    {base:null,    name:"●これまでの学習をつなげよう",                       term:3, s:[3,15]},
    {base:null,    name:"季節と生き物(5) 〇生き物の１年間",                  term:3, s:[3,15]},
  ],
  5: [
    {base:null,    name:"●理科のガイダンス",                       term:1, s:[4,8]},
    {base:"c5s5",  name:"受けつがれる生命(1) ○花のつくり",         term:1, s:[4,8]},   /* c5s5 前半に部分流用 */
    {base:"c5s1",  name:"天気の変化(1) 1．雲と天気の変化",         term:1, s:[4,15]},
    {base:"c5s2",  name:"受けつがれる生命(2) 2．植物の発芽と成長", term:1, s:[5,15]},
    {base:"c5s3",  name:"受けつがれる生命(3) 3．メダカのたんじょう", term:1, s:[6,15]},
    {base:"c5s4",  name:"天気の変化(2) ○台風と気象情報",           term:1, s:[7,1]},
    {base:null,    name:"●自由研究",                               term:1, s:[7,15]},
    {base:"c5s5",  name:"受けつがれる生命(4) 4．花から実へ",       term:2, s:[9,8]},   /* c5s5 本体 */
    {base:"c5s10", name:"受けつがれる生命(5) 5．ヒトのたんじょう", term:2, s:[10,1]},
    {base:null,    name:"●これまでの学習をつなげよう",             term:2, s:[10,15]},
    {base:"c5s6",  name:"6．流れる水のはたらき",                   term:2, s:[10,22]},
    {base:"c5s8",  name:"7．ふりこのきまり",                       term:2, s:[11,22]},
    {base:null,    name:"●みんなで使う理科室",                     term:3, s:[1,8]},
    {base:"c5s7",  name:"8．もののとけ方",                         term:3, s:[1,8]},
    {base:"c5s9",  name:"9．電流と電磁石",                         term:3, s:[2,15]},
  ],
  6: [
    {base:null,   name:"●理科のガイダンス",                             term:1, s:[4,8]},
    {base:"sc1",  name:"1．ものが燃えるしくみ",                         term:1, s:[4,8]},
    {base:"sc3",  name:"2．ヒトや動物の体",                             term:1, s:[5,8]},
    {base:"sc2",  name:"3．植物のつくりとはたらき",                     term:1, s:[6,1]},  /* 相乗り: sc4（前半sc2・後半sc4を統合流用） */
    {base:"sc5",  name:"わたしたちの地球(1) 4．生物どうしのつながり",   term:1, s:[6,22]},
    {base:null,   name:"●これまでの学習をつなげよう",                   term:1, s:[7,8]},
    {base:null,   name:"●自由研究",                                     term:1, s:[7,15]},
    {base:null,   name:"●みんなで使う理科室",                           term:2, s:[9,8]},
    {base:"sc7",  name:"5．水よう液の性質",                             term:2, s:[9,15]},
    {base:"sc6",  name:"6．月と太陽",                                   term:2, s:[10,15]},
    {base:"sc8",  name:"7．大地のつくりと変化",                         term:2, s:[11,1]},
    {base:"sc9",  name:"8．てこのはたらき",                             term:3, s:[1,8]},
    {base:"sc10", name:"9．発電と電気の利用",                           term:3, s:[2,1]},
    {base:"sc11", name:"わたしたちの地球(2) 10．自然とともに生きる",    term:3, s:[3,8]},
  ],
};
