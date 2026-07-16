/* スタディクエスト データ倉庫：川口セット（東京書籍・3年生）
   単元カレンダー（どの単元を・いつ習うか）だけ東書版。問題の中身（gen/qs）は
   3年生の引き出し（pack-g3.js・subjects-extra.js）を参照共有し、複製しない。
   出典：東京書籍公式の年間指導計画（spec/川口-東書3年-単元カレンダー案.md が単一の真実）
   このファイルは pack-g3.js と subjects-extra.js より後に読み込むこと。 */

/* ===== 算数（東書「新しい算数3」） =====
   c(元id, 上書き)＝既存単元の gen/bun を共有し、名前と時期だけ川口版にする。
   adv＝⚡おうよう問題の参照先（MATH_ADV_G3 は元idで引くため） */
const MATH_UNITS_G3_KAWA=(()=>{
  const src=Object.fromEntries(MATH_UNITS_G3.map(u=>[u.id,u]));
  const c=(baseId,over)=>Object.assign({}, src[baseId], {adv:baseId}, over);
  return [
    c("u1", {id:"kwu1",  name:"かけ算",                 term:1, s:[4,10]}),
    c("u4", {id:"kwu2",  name:"時こくと時間のもとめ方",   term:1, s:[4,25]}),
    c("u2", {id:"kwu3",  name:"わり算",                 term:1, s:[5,5]}),
    c("u3", {id:"kwu4",  name:"たし算とひき算の筆算",     term:1, s:[5,25]}),
    c("u8", {id:"kwu5",  name:"長いものの長さのはかり方", term:1, s:[6,10]}),
    c("u6", {id:"kwu6",  name:"ぼうグラフと表",          term:1, s:[6,25]}),
    c("u7", {id:"kwu7",  name:"暗算",                   term:1, s:[7,10]}),
    c("u9", {id:"kwu8",  name:"あまりのあるわり算",       term:2, s:[9,1]}),
    c("u5", {id:"kwu9",  name:"大きい数のしくみ",        term:2, s:[9,15]}),
    c("u14",{id:"kwu10", name:"かけ算の筆算(1)",         term:2, s:[10,1]}),
    /* 東書だけにある単元（対応する既存genなし）→ 小さな専用genを新設 */
    {id:"kwu11", name:"大きい数のわり算", term:2, s:[10,25], gen(){
      const v=rnd(1,3);
      if(v===1){ const b=rnd(2,9), t=rnd(2,9); return q((b*t*10)+" ÷ "+b, t*10, "div"); }
      if(v===2){ const b=rnd(2,9), t=rnd(2,9); return q((b*t*100)+" ÷ "+b, t*100, "div"); }
      const b=rnd(2,4), d1=rnd(1,Math.floor(9/b)), d2=rnd(1,Math.floor(9/b));
      return q(((d1*10+d2)*b)+" ÷ "+b, d1*10+d2, "div"); },
      bun(){
        const it=pick(BN_ITEMS), b=rnd(2,4), t=rnd(2,9), a=b*t*10;
        return q(a+"この "+it+"を "+b+"人で 同じ かずずつ 分けます。1人分は なんこ？", t*10, "bun"); }},
    c("u11",{id:"kwu12", name:"円と球",                 term:2, s:[11,1]}),
    c("u18",{id:"kwu13", name:"小数",                   term:2, s:[11,15]}),
    c("u10",{id:"kwu14", name:"重さのたんいとはかり方",   term:2, s:[12,5]}),
    c("u16",{id:"kwu15", name:"分数",                   term:3, s:[1,10]}),
    c("u20",{id:"kwu16", name:"□を使った式",            term:3, s:[1,25]}),
    c("u19",{id:"kwu17", name:"かけ算の筆算(2)",         term:3, s:[2,1]}),
    c("u12",{id:"kwu18", name:"倍の計算",               term:3, s:[2,20]}),
    c("u17",{id:"kwu19", name:"三角形と角",             term:3, s:[2,25]}),
    /* u13 計算のじゅんじょ・u15 式と計算は東書では小単元に分散のため出題から外す
       （カレンダーを教科書の目次に忠実にするのを優先。spec の着工時判断） */
  ];
})();

/* ===== 理科（東書「新しい理科3」・qs は既存参照） ===== */
const SCI_UNITS_G3_KAWA=(()=>{
  const src=Object.fromEntries(SCI_UNITS_G3.map(u=>[u.id,u]));
  const c=(baseId,over)=>Object.assign({}, src[baseId], over);
  return [
    c("c3s1", {id:"kwc3s1",  name:"春の生き物",           term:1, s:[4,15]}),
    c("c3s2", {id:"kwc3s2",  name:"たねまき",             term:1, s:[4,25]}),
    c("c3s3", {id:"kwc3s3",  name:"チョウのかんさつ",      term:1, s:[5,15]}),
    c("c3s4", {id:"kwc3s4",  name:"どれぐらい育ったかな",   term:1, s:[6,5]}),
    c("c3s5", {id:"kwc3s5",  name:"風やゴムのはたらき",     term:1, s:[6,15]}),
    c("c3s6", {id:"kwc3s6",  name:"花がさいたよ",          term:1, s:[7,5]}),
    c("c3s9", {id:"kwc3s7",  name:"実ができたよ",          term:2, s:[9,1]}),
    /* こん虫のかんさつ＝すみか（c3s8）＋体のつくり・育ち方（c3s3）を合わせて出題 */
    c("c3s8", {id:"kwc3s8",  name:"こん虫のかんさつ",      term:2, s:[9,15],
               qs:src.c3s8.qs.concat(src.c3s3.qs)}),
    c("c3s10",{id:"kwc3s9",  name:"太陽とかげ",           term:2, s:[10,1]}),
    c("c3s11",{id:"kwc3s10", name:"太陽の光",             term:2, s:[11,1]}),
    c("c3s7", {id:"kwc3s11", name:"音のせいしつ",          term:2, s:[11,15]}),
    c("c3s14",{id:"kwc3s12", name:"物の重さ",             term:2, s:[12,1]}),
    c("c3s12",{id:"kwc3s13", name:"電気の通り道",          term:3, s:[1,10]}),
    c("c3s13",{id:"kwc3s14", name:"じしゃくのせいしつ",    term:3, s:[1,25]}),
  ];
})();

/* ===== 社会（東書「新しい社会3」・qs は既存参照） ===== */
const SOC_UNITS_G3_KAWA=(()=>{
  const src=Object.fromEntries(SOC_UNITS_G3.map(u=>[u.id,u]));
  const c=(baseId,over)=>Object.assign({}, src[baseId], over);
  return [
    c("c3o1", {id:"kwc3o1", name:"学校のまわり",               term:1, s:[4,15]}),
    c("c3o2", {id:"kwc3o2", name:"市の様子",                  term:1, s:[5,10]}),
    /* 東書は農家か工場のどちらかを学校が選ぶ→両方入れる（spec 合意） */
    c("c3o5", {id:"kwc3o3", name:"農家の仕事・工場の仕事",      term:1, s:[6,20],
               qs:src.c3o5.qs.concat(src.c3o4.qs)}),
    c("c3o3", {id:"kwc3o4", name:"店ではたらく人",             term:2, s:[9,20]}),
    c("c3o6", {id:"kwc3o5", name:"火事からくらしを守る",        term:2, s:[12,1]}),
    c("c3o7", {id:"kwc3o6", name:"事故や事件からくらしを守る",   term:3, s:[1,10]}),
    c("c3o8", {id:"kwc3o7", name:"かわる道具とくらし",          term:3, s:[2,1]}),
    c("c3o9", {id:"kwc3o8", name:"市のうつりかわり",            term:3, s:[2,20]}),
  ];
})();

/* ===== 教科書セットの引き出し（applyGradePack が学年パックの上から重ねる） =====
   国語（光村・同じ）と英語（Let's Try!・全国共通）は差しかえ不要。
   hadano はエントリなし＝学年パックのまま */
const BOOK_PACKS={
  kawaguchi:{
    label:"かわぐち（東京書籍）",
    3:{ mathUnits:MATH_UNITS_G3_KAWA, sciUnits:SCI_UNITS_G3_KAWA, socUnits:SOC_UNITS_G3_KAWA },
  },
};
