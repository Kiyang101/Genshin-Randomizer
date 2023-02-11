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
let count_Noel = false;
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
    document.querySelector(".char .Alhatham .box").style.cssText = Borders
    count_Alhatham = true;
    Character[Character.length] = "Alhatham";
    return
  }
  if (count_Alhatham == true){
    document.querySelector(".char .Alhatham .box").style.border="";
    count_Alhatham = false;
    let index = Character.indexOf("Alhatham");
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

function select_Noel() {
  if (count_Noel == false){
    document.querySelector(".char .Noel .box").style.cssText = Borders
    count_Noel = true;
    Character[Character.length] = "Noel";
    return
  }
  if (count_Noel == true){
    document.querySelector(".char .Noel .box").style.border="";
    count_Noel = false;
    let index = Character.indexOf("Noel");
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


function start_random(){

  if (Character.length < 4 ){
    alert("You'd better choose more than 4");
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
  
  document.querySelector(".start_random").style.cssText = "display: none;"
  document.querySelector(".section_random").style.cssText = "display: ;"
  document.querySelector(".return").style.cssText = "display: ;"
  document.querySelector(".random").style.cssText = "pointer-events: none;"

  document.getElementById("charf").src = `../image/Character/all/${ran1[0]}.png`;
  document.getElementById("chars").src = `../image/Character/all/${ran2[0]}.png`;
  document.getElementById("charth").src = `../image/Character/all/${ran3[0]}.png`;
  document.getElementById("charfth").src = `../image/Character/all/${ran4[0]}.png`;

  document.getElementById("name_text_first").innerHTML = `${ran1[0]}`;
  document.getElementById("name_text_second").innerHTML = `${ran2[0]}`;
  document.getElementById("name_text_thrid").innerHTML = `${ran3[0]}`;
  document.getElementById("name_text_fourth").innerHTML = `${ran4[0]}`;

  Character[Character.length] = ran1[0];
  Character[Character.length] = ran2[0];
  Character[Character.length] = ran3[0];
  Character[Character.length] = ran4[0];

}


  

