// ============================================================
// 大日本図書「新版 たのしい算数」単元カレンダー（算数・1〜6年）
// 出典: spec/大日本-算数-単元カレンダー案.md（2026-07-16/17 データ起こし）
//   原本: 大日本図書公式 令和6年版 年間指導計画案・観点別評価規準例
//   https://www.dainippon-tosho.co.jp/sansu/curriculum.html
// このファイルはカレンダーデータ（倉庫）のみ。エンジン配線は別担当。
// 形式: 1行=1単元 {base:"<ベース単元id|null>", name, term:1|2|3, s:[月,日]}
//   base:null = 対応genなし（エンジンが出題対象外にする）
//   同じ base の複数行 = 分割流用。相乗り（1行2gen）は最初の1つだけ base にしコメント
// ============================================================
var BOOK_CAL = (typeof BOOK_CAL === "undefined") ? {} : BOOK_CAL;
BOOK_CAL.math = BOOK_CAL.math || {};
BOOK_CAL.math.dainippon = {

  // ---- 1年（新版 たのしい算数1・21単元＝0〜20）----
  1: [
    {base:null,    name:"なかよし", term:1, s:[4,5]}, // 入門期の準備単元・対応genなし
    {base:"g1u1",  name:"10までの かず", term:1, s:[4,15]},
    {base:"g1u2",  name:"なんばんめ", term:1, s:[5,15]},
    {base:"g1u3",  name:"いくつと いくつ", term:1, s:[5,25]},
    {base:"g1u4",  name:"あわせて いくつ ふえると いくつ", term:1, s:[6,15]},
    {base:"g1u5",  name:"のこりは いくつ ちがいは いくつ", term:1, s:[6,25]},
    {base:"g1u6",  name:"かずしらべ", term:1, s:[7,5]},
    {base:"g1u7",  name:"10より おおきい かず", term:2, s:[9,5]},
    {base:"g1u8",  name:"なんじ なんじはん", term:2, s:[9,15]},
    {base:"g1u4",  name:"たしざんカード ひきざんカード", term:2, s:[9,25]}, /* 相乗り: g1u5 */
    {base:"g1u9",  name:"３つの かずの けいさん", term:2, s:[10,5]},
    {base:"g1u10", name:"ながさくらべ", term:2, s:[10,15]}, // g1u10「ながい」分を充当
    {base:"g1u11", name:"たしざん", term:2, s:[10,25]},
    {base:null,    name:"ひろさくらべ", term:2, s:[11,5]}, // 広さの直接比較・対応genなし
    {base:"g1u13", name:"ひきざん", term:2, s:[11,15]},
    {base:"g1u10", name:"かさくらべ", term:2, s:[11,25]}, // g1u10「おおい」分を充当（分割再利用）
    {base:"g1u12", name:"いろいろな かたち", term:2, s:[12,5]}, // 立体
    {base:"g1u14", name:"大きな かず", term:3, s:[1,15]},
    {base:"g1u15", name:"なんじなんぷん", term:3, s:[2,15]},
    {base:"g1u16", name:"ずを つかって かんがえよう", term:3, s:[2,25]},
    {base:"g1u12", name:"かたちづくり", term:3, s:[3,5]}, // 平面（g1u12 再利用）
  ],

  // ---- 2年（新版 たのしい算数2・17単元）----
  2: [
    {base:"g2u1",  name:"せいりの しかた", term:1, s:[4,5]},
    {base:"g2u5",  name:"２けたの たし算", term:1, s:[4,15]}, // g2u5 たし算分（分割再利用）
    {base:"g2u5",  name:"２けたの ひき算", term:1, s:[4,25]}, // g2u5 ひき算分（分割再利用）
    {base:"g2u4",  name:"長さの たんい", term:1, s:[5,15]},
    {base:"g2u6",  name:"100より 大きい 数", term:1, s:[5,25]},
    {base:"g2u7",  name:"かさの たんい", term:1, s:[6,15]},
    {base:"g2u3",  name:"時こくと 時間", term:1, s:[7,5]},
    {base:"g2u8",  name:"たし算と ひき算の ひっ算", term:2, s:[9,5]},
    {base:"g2u12", name:"三角形と 四角形", term:2, s:[9,25]},
    {base:"g2u10", name:"かけ算", term:2, s:[10,15]},
    {base:"g2u11", name:"かけ算九九づくり", term:2, s:[11,15]},
    {base:"g2u14", name:"長い ものの 長さの たんい", term:2, s:[12,15]},
    {base:"g2u15", name:"1000より 大きい 数", term:3, s:[1,15]},
    {base:"g2u9",  name:"たし算と ひき算の かんけい", term:3, s:[1,25]}, // 内容一致は実装時に要確認
    {base:"g2u13", name:"かけ算の きまり", term:3, s:[2,15]},
    {base:"g2u17", name:"分数", term:3, s:[2,25]},
    {base:"g2u16", name:"はこの 形", term:3, s:[3,15]},
  ],

  // ---- 3年（新版 たのしい算数3・18単元＋そろばん）----
  3: [
    {base:"u1",  name:"かけ算", term:1, s:[4,5]},
    {base:"u3",  name:"たし算とひき算の筆算", term:1, s:[4,25]},
    {base:"u6",  name:"ぼうグラフと表", term:1, s:[5,15]},
    {base:"u4",  name:"時こくと時間", term:1, s:[5,25]},
    {base:"u2",  name:"わり算", term:1, s:[6,5]},
    {base:"u9",  name:"あまりのあるわり算", term:1, s:[6,15]},
    {base:"u11", name:"円と球", term:1, s:[6,25]},
    {base:"u14", name:"かけ算の筆算", term:2, s:[9,5]},
    {base:"u2",  name:"答えが２けたになるわり算", term:2, s:[9,25]}, // u2 の発展扱いで流用
    {base:"u5",  name:"10000より大きい数", term:2, s:[10,5]},
    {base:"u18", name:"小数", term:2, s:[10,25]},
    {base:"u8",  name:"長さ", term:2, s:[11,15]},
    {base:"u16", name:"分数", term:2, s:[11,25]},
    {base:"u17", name:"三角形と角", term:2, s:[12,15]},
    {base:"u10", name:"重さの単位", term:3, s:[1,15]},
    {base:"u20", name:"□を使った式", term:3, s:[1,25]},
    {base:"u19", name:"２けたの数をかける計算", term:3, s:[2,15]},
    {base:"u12", name:"倍とかけ算、わり算", term:3, s:[2,25]},
    {base:null,  name:"そろばん", term:3, s:[3,15]}, // 対応genなし
  ],

  // ---- 4年（新版 たのしい算数4・15単元＋そろばん）----
  4: [
    {base:"g4u2",  name:"折れ線グラフと表", term:1, s:[4,5]},
    {base:"g4u3",  name:"わり算の筆算", term:1, s:[4,25]},
    {base:"g4u4",  name:"角度", term:1, s:[5,15]},
    {base:"g4u1",  name:"１億より大きい数", term:1, s:[5,25]},
    {base:"g4u8",  name:"式と計算", term:1, s:[6,15]},
    {base:"g4u9",  name:"垂直、平行と四角形", term:1, s:[6,25]},
    {base:"g4u7",  name:"がい数", term:2, s:[9,5]},
    {base:"g4u6",  name:"2 けたの数でわる計算", term:2, s:[9,25]},
    {base:"g4u11", name:"変わり方", term:2, s:[10,15]},
    {base:null,    name:"倍とかけ算、わり算", term:2, s:[10,25]}, // 割合の導入・対応genなし
    {base:"g4u5",  name:"小数", term:2, s:[11,15]},
    {base:"g4u12", name:"面積", term:2, s:[11,25]},
    {base:null,    name:"そろばん", term:2, s:[12,15]}, // 対応genなし
    {base:"g4u13", name:"小数と整数のかけ算・わり算", term:3, s:[1,15]},
    {base:"g4u10", name:"分数", term:3, s:[2,15]},
    {base:"g4u14", name:"直方体と立方体", term:3, s:[2,25]},
  ],

  // ---- 5年（新版 たのしい算数5・18単元）----
  5: [
    {base:"g5u1",  name:"整数と小数", term:1, s:[4,5]},
    {base:null,    name:"図形の角の大きさ", term:1, s:[4,15]}, // 内角の和・対応genなし（g5u7 充当は実装時に要検討）
    {base:"g5u3",  name:"２つの量の変わり方", term:1, s:[4,25]}, // g5u18 を充てる案もあり
    {base:"g5u4",  name:"小数のかけ算", term:1, s:[5,5]},
    {base:"g5u2",  name:"体積", term:1, s:[5,25]},
    {base:"g5u5",  name:"小数のわり算", term:1, s:[6,15]},
    {base:"g5u7",  name:"合同な図形", term:1, s:[7,5]},
    {base:"g5u8",  name:"整数の性質", term:2, s:[9,5]},
    {base:"g5u9",  name:"分数のたし算とひき算", term:2, s:[9,15]},
    {base:"g5u11", name:"平均", term:2, s:[9,25]},
    {base:"g5u12", name:"単位量あたりの大きさ", term:2, s:[10,5]},
    {base:"g5u9",  name:"分数と小数、整数", term:2, s:[10,15]}, // g5u9 再利用（分割）・出題範囲は要調整
    {base:"g5u6",  name:"割合", term:2, s:[10,25]}, /* 相乗り: g5u13 */
    {base:"g5u15", name:"帯グラフと円グラフ", term:2, s:[11,15]},
    {base:"g5u14", name:"正多角形と円", term:2, s:[11,25]},
    {base:"g5u10", name:"四角形と三角形の面積", term:3, s:[1,15]},
    {base:"g5u17", name:"速さ", term:3, s:[2,15]},
    {base:"g5u16", name:"角柱と円柱", term:3, s:[2,25]},
  ],

  // ---- 6年（新版 たのしい算数6・13単元）----
  6: [
    {base:"g6u1",  name:"対称な図形", term:1, s:[4,5]},
    {base:"g6u3",  name:"分数と整数のかけ算・わり算", term:1, s:[4,25]},
    {base:"g6u7",  name:"円の面積", term:1, s:[5,15]},
    {base:"g6u2",  name:"文字を使った式", term:1, s:[5,25]},
    {base:"g6u9",  name:"データの活用", term:1, s:[6,15]},
    {base:"g6u8",  name:"角柱と円柱の体積", term:1, s:[7,5]},
    {base:"g6u4",  name:"分数のかけ算", term:2, s:[9,5]},
    {base:"g6u5",  name:"分数のわり算", term:2, s:[9,25]},
    {base:"g6u6",  name:"場合の数", term:2, s:[10,25]},
    {base:"g6u10", name:"比", term:2, s:[11,15]},
    {base:"g6u11", name:"拡大図と縮図", term:2, s:[11,25]},
    {base:"g6u12", name:"比例と反比例", term:3, s:[1,15]},
    {base:"g6u13", name:"およその面積や体積", term:3, s:[2,25]},
  ],

};
