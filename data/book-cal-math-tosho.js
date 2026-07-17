/* スタディクエスト カレンダー倉庫：算数×東京書籍（1・2・4・5・6年）
   出典：spec/東書-算数-単元カレンダー案.md（形式は spec/教科書えらび-設計メモ.md の「カレンダー倉庫」節）
   3年は作らない＝川口実装済み（MATH_UNITS_G3_KAWA を流用。book-kawaguchi.js 参照）。
   base＝流用する既存gen の単元id（data/pack-g*.js）。base:null は対応genなし（エンジンが出題対象外にする）。
   ここは「データの置き場」。エンジン配線（resolveBookUnits 等）は別担当。 */

var BOOK_CAL = (typeof BOOK_CAL === "undefined") ? {} : BOOK_CAL;
BOOK_CAL.math = BOOK_CAL.math || {};

BOOK_CAL.math.tosho = {
  1: [
    {base:"g1u1",  name:"なかまづくりとかず",           term:1, s:[4,5]},  /* g1u3 いくつと いくつ を内包 */
    {base:"g1u2",  name:"なんばんめ",                   term:1, s:[5,15]},
    {base:"g1u4",  name:"あわせていくつ ふえるといくつ", term:1, s:[5,25]},
    {base:"g1u5",  name:"のこりはいくつ ちがいはいくつ", term:1, s:[6,15]},
    {base:"g1u10", name:"どちらがながい",               term:1, s:[7,5]},  /* g1u10 の「ながい」分（10.と分割再利用） */
    {base:"g1u6",  name:"わかりやすく せいりしよう",     term:2, s:[9,5]},
    {base:"g1u7",  name:"10よりおおきいかず",           term:2, s:[9,15]},
    {base:"g1u8",  name:"なんじなんじはん",             term:2, s:[9,25]},
    {base:"g1u9",  name:"3つのかずのけいさん",          term:2, s:[10,5]},
    {base:"g1u10", name:"どちらがおおい",               term:2, s:[10,15]}, /* g1u10 の「おおい」分（5.と分割再利用） */
    {base:"g1u11", name:"たしざん",                     term:2, s:[10,25]},
    {base:"g1u12", name:"かたちあそび",                 term:2, s:[11,15]},
    {base:"g1u13", name:"ひきざん",                     term:2, s:[11,25]},
    {base:"g1u14", name:"おおきいかず",                 term:3, s:[1,15]},
    {base:null,    name:"どちらがひろい",               term:3, s:[2,15]},  /* 対応genなし（広さの直接比較・陣取り） */
    {base:"g1u15", name:"なんじなんぷん",               term:3, s:[2,15]},
    {base:"g1u16", name:"たしざんとひきざん",           term:3, s:[2,25]},
    {base:"g1u12", name:"かたちづくり",                 term:3, s:[3,5]},   /* g1u12 を再利用（12.は立体・18.は平面） */
  ],
  2: [
    {base:"g2u1",  name:"グラフとひょう",               term:1, s:[4,5]},
    {base:"g2u5",  name:"たし算のひっ算",               term:1, s:[4,15]},  /* g2u5 のたし算分（3.と分割再利用） */
    {base:"g2u5",  name:"ひき算のひっ算",               term:1, s:[4,25]},  /* g2u5 のひき算分（2.と分割再利用） */
    {base:"g2u4",  name:"長さのたんい",                 term:1, s:[5,15]},
    {base:"g2u6",  name:"３けたの数",                   term:1, s:[6,5]},
    {base:"g2u7",  name:"水のかさのたんい",             term:1, s:[6,25]},
    {base:"g2u3",  name:"時こくと時間",                 term:1, s:[7,15]},
    {base:"g2u9",  name:"計算のくふう",                 term:2, s:[9,5]},   /* 相乗り: g2u2 たし算と ひき算（あんざん）を内包 */
    {base:"g2u8",  name:"たし算とひき算のひっ算",       term:2, s:[9,15]},
    {base:"g2u12", name:"長方形と正方形",               term:2, s:[10,5]},
    {base:"g2u10", name:"かけ算(1)",                    term:2, s:[10,25]},
    {base:"g2u11", name:"かけ算(2)",                    term:2, s:[11,25]}, /* 相乗り: g2u13 かけ算の きまり を内包 */
    {base:"g2u15", name:"４けたの数",                   term:3, s:[1,15]},
    {base:"g2u14", name:"長いものの長さのたんい",       term:3, s:[2,5]},
    {base:null,    name:"たし算とひき算",               term:3, s:[2,15]},  /* 対応genなし（逆思考の文章題） */
    {base:"g2u17", name:"分数",                         term:3, s:[2,15]},
    {base:"g2u16", name:"はこの形",                     term:3, s:[2,25]},
  ],
  4: [
    {base:"g4u1",  name:"大きい数のしくみ",             term:1, s:[4,5]},
    {base:"g4u2",  name:"折れ線グラフと表",             term:1, s:[4,25]},
    {base:"g4u3",  name:"わり算の筆算(1)",              term:1, s:[5,5]},
    {base:"g4u4",  name:"角の大きさ",                   term:1, s:[5,25]},
    {base:"g4u5",  name:"小数のしくみ",                 term:1, s:[6,15]},
    {base:null,    name:"そろばん",                     term:1, s:[7,15]},  /* 対応genなし（●小単元・出題対象外） */
    {base:"g4u6",  name:"わり算の筆算(2)",              term:2, s:[9,5]},
    {base:null,    name:"倍の見方",                     term:2, s:[10,5]},  /* 対応genなし（●小単元・倍と簡単な割合の素地） */
    {base:"g4u7",  name:"がい数の表し方と使い方",       term:2, s:[10,5]},
    {base:"g4u8",  name:"計算のきまり",                 term:2, s:[10,25]},
    {base:"g4u9",  name:"垂直、平行と四角形",           term:2, s:[11,5]},
    {base:"g4u10", name:"分数",                         term:2, s:[12,5]},
    {base:"g4u11", name:"変わり方調べ",                 term:2, s:[12,15]},
    {base:"g4u12", name:"面積のくらべ方と表し方",       term:3, s:[1,15]},
    {base:"g4u13", name:"小数のかけ算とわり算",         term:3, s:[2,5]},
    {base:"g4u14", name:"直方体と立方体",               term:3, s:[2,25]},
  ],
  5: [
    {base:"g5u1",  name:"整数と小数",                   term:1, s:[4,5]},
    {base:"g5u2",  name:"直方体や立方体の体積",         term:1, s:[4,15]},
    {base:"g5u3",  name:"比例",                         term:1, s:[5,5]},
    {base:"g5u4",  name:"小数のかけ算",                 term:1, s:[5,15]},
    {base:"g5u5",  name:"小数のわり算",                 term:1, s:[5,25]},
    {base:"g5u6",  name:"小数の倍",                     term:1, s:[6,15]},
    {base:"g5u7",  name:"合同な図形",                   term:1, s:[6,25]},
    {base:null,    name:"図形の角",                     term:2, s:[9,5]},   /* 対応genなし（内角の和・敷き詰め） */
    {base:"g5u8",  name:"偶数と奇数、倍数と約数",       term:2, s:[9,15]},
    {base:"g5u9",  name:"分数と小数、整数の関係",       term:2, s:[10,5]},  /* g5u9 の前半（11.と分割再利用） */
    {base:"g5u9",  name:"分数のたし算とひき算",         term:2, s:[10,25]}, /* g5u9 の後半（10.と分割再利用） */
    {base:"g5u11", name:"平均",                         term:2, s:[11,5]},
    {base:"g5u12", name:"単位量あたりの大きさ",         term:2, s:[11,15]}, /* 相乗り: g5u17 速さ を内包 */
    {base:"g5u10", name:"四角形と三角形の面積",         term:2, s:[12,5]},
    {base:"g5u13", name:"割合",                         term:3, s:[1,15]},
    {base:"g5u15", name:"帯グラフと円グラフ",           term:3, s:[1,25]},
    {base:"g5u18", name:"変わり方調べ",                 term:3, s:[2,5]},
    {base:"g5u14", name:"正多角形と円周の長さ",         term:3, s:[2,15]},
    {base:"g5u16", name:"角柱と円柱",                   term:3, s:[2,25]},
  ],
  6: [
    {base:"g6u1",  name:"対称な図形",                   term:1, s:[4,5]},
    {base:"g6u2",  name:"文字と式",                     term:1, s:[5,5]},
    {base:"g6u3",  name:"分数×整数、分数÷整数、分数×分数", term:1, s:[5,15]}, /* 相乗り: g6u4 分数×分数 を内包 */
    {base:"g6u5",  name:"分数÷分数",                   term:1, s:[6,5]},
    {base:null,    name:"分数の倍",                     term:1, s:[6,15]},  /* 対応genなし（●小単元・分数倍の文章題） */
    {base:"g6u10", name:"比",                           term:1, s:[6,25]},
    {base:"g6u11", name:"拡大図と縮図",                 term:2, s:[9,5]},
    {base:"g6u9",  name:"データの調べ方",               term:2, s:[9,15]},
    {base:"g6u7",  name:"円の面積",                     term:2, s:[10,5]},
    {base:"g6u8",  name:"角柱と円柱の体積",             term:2, s:[10,15]},
    {base:"g6u13", name:"およその面積と体積",           term:2, s:[10,25]},
    {base:"g6u12", name:"比例と反比例",                 term:2, s:[11,5]},
    {base:"g6u6",  name:"並べ方と組み合わせ方",         term:2, s:[12,5]},
    {base:null,    name:"データを使って生活を見なおそう", term:3, s:[1,15]}, /* 対応genなし（●小単元・g6u9 の発展扱い） */
    {base:null,    name:"算数のしあげ",                 term:3, s:[1,25]},  /* 対応genなし（総復習・全genミックス流用は別途） */
  ],
};
