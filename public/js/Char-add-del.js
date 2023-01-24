/*
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
*/
/*
const character = document.getElementById("Character")
const boss = document.getElementById("boss")
const char5 = document.getElementById("5-star")
const charbutton = document.getElementById("buttonchar")
const bossbutton = document.getElementById("buttonboss")*/
/*
function Char() {
  if (document.getElementById("Character").style.display == "none") {
    document.getElementById("Character").style.display = "";
    document.getElementById("buttonchar").style.background = "DodgerBlue";
    document.getElementById("buttonchar").style.color = "white";
  } else{
    document.getElementById("Character").style.display = "none";
    document.getElementById("buttonchar").style.background = "white";
    document.getElementById("buttonchar").style.color = "black";
  }
}

function Boss() {
    if (document.getElementById("boss").style.display == "none"){
      document.getElementById("boss").style.display = "";
      document.getElementById("buttonboss").style.background = "DodgerBlue";
      document.getElementById("buttonboss").style.color = "white";
    } else{
      document.getElementById("boss").style.display = "none";
      document.getElementById("buttonboss").style.background = "white";
      document.getElementById("buttonboss").style.color = "black";
    }
}
*/
let Charswitch = true;
let bossswitch = true;




function Char() {
  if (bossswitch == true){
    document.querySelector(".Aether").style.cssText = "display: none;"
    document.querySelector(".Albedo").style.cssText = "display: none;"
    document.querySelector(".Alhatham").style.cssText = "display: none;"
    document.querySelector(".Aloy").style.cssText = "display: none;"
    document.querySelector(".Amber").style.cssText = "display: none;"
    document.querySelector(".Arataki_Itto").style.cssText = "display: none;"
    document.querySelector(".Barbara").style.cssText = "display: none;"
    document.querySelector(".Beidou").style.cssText = "display: none;"
    document.querySelector(".Bennett").style.cssText = "display: none;"
    document.querySelector(".Candace").style.cssText = "display: none;"
    document.querySelector(".Chongyun").style.cssText = "display: none;"
    document.querySelector(".Collei").style.cssText = "display: none;"
    document.querySelector(".Cyno").style.cssText = "display: none;"
    document.querySelector(".Diluc").style.cssText = "display: none;"
    document.querySelector(".Diona").style.cssText = "display: none;"
    document.querySelector(".Dori").style.cssText = "display: none;"
    document.querySelector(".Eula").style.cssText = "display: none;"
    document.querySelector(".Faruzan").style.cssText = "display: none;"
    document.querySelector(".Fischl").style.cssText = "display: none;"
    document.querySelector(".Ganyu").style.cssText = "display: none;"
    document.querySelector(".Gorou").style.cssText = "display: none;"
    document.querySelector(".Hutao").style.cssText = "display: none;"
    document.querySelector(".Jean").style.cssText = "display: none;"
    document.querySelector(".Kaeya").style.cssText = "display: none;"
    document.querySelector(".Ayaka").style.cssText = "display: none;"
    document.querySelector(".Ayato").style.cssText = "display: none;"
    document.querySelector(".Kazuha").style.cssText = "display: none;"
    document.querySelector(".Keqing").style.cssText = "display: none;"
    document.querySelector(".Klee").style.cssText = "display: none;"
    document.querySelector(".Kujou_Sara").style.cssText = "display: none;"
    document.querySelector(".Kuki_Shinobu").style.cssText = "display: none;"
    document.querySelector(".Layla").style.cssText = "display: none;"
    document.querySelector(".Lisa").style.cssText = "display: none;"
    document.querySelector(".Mona").style.cssText = "display: none;"
    document.querySelector(".Nahida").style.cssText = "display: none;"
    document.querySelector(".Nilou").style.cssText = "display: none;"
    document.querySelector(".Ningguang").style.cssText = "display: none;"
    document.querySelector(".Noel").style.cssText = "display: none;"
    document.querySelector(".Qiqi").style.cssText = "display: none;"
    document.querySelector(".Raiden").style.cssText = "display: none;"
    document.querySelector(".Razor").style.cssText = "display: none;"
    document.querySelector(".Rosaria").style.cssText = "display: none;"
    document.querySelector(".Kokomi").style.cssText = "display: none;"
    document.querySelector(".Sayu").style.cssText = "display: none;"
    document.querySelector(".Shenhe").style.cssText = "display: none;"
    document.querySelector(".Heizou").style.cssText = "display: none;"
    document.querySelector(".Sucrose").style.cssText = "display: none;"
    document.querySelector(".Tartaglia").style.cssText = "display: none;"
    document.querySelector(".Thoma").style.cssText = "display: none;"
    document.querySelector(".Tighnari").style.cssText = "display: none;"
    document.querySelector(".Venti").style.cssText = "display: none;"
    document.querySelector(".Wanderer").style.cssText = "display: none;"
    document.querySelector(".Xiangling").style.cssText = "display: none;"
    document.querySelector(".Xiao").style.cssText = "display: none;"
    document.querySelector(".Xingqiu").style.cssText = "display: none;"
    document.querySelector(".Xinyan").style.cssText = "display: none;"
    document.querySelector(".Yae_miko").style.cssText = "display: none;"
    document.querySelector(".Yanfei").style.cssText = "display: none;"
    document.querySelector(".Yaoyao").style.cssText = "display: none;"
    document.querySelector(".Yelan").style.cssText = "display: none;"
    document.querySelector(".Yoimiya").style.cssText = "display: none;"
    document.querySelector(".Yunjin").style.cssText = "display: none;"
    document.querySelector(".Zhongli").style.cssText = "display: none;"
    document.getElementById("buttonchar").style.background = "white";
    document.getElementById("buttonchar").style.color = "black";
    bossswitch = false;
    return
  }
  if (bossswitch == false){
    document.querySelector(".Aether").style.cssText = "display: ;"
    document.querySelector(".Albedo").style.cssText = "display: ;"
    document.querySelector(".Alhatham").style.cssText = "display: ;"
    document.querySelector(".Aloy").style.cssText = "display: ;"
    document.querySelector(".Amber").style.cssText = "display: ;"
    document.querySelector(".Arataki_Itto").style.cssText = "display: ;"
    document.querySelector(".Barbara").style.cssText = "display: ;"
    document.querySelector(".Beidou").style.cssText = "display: ;"
    document.querySelector(".Bennett").style.cssText = "display: ;"
    document.querySelector(".Candace").style.cssText = "display: ;"
    document.querySelector(".Chongyun").style.cssText = "display: ;"
    document.querySelector(".Collei").style.cssText = "display: ;"
    document.querySelector(".Cyno").style.cssText = "display: ;"
    document.querySelector(".Diluc").style.cssText = "display: ;"
    document.querySelector(".Diona").style.cssText = "display: ;"
    document.querySelector(".Dori").style.cssText = "display: ;"
    document.querySelector(".Eula").style.cssText = "display: ;"
    document.querySelector(".Faruzan").style.cssText = "display: ;"
    document.querySelector(".Fischl").style.cssText = "display: ;"
    document.querySelector(".Ganyu").style.cssText = "display: ;"
    document.querySelector(".Gorou").style.cssText = "display: ;"
    document.querySelector(".Hutao").style.cssText = "display: ;"
    document.querySelector(".Jean").style.cssText = "display: ;"
    document.querySelector(".Kaeya").style.cssText = "display: ;"
    document.querySelector(".Ayaka").style.cssText = "display: ;"
    document.querySelector(".Ayato").style.cssText = "display: ;"
    document.querySelector(".Kazuha").style.cssText = "display: ;"
    document.querySelector(".Keqing").style.cssText = "display: ;"
    document.querySelector(".Klee").style.cssText = "display: ;"
    document.querySelector(".Kujou_Sara").style.cssText = "display: ;"
    document.querySelector(".Kuki_Shinobu").style.cssText = "display: ;"
    document.querySelector(".Layla").style.cssText = "display: ;"
    document.querySelector(".Lisa").style.cssText = "display: ;"
    document.querySelector(".Mona").style.cssText = "display: ;"
    document.querySelector(".Nahida").style.cssText = "display: ;"
    document.querySelector(".Nilou").style.cssText = "display: ;"
    document.querySelector(".Ningguang").style.cssText = "display: ;"
    document.querySelector(".Noel").style.cssText = "display: ;"
    document.querySelector(".Qiqi").style.cssText = "display: ;"
    document.querySelector(".Raiden").style.cssText = "display: ;"
    document.querySelector(".Razor").style.cssText = "display: ;"
    document.querySelector(".Rosaria").style.cssText = "display: ;"
    document.querySelector(".Kokomi").style.cssText = "display: ;"
    document.querySelector(".Sayu").style.cssText = "display: ;"
    document.querySelector(".Shenhe").style.cssText = "display: ;"
    document.querySelector(".Heizou").style.cssText = "display: ;"
    document.querySelector(".Sucrose").style.cssText = "display: ;"
    document.querySelector(".Tartaglia").style.cssText = "display: ;"
    document.querySelector(".Thoma").style.cssText = "display: ;"
    document.querySelector(".Tighnari").style.cssText = "display: ;"
    document.querySelector(".Venti").style.cssText = "display: ;"
    document.querySelector(".Wanderer").style.cssText = "display: ;"
    document.querySelector(".Xiangling").style.cssText = "display: ;"
    document.querySelector(".Xiao").style.cssText = "display: ;"
    document.querySelector(".Xingqiu").style.cssText = "display: ;"
    document.querySelector(".Xinyan").style.cssText = "display: ;"
    document.querySelector(".Yae_miko").style.cssText = "display: ;"
    document.querySelector(".Yanfei").style.cssText = "display: ;"
    document.querySelector(".Yaoyao").style.cssText = "display: ;"
    document.querySelector(".Yelan").style.cssText = "display: ;"
    document.querySelector(".Yoimiya").style.cssText = "display: ;"
    document.querySelector(".Yunjin").style.cssText = "display: ;"
    document.querySelector(".Zhongli").style.cssText = "display: ;"
    document.getElementById("buttonchar").style.background = "DodgerBlue";
    document.getElementById("buttonchar").style.color = "white";
    bossswitch = true;
    }
}



function Boss() {
  if (Charswitch == true){
    document.querySelector(".Maguu_Kenki").style.cssText = "display: none;"
    document.getElementById("buttonboss").style.background = "white";
    document.getElementById("buttonboss").style.color = "black";
    Charswitch = false;
    return
  }
  if (Charswitch == false){
    document.querySelector(".Maguu_Kenki").style.cssText = "display: ;"
      document.getElementById("buttonboss").style.background = "DodgerBlue";
      document.getElementById("buttonboss").style.color = "white";
      Charswitch = true;
    }
}


