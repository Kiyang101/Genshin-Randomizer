const Borders = "border-top: 5px solid MediumSpringGreen; border-bottom: 5px solid SpringGreen;";
let count_Aether = true;
let count_Albedo = true;
let count_Alhatham = true;
let count_Aloy = true;
let count_Amber = true;
let count_Arataki_Itto = true;
let count_Barbara = true;
let count_Beidou = true;
let count_Bennett = true;
let count_Candace = true;
let count_Chongyun = true;
let count_Collei = true;
let count_Cyno = true;
let count_Diluc = true;
let count_Diona = true;
let count_Dori = true;
let count_Eula = true;
let count_Faruzan = true;
let count_Fischl = true;
let count_Ganyu = true;
let count_Gorou = true;
let count_Hutao = true;
let count_Jean = true;
let count_Kaeya = true;
let count_Ayaka = true;
let count_Ayato = true;
let count_Kazuha = true;
let count_Keqing = true;
let count_Klee = true;
let count_Kujou_Sara = true;
let count_Kuki_Shinobu = true;
let count_Layla = true;
let count_Lisa = true;
let count_Mona = true;
let count_Nahida = true;
let count_Nilou = true;
let count_Ningguang = true;
let count_Noel = true;
let count_Qiqi = true;
let count_Raiden = true;
let count_Razor = true;
let count_Rosaria = true;
let count_Kokomi = true;
let count_Sayu = true;
let count_Shenhe = true;
let count_Heizou = true;
let count_Sucrose = true;
let count_Tartaglia = true;
let count_Thoma = true;
let count_Tighnari = true;
let count_Venti = true;
let count_Wanderer = true;
let count_Xiangling = true;
let count_Xiao = true;
let count_Xingqiu = true;
let count_Xinyan = true;
let count_Yae_miko = true;
let count_Yanfei = true;
let count_Yaoyao = true;
let count_Yelan = true;
let count_Yoimiya = true;
let count_Yunjin = true;
let count_Zhongli = true;


function select_Aether() {
  if (count_Aether == true){
    document.querySelector(".char .Aether .box").style.cssText = Borders
    count_Aether = false;
    return
  }
  if (count_Aether == false){
    document.querySelector(".char .Aether .box").style.border="";
    count_Aether = true;
  }
}

function select_Albedo() {
    if (count_Albedo == true){
      document.querySelector(".char .Albedo .box").style.cssText = Borders
      count_Albedo = false;
      return
    }
    if (count_Albedo == false){
      document.querySelector(".char .Albedo .box").style.border="";
      count_Albedo = true;
    }
}

function select_Alhatham() {
  if (count_Alhatham == true){
    document.querySelector(".char .Alhatham .box").style.cssText = Borders
    count_Alhatham = false;
    return
  }
  if (count_Alhatham == false){
    document.querySelector(".char .Alhatham .box").style.border="";
    count_Alhatham = true;
  }
}

function select_Aloy() {
  if (count_Aloy == true){
    document.querySelector(".char .Aloy .box").style.cssText = Borders
    count_Aloy = false;
    return
  }
  if (count_Aloy == false){
    document.querySelector(".char .Aloy .box").style.border="";
    count_Aloy = true;
  }
}
