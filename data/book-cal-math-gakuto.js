/*
 * book-cal-math-gakuto.js — 学校図書（学図）「みんなと学ぶ 小学校 算数」単元カレンダー（1〜6年）
 *
 * 出典: spec/学図-算数-単元カレンダー案.md（学校図書公式の令和6年度版
 *       「年間指導計画作成資料（簡易版・Excel）」からのデータ起こし。
 *       原本URLは同 spec の「出典」節を参照）
 * 形式: spec/教科書えらび-設計メモ.md「カレンダー倉庫」節のとおり。
 *       1行=1単元 {base:"<ベース単元id|null>", name, term, s:[月,日]}
 *       base:null は対応genなし（エンジンが出題対象外にする）
 *
 * ※このファイルはデータ（倉庫）のみ。エンジン配線（resolveBookUnits 等）は別担当。
 */
var BOOK_CAL = (typeof BOOK_CAL === "undefined") ? {} : BOOK_CAL;
BOOK_CAL.math = BOOK_CAL.math || {};
BOOK_CAL.math.gakuto = {
  1: [
    {base:null,    name:"入門期", term:1, s:[4,5]},
    {base:"g1u1",  name:"１ 10までの かず", term:1, s:[4,15]},
    {base:"g1u3",  name:"２ いくつと いくつ", term:1, s:[5,5]},
    {base:"g1u2",  name:"３ なんばんめかな", term:1, s:[5,15]},
    {base:"g1u4",  name:"４ あわせて いくつ ふえると いくつ", term:1, s:[5,25]},
    {base:"g1u5",  name:"５ のこりは いくつ ちがいは いくつ", term:1, s:[6,15]},
    {base:"g1u6",  name:"６ いくつ あるかな", term:2, s:[9,5]},
    {base:"g1u7",  name:"７ 10より おおきい かずを かぞえよう", term:2, s:[9,5]},
    {base:"g1u8",  name:"８ なんじ なんじはん", term:2, s:[9,25]},
    {base:"g1u12", name:"９ かたちあそび", term:2, s:[10,5]},
    {base:"g1u9",  name:"１０ たしたり ひいたり してみよう", term:2, s:[10,15]},
    {base:"g1u11", name:"１１ たしざん", term:2, s:[10,25]},
    {base:"g1u13", name:"１２ ひきざん", term:2, s:[11,5]},
    {base:"g1u10", name:"１３ くらべてみよう", term:2, s:[11,25]},
    {base:"g1u12", name:"１４ かたちを つくろう", term:3, s:[1,5]},   /* g1u12 再利用（9.は立体・14.は平面） */
    {base:"g1u14", name:"１５ 大きい かずを かぞえよう", term:3, s:[1,15]},
    {base:"g1u15", name:"１６ なんじなんぷん", term:3, s:[2,15]},
    {base:"g1u16", name:"１７ たすのかな ひくのかな ずに かいて かんがえよう", term:3, s:[2,25]},
    {base:"g1u6",  name:"１８ かずしらべ", term:3, s:[3,5]},           /* g1u6 再利用（7.は素地・18.は整理） */
    {base:null,    name:"１９ １年の まとめを しよう", term:3, s:[3,15]}
  ],
  2: [
    {base:"g2u1",  name:"１ ひょうと グラフ", term:1, s:[4,5]},
    {base:"g2u3",  name:"２ 時こくと 時間（１）", term:1, s:[4,5]},
    {base:"g2u2",  name:"３ ２けたの たし算と ひき算", term:1, s:[4,15]},
    {base:"g2u5",  name:"４ たし算の ひっ算", term:1, s:[4,25]},
    {base:"g2u5",  name:"５ ひき算の ひっ算", term:1, s:[5,5]},        /* g2u5 再利用（4.がたし算・5.がひき算） */
    {base:"g2u4",  name:"６ 長さ（1）", term:1, s:[5,15]},
    {base:"g2u9",  name:"７ たし算と ひき算（１）", term:1, s:[6,5]},
    {base:"g2u6",  name:"８ 1000までの 数", term:1, s:[6,15]},
    {base:"g2u8",  name:"９ 大きい 数の たし算と ひき算", term:1, s:[6,25]},
    {base:"g2u7",  name:"１０ 水の かさ", term:2, s:[9,5]},
    {base:"g2u12", name:"１１ 三角形と 四角形", term:2, s:[9,15]},
    {base:"g2u10", name:"１２ かけ算（１）", term:2, s:[10,5]},
    {base:"g2u11", name:"１３ かけ算（２）", term:2, s:[11,5]},
    {base:"g2u13", name:"１４ かけ算（３）", term:2, s:[11,25]},
    {base:"g2u17", name:"１５ 分数", term:2, s:[12,5]},
    {base:"g2u3",  name:"１６ 時こくと 時間（２）", term:3, s:[1,5]},  /* g2u3 再利用（2.が読み・16.が計算） */
    {base:"g2u15", name:"１７ 10000までの 数", term:3, s:[1,5]},
    {base:"g2u14", name:"１８ 長さ（２）", term:3, s:[1,25]},
    {base:"g2u9",  name:"１９ たし算と ひき算（２）", term:3, s:[2,15]}, /* g2u9 再利用（7.が順思考・19.が逆思考） */
    {base:"g2u1",  name:"２０ しりょうの せいり", term:3, s:[2,15]},   /* g2u1 再利用（発展） */
    {base:"g2u16", name:"２１ はこの 形", term:3, s:[2,25]},
    {base:null,    name:"２２ ２年の まとめ", term:3, s:[3,5]}
  ],
  3: [
    {base:"u1",  name:"１ かけ算", term:1, s:[4,5]},
    {base:"u4",  name:"２ 時こくと時間", term:1, s:[4,15]},
    {base:"u2",  name:"３ わり算", term:1, s:[4,25]},
    {base:"u12", name:"○倍の計算", term:1, s:[5,25]},
    {base:"u3",  name:"４ たし算とひき算", term:1, s:[5,25]},
    {base:"u6",  name:"５ 表とグラフ", term:1, s:[6,25]},
    {base:"u8",  name:"６ 長さ", term:1, s:[7,5]},
    {base:"u11", name:"７ 円と球", term:2, s:[9,5]},
    {base:"u9",  name:"８ あまりのあるわり算", term:2, s:[9,15]},
    {base:"u14", name:"９ (2けた)×(1けた)の計算", term:2, s:[10,5]},  /* u14 の前倒し導入として同gen充当 */
    {base:"u14", name:"１０ 1けたをかける かけ算", term:2, s:[10,5]},  /* u14 再利用（筆算本体） */
    {base:"u5",  name:"１１ 大きい数", term:2, s:[10,15]},
    {base:"u18", name:"１２ 小数", term:2, s:[11,5]},
    {base:"u17", name:"１３ 三角形と角", term:2, s:[11,25]},
    {base:"u19", name:"１４ ２けたをかける かけ算", term:3, s:[1,5]},
    {base:"u16", name:"１５ 分数", term:3, s:[1,15]},
    {base:"u10", name:"１６ 重さ", term:3, s:[2,5]},
    {base:"u20", name:"１７ □を使った式", term:3, s:[2,25]},
    {base:"u6",  name:"１８ しりょうの活用", term:3, s:[3,5]},          /* u6 再利用（発展） */
    {base:null,  name:"１９ そろばん", term:3, s:[3,15]},
    {base:null,  name:"２０ ３年のまとめ", term:3, s:[3,15]}
  ],
  4: [
    {base:"g4u1",  name:"１ 大きい数", term:1, s:[4,5]},
    {base:"g4u2",  name:"２ 折れ線グラフ", term:1, s:[4,15]},
    {base:"g4u3",  name:"３ わり算", term:1, s:[4,25]},               /* 筆算前の導入として同gen充当 */
    {base:"g4u4",  name:"４ 角", term:1, s:[5,5]},
    {base:"g4u3",  name:"５ (２けた)÷(１けた)の計算", term:1, s:[5,25]}, /* g4u3 再利用（前倒し導入） */
    {base:"g4u3",  name:"６ １けたでわるわり算", term:1, s:[5,25]},    /* g4u3 再利用（筆算本体） */
    {base:null,    name:"７ しりょうの整理", term:1, s:[6,15]},
    {base:"g4u6",  name:"８ ２けたでわるわり算", term:1, s:[6,25]},
    {base:null,    name:"○倍の計算（１）", term:1, s:[7,25]},
    {base:"g4u9",  name:"９ 垂直・平行と四角形", term:2, s:[9,5]},
    {base:null,    name:"○倍の計算（２）～かんたんな割合～", term:2, s:[9,25]},
    {base:"g4u7",  name:"１０ がい数", term:2, s:[10,5]},
    {base:"g4u8",  name:"１１ 式と計算", term:2, s:[10,15]},
    {base:"g4u5",  name:"１２ 小数", term:2, s:[11,5]},
    {base:null,    name:"１３ そろばん", term:2, s:[11,25]},
    {base:"g4u12", name:"１４ 面積", term:2, s:[11,25]},
    {base:"g4u13", name:"１５ 計算のしかたを考えよう", term:3, s:[1,5]}, /* g4u13 の前倒し導入として同gen充当 */
    {base:"g4u13", name:"１６ 小数のかけ算とわり算", term:3, s:[1,5]},  /* g4u13 再利用（筆算本体） */
    {base:null,    name:"○倍の計算（３）～小数倍～", term:3, s:[1,25]},
    {base:"g4u10", name:"１７ 分数", term:3, s:[1,25]},
    {base:"g4u14", name:"１８ 直方体と立方体", term:3, s:[2,15]},
    {base:"g4u11", name:"１９ ともなって変わる量", term:3, s:[2,25]},
    {base:"g4u2",  name:"２０ しりょうの活用", term:3, s:[3,5]},        /* g4u2 再利用（発展） */
    {base:null,    name:"２１ ４年のまとめ", term:3, s:[3,15]}
  ],
  5: [
    {base:"g5u1",  name:"１ 小数と整数", term:1, s:[4,5]},
    {base:"g5u7",  name:"２ 合同な図形", term:1, s:[4,5]},
    {base:"g5u3",  name:"３ 比例", term:1, s:[4,25]},
    {base:"g5u11", name:"４ 平均", term:1, s:[5,5]},
    {base:"g5u8",  name:"５ 倍数と約数", term:1, s:[5,15]},
    {base:"g5u12", name:"６ 単位量あたりの大きさ（１）", term:1, s:[6,5]},
    {base:"g5u4",  name:"７ 小数のかけ算", term:1, s:[6,15]},
    {base:"g5u5",  name:"８ 小数のわり算", term:1, s:[6,25]},
    {base:null,    name:"○倍の計算 ～小数倍～", term:1, s:[7,25]},
    {base:null,    name:"９ 図形の角", term:2, s:[9,5]},               /* 対応genなし（g5u7 再利用で代替可） */
    {base:"g5u17", name:"１０ 単位量あたりの大きさ（２）", term:2, s:[9,15]},
    {base:"g5u9",  name:"１１ 分数のたし算とひき算", term:2, s:[10,5]},
    {base:"g5u9",  name:"１２ 分数と小数・整数", term:2, s:[10,15]},   /* g5u9 再利用（11.が本体・12.は関係） */
    {base:"g5u6",  name:"１３ 割合（１）", term:2, s:[10,25]},
    {base:"g5u10", name:"１４ 図形の面積", term:2, s:[11,5]},
    {base:"g5u14", name:"１５ 正多角形と円", term:2, s:[12,5]},
    {base:"g5u2",  name:"１６ 体積", term:3, s:[1,5]},
    {base:"g5u13", name:"１７ 割合（２）", term:3, s:[1,25]},
    {base:"g5u15", name:"１８ いろいろなグラフ", term:3, s:[2,5]},
    {base:"g5u16", name:"１９ 立体", term:3, s:[2,15]},
    {base:null,    name:"２０ データの活用", term:3, s:[3,5]},          /* 対応genなし（g5u15 再利用で代替可） */
    {base:null,    name:"２１ ５年のまとめ", term:3, s:[3,5]}
  ],
  6: [
    {base:"g6u1",  name:"１ 対称", term:1, s:[4,5]},
    {base:"g6u2",  name:"２ 文字と式", term:1, s:[4,25]},
    {base:"g6u3",  name:"３ 分数と整数のかけ算とわり算", term:1, s:[5,15]},
    {base:"g6u4",  name:"４ 分数×分数", term:1, s:[6,5]},
    {base:"g6u5",  name:"５ 分数÷分数", term:1, s:[6,25]},
    {base:"g6u9",  name:"６ 資料の整理", term:1, s:[7,5]},
    {base:"g6u6",  name:"７ ならべ方と組み合わせ方", term:2, s:[9,5]},
    {base:null,    name:"８ 小数と分数の計算", term:2, s:[9,15]},       /* 対応genなし（g6u4／g6u5 再利用で代替可） */
    {base:null,    name:"○倍の計算 〜分数倍〜", term:2, s:[9,15]},
    {base:"g6u7",  name:"９ 円の面積", term:2, s:[9,25]},
    {base:"g6u8",  name:"１０ 立体の体積", term:2, s:[10,5]},
    {base:"g6u10", name:"１１ 比とその利用", term:2, s:[10,15]},
    {base:"g6u11", name:"１２ 拡大図と縮図", term:2, s:[10,25]},
    {base:"g6u12", name:"１３ 比例と反比例", term:2, s:[11,15]},
    {base:"g6u9",  name:"１４ データの活用", term:3, s:[1,5]},          /* g6u9 再利用（6.が本体・14.は活用） */
    {base:null,    name:"１５ 算数のまとめ", term:3, s:[1,15]},
    {base:null,    name:"別冊１ 算数で見つけた 見方・考え方", term:3, s:[1,25]},
    {base:null,    name:"別冊２ 中学校へのかけ橋〔発展〕", term:3, s:[2,25]}
  ]
};
