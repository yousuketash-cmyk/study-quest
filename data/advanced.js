/* スタディクエスト データ倉庫：おうよう問題（2階部分・全学年）
   index.html（エンジン）より先に読み込まれる。ここは「データの置き場」で、
   仕組みを変えるときは index.html 側を直す。 */

const MATH_ADV_G1={
  g1u1(){ const A=pick(G1_COUNT_ITEMS); let B=pick(G1_COUNT_ITEMS); while(B[0]===A[0]) B=pick(G1_COUNT_ITEMS);
    const a=rnd(4,9), b=rnd(2,a-1);
    return q(A[1].repeat(a)+"　"+B[1].repeat(b)+"　"+A[0]+"は "+B[0]+"より なんこ おおい？", a-b, "kazu"); },
  g1u3(){ const b=rnd(1,9); return q("□と "+b+"で 10。□は いくつ？", 10-b, "kazu"); },
  g1u4(){ const a=rnd(3,8); return q("あめを "+a+"こ もって いるよ。あと なんこで 10こに なる？", 10-a, "add"); },
  g1u5(){ const b=rnd(2,6), c=rnd(2,6);
    return q("なんこか あった あめを "+c+"こ たべたら、のこりが "+b+"こに なったよ。はじめは なんこ あった？", b+c, "bun"); },
  g1u7(){ const n=rnd(12,19), b=rnd(1,7); return q("□ ＋ "+b+" ＝ "+n+"　□は いくつ？", n-b, "kazu"); },
  g1u9(){ const a=rnd(4,8), b=rnd(1,3), c=rnd(1,3);
    return q("バスに "+a+"にん のって いるよ。ていりゅうじょで "+b+"にん のって、"+c+"にん おりたよ。いま なんにん？", a+b-c, "bun"); },
  g1u11(){ const a=rnd(5,9), b=rnd(11-a,9); return q("□ ＋ "+b+" ＝ "+(a+b)+"　□は いくつ？", a, "add"); },
  g1u13(){ const a=rnd(11,18), b=rnd(a-9,9); return q("□ − "+b+" ＝ "+(a-b)+"　□は いくつ？", a, "sub"); },
  g1u14(){ if(Math.random()<0.5){ const n=rnd(20,89); return q(n+"より 10 おおきい かずは？", n+10, "kazu"); }
    const t=rnd(3,9); return q("10が なんこで "+(t*10)+"に なる？", t, "kazu"); },
  g1u16(){ const a=rnd(2,5), b=rnd(2,5);
    return q(pick(BN_KIDS)+"は れつに ならんで いるよ。まえに "+a+"にん、うしろに "+b+"にん いるよ。れつには みんなで なんにん いる？", a+b+1, "bun"); },
};

const MATH_ADV_G2={
  g2u1(){ const kinds=shuffle(G2_GRAPH_ITEMS.slice()).slice(0,3);
    const nums=shuffle([2,3,4,5,6,7].slice()).slice(0,3);
    let line=[]; kinds.forEach((k,i)=>{ for(let j=0;j<nums[i];j++) line.push(k[1]); });
    line=shuffle(line).join("");
    return q(line+"　ぜんぶで なんこ ある？", nums[0]+nums[1]+nums[2], "data"); },
  g2u2(){ if(Math.random()<0.5){ const a=rnd(11,40), b=rnd(3,9); return q("□ + "+b+" ＝ "+(a+b)+"　□は いくつ？", a, "add"); }
    const a=rnd(15,40), b=rnd(3,9); return q("□ − "+b+" ＝ "+(a-b)+"　□は いくつ？", a, "sub"); },
  g2u5(){ if(Math.random()<0.5){ const a=rnd(12,40), b=rnd(11,40); return q(a+" + □ ＝ "+(a+b)+"　□は いくつ？", b, "add"); }
    const b=rnd(12,30), d=rnd(3,9);
    if(Math.random()<0.5) return q("あかい 花は あおい 花より "+d+"本 おおいです。あおい 花は "+b+"本。あかい 花は なん本？", b+d, "bun");
    return q("あおい リボンは あかい リボンより "+d+"cm みじかいです。あかい リボンは "+b+"cm。あおい リボンは なんcm？", b-d, "bun"); },
  g2u6(){ if(Math.random()<0.5){ const n=rnd(30,90)*10; return q(n+"は 10が なんこ あつまった かず？", n/10, "big"); }
    const a=rnd(3,9); return q((a*100)+"は 10が なんこ あつまった かず？", a*10, "big"); },
  g2u8(){ const a=rnd(25,50), b=rnd(5,12), c=rnd(5,12);
    if(Math.random()<0.5) return q("バスに "+a+"人 のって います。"+b+"人 のって きて、"+c+"人 おりました。いま なん人？", a+b-c, "bun");
    return q("いちごが "+a+"こ あります。あさ "+b+"こ、よる "+c+"こ たべました。のこりは なんこ？", a-b-c, "bun"); },
  g2u9(){ const a=rnd(13,40), o=rnd(2,8), b=rnd(1,3)*10+o, c=10-o;
    return q(a+" + "+b+" + "+c+"　（あとの 2つを 先に たすと かんたん）", a+b+c, "add"); },
  g2u10(){ if(Math.random()<0.5){ const base=rnd(2,4); return q(base+"cmの 2ばいの、そのまた 2ばいは なんcm？", base*4, "bai"); }
    const a=rnd(3,5), b=rnd(3,5); return q("●が 1れつに "+a+"こずつ "+b+"れつ ならんで います。しきは "+a+" × "+b+"。ぜんぶで なんこ？", a*b, "mul"); },
  g2u11(){ const dan=pick([6,7,8]), b=rnd(3,7), c=rnd(2,5), it=pick(BN_ITEMS);
    return q("1ふくろ "+dan+"こ入りの "+it+"を "+b+"ふくろと、ばらで "+c+"こ 買いました。ぜんぶで なんこ？", dan*b+c, "bun"); },
  g2u12(){ return qc("ちょうほうけいの かみを、かどから かどへ まっすぐ 1本の 直線で 切ると、なにが 2まい できる？", "ちょっかくさんかくけい", ["ちょっかくさんかくけい","せいほうけい","ちょうほうけい","まる"], "zu"); },
  g2u13(){ const a=rnd(3,9), b=rnd(3,8);
    return q(a+" × "+b+" ＝ "+a+" × "+(b-1)+" + □　□は いくつ？", a, "mul"); },
  g2u14(){ if(Math.random()<0.5){ const a=rnd(1,3), b=rnd(2,9)*10, c=rnd(1,5)*10; return q(a+"m"+b+"cmの テープから "+c+"cm 切りとると、のこりは なんcm？", a*100+b-c, "tani"); }
    const a=rnd(110,190); return q(a+"cmは なんm なんcm？ …cmの ところだけ こたえてね", a-100, "tani"); },
  g2u15(){ if(Math.random()<0.5){ const n=rnd(23,89); return q((n*100)+"は 100が なんこ あつまった かず？", n, "big"); }
    return q("10000より 1 小さい かずは？", 9999, "big"); },
  g2u17(){ const n=rnd(3,9);
    return q("ある かずの 2ぶんの1は "+n+"です。ある かずは いくつ？", n*2, "frac"); },
};

const MATH_ADV_G3={
  u1(){ if(Math.random()<0.5){ const a=rnd(2,9), b=rnd(2,9); return q("□ × "+b+" ＝ "+(a*b)+"　□は いくつ？", a, "mul"); }
    const it=pick(BN_ITEMS), a=rnd(3,9), b=rnd(3,9), c=rnd(2,8);
    return q("1ふくろ "+a+"こ入りの "+it+"を "+b+"ふくろと、ばらで "+c+"こ 買いました。ぜんぶで なんこ？", a*b+c, "bun"); },
  u2(){ if(Math.random()<0.5){ const b=rnd(2,9), c=rnd(2,9); return q("□ ÷ "+b+" ＝ "+c+"　□は いくつ？", b*c, "div"); }
    const it=pick(BN_ITEMS), b=rnd(2,5), c=rnd(3,8), e=rnd(1,c-1);
    return q((b*c)+"この "+it+"を "+b+"人で 同じ かずずつ 分けて、1人が "+e+"こ 食べました。1人分の のこりは なんこ？", c-e, "bun"); },
  u3(){ const a=rnd(150,420), b=rnd(150,420);
    if(Math.random()<0.5) return q("1000円で "+a+"円の パンと "+b+"円の ジュースを 買いました。おつりは なん円？", 1000-a-b, "bun");
    const c=rnd(120,380); return q(pick(BN_KIDS)+"は "+(a+b)+"円 もって いました。"+a+"円 つかって、"+c+"円 もらいました。いま なん円？", b+c, "bun"); },
  u4(){ if(Math.random()<0.5){
      /* m1+dm が ちょうど60分（＝10時0分）になる組は 出さない（検品指摘の修正） */
      const m1=pick([40,45,50]), dm=pick(m1===40?[25,30,35,40]:[20,25,30,35,40]);
      const total=m1+dm, mm=total-60, right="10時"+mm+"分";
      const set=new Set([right]);
      ["10時"+(mm+10)+"分", (mm>=15?"10時"+(mm-10)+"分":"11時"+mm+"分"), "9時"+mm+"分"].forEach(c=>{ if(set.size<4 && c!==right) set.add(c); });
      return qc("9時"+m1+"分から "+dm+"分 たつと なん時なん分？", right, [...set], "toki"); }
    const m=pick([20,30,40,50]);
    return q("学校まで あるいて "+m+"分 かかります。3時 ちょうどに つくには、2時なん分に 家を 出れば いい？", 60-m, "toki"); },
  u5(){ if(Math.random()<0.5) return q("10000より 1 小さい かずは？", 9999, "big");
    const a=rnd(2,9); return q((a*10000)+" は 100を なんこ あつめた かず？", a*100, "big"); },
  u7(){ if(Math.random()<0.5){ const a=rnd(25,75), b=rnd(15,65); return q(a+"円と "+b+"円の おかしを 買って、100円だまを 2まい 出しました。おつりは なん円？", 200-a-b, "bun"); }
    const a=rnd(20,60), b=rnd(15,45), c=rnd(11,30); return q("バスに "+a+"人 のって います。ていりゅうじょで "+b+"人 のって、"+c+"人 おりました。いま なん人？", a+b-c, "bun"); },
  u8(){ if(Math.random()<0.5){ const m=rnd(2,8)*100; return q("1km の みちを "+m+"m あるきました。のこりは なんm？", 1000-m, "tani"); }
    const k=rnd(1,3), m=rnd(11,19)*100; return q(k+"km と "+m+"m。あわせて なんm？", k*1000+m, "tani"); },
  u9(){ const b=rnd(3,6), c=rnd(3,8), r=rnd(1,b-1), a=b*c+r;
    if(Math.random()<0.5) return q(a+"人が ながいすに "+b+"人ずつ すわります。みんなが すわるには ながいすは なんきゃく いる？", c+1, "bun");
    return q(a+"この おかしを 1ふくろに "+b+"こずつ 入れます。あまりを 出さずに ぜんぶ 入れるには、おかしは あと なんこ あれば いい？", b-r, "bun"); },
  u10(){ if(Math.random()<0.5){ const g=rnd(2,8)*100; return q("1kg の さとうを "+g+"g つかいました。のこりは なんg？", 1000-g, "tani"); }
    const a=rnd(1,3), g=rnd(2,9)*100, c=rnd(2,9)*100; return q(a+"kg"+g+"g の にもつと "+c+"g の にもつ。あわせて なんg？", a*1000+g+c, "tani"); },
  u11(){ const d=rnd(2,6)*2, n=rnd(2,5);
    return q("ながさ "+(d*n)+"cm の はこに、ちょっけい "+d+"cm の ボールを 1れつに ぴったり ならべます。なんこ 入る？", n, "zu"); },
  u12(){ const a=rnd(2,4), b=rnd(2,3), c=rnd(2,3);
    return q(a+"cm の "+b+"ばいの、そのまた "+c+"ばいは なんcm？", a*b*c, "bai"); },
  u13(){ const a=rnd(2,5), b=rnd(2,5), c=rnd(2,4);
    return q(a+" × □ × "+c+" ＝ "+(a*b*c)+"　□は いくつ？", b, "mul"); },
  u14(){ const a=rnd(15,98), b=rnd(2,9);
    return q("1こ "+a+"円の パンを "+b+"こ 買って、1000円さつを 出しました。おつりは なん円？", 1000-a*b, "bun"); },
  u15(){ if(Math.random()<0.5){ const a=rnd(1,5), b=rnd(3,9); return q("(100 ＋ "+a+") × "+b+" ＝ ？", (100+a)*b, "mul"); }
    const b=rnd(3,9); return q("99 × "+b+" は (100 − 1) × "+b+" で もとめられます。答えは？", 99*b, "mul"); },
  u16(){ let d=rnd(4,9), x=rnd(1,d-1), g=0;
    if(Math.random()<0.5){
      while(fgcd(d-x,d)>1 && g++<20){ d=rnd(4,9); x=rnd(1,d-1); }
      return fracQ("1 − "+x+"/"+d, d-x, d, "frac"); }
    let a=rnd(1,d-2), c=rnd(a+1,d-1); g=0;
    while(fgcd(c-a,d)>1 && g++<20){ d=rnd(5,9); a=rnd(1,d-2); c=rnd(a+1,d-1); }
    return fracQ("□ ＋ "+a+"/"+d+" ＝ "+c+"/"+d+"　□は？", c-a, d, "frac"); },
  u17(){ if(Math.random()<0.5){ const a=rnd(3,9); return q("まわりの ながさが "+(a*3)+"cm の 正三角形。1本の へんは なんcm？", a, "zu"); }
    const b=rnd(3,8), c=rnd(2,6); return q("2本の へんが "+b+"cm、のこりの 1本が "+c+"cm の 二等辺三角形。まわりの ながさは なんcm？", b*2+c, "zu"); },
  u18(){ const A=rnd(12,59), B=rnd(2,9);
    const right=(B/10).toFixed(1), set=new Set([right]); let g=0;
    while(set.size<4 && g++<40){ const v=B+rnd(-3,3); if(v>0) set.add((v/10).toFixed(1)); }
    return qc((A/10).toFixed(1)+" − □ ＝ "+((A-B)/10).toFixed(1)+"　□は？", right, [...set], "dec"); },
  u19(){ const a=rnd(12,30), b=rnd(12,30);
    return q("1こ "+a+"円の あめを "+b+"こ 買います。1000円さつを 1まい 出すと おつりは なん円？", 1000-a*b, "bun"); },
  u20(){ const it=pick(BN_ITEMS), b=rnd(3,9), x=rnd(4,9);
    return q("□この "+it+"を "+b+"人で 同じ かずずつ 分けたら、1人 "+x+"こずつに なりました。□は なんこ？", b*x, "bun"); },
};

const MATH_ADV_G6={
  g6u1(){ if(Math.random()<0.5) return qc("円の 対称の軸は 何本 ある？", "数えきれないほど ある", ["数えきれないほど ある","1本","2本","4本"], "zu");
    return qc("線対称でも 点対称でも ある 図形は？", "正方形", ["正方形","正三角形","台形","直角三角形"], "zu"); },
  g6u2(){ const x=rnd(2,9), a=rnd(2,6), b=rnd(2,20);
    return q("x × "+a+" ＋ "+b+" ＝ "+(x*a+b)+"　x は いくつ？", x, "shiki"); },
  g6u3(){ const b=rnd(2,7), a=rnd(1,b-1), c=rnd(2,4), e=rnd(2,4);
    return fracQ(a+"/"+b+" × "+c+" ÷ "+e, a*c, b*e, "frac"); },
  g6u4(){ const b=rnd(2,5), a=rnd(1,b-1), d=rnd(2,5), c=rnd(1,d-1);
    return fracQ("□ × "+a+"/"+b+" ＝ "+fracStr(c,d)+"　□は？", c*b, d*a, "frac"); },
  g6u5(){ const b=rnd(2,5), a=rnd(1,b-1), d=rnd(2,5), c=rnd(1,d-1);
    return fracQ(fracStr(a,b)+" ÷ □ ＝ "+fracStr(c,d)+"　□は？", a*d, b*c, "frac"); },
  g6u6(){ if(Math.random()<0.5) return q("0、1、2、3 の 4まいの カードから 2まいを ならべて 2けたの 数を 作ります。何通り できる？", 9, "baai");
    return q("5人から 3人の そうじ当番を えらぶ 組み合わせは 何通り？", 10, "baai"); },
  g6u7(){ const r=rnd(2,6), half=Math.round(r*r*3.14/2*100)/100;
    const right=""+half, set=new Set([right]);
    /* 候補を多めに用意（r=2・r=4 は 円周と全円が同値になり 4択が欠けるため） */
    [r*r*3.14, r*2*3.14, Math.round(r*r*3.14/4*100)/100, Math.round((r+1)*(r+1)*3.14/2*100)/100, r*r*2]
      .forEach(x=>{ const c=""+(Math.round(x*100)/100); if(set.size<4 && c!==right && !set.has(c)) set.add(c); });
    return qc("半径 "+r+"cmの 半円の 面積は 何cm²？（円周率 3.14）", right, [...set], "zu"); },
  g6u8(){ const a=rnd(2,6)*5, b=rnd(2,6)*2, h=rnd(2,5);
    return q("たて "+a+"cm・よこ "+b+"cmの 水そうに 石を しずめたら、水面が "+h+"cm 上がりました。石の 体積は 何cm³？", a*b*h, "zu"); },
  g6u9(){ const m=rnd(60,90), n=pick([3,4,5]);
    return q("テスト "+n+"回の 平均が "+m+"点でした。"+n+"回の 合計は 何点？", m*n, "data"); },
  g6u10(){ const a=rnd(1,3), b=a+rnd(1,3), k=rnd(2,6);
    return q("たてと よこの 長さの 比が "+a+" : "+b+" の 長方形。まわりの 長さが "+((a+b)*2*k)+"cmの とき、たては 何cm？", a*k, "hi"); },
  g6u11(){ if(Math.random()<0.5){ const k=pick([2,3]); return q(k+"倍の 拡大図に すると、面積は もとの 何倍に なる？", k*k, "zu"); }
    const k=rnd(1,5); return q("実際の 道のり "+(k*100)+"mは、縮尺 1/1000 の 地図では 何cm？", k*10, "zu"); },
  g6u12(){ if(Math.random()<0.5){ const a=rnd(2,6), t=a*rnd(3,9); return q("y ＝ "+a+" × x　y が "+t+" のとき x は？", t/a, "hirei"); }
    return qc("反比例で、x を 2倍に すると y は どうなる？", "半分に なる", ["半分に なる","2倍に なる","変わらない","4倍に なる"], "hirei"); },
  g6u13(){ const v=rnd(1,3);
    if(v===1) return qc("1km² は 何m²？", "1000000 m²", ["1000000 m²","10000 m²","1000 m²","100000 m²"], "tani");
    if(v===2) return q("1ha（ヘクタール）は 何m²？", 10000, "tani");
    return q("1m³ の 水の 重さは 何kg？", 1000, "tani"); },
};

