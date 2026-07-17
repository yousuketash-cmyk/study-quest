/* スタディクエスト データ倉庫：算数×教育出版（『小学算数』令和6年度版）単元カレンダー
   出典：spec/教出-算数-単元カレンダー案.md（単一の真実）
   　　　原本＝教育出版 単元配当表PDF（1〜6年）
   　　　https://www.kyoiku-shuppan.co.jp/textbook/shou/sansu/files/r6sansu_haitouhyou-tangakunen_2404.pdf
   形式：spec/教科書えらび-設計メモ.md「カレンダー倉庫」節どおり。
   　　　1行＝1単元 {base:"<ベース単元id|null>", name, term, s:[月,日]}
   　　　base:null＝対応genなし（エンジンが出題対象外にする）
   　　　同じ base の複数行＝分割流用。相乗り（1単元に2gen）は最初の1つだけ base にしコメントで残す
   このファイルはデータのみ。エンジン配線（resolveBookUnits 等）は別担当。 */

var BOOK_CAL = (typeof BOOK_CAL === "undefined") ? {} : BOOK_CAL;
BOOK_CAL.math = BOOK_CAL.math || {};

BOOK_CAL.math.kyoshup = {
  1: [
    {base:null,    name:"なかよしあつまれ",                 term:1, s:[4,5]},
    {base:"g1u1",  name:"①いくつかな",                     term:1, s:[4,15]},
    {base:"g1u2",  name:"②なんばんめ",                     term:1, s:[5,15]},
    {base:"g1u8",  name:"③いまなんじ",                     term:1, s:[5,25]},
    {base:"g1u3",  name:"④いくつといくつ",                 term:1, s:[6,5]},
    {base:"g1u4",  name:"⑤ぜんぶでいくつ",                 term:1, s:[6,15]},
    {base:"g1u5",  name:"⑥のこりはいくつ",                 term:1, s:[6,25]},
    {base:"g1u5",  name:"⑦どれだけおおい",                 term:1, s:[7,15]},  /* g1u5 再流用（求差） */
    {base:"g1u7",  name:"⑧10より大きいかず",               term:2, s:[9,5]},
    {base:"g1u6",  name:"⑨かずをせいりして",               term:2, s:[9,25]},
    {base:"g1u12", name:"⑩かたちあそび",                   term:2, s:[10,5]},
    {base:"g1u9",  name:"⑪3つのかずのたしざん、ひきざん",  term:2, s:[10,15]},
    {base:"g1u11", name:"⑫たしざん",                       term:2, s:[10,25]},
    {base:"g1u13", name:"⑬ひきざん",                       term:2, s:[11,5]},
    {base:"g1u10", name:"⑭くらべかた",                     term:2, s:[12,5]},
    {base:"g1u14", name:"⑮大きなかず",                     term:3, s:[1,5]},
    {base:"g1u15", name:"⑯なんじなんぷん",                 term:3, s:[2,5]},
    {base:"g1u16", name:"⑰どんなしきになるかな",           term:3, s:[2,15]},
    {base:"g1u12", name:"⑱かたちづくり",                   term:3, s:[2,25]},  /* g1u12 再流用（平面図形の構成） */
  ],
  2: [
    {base:null,    name:"みんなで算数をはじめよう！",       term:1, s:[4,5]},
    {base:"g2u1",  name:"①表とグラフ",                     term:1, s:[4,15]},
    {base:"g2u5",  name:"②たし算",                         term:1, s:[4,25]},  /* g2u5 を②③に2分割で流用（加法の筆算） */
    {base:"g2u5",  name:"③ひき算",                         term:1, s:[5,5]},   /* g2u5 再流用（減法の筆算） */
    {base:"g2u4",  name:"④長さ",                           term:1, s:[5,15]},
    {base:"g2u6",  name:"⑤100より大きい数",                term:1, s:[6,5]},
    {base:null,    name:"たし算とひき算の図",               term:1, s:[6,25]},
    {base:"g2u8",  name:"⑥たし算とひき算",                 term:1, s:[7,5]},   /* 相乗り: g2u9 しきと計算 */
    {base:"g2u3",  name:"⑦時こくと時間",                   term:1, s:[7,15]},
    {base:"g2u7",  name:"⑧水のかさ",                       term:2, s:[9,5]},
    {base:"g2u12", name:"⑨三角形と四角形",                 term:2, s:[9,15]},
    {base:"g2u10", name:"⑩かけ算",                         term:2, s:[10,5]},
    {base:"g2u11", name:"⑪かけ算九九づくり",               term:2, s:[11,5]},
    {base:"g2u14", name:"⑫長いものの長さ",                 term:2, s:[12,15]},
    {base:"g2u13", name:"⑬九九の表",                       term:3, s:[1,5]},
    {base:"g2u16", name:"⑭はこの形",                       term:3, s:[1,15]},
    {base:"g2u15", name:"⑮1000より大きい数",               term:3, s:[2,5]},
    {base:null,    name:"⑯図をつかって考えよう",           term:3, s:[2,15]},
    {base:"g2u17", name:"⑰１を分けて",                     term:3, s:[3,5]},
    {base:null,    name:"算数をつかって考えよう",           term:3, s:[3,15]},
  ],
  3: [
    {base:null,    name:"みんなで算数をはじめよう！",       term:1, s:[4,5]},
    {base:"u1",    name:"①かけ算のきまり",                 term:1, s:[4,15]},
    {base:"u4",    name:"②時こくと時間",                   term:1, s:[4,25]},
    {base:"u3",    name:"③たし算とひき算",                 term:1, s:[5,5]},   /* 相乗り: u7 たし算とひき算（暗算） */
    {base:"u2",    name:"④わり算",                         term:1, s:[5,25]},
    {base:"u8",    name:"⑤長さ",                           term:1, s:[6,15]},
    {base:"u6",    name:"⑥表とぼうグラフ",                 term:1, s:[6,25]},
    {base:"u9",    name:"⑦あまりのあるわり算",             term:1, s:[7,5]},
    {base:"u5",    name:"⑧10000より大きい数",              term:2, s:[9,5]},
    {base:"u11",   name:"⑨円と球",                         term:2, s:[9,15]},
    {base:null,    name:"かけ算とわり算の図",               term:2, s:[9,25]},
    {base:"u14",   name:"⑩かけ算の筆算",                   term:2, s:[10,5]},
    {base:"u10",   name:"⑪重さ",                           term:2, s:[10,25]},
    {base:"u16",   name:"⑫分数",                           term:2, s:[11,5]},
    {base:"u17",   name:"⑬三角形",                         term:2, s:[11,25]},
    {base:"u20",   name:"⑭□を使った式と図",               term:2, s:[12,15]},
    {base:"u18",   name:"⑮小数",                           term:3, s:[1,5]},
    {base:"u19",   name:"⑯２けたの数のかけ算",             term:3, s:[2,5]},
    {base:"u12",   name:"⑰倍の計算",                       term:3, s:[2,25]},
    {base:null,    name:"⑱そろばん",                       term:3, s:[3,5]},
    {base:null,    name:"算数を使って考えよう",             term:3, s:[3,15]},
    /* 余り: u13 計算のじゅんじょ・u15 式と計算は教出3年に対応単元なし（specどおり収録外） */
  ],
  4: [
    {base:null,    name:"みんなで算数をはじめよう！",       term:1, s:[4,5]},
    {base:"g4u1",  name:"①大きな数",                       term:1, s:[4,15]},
    {base:"g4u3",  name:"②わり算の筆算",                   term:1, s:[4,25]},
    {base:"g4u2",  name:"③折れ線グラフ",                   term:1, s:[5,15]},
    {base:"g4u4",  name:"④角",                             term:1, s:[6,5]},
    {base:"g4u6",  name:"⑤２けたの数のわり算",             term:1, s:[6,15]},
    {base:"g4u7",  name:"⑥がい数",                         term:1, s:[7,5]},
    {base:"g4u9",  name:"⑦垂直、平行と四角形",             term:2, s:[9,5]},
    {base:"g4u8",  name:"⑧式と計算",                       term:2, s:[9,25]},
    {base:"g4u12", name:"⑨面積",                           term:2, s:[10,5]},
    {base:null,    name:"⑩整理のしかた",                   term:2, s:[10,25]},
    {base:null,    name:"⑪くらべ方",                       term:2, s:[11,5]},
    {base:"g4u5",  name:"⑫小数のしくみとたし算、ひき算",   term:2, s:[11,15]},
    {base:"g4u11", name:"⑬変わり方",                       term:2, s:[12,5]},
    {base:null,    name:"⑭そろばん",                       term:2, s:[12,25]},
    {base:"g4u13", name:"⑮小数と整数のかけ算、わり算",     term:3, s:[1,5]},
    {base:"g4u14", name:"⑯立体",                           term:3, s:[2,5]},
    {base:"g4u10", name:"⑰分数の大きさとたし算、ひき算",   term:3, s:[2,25]},
    {base:null,    name:"算数を使って考えよう",             term:3, s:[3,15]},
  ],
  5: [
    {base:null,    name:"みんなで算数をはじめよう！",       term:1, s:[4,5]},
    {base:"g5u1",  name:"①整数と小数",                     term:1, s:[4,15]},
    {base:"g5u2",  name:"②体積",                           term:1, s:[4,25]},
    {base:"g5u3",  name:"③２つの量の変わり方",             term:1, s:[5,5]},   /* 相乗り: g5u18 変わり方 */
    {base:"g5u4",  name:"④小数のかけ算",                   term:1, s:[5,15]},
    {base:"g5u7",  name:"⑤合同と三角形、四角形",           term:1, s:[6,5]},
    {base:"g5u5",  name:"⑥小数のわり算",                   term:1, s:[6,25]},
    {base:"g5u8",  name:"⑦整数の見方",                     term:2, s:[9,5]},
    {base:"g5u9",  name:"⑧分数の大きさとたし算、ひき算",   term:2, s:[9,15]},
    {base:"g5u11", name:"⑨平均",                           term:2, s:[10,5]},
    {base:"g5u12", name:"⑩単位量あたりの大きさ",           term:2, s:[10,15]}, /* 相乗り: g5u17 速さ */
    {base:"g5u9",  name:"⑪わり算と分数",                   term:2, s:[11,5]},  /* g5u9 再流用（商分数・分数と小数整数） */
    {base:"g5u6",  name:"⑫割合",                           term:2, s:[11,15]}, /* 相乗り: g5u13 割合(2) */
    {base:"g5u15", name:"⑬割合とグラフ",                   term:2, s:[12,5]},
    {base:"g5u10", name:"⑭四角形や三角形の面積",           term:3, s:[1,5]},
    {base:"g5u14", name:"⑮正多角形と円",                   term:3, s:[2,5]},
    {base:"g5u16", name:"⑯角柱と円柱",                     term:3, s:[3,5]},
    {base:null,    name:"算数を使って考えよう",             term:3, s:[3,15]},
  ],
  6: [
    {base:null,    name:"みんなで算数をはじめよう！",       term:1, s:[4,5]},
    {base:"g6u2",  name:"①文字を使った式",                 term:1, s:[4,15]},
    {base:"g6u3",  name:"②分数と整数のかけ算、わり算",     term:1, s:[4,25]},
    {base:"g6u1",  name:"③対称な図形",                     term:1, s:[5,5]},
    {base:"g6u4",  name:"④分数のかけ算",                   term:1, s:[6,5]},
    {base:"g6u5",  name:"⑤分数のわり算",                   term:1, s:[6,25]},
    {base:"g6u9",  name:"⑥データの見方",                   term:2, s:[9,5]},
    {base:"g6u7",  name:"⑦円の面積",                       term:2, s:[9,15]},
    {base:"g6u12", name:"⑧比例と反比例",                   term:2, s:[10,5]},
    {base:"g6u8",  name:"⑨角柱と円柱の体積",               term:2, s:[10,25]},
    {base:"g6u10", name:"⑩比",                             term:2, s:[11,5]},
    {base:"g6u11", name:"⑪拡大図と縮図",                   term:2, s:[11,25]},
    {base:"g6u13", name:"およその面積と体積",               term:2, s:[12,15]},
    {base:"g6u6",  name:"⑫並べ方と組み合わせ",             term:3, s:[1,5]},
    {base:null,    name:"算数を使って考えよう",             term:3, s:[1,15]},
    {base:null,    name:"算数をふり返ろう！ もっと楽しもう！", term:3, s:[2,5]},
  ],
};
