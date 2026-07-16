/* スタディクエスト データ倉庫：キャラ画像の対応表
   絵文字キャラ→イラスト（assets/chara/*.png）の置き換え。
   画像が「ある」キャラは絵で、「ない」キャラ（図鑑のなかま・ガチャ等）は絵文字のまま出る設計。
   図鑑・ガチャの画像は第4弾の納品後にここへ追記する。 */

const CHARA_DIR = "assets/chara/";

/* 敵（ENEMIES / SEASON_ENEMIES / BOSS の n と対応） */
const ENEMY_IMG = {
  "バグモン":"enemy_bugmon", "おにこぞう":"enemy_oni", "てんぐん":"enemy_tengu",
  "おばけろう":"enemy_obakero", "ガチャロボ":"enemy_robo", "ザウルスくん":"enemy_zaurus",
  "パンプキン":"enemy_pumpkin", "タコむし":"enemy_takomushi", "サソリード":"enemy_scorpion",
  "ゾンビィ":"enemy_zombie", "こあくまん":"enemy_koakuma", "ガイコツン":"enemy_gaikotsu",
  "こうもりん":"enemy_komori", "クモすけ":"enemy_kumo", "キャベツむし":"enemy_kyabetsu",
  "バイキンだま":"enemy_baikin", "うちゅうじん":"enemy_uchujin", "ブロックン":"enemy_block",
  "たつまきまる":"enemy_tatsumaki", "ホネホネけん":"enemy_hone", "ありへいたい":"enemy_ari",
  "ピエロン":"enemy_piero",
  "はなビラー":"season_hanabira", "でんでんぬし":"season_denden", "だんごどろぼう":"season_dango",
  "テントウごろう":"season_tento", "チクチクか":"season_ka", "イカすみー":"season_ika",
  "かきごおりまじん":"season_kakigori", "ヤシのきング":"season_yashi", "カカシろう":"season_kakashi",
  "やきいもまじん":"season_yakiimo", "ハリネズミごろう":"season_harinezumi", "クモのすばん":"season_kumosu",
  "ゆきぐもん":"season_yukigumo", "ゆきやまおとこ":"season_yukiyama", "こごえおに":"season_kogoe",
  "こがらしまん":"season_kogarashi",
  "まとめキング":"boss_king",
};

/* 相棒（コースid＋進化段階の順番で引く） */
const BUDDY_IMG_PREFIX = { dragon:"dragon", sky:"sky", sea:"sea", star:"star" };

function enemyImg(name){
  const f = ENEMY_IMG[name];
  return f ? CHARA_DIR + f + ".png" : null;
}
function buddyImg(courseId, stageIndex){
  const p = BUDDY_IMG_PREFIX[courseId];
  return (p && stageIndex >= 0) ? CHARA_DIR + p + "_" + (stageIndex + 1) + ".png" : null;
}
/* 画像があれば <img>・なければ絵文字。読み込み失敗時も絵文字に戻る（お守り） */
function charaHTML(img, emoji){
  if(!img) return emoji;
  return '<img class="chimg" src="' + img + '" alt="" draggable="false" data-em="' + emoji + '" onerror="this.outerHTML=this.dataset.em">';
}
