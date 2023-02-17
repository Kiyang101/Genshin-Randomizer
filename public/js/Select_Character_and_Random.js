const Borders = "border-top: 5px solid MediumSpringGreen; border-bottom: 5px solid SpringGreen;";

let count_Aether = false;
let count_Albedo = false;
let count_Alhatham = false;
let count_Aloy = false;
let count_Amber = false;
let count_Arataki_Itto = false;
let count_Barbara = false;
let count_Beidou = false;
let count_Bennett = false;
let count_Candace = false;
let count_Chongyun = false;
let count_Collei = false;
let count_Cyno = false;
let count_Diluc = false;
let count_Diona = false;
let count_Dori = false;
let count_Eula = false;
let count_Faruzan = false;
let count_Fischl = false;
let count_Ganyu = false;
let count_Gorou = false;
let count_Hutao = false;
let count_Jean = false;
let count_Kaeya = false;
let count_Ayaka = false;
let count_Ayato = false;
let count_Kazuha = false;
let count_Keqing = false;
let count_Klee = false;
let count_Kujou_Sara = false;
let count_Kuki_Shinobu = false;
let count_Layla = false;
let count_Lisa = false;
let count_Mona = false;
let count_Nahida = false;
let count_Nilou = false;
let count_Ningguang = false;
let count_Noelle = false;
let count_Qiqi = false;
let count_Raiden = false;
let count_Razor = false;
let count_Rosaria = false;
let count_Kokomi = false;
let count_Sayu = false;
let count_Shenhe = false;
let count_Heizou = false;
let count_Sucrose = false;
let count_Tartaglia = false;
let count_Thoma = false;
let count_Tighnari = false;
let count_Venti = false;
let count_Wanderer = false;
let count_Xiangling = false;
let count_Xiao = false;
let count_Xingqiu = false;
let count_Xinyan = false;
let count_Yae_miko = false;
let count_Yanfei = false;
let count_Yaoyao = false;
let count_Yelan = false;
let count_Yoimiya = false;
let count_Yunjin = false;
let count_Zhongli = false;

let count_Anemo_Hypotasis = false;
let count_Cryo_Hypotasis = false;
let count_Dendro_Hypotasis = false;
let count_Electro_Hypotasis = false;
let count_Geo_Hypotasis = false;
let count_Hydro_Hypotasis = false;
let count_Pyro_Hypotasis = false;
let count_Cryo_Regisvine = false;
let count_Electro_Regisvine = false;
let count_Pyro_Regisvine = false;
let count_Oceanid = false;
let count_Primo_Geovishap = false;
let count_Golden_Wolflord = false;
let count_Bathysmal_Vishap = false;
let count_Thunder_Manifestation = false;
let count_Jadeplume_Terrorshroom = false;
let count_Setekh_Wenut = false;
let count_Maguu_Kenki = false;
let count_Aeonblight_Drake = false;
let count_Algorithm = false;
let count_Perpetual_Mechanical_Array = false;
let count_Ruin_Serpent = false;
let count_Lupus_Boreas = false;
let count_Stormterror = false;
let count_Azhdaha = false;
let count_Childe = false;
let count_La_Signora = false;
let count_Magatsu_Mitake = false;
let count_Shouki_no_Kami = false;


const Boss = [];
const Character = [];

function select_Aether() {
  if (count_Aether == false){
    document.querySelector(".char .Aether .box").style.cssText = Borders
    count_Aether = true;
    Character[Character.length] = "Aether";
    return
  }
  if (count_Aether == true){
    document.querySelector(".char .Aether .box").style.border="";
    count_Aether = false;
    let index = Character.indexOf("Aether");
    Character.splice(index,1);
    return
  }
}

function select_Albedo() {
    if (count_Albedo == false){
      document.querySelector(".char .Albedo .box").style.cssText = Borders
      count_Albedo = true;
      Character[Character.length] = "Albedo";
      return
    }
    if (count_Albedo == true){
      document.querySelector(".char .Albedo .box").style.border="";
      count_Albedo = false;
      let index = Character.indexOf("Albedo");
      Character.splice(index,1);
      return
    }
}

function select_Alhatham() {
  if (count_Alhatham == false){
    document.querySelector(".char .Alhaitham .box").style.cssText = Borders
    count_Alhatham = true;
    Character[Character.length] = "Alhaitham";
    return
  }
  if (count_Alhatham == true){
    document.querySelector(".char .Alhaitham .box").style.border="";
    count_Alhatham = false;
    let index = Character.indexOf("Alhaitham");
    Character.splice(index,1);
    return
  }
}

function select_Aloy() {
  if (count_Aloy == false){
    document.querySelector(".char .Aloy .box").style.cssText = Borders
    count_Aloy = true;
    Character[Character.length] = "Aloy";
    return
  }
  if (count_Aloy == true){
    document.querySelector(".char .Aloy .box").style.border="";
    count_Aloy = false;
    let index = Character.indexOf("Aloy");
    Character.splice(index,1);
    return
  }
}

function select_Amber() {
  if (count_Amber == false){
    document.querySelector(".char .Amber .box").style.cssText = Borders
    count_Amber = true;
    Character[Character.length] = "Amber";
    return
  }
  if (count_Amber == true){
    document.querySelector(".char .Amber .box").style.border="";
    count_Amber = false;
    let index = Character.indexOf("Amber");
    Character.splice(index,1);
    return
  }
}

function select_Arataki_Itto() {
  if (count_Arataki_Itto == false){
    document.querySelector(".char .Arataki_Itto .box").style.cssText = Borders
    count_Arataki_Itto = true;
    Character[Character.length] = "Arataki_Itto";
    return
  }
  if (count_Arataki_Itto == true){
    document.querySelector(".char .Arataki_Itto .box").style.border="";
    count_Arataki_Itto = false;
    let index = Character.indexOf("Arataki_Itto");
    Character.splice(index,1);
    return
  }
}

function select_Barbara() {
  if (count_Barbara == false){
    document.querySelector(".char .Barbara .box").style.cssText = Borders
    count_Barbara = true;
    Character[Character.length] = "Barbara";
    return
  }
  if (count_Barbara == true){
    document.querySelector(".char .Barbara .box").style.border="";
    count_Barbara = false;
    let index = Character.indexOf("Barbara");
    Character.splice(index,1);
    return
  }
}

function select_Beidou() {
  if (count_Beidou == false){
    document.querySelector(".char .Beidou .box").style.cssText = Borders
    count_Beidou = true;
    Character[Character.length] = "Beidou";
    return
  }
  if (count_Beidou == true){
    document.querySelector(".char .Beidou .box").style.border="";
    count_Beidou = false;
    let index = Character.indexOf("Beidou");
    Character.splice(index,1);
    return
  }
}

function select_Bennett() {
  if (count_Bennett == false){
    document.querySelector(".char .Bennett .box").style.cssText = Borders
    count_Bennett = true;
    Character[Character.length] = "Bennett";
    return
  }
  if (count_Bennett == true){
    document.querySelector(".char .Bennett .box").style.border="";
    count_Bennett = false;
    let index = Character.indexOf("Bennett");
    Character.splice(index,1);
    return
  }
}

function select_Candace() {
  if (count_Candace == false){
    document.querySelector(".char .Candace .box").style.cssText = Borders
    count_Candace = true;
    Character[Character.length] = "Candace";
    return
  }
  if (count_Candace == true){
    document.querySelector(".char .Candace .box").style.border="";
    count_Candace = false;
    let index = Character.indexOf("Candace");
    Character.splice(index,1);
    return
  }
}

function select_Chongyun() {
  if (count_Chongyun == false){
    document.querySelector(".char .Chongyun .box").style.cssText = Borders
    count_Chongyun = true;
    Character[Character.length] = "Chongyun";
    return
  }
  if (count_Chongyun == true){
    document.querySelector(".char .Chongyun .box").style.border="";
    count_Chongyun = false;
    let index = Character.indexOf("Chongyun");
    Character.splice(index,1);
    return
  }
}

function select_Collei() {
  if (count_Collei == false){
    document.querySelector(".char .Collei .box").style.cssText = Borders
    count_Collei = true;
    Character[Character.length] = "Collei";
    return
  }
  if (count_Collei == true){
    document.querySelector(".char .Collei .box").style.border="";
    count_Collei = false;
    let index = Character.indexOf("Collei");
    Character.splice(index,1);
    return
  }
}

function select_Cyno() {
  if (count_Cyno == false){
    document.querySelector(".char .Cyno .box").style.cssText = Borders
    count_Cyno = true;
    Character[Character.length] = "Cyno";
    return
  }
  if (count_Cyno == true){
    document.querySelector(".char .Cyno .box").style.border="";
    count_Cyno = false;
    let index = Character.indexOf("Cyno");
    Character.splice(index,1);
    return
  }
}

function select_Diluc() {
  if (count_Diluc == false){
    document.querySelector(".char .Diluc .box").style.cssText = Borders
    count_Diluc = true;
    Character[Character.length] = "Diluc";
    return
  }
  if (count_Diluc == true){
    document.querySelector(".char .Diluc .box").style.border="";
    count_Diluc = false;
    let index = Character.indexOf("Diluc");
    Character.splice(index,1);
    return
  }
}

function select_Diona() {
  if (count_Diona == false){
    document.querySelector(".char .Diona .box").style.cssText = Borders
    count_Diona = true;
    Character[Character.length] = "Diona";
    return
  }
  if (count_Diona == true){
    document.querySelector(".char .Diona .box").style.border="";
    count_Diona = false;
    let index = Character.indexOf("Diona");
    Character.splice(index,1);
    return
  }
}

function select_Dori() {
  if (count_Dori == false){
    document.querySelector(".char .Dori .box").style.cssText = Borders
    count_Dori = true;
    Character[Character.length] = "Dori";
    return
  }
  if (count_Dori == true){
    document.querySelector(".char .Dori .box").style.border="";
    count_Dori = false;
    let index = Character.indexOf("Dori");
    Character.splice(index,1);
    return
  }
}

function select_Eula() {
  if (count_Eula == false){
    document.querySelector(".char .Eula .box").style.cssText = Borders
    count_Eula = true;
    Character[Character.length] = "Eula";
    return
  }
  if (count_Eula == true){
    document.querySelector(".char .Eula .box").style.border="";
    count_Eula = false;
    let index = Character.indexOf("Eula");
    Character.splice(index,1);
    return
  }
}

function select_Faruzan() {
  if (count_Faruzan == false){
    document.querySelector(".char .Faruzan .box").style.cssText = Borders
    count_Faruzan = true;
    Character[Character.length] = "Faruzan";
    return
  }
  if (count_Faruzan == true){
    document.querySelector(".char .Faruzan .box").style.border="";
    count_Faruzan = false;
    let index = Character.indexOf("Faruzan");
    Character.splice(index,1);
    return
  }
}

function select_Fischl() {
  if (count_Fischl == false){
    document.querySelector(".char .Fischl .box").style.cssText = Borders
    count_Fischl = true;
    Character[Character.length] = "Fischl";
    return
  }
  if (count_Fischl == true){
    document.querySelector(".char .Fischl .box").style.border="";
    count_Fischl = false;
    let index = Character.indexOf("Fischl");
    Character.splice(index,1);
    return
  }
}

function select_Ganyu() {
  if (count_Ganyu == false){
    document.querySelector(".char .Ganyu .box").style.cssText = Borders
    count_Ganyu = true;
    Character[Character.length] = "Ganyu";
    return
  }
  if (count_Ganyu == true){
    document.querySelector(".char .Ganyu .box").style.border="";
    count_Ganyu = false;
    let index = Character.indexOf("Ganyu");
    Character.splice(index,1);
    return
  }
}

function select_Gorou() {
  if (count_Gorou == false){
    document.querySelector(".char .Gorou .box").style.cssText = Borders
    count_Gorou = true;
    Character[Character.length] = "Gorou";
    return
  }
  if (count_Gorou == true){
    document.querySelector(".char .Gorou .box").style.border="";
    count_Gorou = false;
    let index = Character.indexOf("Gorou");
    Character.splice(index,1);
    return
  }
}

function select_Hutao() {
  if (count_Hutao == false){
    document.querySelector(".char .Hutao .box").style.cssText = Borders
    count_Hutao = true;
    Character[Character.length] = "Hutao";
    return
  }
  if (count_Hutao == true){
    document.querySelector(".char .Hutao .box").style.border="";
    count_Hutao = false;
    let index = Character.indexOf("Hutao");
    Character.splice(index,1);
    return
  }
}

function select_Jean() {
  if (count_Jean == false){
    document.querySelector(".char .Jean .box").style.cssText = Borders
    count_Jean = true;
    Character[Character.length] = "Jean";
    return
  }
  if (count_Jean == true){
    document.querySelector(".char .Jean .box").style.border="";
    count_Jean = false;
    let index = Character.indexOf("Jean");
    Character.splice(index,1);
    return
  }
}

function select_Kaeya() {
  if (count_Kaeya == false){
    document.querySelector(".char .Kaeya .box").style.cssText = Borders
    count_Kaeya = true;
    Character[Character.length] = "Kaeya";
    return
  }
  if (count_Kaeya == true){
    document.querySelector(".char .Kaeya .box").style.border="";
    count_Kaeya = false;
    let index = Character.indexOf("Kaeya");
    Character.splice(index,1);
    return
  }
}

function select_Ayaka() {
  if (count_Ayaka == false){
    document.querySelector(".char .Ayaka .box").style.cssText = Borders
    count_Ayaka = true;
    Character[Character.length] = "Ayaka";
    return
  }
  if (count_Ayaka == true){
    document.querySelector(".char .Ayaka .box").style.border="";
    count_Ayaka = false;
    let index = Character.indexOf("Ayaka");
    Character.splice(index,1);
    return
  }
}

function select_Ayato() {
  if (count_Ayato == false){
    document.querySelector(".char .Ayato .box").style.cssText = Borders
    count_Ayato = true;
    Character[Character.length] = "Ayato";
    return
  }
  if (count_Ayato == true){
    document.querySelector(".char .Ayato .box").style.border="";
    count_Ayato = false;
    let index = Character.indexOf("Ayato");
    Character.splice(index,1);
    return
  }
}

function select_Kazuha() {
  if (count_Kazuha == false){
    document.querySelector(".char .Kazuha .box").style.cssText = Borders
    count_Kazuha = true;
    Character[Character.length] = "Kazuha";
    return
  }
  if (count_Kazuha == true){
    document.querySelector(".char .Kazuha .box").style.border="";
    count_Kazuha = false;
    let index = Character.indexOf("Kazuha");
    Character.splice(index,1);
    return
  }
}

function select_Keqing() {
  if (count_Keqing == false){
    document.querySelector(".char .Keqing .box").style.cssText = Borders
    count_Keqing = true;
    Character[Character.length] = "Keqing";
    return
  }
  if (count_Keqing == true){
    document.querySelector(".char .Keqing .box").style.border="";
    count_Keqing = false;
    let index = Character.indexOf("Keqing");
    Character.splice(index,1);
    return
  }
}

function select_Klee() {
  if (count_Klee == false){
    document.querySelector(".char .Klee .box").style.cssText = Borders
    count_Klee = true;
    Character[Character.length] = "Klee";
    return
  }
  if (count_Klee == true){
    document.querySelector(".char .Klee .box").style.border="";
    count_Klee = false;
    let index = Character.indexOf("Klee");
    Character.splice(index,1);
    return
  }
}

function select_Kujou_Sara() {
  if (count_Kujou_Sara == false){
    document.querySelector(".char .Kujou_Sara .box").style.cssText = Borders
    count_Kujou_Sara = true;
    Character[Character.length] = "Kujou_Sara";
    return
  }
  if (count_Kujou_Sara == true){
    document.querySelector(".char .Kujou_Sara .box").style.border="";
    count_Kujou_Sara = false;
    let index = Character.indexOf("Kujou_Sara");
    Character.splice(index,1);
    return
  }
}

function select_Kuki_Shinobu() {
  if (count_Kuki_Shinobu == false){
    document.querySelector(".char .Kuki_Shinobu .box").style.cssText = Borders
    count_Kuki_Shinobu = true;
    Character[Character.length] = "Kuki_Shinobu";
    return
  }
  if (count_Kuki_Shinobu == true){
    document.querySelector(".char .Kuki_Shinobu .box").style.border="";
    count_Kuki_Shinobu = false;
    let index = Character.indexOf("Kuki_Shinobu");
    Character.splice(index,1);
    return
  }
}

function select_Layla() {
  if (count_Layla == false){
    document.querySelector(".char .Layla .box").style.cssText = Borders
    count_Layla = true;
    Character[Character.length] = "Layla";
    return
  }
  if (count_Layla == true){
    document.querySelector(".char .Layla .box").style.border="";
    count_Layla = false;
    let index = Character.indexOf("Layla");
    Character.splice(index,1);
    return
  }
}

function select_Lisa() {
  if (count_Lisa == false){
    document.querySelector(".char .Lisa .box").style.cssText = Borders
    count_Lisa = true;
    Character[Character.length] = "Lisa";
    return
  }
  if (count_Lisa == true){
    document.querySelector(".char .Lisa .box").style.border="";
    count_Lisa = false;
    let index = Character.indexOf("Lisa");
    Character.splice(index,1);
    return
  }
}

function select_Mona() {
  if (count_Mona == false){
    document.querySelector(".char .Mona .box").style.cssText = Borders
    count_Mona = true;
    Character[Character.length] = "Mona";
    return
  }
  if (count_Mona == true){
    document.querySelector(".char .Mona .box").style.border="";
    count_Mona = false;
    let index = Character.indexOf("Mona");
    Character.splice(index,1);
    return
  }
}

function select_Nahida() {
  if (count_Nahida == false){
    document.querySelector(".char .Nahida .box").style.cssText = Borders
    count_Nahida = true;
    Character[Character.length] = "Nahida";
    return
  }
  if (count_Nahida == true){
    document.querySelector(".char .Nahida .box").style.border="";
    count_Nahida = false;
    let index = Character.indexOf("Nahida");
    Character.splice(index,1);
    return
  }
}

function select_Nilou() {
  if (count_Nilou == false){
    document.querySelector(".char .Nilou .box").style.cssText = Borders
    count_Nilou = true;
    Character[Character.length] = "Nilou";
    return
  }
  if (count_Nilou == true){
    document.querySelector(".char .Nilou .box").style.border="";
    count_Nilou = false;
    let index = Character.indexOf("Nilou");
    Character.splice(index,1);
    return
  }
}

function select_Ningguang() {
  if (count_Ningguang == false){
    document.querySelector(".char .Ningguang .box").style.cssText = Borders
    count_Ningguang = true;
    Character[Character.length] = "Ningguang";
    return
  }
  if (count_Ningguang == true){
    document.querySelector(".char .Ningguang .box").style.border="";
    count_Ningguang = false;
    let index = Character.indexOf("Ningguang");
    Character.splice(index,1);
    return
  }
}

function select_Noelle() {
  if (count_Noelle == false){
    document.querySelector(".char .Noelle .box").style.cssText = Borders
    count_Noelle = true;
    Character[Character.length] = "Noelle";
    return
  }
  if (count_Noelle == true){
    document.querySelector(".char .Noelle .box").style.border="";
    count_Noelle = false;
    let index = Character.indexOf("Noelle");
    Character.splice(index,1);
    return
  }
}

function select_Qiqi() {
  if (count_Qiqi == false){
    document.querySelector(".char .Qiqi .box").style.cssText = Borders
    count_Qiqi = true;
    Character[Character.length] = "Qiqi";
    return
  }
  if (count_Qiqi == true){
    document.querySelector(".char .Qiqi .box").style.border="";
    count_Qiqi = false;
    let index = Character.indexOf("Qiqi");
    Character.splice(index,1);
    return
  }
}

function select_Raiden() {
  if (count_Raiden == false){
    document.querySelector(".char .Raiden .box").style.cssText = Borders
    count_Raiden = true;
    Character[Character.length] = "Raiden";
    return
  }
  if (count_Raiden == true){
    document.querySelector(".char .Raiden .box").style.border="";
    count_Raiden = false;
    let index = Character.indexOf("Raiden");
    Character.splice(index,1);
    return
  }
}

function select_Razor() {
  if (count_Razor == false){
    document.querySelector(".char .Razor .box").style.cssText = Borders
    count_Razor = true;
    Character[Character.length] = "Razor";
    return
  }
  if (count_Razor == true){
    document.querySelector(".char .Razor .box").style.border="";
    count_Razor = false;
    let index = Character.indexOf("Razor");
    Character.splice(index,1);
    return
  }
}

function select_Rosaria() {
  if (count_Rosaria == false){
    document.querySelector(".char .Rosaria .box").style.cssText = Borders
    count_Rosaria = true;
    Character[Character.length] = "Rosaria";
    return
  }
  if (count_Rosaria == true){
    document.querySelector(".char .Rosaria .box").style.border="";
    count_Rosaria = false;
    let index = Character.indexOf("Rosaria");
    Character.splice(index,1);
    return
  }
}

function select_Kokomi() {
  if (count_Kokomi == false){
    document.querySelector(".char .Kokomi .box").style.cssText = Borders
    count_Kokomi = true;
    Character[Character.length] = "Kokomi";
    return
  }
  if (count_Kokomi == true){
    document.querySelector(".char .Kokomi .box").style.border="";
    count_Kokomi = false;
    let index = Character.indexOf("Kokomi");
    Character.splice(index,1);
    return
  }
}

function select_Sayu() {
  if (count_Sayu == false){
    document.querySelector(".char .Sayu .box").style.cssText = Borders
    count_Sayu = true;
    Character[Character.length] = "Sayu";
    return
  }
  if (count_Sayu == true){
    document.querySelector(".char .Sayu .box").style.border="";
    count_Sayu = false;
    let index = Character.indexOf("Sayu");
    Character.splice(index,1);
    return
  }
}

function select_Shenhe() {
  if (count_Shenhe == false){
    document.querySelector(".char .Shenhe .box").style.cssText = Borders
    count_Shenhe = true;
    Character[Character.length] = "Shenhe";
    return
  }
  if (count_Shenhe == true){
    document.querySelector(".char .Shenhe .box").style.border="";
    count_Shenhe = false;
    let index = Character.indexOf("Shenhe");
    Character.splice(index,1);
    return
  }
}

function select_Heizou() {
  if (count_Heizou == false){
    document.querySelector(".char .Heizou .box").style.cssText = Borders
    count_Heizou = true;
    Character[Character.length] = "Heizou";
    return
  }
  if (count_Heizou == true){
    document.querySelector(".char .Heizou .box").style.border="";
    count_Heizou = false;
    let index = Character.indexOf("Heizou");
    Character.splice(index,1);
    return
  }
}

function select_Sucrose() {
  if (count_Sucrose == false){
    document.querySelector(".char .Sucrose .box").style.cssText = Borders
    count_Sucrose = true;
    Character[Character.length] = "Sucrose";
    return
  }
  if (count_Sucrose == true){
    document.querySelector(".char .Sucrose .box").style.border="";
    count_Sucrose = false;
    let index = Character.indexOf("Sucrose");
    Character.splice(index,1);
    return
  }
}

function select_Tartaglia() {
  if (count_Tartaglia == false){
    document.querySelector(".char .Tartaglia .box").style.cssText = Borders
    count_Tartaglia = true;
    Character[Character.length] = "Tartaglia";
    return
  }
  if (count_Tartaglia == true){
    document.querySelector(".char .Tartaglia .box").style.border="";
    count_Tartaglia = false;
    let index = Character.indexOf("Tartaglia");
    Character.splice(index,1);
    return
  }
}

function select_Thoma() {
  if (count_Thoma == false){
    document.querySelector(".char .Thoma .box").style.cssText = Borders
    count_Thoma = true;
    Character[Character.length] = "Thoma";
    return
  }
  if (count_Thoma == true){
    document.querySelector(".char .Thoma .box").style.border="";
    count_Thoma = false;
    let index = Character.indexOf("Thoma");
    Character.splice(index,1);
    return
  }
}

function select_Tighnari() {
  if (count_Tighnari == false){
    document.querySelector(".char .Tighnari .box").style.cssText = Borders
    count_Tighnari = true;
    Character[Character.length] = "Tighnari";
    return
  }
  if (count_Tighnari == true){
    document.querySelector(".char .Tighnari .box").style.border="";
    count_Tighnari = false;
    let index = Character.indexOf("Tighnari");
    Character.splice(index,1);
    return
  }
}

function select_Venti() {
  if (count_Venti == false){
    document.querySelector(".char .Venti .box").style.cssText = Borders
    count_Venti = true;
    Character[Character.length] = "Venti";
    return
  }
  if (count_Venti == true){
    document.querySelector(".char .Venti .box").style.border="";
    count_Venti = false;
    let index = Character.indexOf("Venti");
    Character.splice(index,1);
    return
  }
}

function select_Wanderer() {
  if (count_Wanderer == false){
    document.querySelector(".char .Wanderer .box").style.cssText = Borders
    count_Wanderer = true;
    Character[Character.length] = "Wanderer";
    return
  }
  if (count_Wanderer == true){
    document.querySelector(".char .Wanderer .box").style.border="";
    count_Wanderer = false;
    let index = Character.indexOf("Wanderer");
    Character.splice(index,1);
    return
  }
}

function select_Xiangling() {
  if (count_Xiangling == false){
    document.querySelector(".char .Xiangling .box").style.cssText = Borders
    count_Xiangling = true;
    Character[Character.length] = "Xiangling";
    return
  }
  if (count_Xiangling == true){
    document.querySelector(".char .Xiangling .box").style.border="";
    count_Xiangling = false;
    let index = Character.indexOf("Xiangling");
    Character.splice(index,1);
    return
  }
}

function select_Xiao() {
  if (count_Xiao == false){
    document.querySelector(".char .Xiao .box").style.cssText = Borders
    count_Xiao = true;
    Character[Character.length] = "Xiao";
    return
  }
  if (count_Xiao == true){
    document.querySelector(".char .Xiao .box").style.border="";
    count_Xiao = false;
    let index = Character.indexOf("Xiao");
    Character.splice(index,1);
    return
  }
}

function select_Xingqiu() {
  if (count_Xingqiu == false){
    document.querySelector(".char .Xingqiu .box").style.cssText = Borders
    count_Xingqiu = true;
    Character[Character.length] = "Xingqiu";
    return
  }
  if (count_Xingqiu == true){
    document.querySelector(".char .Xingqiu .box").style.border="";
    count_Xingqiu = false;
    let index = Character.indexOf("Xingqiu");
    Character.splice(index,1);
    return
  }
}

function select_Xinyan() {
  if (count_Xinyan == false){
    document.querySelector(".char .Xinyan .box").style.cssText = Borders
    count_Xinyan = true;
    Character[Character.length] = "Xinyan";
    return
  }
  if (count_Xinyan == true){
    document.querySelector(".char .Xinyan .box").style.border="";
    count_Xinyan = false;
    let index = Character.indexOf("Xinyan");
    Character.splice(index,1);
    return
  }
}

function select_Yae_miko() {
  if (count_Yae_miko == false){
    document.querySelector(".char .Yae_miko .box").style.cssText = Borders
    count_Yae_miko = true;
    Character[Character.length] = "Yae_miko";
    return
  }
  if (count_Yae_miko == true){
    document.querySelector(".char .Yae_miko .box").style.border="";
    count_Yae_miko = false;
    let index = Character.indexOf("Yae_miko");
    Character.splice(index,1);
    return
  }
}

function select_Yanfei() {
  if (count_Yanfei == false){
    document.querySelector(".char .Yanfei .box").style.cssText = Borders
    count_Yanfei = true;
    Character[Character.length] = "Yanfei";
    return
  }
  if (count_Yanfei == true){
    document.querySelector(".char .Yanfei .box").style.border="";
    count_Yanfei = false;
    let index = Character.indexOf("Yanfei");
    Character.splice(index,1);
    return
  }
}

function select_Yaoyao() {
  if (count_Yaoyao == false){
    document.querySelector(".char .Yaoyao .box").style.cssText = Borders
    count_Yaoyao = true;
    Character[Character.length] = "Yaoyao";
    return
  }
  if (count_Yaoyao == true){
    document.querySelector(".char .Yaoyao .box").style.border="";
    count_Yaoyao = false;
    let index = Character.indexOf("Yaoyao");
    Character.splice(index,1);
    return
  }
}

function select_Yelan() {
  if (count_Yelan == false){
    document.querySelector(".char .Yelan .box").style.cssText = Borders
    count_Yelan = true;
    Character[Character.length] = "Yelan";
    return
  }
  if (count_Yelan == true){
    document.querySelector(".char .Yelan .box").style.border="";
    count_Yelan = false;
    let index = Character.indexOf("Yelan");
    Character.splice(index,1);
    return
  }
}

function select_Yoimiya() {
  if (count_Yoimiya == false){
    document.querySelector(".char .Yoimiya .box").style.cssText = Borders
    count_Yoimiya = true;
    Character[Character.length] = "Yoimiya";
    return
  }
  if (count_Yoimiya == true){
    document.querySelector(".char .Yoimiya .box").style.border="";
    count_Yoimiya = false;
    let index = Character.indexOf("Yoimiya");
    Character.splice(index,1);
    return
  }
}

function select_Yunjin() {
  if (count_Yunjin == false){
    document.querySelector(".char .Yunjin .box").style.cssText = Borders
    count_Yunjin = true;
    Character[Character.length] = "Yunjin";
    return
  }
  if (count_Yunjin == true){
    document.querySelector(".char .Yunjin .box").style.border="";
    count_Yunjin = false;
    let index = Character.indexOf("Yunjin");
    Character.splice(index,1);
    return
  }
}

function select_Zhongli() {
  if (count_Zhongli == false){
    document.querySelector(".char .Zhongli .box").style.cssText = Borders
    count_Zhongli = true;
    Character[Character.length] = "Zhongli";
    return
  }
  if (count_Zhongli == true){
    document.querySelector(".char .Zhongli .box").style.border="";
    count_Zhongli = false;
    let index = Character.indexOf("Zhongli");
    Character.splice(index,1);
    return
  }
}

//BOSS
function select_Anemo_Hypotasis() {
  if (count_Anemo_Hypotasis == false){
    document.querySelector(".boss.Anemo_Hypotasis.box").style.cssText = Borders
    count_Anemo_Hypotasis = true;
    Boss[Boss.length] = "Anemo_Hypotasis";
    return
  }
  if (count_Anemo_Hypotasis == true){
    document.querySelector(".boss.Anemo_Hypotasis.box").style.border="";
    count_Anemo_Hypotasis = false;
    let index = Boss.indexOf("Anemo_Hypotasis");
    Boss.splice(index,1);
    return
  }
}

function select_Cryo_Hypotasis() {
  if (count_Cryo_Hypotasis == false){
    document.querySelector(".boss.Cryo_Hypotasis.box").style.cssText = Borders
    count_Cryo_Hypotasis = true;
    Boss[Boss.length] = "Cryo_Hypotasis";
    return
  }
  if (count_Cryo_Hypotasis == true){
    document.querySelector(".boss.Cryo_Hypotasis.box").style.border="";
    count_Cryo_Hypotasis = false;
    let index = Boss.indexOf("Cryo_Hypotasis");
    Boss.splice(index,1);
    return
  }
}

function select_Dendro_Hypotasis() {
  if (count_Dendro_Hypotasis == false){
    document.querySelector(".boss.Dendro_Hypotasis.box").style.cssText = Borders
    count_Dendro_Hypotasis = true;
    Boss[Boss.length] = "Dendro_Hypotasis";
    return
  }
  if (count_Dendro_Hypotasis == true){
    document.querySelector(".boss.Dendro_Hypotasis.box").style.border="";
    count_Dendro_Hypotasis = false;
    let index = Boss.indexOf("Dendro_Hypotasis");
    Boss.splice(index,1);
    return
  }
}

function select_Electro_Hypotasis() {
  if (count_Electro_Hypotasis == false){
    document.querySelector(".boss.Electro_Hypotasis.box").style.cssText = Borders
    count_Electro_Hypotasis = true;
    Boss[Boss.length] = "Electro_Hypotasis";
    return
  }
  if (count_Electro_Hypotasis == true){
    document.querySelector(".boss.Electro_Hypotasis.box").style.border="";
    count_Electro_Hypotasis = false;
    let index = Boss.indexOf("Electro_Hypotasis");
    Boss.splice(index,1);
    return
  }
}

function select_Geo_Hypotasis() {
  if (count_Geo_Hypotasis == false){
    document.querySelector(".boss.Geo_Hypotasis.box").style.cssText = Borders
    count_Geo_Hypotasis = true;
    Boss[Boss.length] = "Geo_Hypotasis";
    return
  }
  if (count_Geo_Hypotasis == true){
    document.querySelector(".boss.Geo_Hypotasis.box").style.border="";
    count_Geo_Hypotasis = false;
    let index = Boss.indexOf("Geo_Hypotasis");
    Boss.splice(index,1);
    return
  }
}

function select_Hydro_Hypotasis() {
  if (count_Hydro_Hypotasis == false){
    document.querySelector(".boss.Hydro_Hypotasis.box").style.cssText = Borders
    count_Hydro_Hypotasis = true;
    Boss[Boss.length] = "Hydro_Hypotasis";
    return
  }
  if (count_Hydro_Hypotasis == true){
    document.querySelector(".boss.Hydro_Hypotasis.box").style.border="";
    count_Hydro_Hypotasis = false;
    let index = Boss.indexOf("Hydro_Hypotasis");
    Boss.splice(index,1);
    return
  }
}

function select_Pyro_Hypotasis() {
  if (count_Pyro_Hypotasis == false){
    document.querySelector(".boss.Pyro_Hypotasis.box").style.cssText = Borders
    count_Pyro_Hypotasis = true;
    Boss[Boss.length] = "Pyro_Hypotasis";
    return
  }
  if (count_Pyro_Hypotasis == true){
    document.querySelector(".boss.Pyro_Hypotasis.box").style.border="";
    count_Pyro_Hypotasis = false;
    let index = Boss.indexOf("Pyro_Hypotasis");
    Boss.splice(index,1);
    return
  }
}

function select_Cryo_Regisvine() {
  if (count_Cryo_Regisvine == false){
    document.querySelector(".boss.Cryo_Regisvine.box").style.cssText = Borders
    count_Cryo_Regisvine = true;
    Boss[Boss.length] = "Cryo_Regisvine";
    return
  }
  if (count_Cryo_Regisvine == true){
    document.querySelector(".boss.Cryo_Regisvine.box").style.border="";
    count_Cryo_Regisvine = false;
    let index = Boss.indexOf("Cryo_Regisvine");
    Boss.splice(index,1);
    return
  }
}

function select_Electro_Regisvine() {
  if (count_Electro_Regisvine == false){
    document.querySelector(".boss.Electro_Regisvine.box").style.cssText = Borders
    count_Electro_Regisvine = true;
    Boss[Boss.length] = "Electro_Regisvine";
    return
  }
  if (count_Electro_Regisvine == true){
    document.querySelector(".boss.Electro_Regisvine.box").style.border="";
    count_Electro_Regisvine = false;
    let index = Boss.indexOf("Electro_Regisvine");
    Boss.splice(index,1);
    return
  }
}

function select_Pyro_Regisvine() {
  if (count_Pyro_Regisvine == false){
    document.querySelector(".boss.Pyro_Regisvine.box").style.cssText = Borders
    count_Pyro_Regisvine = true;
    Boss[Boss.length] = "Pyro_Regisvine";
    return
  }
  if (count_Pyro_Regisvine == true){
    document.querySelector(".boss.Pyro_Regisvine.box").style.border="";
    count_Pyro_Regisvine = false;
    let index = Boss.indexOf("Pyro_Regisvine");
    Boss.splice(index,1);
    return
  }
}

function select_Oceanid() {
  if (count_Oceanid == false){
    document.querySelector(".boss.Oceanid.box").style.cssText = Borders
    count_Oceanid = true;
    Boss[Boss.length] = "Oceanid";
    return
  }
  if (count_Oceanid == true){
    document.querySelector(".boss.Oceanid.box").style.border="";
    count_Oceanid = false;
    let index = Boss.indexOf("Oceanid");
    Boss.splice(index,1);
    return
  }
}

function select_Primo_Geovishap() {
  if (count_Primo_Geovishap == false){
    document.querySelector(".boss.Primo_Geovishap.box").style.cssText = Borders
    count_Primo_Geovishap = true;
    Boss[Boss.length] = "Primo_Geovishap";
    return
  }
  if (count_Primo_Geovishap == true){
    document.querySelector(".boss.Primo_Geovishap.box").style.border="";
    count_Primo_Geovishap = false;
    let index = Boss.indexOf("Primo_Geovishap");
    Boss.splice(index,1);
    return
  }
}

function select_Golden_Wolflord() {
  if (count_Golden_Wolflord == false){
    document.querySelector(".boss.Golden_Wolflord.box").style.cssText = Borders
    count_Golden_Wolflord = true;
    Boss[Boss.length] = "Golden_Wolflord";
    return
  }
  if (count_Golden_Wolflord == true){
    document.querySelector(".boss.Golden_Wolflord.box").style.border="";
    count_Golden_Wolflord = false;
    let index = Boss.indexOf("Golden_Wolflord");
    Boss.splice(index,1);
    return
  }
}

function select_Bathysmal_Vishap() {
  if (count_Bathysmal_Vishap == false){
    document.querySelector(".boss.Bathysmal_Vishap.box").style.cssText = Borders
    count_Bathysmal_Vishap = true;
    Boss[Boss.length] = "Bathysmal_Vishap";
    return
  }
  if (count_Bathysmal_Vishap == true){
    document.querySelector(".boss.Bathysmal_Vishap.box").style.border="";
    count_Bathysmal_Vishap = false;
    let index = Boss.indexOf("Bathysmal_Vishap");
    Boss.splice(index,1);
    return
  }
}

function select_Thunder_Manifestation() {
  if (count_Thunder_Manifestation == false){
    document.querySelector(".boss.Thunder_Manifestation.box").style.cssText = Borders
    count_Thunder_Manifestation = true;
    Boss[Boss.length] = "Thunder_Manifestation";
    return
  }
  if (count_Thunder_Manifestation == true){
    document.querySelector(".boss.Thunder_Manifestation.box").style.border="";
    count_Thunder_Manifestation = false;
    let index = Boss.indexOf("Thunder_Manifestation");
    Boss.splice(index,1);
    return
  }
}

function select_Jadeplume() {
  if (count_Jadeplume_Terrorshroom == false){
    document.querySelector(".boss.Jadeplume.box").style.cssText = Borders
    count_Jadeplume_Terrorshroom = true;
    Boss[Boss.length] = "Jadeplume";
    return
  }
  if (count_Jadeplume_Terrorshroom == true){
    document.querySelector(".boss.Jadeplume_Terrorshroom.box").style.border="";
    count_Jadeplume_Terrorshroom = false;
    let index = Boss.indexOf("Jadeplume_Terrorshroom");
    Boss.splice(index,1);
    return
  }
}

function select_Setekh_Wenut() {
  if (count_Setekh_Wenut == false){
    document.querySelector(".boss.Setekh_Wenut.box").style.cssText = Borders
    count_Setekh_Wenut = true;
    Boss[Boss.length] = "Setekh_Wenut";
    return
  }
  if (count_Setekh_Wenut == true){
    document.querySelector(".boss.Setekh_Wenut.box").style.border="";
    count_Setekh_Wenut = false;
    let index = Boss.indexOf("Setekh_Wenut");
    Boss.splice(index,1);
    return
  }
}

function select_Maguu_Kenki() {
  if (count_Maguu_Kenki == false){
    document.querySelector(".boss.Maguu_Kenki.box").style.cssText = Borders
    count_Maguu_Kenki = true;
    Boss[Boss.length] = "Maguu_Kenki";
    return
  }
  if (count_Maguu_Kenki == true){
    document.querySelector(".boss.Maguu_Kenki.box").style.border="";
    count_Maguu_Kenki = false;
    let index = Boss.indexOf("Maguu_Kenki");
    Boss.splice(index,1);
    return
  }
}

function select_Aeonblight_Drake() {
  if (count_Aeonblight_Drake == false){
    document.querySelector(".boss.Aeonblight_Drake.box").style.cssText = Borders
    count_Aeonblight_Drake = true;
    Boss[Boss.length] = "Aeonblight_Drake";
    return
  }
  if (count_Aeonblight_Drake == true){
    document.querySelector(".boss.Aeonblight_Drake.box").style.border="";
    count_Aeonblight_Drake = false;
    let index = Boss.indexOf("Aeonblight_Drake");
    Boss.splice(index,1);
    return
  }
}

function select_Algorithm() {
  if (count_Algorithm == false){
    document.querySelector(".boss.Algorithm.box").style.cssText = Borders
    count_Algorithm = true;
    Boss[Boss.length] = "Algorithm";
    return
  }
  if (count_Algorithm == true){
    document.querySelector(".boss.Algorithm.box").style.border="";
    count_Algorithm = false;
    let index = Boss.indexOf("Algorithm");
    Boss.splice(index,1);
    return
  }
}

function select_Perpetual() {
  if (count_Perpetual_Mechanical_Array == false){
    document.querySelector(".boss.Perpetual.box").style.cssText = Borders
    count_Perpetual_Mechanical_Array = true;
    Boss[Boss.length] = "Perpetual";
    return
  }
  if (count_Perpetual_Mechanical_Array == true){
    document.querySelector(".boss.Perpetual.box").style.border="";
    count_Perpetual_Mechanical_Array = false;
    let index = Boss.indexOf("Perpetual");
    Boss.splice(index,1);
    return
  }
}

function select_Ruin_Serpent() {
  if (count_Ruin_Serpent == false){
    document.querySelector(".boss.Ruin_Serpent.box").style.cssText = Borders
    count_Ruin_Serpent = true;
    Boss[Boss.length] = "Ruin_Serpent";
    return
  }
  if (count_Ruin_Serpent == true){
    document.querySelector(".boss.Ruin_Serpent.box").style.border="";
    count_Ruin_Serpent = false;
    let index = Boss.indexOf("Ruin_Serpent");
    Boss.splice(index,1);
    return
  }
}

function select_Ruin_Serpent() {
  if (count_Ruin_Serpent == false){
    document.querySelector(".boss.Ruin_Serpent.box").style.cssText = Borders
    count_Ruin_Serpent = true;
    Boss[Boss.length] = "Ruin_Serpent";
    return
  }
  if (count_Ruin_Serpent == true){
    document.querySelector(".boss.Ruin_Serpent.box").style.border="";
    count_Ruin_Serpent = false;
    let index = Boss.indexOf("Ruin_Serpent");
    Boss.splice(index,1);
    return
  }
}

function select_Lupus_Boreas() {
  if (count_Lupus_Boreas == false){
    document.querySelector(".boss.Lupus_Boreas.box").style.cssText = Borders
    count_Lupus_Boreas = true;
    Boss[Boss.length] = "Lupus_Boreas";
    return
  }
  if (count_Lupus_Boreas == true){
    document.querySelector(".boss.Lupus_Boreas.box").style.border="";
    count_Lupus_Boreas = false;
    let index = Boss.indexOf("Lupus_Boreas");
    Boss.splice(index,1);
    return
  }
}

function select_Stormterror() {
  if (count_Stormterror == false){
    document.querySelector(".boss.Stormterror.box").style.cssText = Borders
    count_Stormterror = true;
    Boss[Boss.length] = "Stormterror";
    return
  }
  if (count_Stormterror == true){
    document.querySelector(".boss.Stormterror.box").style.border="";
    count_Stormterror = false;
    let index = Boss.indexOf("Stormterror");
    Boss.splice(index,1);
    return
  }
}

function select_Azhdaha() {
  if (count_Azhdaha == false){
    document.querySelector(".boss.Azhdaha.box").style.cssText = Borders
    count_Azhdaha = true;
    Boss[Boss.length] = "Azhdaha";
    return
  }
  if (count_Azhdaha == true){
    document.querySelector(".boss.Azhdaha.box").style.border="";
    count_Azhdaha = false;
    let index = Boss.indexOf("Azhdaha");
    Boss.splice(index,1);
    return
  }
}

function select_Childe() {
  if (count_Childe == false){
    document.querySelector(".boss.Childe.box").style.cssText = Borders
    count_Childe = true;
    Boss[Boss.length] = "Childe";
    return
  }
  if (count_Childe == true){
    document.querySelector(".boss.Childe.box").style.border="";
    count_Childe = false;
    let index = Boss.indexOf("Childe");
    Boss.splice(index,1);
    return
  }
}

function select_La_Signora() {
  if (count_La_Signora == false){
    document.querySelector(".boss.La_Signora.box").style.cssText = Borders
    count_La_Signora = true;
    Boss[Boss.length] = "La_Signora";
    return
  }
  if (count_La_Signora == true){
    document.querySelector(".boss.La_Signora.box").style.border="";
    count_La_Signora = false;
    let index = Boss.indexOf("La_Signora");
    Boss.splice(index,1);
    return
  }
}

function select_Magatsu_Mitake() {
  if (count_Magatsu_Mitake == false){
    document.querySelector(".boss.Magatsu_Mitake.box").style.cssText = Borders
    count_Magatsu_Mitake = true;
    Boss[Boss.length] = "Magatsu_Mitake";
    return
  }
  if (count_Magatsu_Mitake == true){
    document.querySelector(".boss.Magatsu_Mitake.box").style.border="";
    count_Magatsu_Mitake = false;
    let index = Boss.indexOf("Magatsu_Mitake");
    Boss.splice(index,1);
    return
  }
}

function select_Shouki_no_Kami() {
  if (count_Shouki_no_Kami == false){
    document.querySelector(".boss.Shouki_no_Kami.box").style.cssText = Borders
    count_Shouki_no_Kami = true;
    Boss[Boss.length] = "Shouki_no_Kami";
    return
  }
  if (count_Shouki_no_Kami == true){
    document.querySelector(".boss.Shouki_no_Kami.box").style.border="";
    count_Shouki_no_Kami = false;
    let index = Boss.indexOf("Shouki_no_Kami");
    Boss.splice(index,1);
    return
  }
}



function start_random(){

  if (Character.length < 5 ){
    alert("You'd better choose more than 4 characters");
    return
  }
  if (Boss.length < 2 ){
    alert("You'd better choose more than 1 Boss");
    return
  }


  for(var i = 0; i<1; i++){
    var ran1 = Character.splice(Math.floor(Math.random()*Character.length), 1);
  }
  for(var i = 0; i<1; i++){
    var ran2 = Character.splice(Math.floor(Math.random()*Character.length), 1);
  }
  for(var i = 0; i<1; i++){
    var ran3 = Character.splice(Math.floor(Math.random()*Character.length), 1);
  }
  for(var i = 0; i<1; i++){
    var ran4 = Character.splice(Math.floor(Math.random()*Character.length), 1);
  }
  for(var i = 0; i<1; i++){
    var ranboss = Boss.splice(Math.floor(Math.random()*Boss.length), 1);
  }
  
  document.querySelector(".start_random").style.cssText = "display: none;"
  document.querySelector(".section_random").style.cssText = "display: ;"
  document.querySelector(".return").style.cssText = "display: ;"
  document.querySelector(".random_again").style.cssText = "display: ;"
  document.querySelector(".random").style.cssText = "pointer-events: none;"



  document.getElementById("charf").src = `../image/Character/all/${ran1[0]}.png`;
  document.getElementById("chars").src = `../image/Character/all/${ran2[0]}.png`;
  document.getElementById("charth").src = `../image/Character/all/${ran3[0]}.png`;
  document.getElementById("charfth").src = `../image/Character/all/${ran4[0]}.png`;
  document.getElementById("bossf").src = `../image/Boss/${ranboss[0]}.png`;

  
  if (ran1[0] == "Aether"){
    document.getElementById("elementf").src = "";
    document.querySelector(".random .bg.f").style.cssText = "background-image: url(../image/Character/bg/Background_Item_5_Star.png);";
    document.querySelector("img.element.f").style.cssText = "opacity: 0;";
  }
  if (ran2[0] == "Aether"){
    document.getElementById("elements").src = "";
    document.querySelector(".random .bg.s").style.cssText = "background-image: url(../image/Character/bg/Background_Item_5_Star.png);";
    document.querySelector("img.element.s").style.cssText = "opacity: 0;";
  }
  if (ran3[0] == "Aether"){
    document.getElementById("elementth").src = "";
    document.querySelector(".random .bg.th").style.cssText = "background-image: url(../image/Character/bg/Background_Item_5_Star.png);";
    document.querySelector("img.element.th").style.cssText = "opacity: 0;";
  }
  if (ran4[0] == "Aether"){
    document.getElementById("elementfth").src = "";
    document.querySelector(".random .bg.fth").style.cssText = "background-image: url(../image/Character/bg/Background_Item_5_Star.png);";
    document.querySelector("img.element.fth").style.cssText = "opacity: 0;";
  }

  //document.querySelector("img.element.f").style.cssText = "opacity: 1;";
  //document.querySelector("img.element.s").style.cssText = "opacity: 1;";
  //document.querySelector("img.element.th").style.cssText = "opacity: 1;";
  //document.querySelector("img.element.fth").style.cssText = "opacity: 1;";


  //First Random Character
  for(var i = 1 ; i < 8; i++){

    if (i == 1) {
      if (ran1[0] == "Layla" || ran1[0] == "Shenhe" || ran1[0] == "Aloy" || ran1[0] == "Ayaka" || ran1[0] == "Eula" || 
        ran1[0] == "Rosaria" || ran1[0] == "Ganyu" || ran1[0] == "Diona" || ran1[0] == "Kaeya" || ran1[0] == "Qiqi" || ran1[0] == "Chongyun"){
          document.querySelector("img.element.f").style.cssText = "opacity: 1;";
          document.getElementById("elementf").src = "../image/Element/Cryo.png";
      }
    }
    if (i == 2) {
      if (ran1[0] == "Faruzan" || ran1[0] == "Jean" || ran1[0] == "Kazuha" || ran1[0] == "Sayu" || ran1[0] == "Heizou" ||
        ran1[0] == "Sucrose" || ran1[0] == "Venti" || ran1[0] == "Wanderer" || ran1[0] == "Xiao"){
          document.querySelector("img.element.f").style.cssText = "opacity: 1;";  
          document.getElementById("elementf").src = "../image/Element/Anemo.png";
      }
    }
    if (i == 3) {
      if (ran1[0] == "Beidou" || ran1[0] == "Dori" || ran1[0] == "Keqing" || ran1[0] == "Kuki_Shinobu" || ran1[0] == "Raiden" ||
        ran1[0] == "Cyno" || ran1[0] == "Fischl" || ran1[0] == "Kujou_Sara" || ran1[0] == "Lisa" || ran1[0] == "Razor" || ran1[0] == "Yae_miko"){
          document.querySelector("img.element.f").style.cssText = "opacity: 1;";
          document.getElementById("elementf").src = "../image/Element/Electro.png";
      }
    }
    if (i == 4) {
      if (ran1[0] == "Barbara" || ran1[0] == "Ayato" || ran1[0] == "Nilou" || ran1[0] == "Tartaglia" || ran1[0] == "Yelan" ||
        ran1[0] == "Candace" || ran1[0] == "Mona" || ran1[0] == "Kokomi" || ran1[0] == "Xingqiu"){
          document.querySelector("img.element.f").style.cssText = "opacity: 1;";
          document.getElementById("elementf").src = "../image/Element/Hydro.png";
      }
    }
    if (i == 5) {
      if (ran1[0] == "Amber" || ran1[0] == "Diluc" || ran1[0] == "Klee" || ran1[0] == "Xiangling" || ran1[0] == "Yanfei" ||
        ran1[0] == "Bennett" || ran1[0] == "Hutao" || ran1[0] == "Thoma" || ran1[0] == "Xinyan" || ran1[0] == "Yoimiya"){
          document.querySelector("img.element.f").style.cssText = "opacity: 1;";
          document.getElementById("elementf").src = "../image/Element/Pyro.png";
      }
    }
    if (i == 6) {
      if (ran1[0] == "Yunjin" || ran1[0] == "Arataki_Itto" || ran1[0] == "Noelle" || ran1[0] == "Albedo" ||
        ran1[0] == "Gorou" || ran1[0] == "Zhongli" || ran1[0] == "Ningguang"){
          document.querySelector("img.element.f").style.cssText = "opacity: 1;";
          document.getElementById("elementf").src = "../image/Element/Geo.png";
      }
    }
    if (i == 7) {
      if (ran1[0] == "Yaoyao" || ran1[0] == "Nahida" || ran1[0] == "Tighnari" || 
        ran1[0] == "Alhaitham" || ran1[0] == "Collei"){
          document.querySelector("img.element.f").style.cssText = "opacity: 1;";
          document.getElementById("elementf").src = "../image/Element/Dendro.png";
      }
    }
  }


  //Second Random Character
  for(var i = 1 ; i < 8; i++){
    
    if (i == 1) {
      if (ran2[0] == "Layla" || ran2[0] == "Shenhe" || ran2[0] == "Aloy" || ran2[0] == "Ayaka" || ran2[0] == "Eula" || 
      ran2[0] == "Rosaria" || ran2[0] == "Ganyu" || ran2[0] == "Diona" || ran2[0] == "Kaeya" || ran2[0] == "Qiqi" || ran2[0] == "Chongyun"){
        document.querySelector("img.element.s").style.cssText = "opacity: 1;";
        document.getElementById("elements").src = "../image/Element/Cryo.png";
      }
    }
    if (i == 2) {
      if (ran2[0] == "Faruzan" || ran2[0] == "Jean" || ran2[0] == "Kazuha" || ran2[0] == "Sayu" || ran2[0] == "Heizou" ||
      ran2[0] == "Sucrose" || ran2[0] == "Venti" || ran2[0] == "Wanderer" || ran2[0] == "Xiao"){
        document.querySelector("img.element.s").style.cssText = "opacity: 1;";
        document.getElementById("elements").src = "../image/Element/Anemo.png";
      }
    }
    if (i == 3) {
      if (ran2[0] == "Beidou" || ran2[0] == "Dori" || ran2[0] == "Keqing" || ran2[0] == "Kuki_Shinobu" || ran2[0] == "Raiden" ||
      ran2[0] == "Cyno" || ran2[0] == "Fischl" || ran2[0] == "Kujou_Sara" || ran2[0] == "Lisa" || ran2[0] == "Razor" || ran2[0] == "Yae_miko"){
        document.querySelector("img.element.s").style.cssText = "opacity: 1;";
        document.getElementById("elements").src = "../image/Element/Electro.png";
      }
    }
    if (i == 4) {
      if (ran2[0] == "Barbara" || ran2[0] == "Ayato" || ran2[0] == "Nilou" || ran2[0] == "Tartaglia" || ran2[0] == "Yelan" ||
      ran2[0] == "Candace" || ran2[0] == "Mona" || ran2[0] == "Kokomi" || ran2[0] == "Xingqiu"){
        document.querySelector("img.element.s").style.cssText = "opacity: 1;";
        document.getElementById("elements").src = "../image/Element/Hydro.png";
      }
    }
    if (i == 5) {
      if (ran2[0] == "Amber" || ran2[0] == "Diluc" || ran2[0] == "Klee" || ran2[0] == "Xiangling" || ran2[0] == "Yanfei" ||
      ran2[0] == "Bennett" || ran2[0] == "Hutao" || ran2[0] == "Thoma" || ran2[0] == "Xinyan" || ran2[0] == "Yoimiya"){
        document.querySelector("img.element.s").style.cssText = "opacity: 1;";
        document.getElementById("elements").src = "../image/Element/Pyro.png";
      }
    }
    if (i == 6) {
      if (ran2[0] == "Yunjin" || ran2[0] == "Arataki_Itto" || ran2[0] == "Noelle" || ran2[0] == "Albedo" ||
      ran2[0] == "Gorou" || ran2[0] == "Zhongli" || ran2[0] == "Ningguang"){
        document.querySelector("img.element.s").style.cssText = "opacity: 1;";
        document.getElementById("elements").src = "../image/Element/Geo.png";
      }
    }
    if (i == 7) {
      if (ran2[0] == "Yaoyao" || ran2[0] == "Nahida" || ran2[0] == "Tighnari" || 
      ran2[0] == "Alhaitham" || ran2[0] == "Collei"){
        document.querySelector("img.element.s").style.cssText = "opacity: 1;";
        document.getElementById("elements").src = "../image/Element/Dendro.png";
      }
    }
  }


  //Third Random Character
  for(var i = 1 ; i < 8; i++){
      
    if (i == 1) {
      if (ran3[0] == "Layla" || ran3[0] == "Shenhe" || ran3[0] == "Aloy" || ran3[0] == "Ayaka" || ran3[0] == "Eula" || 
      ran3[0] == "Rosaria" || ran3[0] == "Ganyu" || ran3[0] == "Diona" || ran3[0] == "Kaeya" || ran3[0] == "Qiqi" || ran3[0] == "Chongyun"){
        document.querySelector("img.element.th").style.cssText = "opacity: 1;";
        document.getElementById("elementth").src = "../image/Element/Cryo.png";
      }
    }
    if (i == 2) {
      if (ran3[0] == "Faruzan" || ran3[0] == "Jean" || ran3[0] == "Kazuha" || ran3[0] == "Sayu" || ran3[0] == "Heizou" ||
      ran3[0] == "Sucrose" || ran3[0] == "Venti" || ran3[0] == "Wanderer" || ran3[0] == "Xiao"){
        document.querySelector("img.element.th").style.cssText = "opacity: 1;";
        document.getElementById("elementth").src = "../image/Element/Anemo.png";
      }
    }
    if (i == 3) {
      if (ran3[0] == "Beidou" || ran3[0] == "Dori" || ran3[0] == "Keqing" || ran3[0] == "Kuki_Shinobu" || ran3[0] == "Raiden" ||
      ran3[0] == "Cyno" || ran3[0] == "Fischl" || ran3[0] == "Kujou_Sara" || ran3[0] == "Lisa" || ran3[0] == "Razor" || ran3[0] == "Yae_miko"){
        document.querySelector("img.element.th").style.cssText = "opacity: 1;";
        document.getElementById("elementth").src = "../image/Element/Electro.png";
      }
    }
    if (i == 4) {
      if (ran3[0] == "Barbara" || ran3[0] == "Ayato" || ran3[0] == "Nilou" || ran3[0] == "Tartaglia" || ran3[0] == "Yelan" ||
      ran3[0] == "Candace" || ran3[0] == "Mona" || ran3[0] == "Kokomi" || ran3[0] == "Xingqiu"){
        document.querySelector("img.element.th").style.cssText = "opacity: 1;";
        document.getElementById("elementth").src = "../image/Element/Hydro.png";
      }
    }
    if (i == 5) {
      if (ran3[0] == "Amber" || ran3[0] == "Diluc" || ran3[0] == "Klee" || ran3[0] == "Xiangling" || ran3[0] == "Yanfei" ||
      ran3[0] == "Bennett" || ran3[0] == "Hutao" || ran3[0] == "Thoma" || ran3[0] == "Xinyan" || ran3[0] == "Yoimiya"){
        document.querySelector("img.element.th").style.cssText = "opacity: 1;";
        document.getElementById("elementth").src = "../image/Element/Pyro.png";
      }
    }
    if (i == 6) {
      if (ran3[0] == "Yunjin" || ran3[0] == "Arataki_Itto" || ran3[0] == "Noelle" || ran3[0] == "Albedo" ||
      ran3[0] == "Gorou" || ran3[0] == "Zhongli" || ran3[0] == "Ningguang"){
        document.querySelector("img.element.th").style.cssText = "opacity: 1;";
        document.getElementById("elementth").src = "../image/Element/Geo.png";
      }
    }

    if (i == 7) {
      if (ran3[0] == "Yaoyao" || ran3[0] == "Nahida" || ran3[0] == "Tighnari" || 
      ran3[0] == "Alhaitham" || ran3[0] == "Collei"){
        document.querySelector("img.element.th").style.cssText = "opacity: 1;";
        document.getElementById("elementth").src = "../image/Element/Dendro.png";
      }
    }
  }

  //Fourth Random Character
  for(var i = 1 ; i < 8; i++){
      
    if (i == 1) {
      if (ran4[0] == "Layla" || ran4[0] == "Shenhe" || ran4[0] == "Aloy" || ran4[0] == "Ayaka" || ran4[0] == "Eula" || 
      ran4[0] == "Rosaria" || ran4[0] == "Ganyu" || ran4[0] == "Diona" || ran4[0] == "Kaeya" || ran4[0] == "Qiqi" || ran4[0] == "Chongyun"){
        document.querySelector("img.element.fth").style.cssText = "opacity: 1;";
        document.getElementById("elementfth").src = "../image/Element/Cryo.png";
      }
    }
    if (i == 2) {
      if (ran4[0] == "Faruzan" || ran4[0] == "Jean" || ran4[0] == "Kazuha" || ran4[0] == "Sayu" || ran4[0] == "Heizou" ||
      ran4[0] == "Sucrose" || ran4[0] == "Venti" || ran4[0] == "Wanderer" || ran4[0] == "Xiao"){
        document.querySelector("img.element.fth").style.cssText = "opacity: 1;";
        document.getElementById("elementfth").src = "../image/Element/Anemo.png";
      }
    }
    if (i == 3) {
      if (ran4[0] == "Beidou" || ran4[0] == "Dori" || ran4[0] == "Keqing" || ran4[0] == "Kuki_Shinobu" || ran4[0] == "Raiden" ||
      ran4[0] == "Cyno" || ran4[0] == "Fischl" || ran4[0] == "Kujou_Sara" || ran4[0] == "Lisa" || ran4[0] == "Razor" || ran4[0] == "Yae_miko"){
        document.querySelector("img.element.fth").style.cssText = "opacity: 1;";
        document.getElementById("elementfth").src = "../image/Element/Electro.png";
      }
    }
    if (i == 4) {
      if (ran4[0] == "Barbara" || ran4[0] == "Ayato" || ran4[0] == "Nilou" || ran4[0] == "Tartaglia" || ran4[0] == "Yelan" ||
      ran4[0] == "Candace" || ran4[0] == "Mona" || ran4[0] == "Kokomi" || ran4[0] == "Xingqiu"){
        document.querySelector("img.element.fth").style.cssText = "opacity: 1;";
        document.getElementById("elementfth").src = "../image/Element/Hydro.png";
      }
    }
    if (i == 5) {
      if (ran4[0] == "Amber" || ran4[0] == "Diluc" || ran4[0] == "Klee" || ran4[0] == "Xiangling" || ran4[0] == "Yanfei" ||
      ran4[0] == "Bennett" || ran4[0] == "Hutao" || ran4[0] == "Thoma" || ran4[0] == "Xinyan" || ran4[0] == "Yoimiya"){
        document.querySelector("img.element.fth").style.cssText = "opacity: 1;";
        document.getElementById("elementfth").src = "../image/Element/Pyro.png";
      }
    }
    if (i == 6) {
      if (ran4[0] == "Yunjin" || ran4[0] == "Arataki_Itto" || ran4[0] == "Noelle" || ran4[0] == "Albedo" ||
      ran4[0] == "Gorou" || ran4[0] == "Zhongli" || ran4[0] == "Ningguang"){
        document.querySelector("img.element.fth").style.cssText = "opacity: 1;";
        document.getElementById("elementfth").src = "../image/Element/Geo.png";
      }
    }

    if (i == 7) {
      if (ran4[0] == "Yaoyao" || ran4[0] == "Nahida" || ran4[0] == "Tighnari" || 
      ran4[0] == "Alhaitham" || ran4[0] == "Collei"){
        document.querySelector("img.element.fth").style.cssText = "opacity: 1;";
        document.getElementById("elementfth").src = "../image/Element/Dendro.png";
      }
    }
  }

  // Change BG character 
  for(var i = 1 ; i < 3; i++){

    if (i == 1){

      if(ran1[0] == "Yaoyao" || ran1[0] == "Dori" || ran1[0] == "Heizou" || ran1[0] == "Sayu" || ran1[0] == "Diona" || ran1[0] == "Ningguang" || ran1[0] == "Noelle" || 
      ran1[0] == "Faruzan" || ran1[0] == "Collei" || ran1[0] == "Thoma" || ran1[0] == "Yanfei" || ran1[0] == "Chongyun" || ran1[0] == "Beidou" || ran1[0] == "Bennett" || ran1[0] == "Kaeya" || 
      ran1[0] == "Layla" || ran1[0] == "Yunjin" || ran1[0] == "Gorou" || ran1[0] == "Rosaria" || ran1[0] == "Xingqiu" || ran1[0] == "Sucrose" || ran1[0] == "Razor" || ran1[0] == "Lisa" || 
      ran1[0] == "Candace" || ran1[0] == "Kuki_Shinobu" || ran1[0] == "Kujou_Sara" || ran1[0] == "Xinyan" || ran1[0] == "Xiangling" || ran1[0] == "Fischl" || ran1[0] == "Barbara" || ran1[0] == "Amber"){
        document.querySelector(".random .bg.f").style.cssText = "background-image: url(../image/Character/bg/Background_Item_4_Star.png);";
      }
      if(ran2[0] == "Yaoyao" || ran2[0] == "Dori" || ran2[0] == "Heizou" || ran2[0] == "Sayu" || ran2[0] == "Diona" || ran2[0] == "Ningguang" || ran2[0] == "Noelle" || 
      ran2[0] == "Faruzan" || ran2[0] == "Collei" || ran2[0] == "Thoma" || ran2[0] == "Yanfei" || ran2[0] == "Chongyun" || ran2[0] == "Beidou" || ran2[0] == "Bennett" || ran2[0] == "Kaeya" || 
      ran2[0] == "Layla" || ran2[0] == "Yunjin" || ran2[0] == "Gorou" || ran2[0] == "Rosaria" || ran2[0] == "Xingqiu" || ran2[0] == "Sucrose" || ran2[0] == "Razor" || ran2[0] == "Lisa" || 
      ran2[0] == "Candace" || ran2[0] == "Kuki_Shinobu" || ran2[0] == "Kujou_Sara" || ran2[0] == "Xinyan" || ran2[0] == "Xiangling" || ran2[0] == "Fischl" || ran2[0] == "Barbara" || ran2[0] == "Amber"){
        document.querySelector(".random .bg.s").style.cssText = "background-image: url(../image/Character/bg/Background_Item_4_Star.png);";
      }
      if(ran3[0] == "Yaoyao" || ran3[0] == "Dori" || ran3[0] == "Heizou" || ran3[0] == "Sayu" || ran3[0] == "Diona" || ran3[0] == "Ningguang" || ran3[0] == "Noelle" || 
      ran3[0] == "Faruzan" || ran3[0] == "Collei" || ran3[0] == "Thoma" || ran3[0] == "Yanfei" || ran3[0] == "Chongyun" || ran3[0] == "Beidou" || ran3[0] == "Bennett" || ran3[0] == "Kaeya" || 
      ran3[0] == "Layla" || ran3[0] == "Yunjin" || ran3[0] == "Gorou" || ran3[0] == "Rosaria" || ran3[0] == "Xingqiu" || ran3[0] == "Sucrose" || ran3[0] == "Razor" || ran3[0] == "Lisa" || 
      ran3[0] == "Candace" || ran3[0] == "Kuki_Shinobu" || ran3[0] == "Kujou_Sara" || ran3[0] == "Xinyan" || ran3[0] == "Xiangling" || ran3[0] == "Fischl" || ran3[0] == "Barbara" || ran3[0] == "Amber"){
        document.querySelector(".random .bg.th").style.cssText = "background-image: url(../image/Character/bg/Background_Item_4_Star.png);";
      }
      if(ran4[0] == "Yaoyao" || ran4[0] == "Dori" || ran4[0] == "Heizou" || ran4[0] == "Sayu" || ran4[0] == "Diona" || ran4[0] == "Ningguang" || ran4[0] == "Noelle" || 
      ran4[0] == "Faruzan" || ran4[0] == "Collei" || ran4[0] == "Thoma" || ran4[0] == "Yanfei" || ran4[0] == "Chongyun" || ran4[0] == "Beidou" || ran4[0] == "Bennett" || ran4[0] == "Kaeya" || 
      ran4[0] == "Layla" || ran4[0] == "Yunjin" || ran4[0] == "Gorou" || ran4[0] == "Rosaria" || ran4[0] == "Xingqiu" || ran4[0] == "Sucrose" || ran4[0] == "Razor" || ran4[0] == "Lisa" || 
      ran4[0] == "Candace" || ran4[0] == "Kuki_Shinobu" || ran4[0] == "Kujou_Sara" || ran4[0] == "Xinyan" || ran4[0] == "Xiangling" || ran4[0] == "Fischl" || ran4[0] == "Barbara" || ran4[0] == "Amber"){
        document.querySelector(".random .bg.fth").style.cssText = "background-image: url(../image/Character/bg/Background_Item_4_Star.png);";
      }
    }

    if (i == 2){

      if (ran1[0] == "Albedo" || ran1[0] == "Ayaka" || ran1[0] == "Diluc" || ran1[0] == "Hutao" || ran1[0] == "Kazuha" || ran1[0] == "Kokomi" || ran1[0] == "Nilou" || ran1[0] == "Shenhe" || ran1[0] == "Venti" || 
      ran1[0] == "Alhaitham" || ran1[0] == "Ayato" || ran1[0] == "Eula" || ran1[0] == "Arataki_Itto" || ran1[0] == "Keqing" || ran1[0] == "Mona" || ran1[0] == "Qiqi" || ran1[0] == "Tartaglia" || ran1[0] == "Wanderer" || ran1[0] == "Yelan" || ran1[0] == "Yoimiya" || 
      ran1[0] == "Aloy" || ran1[0] == "Cyno" || ran1[0] == "Ganyu" || ran1[0] == "Jean" || ran1[0] == "Klee" || ran1[0] == "Nahida" || ran1[0] == "Raiden" || ran1[0] == "Tighnari" || ran1[0] == "Xiao" || ran1[0] == "Yae_miko" || ran1[0] == "Zhongli"){
        document.querySelector(".random .bg.f").style.cssText = "background-image: url(../image/Character/bg/Background_Item_5_Star.png);";
      }
      if (ran2[0] == "Albedo" || ran2[0] == "Ayaka" || ran2[0] == "Diluc" || ran2[0] == "Hutao" || ran2[0] == "Kazuha" || ran2[0] == "Kokomi" || ran2[0] == "Nilou" || ran2[0] == "Shenhe" || ran2[0] == "Venti" || 
      ran2[0] == "Alhaitham" || ran2[0] == "Ayato" || ran2[0] == "Eula" || ran2[0] == "Arataki_Itto" || ran2[0] == "Keqing" || ran2[0] == "Mona" || ran2[0] == "Qiqi" || ran2[0] == "Tartaglia" || ran2[0] == "Wanderer" || ran2[0] == "Yelan" || ran2[0] == "Yoimiya" || 
      ran2[0] == "Aloy" || ran2[0] == "Cyno" || ran2[0] == "Ganyu" || ran2[0] == "Jean" || ran2[0] == "Klee" || ran2[0] == "Nahida" || ran2[0] == "Raiden" || ran2[0] == "Tighnari" || ran2[0] == "Xiao" || ran2[0] == "Yae_miko" || ran2[0] == "Zhongli"){
        document.querySelector(".random .bg.s").style.cssText = "background-image: url(../image/Character/bg/Background_Item_5_Star.png);";
      }
      if (ran3[0] == "Albedo" || ran3[0] == "Ayaka" || ran3[0] == "Diluc" || ran3[0] == "Hutao" || ran3[0] == "Kazuha" || ran3[0] == "Kokomi" || ran3[0] == "Nilou" || ran3[0] == "Shenhe" || ran3[0] == "Venti" || 
      ran3[0] == "Alhaitham" || ran3[0] == "Ayato" || ran3[0] == "Eula" || ran3[0] == "Arataki_Itto" || ran3[0] == "Keqing" || ran3[0] == "Mona" || ran3[0] == "Qiqi" || ran3[0] == "Tartaglia" || ran3[0] == "Wanderer" || ran3[0] == "Yelan" || ran3[0] == "Yoimiya" || 
      ran3[0] == "Aloy" || ran3[0] == "Cyno" || ran3[0] == "Ganyu" || ran3[0] == "Jean" || ran3[0] == "Klee" || ran3[0] == "Nahida" || ran3[0] == "Raiden" || ran3[0] == "Tighnari" || ran3[0] == "Xiao" || ran3[0] == "Yae_miko" || ran3[0] == "Zhongli"){
        document.querySelector(".random .bg.th").style.cssText = "background-image: url(../image/Character/bg/Background_Item_5_Star.png);";
      }
      if (ran4[0] == "Albedo" || ran4[0] == "Ayaka" || ran4[0] == "Diluc" || ran4[0] == "Hutao" || ran4[0] == "Kazuha" || ran4[0] == "Kokomi" || ran4[0] == "Nilou" || ran4[0] == "Shenhe" || ran4[0] == "Venti" || 
      ran4[0] == "Alhaitham" || ran4[0] == "Ayato" || ran4[0] == "Eula" || ran4[0] == "Arataki_Itto" || ran4[0] == "Keqing" || ran4[0] == "Mona" || ran4[0] == "Qiqi" || ran4[0] == "Tartaglia" || ran4[0] == "Wanderer" || ran4[0] == "Yelan" || ran4[0] == "Yoimiya" || 
      ran4[0] == "Aloy" || ran4[0] == "Cyno" || ran4[0] == "Ganyu" || ran4[0] == "Jean" || ran4[0] == "Klee" || ran4[0] == "Nahida" || ran4[0] == "Raiden" || ran4[0] == "Tighnari" || ran4[0] == "Xiao" || ran4[0] == "Yae_miko" || ran4[0] == "Zhongli"){
        document.querySelector(".random .bg.fth").style.cssText = "background-image: url(../image/Character/bg/Background_Item_5_Star.png);";
      }
    }
  }

  document.getElementById("name_text_first").innerHTML = `${ran1[0]}`;
  document.getElementById("name_text_second").innerHTML = `${ran2[0]}`;
  document.getElementById("name_text_thrid").innerHTML = `${ran3[0]}`;
  document.getElementById("name_text_fourth").innerHTML = `${ran4[0]}`;
  document.getElementById("name_text_boss").innerHTML = `${ranboss[0]}`;

  Character[Character.length] = ran1[0];
  Character[Character.length] = ran2[0];
  Character[Character.length] = ran3[0];
  Character[Character.length] = ran4[0];
  Boss[Boss.length] = ranboss[0];

}

function selectcharall(){
  count_Aether = true;
  count_Albedo = true;
  count_Alhatham = true;
  count_Aloy = true;
  count_Amber = true;
  count_Arataki_Itto = true;
  count_Barbara = true;
  count_Beidou = true;
  count_Bennett = true;
  count_Candace = true;
  count_Chongyun = true;
  count_Collei = true;
  count_Cyno = true;
  count_Diluc = true;
  count_Diona = true;
  count_Dori = true;
  count_Eula = true;
  count_Faruzan = true;
  count_Fischl = true;
  count_Ganyu = true;
  count_Gorou = true;
  count_Hutao = true;
  count_Jean = true;
  count_Kaeya = true;
  count_Ayaka = true;
  count_Ayato = true;
  count_Kazuha = true;
  count_Keqing = true;
  count_Klee = true;
  count_Kujou_Sara = true;
  count_Kuki_Shinobu = true;
  count_Layla = true;
  count_Lisa = true;
  count_Mona = true;
  count_Nahida = true;
  ount_Nilou = true;
  count_Ningguang = true;
  count_Noelle = true;
  count_Qiqi = true;
  count_Raiden = true;
  count_Razor = true;
  count_Rosaria = true;
  count_Kokomi = true;
  count_Sayu = true;
  count_Shenhe = true;
  count_Heizou = true;
  count_Sucrose = true;
  count_Tartaglia = true;
  count_Thoma = true;
  count_Tighnari = true;
  count_Venti = true;
  count_Wanderer = true;
  count_Xiangling = true;
  count_Xiao = true;
  count_Xingqiu = true;
  count_Xinyan = true;
  count_Yae_miko = true;
  count_Yanfei = true;
  count_Yaoyao = true;
  count_Yelan = true;
  count_Yoimiya = true;
  count_Yunjin = true;
  count_Zhongli = true;

  document.querySelector(".char .Aether .box").style.cssText = Borders
  document.querySelector(".char .Albedo .box").style.cssText = Borders
  document.querySelector(".char .Alhaitham .box").style.cssText = Borders
  document.querySelector(".char .Aloy .box").style.cssText = Borders
  document.querySelector(".char .Amber .box").style.cssText = Borders
  document.querySelector(".char .Arataki_Itto .box").style.cssText = Borders
  document.querySelector(".char .Candace .box").style.cssText = Borders
  document.querySelector(".char .Beidou .box").style.cssText = Borders
  document.querySelector(".char .Bennett .box").style.cssText = Borders
  document.querySelector(".char .Barbara .box").style.cssText = Borders
  document.querySelector(".char .Candace .box").style.cssText = Borders 
  document.querySelector(".char .Chongyun .box").style.cssText = Borders
  document.querySelector(".char .Collei .box").style.cssText = Borders
  document.querySelector(".char .Cyno .box").style.cssText = Borders
  document.querySelector(".char .Diluc .box").style.cssText = Borders
  document.querySelector(".char .Diona .box").style.cssText = Borders
  document.querySelector(".char .Dori .box").style.cssText = Borders
  document.querySelector(".char .Eula .box").style.cssText = Borders
  document.querySelector(".char .Faruzan .box").style.cssText = Borders
  document.querySelector(".char .Fischl .box").style.cssText = Borders
  document.querySelector(".char .Ganyu .box").style.cssText = Borders 
  document.querySelector(".char .Gorou .box").style.cssText = Borders
  document.querySelector(".char .Hutao .box").style.cssText = Borders
  document.querySelector(".char .Jean .box").style.cssText = Borders
  document.querySelector(".char .Kaeya .box").style.cssText = Borders
  document.querySelector(".char .Ayaka .box").style.cssText = Borders
  document.querySelector(".char .Ayato .box").style.cssText = Borders
  document.querySelector(".char .Kazuha .box").style.cssText = Borders
  document.querySelector(".char .Keqing .box").style.cssText = Borders
  document.querySelector(".char .Klee .box").style.cssText = Borders
  document.querySelector(".char .Kujou_Sara .box").style.cssText = Borders 
  document.querySelector(".char .Kuki_Shinobu .box").style.cssText = Borders
  document.querySelector(".char .Layla .box").style.cssText = Borders
  document.querySelector(".char .Lisa .box").style.cssText = Borders
  document.querySelector(".char .Mona .box").style.cssText = Borders
  document.querySelector(".char .Nahida .box").style.cssText = Borders
  document.querySelector(".char .Nilou .box").style.cssText = Borders
  document.querySelector(".char .Ningguang .box").style.cssText = Borders
  document.querySelector(".char .Noelle .box").style.cssText = Borders
  document.querySelector(".char .Qiqi .box").style.cssText = Borders
  document.querySelector(".char .Raiden .box").style.cssText = Borders
  document.querySelector(".char .Razor .box").style.cssText = Borders
  document.querySelector(".char .Rosaria .box").style.cssText = Borders
  document.querySelector(".char .Kokomi .box").style.cssText = Borders
  document.querySelector(".char .Sayu .box").style.cssText = Borders
  document.querySelector(".char .Shenhe .box").style.cssText = Borders
  document.querySelector(".char .Heizou .box").style.cssText = Borders
  document.querySelector(".char .Sucrose .box").style.cssText = Borders
  document.querySelector(".char .Tartaglia .box").style.cssText = Borders
  document.querySelector(".char .Thoma .box").style.cssText = Borders
  document.querySelector(".char .Tighnari .box").style.cssText = Borders
  document.querySelector(".char .Venti .box").style.cssText = Borders
  document.querySelector(".char .Wanderer .box").style.cssText = Borders
  document.querySelector(".char .Xiangling .box").style.cssText = Borders
  document.querySelector(".char .Xiao .box").style.cssText = Borders
  document.querySelector(".char .Xingqiu .box").style.cssText = Borders
  document.querySelector(".char .Xinyan .box").style.cssText = Borders
  document.querySelector(".char .Yae_miko .box").style.cssText = Borders
  document.querySelector(".char .Yanfei .box").style.cssText = Borders
  document.querySelector(".char .Yaoyao .box").style.cssText = Borders
  document.querySelector(".char .Yelan .box").style.cssText = Borders
  document.querySelector(".char .Yoimiya .box").style.cssText = Borders
  document.querySelector(".char .Yunjin .box").style.cssText = Borders
  document.querySelector(".char .Zhongli .box").style.cssText = Borders

  Character[Character.length] = "Aether";
  Character[Character.length] = "Albedo";
  Character[Character.length] = "Alhaitham";
  Character[Character.length] = "Aloy";
  Character[Character.length] = "Amber";
  Character[Character.length] = "Arataki_Itto";
  Character[Character.length] = "Barbara";
  Character[Character.length] = "Beidou";
  Character[Character.length] = "Bennett";
  Character[Character.length] = "Candace";
  Character[Character.length] = "Chongyun";
  Character[Character.length] = "Collei";
  Character[Character.length] = "Cyno";
  Character[Character.length] = "Diluc";
  Character[Character.length] = "Diona";
  Character[Character.length] = "Dori";
  Character[Character.length] = "Eula";
  Character[Character.length] = "Faruzan";
  Character[Character.length] = "Fischl";
  Character[Character.length] = "Ganyu";
  Character[Character.length] = "Gorou";
  Character[Character.length] = "Hutao";
  Character[Character.length] = "Jean";
  Character[Character.length] = "Kaeya";
  Character[Character.length] = "Ayaka";
  Character[Character.length] = "Ayato";
  Character[Character.length] = "Kazuha";
  Character[Character.length] = "Keqing";
  Character[Character.length] = "Klee";
  Character[Character.length] = "Kujou_Sara";
  Character[Character.length] = "Kuki_Shinobu";
  Character[Character.length] = "Layla";
  Character[Character.length] = "Lisa";
  Character[Character.length] = "Mona";
  Character[Character.length] = "Nahida";
  Character[Character.length] = "Nilou";
  Character[Character.length] = "Ningguang";
  Character[Character.length] = "Noelle";
  Character[Character.length] = "Qiqi";
  Character[Character.length] = "Raiden";
  Character[Character.length] = "Razor";
  Character[Character.length] = "Rosaria";
  Character[Character.length] = "Kokomi";
  Character[Character.length] = "Sayu";
  Character[Character.length] = "Shenhe";
  Character[Character.length] = "Heizou";
  Character[Character.length] = "Sucrose";
  Character[Character.length] = "Tartaglia";
  Character[Character.length] = "Thoma";
  Character[Character.length] = "Tighnari";
  Character[Character.length] = "Venti";
  Character[Character.length] = "Wanderer";
  Character[Character.length] = "Xiangling";
  Character[Character.length] = "Xiao";
  Character[Character.length] = "Xingqiu";
  Character[Character.length] = "Xinyan";
  Character[Character.length] = "Yae_miko";
  Character[Character.length] = "Yanfei";
  Character[Character.length] = "Yaoyao";
  Character[Character.length] = "Yelan";
  Character[Character.length] = "Yoimiya";
  Character[Character.length] = "Yunjin";
  Character[Character.length] = "Zhongli";

}

function unselectcharall(){
  count_Aether = false;
  count_Albedo = false;
  count_Alhatham = false;
  count_Aloy = false;
  count_Amber = false;
  count_Arataki_Itto = false;
  count_Barbara = false;
  count_Beidou = false;
  count_Bennett = false;
  count_Candace = false;
  count_Chongyun = false;
  count_Collei = false;
  count_Cyno = false;
  count_Diluc = false;
  count_Diona = false;
  count_Dori = false;
  count_Eula = false;
  count_Faruzan = false;
  count_Fischl = false;
  count_Ganyu = false;
  count_Gorou = false;
  count_Hutao = false;
  count_Jean = false;
  count_Kaeya = false;
  count_Ayaka = false;
  count_Ayato = false;
  count_Kazuha = false;
  count_Keqing = false;
  count_Klee = false;
  count_Kujou_Sara = false;
  count_Kuki_Shinobu = false;
  count_Layla = false;
  count_Lisa = false;
  count_Mona = false;
  count_Nahida = false;
  ount_Nilou = false;
  count_Ningguang = false;
  count_Noelle = false;
  count_Qiqi = false;
  count_Raiden = false;
  count_Razor = false;
  count_Rosaria = false;
  count_Kokomi = false;
  count_Sayu = false;
  count_Shenhe = false;
  count_Heizou = false;
  count_Sucrose = false;
  count_Tartaglia = false;
  count_Thoma = false;
  count_Tighnari = false;
  count_Venti = false;
  count_Wanderer = false;
  count_Xiangling = false;
  count_Xiao = false;
  count_Xingqiu = false;
  count_Xinyan = false;
  count_Yae_miko = false;
  count_Yanfei = false;
  count_Yaoyao = false;
  count_Yelan = false;
  count_Yoimiya = false;
  count_Yunjin = false;
  count_Zhongli = false;

  document.querySelector(".char .Aether .box").style.cssText = "";
  document.querySelector(".char .Albedo .box").style.cssText = "";
  document.querySelector(".char .Alhaitham .box").style.cssText = "";
  document.querySelector(".char .Aloy .box").style.cssText = "";
  document.querySelector(".char .Amber .box").style.cssText = "";
  document.querySelector(".char .Arataki_Itto .box").style.cssText = "";
  document.querySelector(".char .Barbara .box").style.cssText = "";
  document.querySelector(".char .Candace .box").style.cssText = "";
  document.querySelector(".char .Beidou .box").style.cssText = "";
  document.querySelector(".char .Bennett .box").style.cssText = "";
  document.querySelector(".char .Candace .box").style.cssText = ""; 
  document.querySelector(".char .Chongyun .box").style.cssText = "";
  document.querySelector(".char .Collei .box").style.cssText = "";
  document.querySelector(".char .Cyno .box").style.cssText = "";
  document.querySelector(".char .Diluc .box").style.cssText = "";
  document.querySelector(".char .Diona .box").style.cssText = "";
  document.querySelector(".char .Dori .box").style.cssText = "";
  document.querySelector(".char .Eula .box").style.cssText = "";
  document.querySelector(".char .Faruzan .box").style.cssText = "";
  document.querySelector(".char .Fischl .box").style.cssText = "";
  document.querySelector(".char .Ganyu .box").style.cssText = ""; 
  document.querySelector(".char .Gorou .box").style.cssText = "";
  document.querySelector(".char .Hutao .box").style.cssText = "";
  document.querySelector(".char .Jean .box").style.cssText = "";
  document.querySelector(".char .Kaeya .box").style.cssText = "";
  document.querySelector(".char .Ayaka .box").style.cssText = "";
  document.querySelector(".char .Ayato .box").style.cssText = "";
  document.querySelector(".char .Kazuha .box").style.cssText = "";
  document.querySelector(".char .Keqing .box").style.cssText = "";
  document.querySelector(".char .Klee .box").style.cssText = "";
  document.querySelector(".char .Kujou_Sara .box").style.cssText = ""; 
  document.querySelector(".char .Kuki_Shinobu .box").style.cssText = "";
  document.querySelector(".char .Layla .box").style.cssText = "";
  document.querySelector(".char .Lisa .box").style.cssText = "";
  document.querySelector(".char .Mona .box").style.cssText = "";
  document.querySelector(".char .Nahida .box").style.cssText = "";
  document.querySelector(".char .Nilou .box").style.cssText = "";
  document.querySelector(".char .Ningguang .box").style.cssText = "";
  document.querySelector(".char .Noelle .box").style.cssText = "";
  document.querySelector(".char .Qiqi .box").style.cssText = "";
  document.querySelector(".char .Raiden .box").style.cssText = "";
  document.querySelector(".char .Razor .box").style.cssText = "";
  document.querySelector(".char .Rosaria .box").style.cssText = "";
  document.querySelector(".char .Kokomi .box").style.cssText = "";
  document.querySelector(".char .Sayu .box").style.cssText = "";
  document.querySelector(".char .Shenhe .box").style.cssText = "";
  document.querySelector(".char .Heizou .box").style.cssText = "";
  document.querySelector(".char .Sucrose .box").style.cssText = "";
  document.querySelector(".char .Tartaglia .box").style.cssText = "";
  document.querySelector(".char .Thoma .box").style.cssText = "";
  document.querySelector(".char .Tighnari .box").style.cssText = "";
  document.querySelector(".char .Venti .box").style.cssText = "";
  document.querySelector(".char .Wanderer .box").style.cssText = "";
  document.querySelector(".char .Xiangling .box").style.cssText = "";
  document.querySelector(".char .Xiao .box").style.cssText = "";
  document.querySelector(".char .Xingqiu .box").style.cssText = "";
  document.querySelector(".char .Xinyan .box").style.cssText = "";
  document.querySelector(".char .Yae_miko .box").style.cssText = "";
  document.querySelector(".char .Yanfei .box").style.cssText = "";
  document.querySelector(".char .Yaoyao .box").style.cssText = "";
  document.querySelector(".char .Yelan .box").style.cssText = "";
  document.querySelector(".char .Yoimiya .box").style.cssText = "";
  document.querySelector(".char .Yunjin .box").style.cssText = "";
  document.querySelector(".char .Zhongli .box").style.cssText = "";

  Character.length = 0;
  Character.splice(0,Character.length);

}

function unselectbossall(){

  count_Anemo_Hypotasis = false;
  count_Cryo_Hypotasis = false;
  count_Dendro_Hypotasis = false;
  count_Electro_Hypotasis = false;
  count_Geo_Hypotasis = false;
  count_Hydro_Hypotasis = false;
  count_Pyro_Hypotasis = false;
  count_Cryo_Regisvine = false;
  count_Electro_Regisvine = false;
  count_Pyro_Regisvine = false;
  count_Oceanid = false;
  count_Primo_Geovishap = false;
  count_Golden_Wolflord = false;
  count_Bathysmal_Vishap = false;
  count_Thunder_Manifestation = false;
  count_Jadeplume_Terrorshroom = false;
  count_Setekh_Wenut = false;
  count_Maguu_Kenki = false;
  count_Aeonblight_Drake = false;
  count_Algorithm = false;
  count_Perpetual_Mechanical_Array = false;
  count_Ruin_Serpent = false;
  count_Lupus_Boreas = false;
  count_Stormterror = false;
  count_Azhdaha = false;
  count_Childe = false;
  count_La_Signora = false;
  count_Magatsu_Mitake = false;
  count_Shouki_no_Kami = false;

  document.querySelector(".boss.Anemo_Hypotasis.box").style.border="";
  document.querySelector(".boss.Cryo_Hypotasis.box").style.border="";
  document.querySelector(".boss.Dendro_Hypotasis.box").style.border="";
  document.querySelector(".boss.Electro_Hypotasis.box").style.border="";
  document.querySelector(".boss.Geo_Hypotasis.box").style.border="";
  document.querySelector(".boss.Hydro_Hypotasis.box").style.border="";
  document.querySelector(".boss.Pyro_Hypotasis.box").style.border="";
  document.querySelector(".boss.Cryo_Regisvine.box").style.border="";
  document.querySelector(".boss.Electro_Regisvine.box").style.border="";
  document.querySelector(".boss.Pyro_Regisvine.box").style.border="";
  document.querySelector(".boss.Oceanid.box").style.border="";
  document.querySelector(".boss.Primo_Geovishap.box").style.border="";
  document.querySelector(".boss.Golden_Wolflord.box").style.border="";
  document.querySelector(".boss.Bathysmal_Vishap.box").style.border="";
  document.querySelector(".boss.Thunder_Manifestation.box").style.border="";
  document.querySelector(".boss.Jadeplume.box").style.border="";
  document.querySelector(".boss.Setekh_Wenut.box").style.border="";
  document.querySelector(".boss.Maguu_Kenki.box").style.border="";
  document.querySelector(".boss.Aeonblight_Drake.box").style.border="";
  document.querySelector(".boss.Algorithm.box").style.border="";
  document.querySelector(".boss.Perpetual.box").style.border="";
  document.querySelector(".boss.Ruin_Serpent.box").style.border="";
  document.querySelector(".boss.Ruin_Serpent.box").style.border="";
  document.querySelector(".boss.Lupus_Boreas.box").style.border="";
  document.querySelector(".boss.Stormterror.box").style.border="";
  document.querySelector(".boss.Azhdaha.box").style.border="";
  document.querySelector(".boss.Childe.box").style.border="";
  document.querySelector(".boss.La_Signora.box").style.border="";
  document.querySelector(".boss.Magatsu_Mitake.box").style.border="";
  document.querySelector(".boss.Shouki_no_Kami.box").style.border="";

  Boss.length = 0;
  Boss.splice(0,Boss.length);
}

function selectbossall(){

  count_Anemo_Hypotasis = true;
  count_Cryo_Hypotasis = true;
  count_Dendro_Hypotasis = true;
  count_Electro_Hypotasis = true;
  count_Geo_Hypotasis = true;
  count_Hydro_Hypotasis = true;
  count_Pyro_Hypotasis = true;
  count_Cryo_Regisvine = true;
  count_Electro_Regisvine = true;
  count_Pyro_Regisvine = true;
  count_Oceanid = true;
  count_Primo_Geovishap = true;
  count_Golden_Wolflord = true;
  count_Bathysmal_Vishap = true;
  count_Thunder_Manifestation = true;
  count_Jadeplume_Terrorshroom = true;
  count_Setekh_Wenut = true;
  count_Maguu_Kenki = true;
  count_Aeonblight_Drake = true;
  count_Algorithm = false;
  count_Perpetual_Mechanical_Array = true;
  count_Ruin_Serpent = true;
  count_Lupus_Boreas = true;
  count_Stormterror = true;
  count_Azhdaha = true;
  count_Childe = true;
  count_La_Signora = true;
  count_Magatsu_Mitake = true;
  count_Shouki_no_Kami = true;

  document.querySelector(".boss.Anemo_Hypotasis.box").style.cssText = Borders
  document.querySelector(".boss.Cryo_Hypotasis.box").style.cssText = Borders
  document.querySelector(".boss.Dendro_Hypotasis.box").style.cssText = Borders;
  document.querySelector(".boss.Electro_Hypotasis.box").style.cssText = Borders;
  document.querySelector(".boss.Geo_Hypotasis.box").style.cssText = Borders;
  document.querySelector(".boss.Hydro_Hypotasis.box").style.cssText = Borders;
  document.querySelector(".boss.Pyro_Hypotasis.box").style.cssText = Borders;
  document.querySelector(".boss.Cryo_Regisvine.box").style.cssText = Borders;
  document.querySelector(".boss.Electro_Regisvine.box").style.cssText = Borders;
  document.querySelector(".boss.Pyro_Regisvine.box").style.cssText = Borders;
  document.querySelector(".boss.Oceanid.box").style.cssText = Borders;
  document.querySelector(".boss.Primo_Geovishap.box").style.cssText = Borders;
  document.querySelector(".boss.Golden_Wolflord.box").style.cssText = Borders;
  document.querySelector(".boss.Bathysmal_Vishap.box").style.cssText = Borders;
  document.querySelector(".boss.Thunder_Manifestation.box").style.cssText = Borders;
  document.querySelector(".boss.Jadeplume.box").style.cssText = Borders;
  document.querySelector(".boss.Setekh_Wenut.box").style.cssText = Borders;
  document.querySelector(".boss.Maguu_Kenki.box").style.cssText = Borders;
  document.querySelector(".boss.Aeonblight_Drake.box").style.cssText = Borders;
  document.querySelector(".boss.Algorithm.box").style.cssText = Borders;
  document.querySelector(".boss.Perpetual.box").style.cssText = Borders;
  document.querySelector(".boss.Ruin_Serpent.box").style.cssText = Borders;
  document.querySelector(".boss.Ruin_Serpent.box").style.cssText = Borders;
  document.querySelector(".boss.Lupus_Boreas.box").style.cssText = Borders;
  document.querySelector(".boss.Stormterror.box").style.cssText = Borders;
  document.querySelector(".boss.Azhdaha.box").style.cssText = Borders;
  document.querySelector(".boss.Childe.box").style.cssText = Borders;
  document.querySelector(".boss.La_Signora.box").style.cssText = Borders;
  document.querySelector(".boss.Magatsu_Mitake.box").style.cssText = Borders;
  document.querySelector(".boss.Shouki_no_Kami.box").style.cssText = Borders;

  Boss[Boss.length] = "Anemo_Hypotasis";
  Boss[Boss.length] = "Cryo_Hypotasis";
  Boss[Boss.length] = "Dendro_Hypotasis";
  Boss[Boss.length] = "Electro_Hypotasis";
  Boss[Boss.length] = "Geo_Hypotasis";
  Boss[Boss.length] = "Hydro_Hypotasis";
  Boss[Boss.length] = "Pyro_Hypotasis";
  Boss[Boss.length] = "Cryo_Regisvine";
  Boss[Boss.length] = "Electro_Regisvine";
  Boss[Boss.length] = "Pyro_Regisvine";
  Boss[Boss.length] = "Oceanid";
  Boss[Boss.length] = "Primo_Geovishap";
  Boss[Boss.length] = "Golden_Wolflord";
  Boss[Boss.length] = "Bathysmal_Vishap";
  Boss[Boss.length] = "Thunder_Manifestation";
  Boss[Boss.length] = "Jadeplume";
  Boss[Boss.length] = "Setekh_Wenut";
  Boss[Boss.length] = "Maguu_Kenki";
  Boss[Boss.length] = "Aeonblight_Drake";
  Boss[Boss.length] = "Algorithm";
  Boss[Boss.length] = "Perpetual";
  Boss[Boss.length] = "Ruin_Serpent";
  Boss[Boss.length] = "Lupus_Boreas";
  Boss[Boss.length] = "Stormterror";
  Boss[Boss.length] = "Azhdaha";
  Boss[Boss.length] = "Childe";
  Boss[Boss.length] = "La_Signora";
  Boss[Boss.length] = "Magatsu_Mitake";
  Boss[Boss.length] = "Shouki_no_Kami";

}