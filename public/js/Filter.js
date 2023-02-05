function Filter(){
    document.querySelector("section.filter").style.cssText = "pointer-events: visible;"
    document.querySelector("div.char").style.cssText = "pointer-events: none;"
    document.querySelector("button.filter").style.cssText = "pointer-events: none;"
    document.querySelector("div.modal-box").style.cssText = "transition: all 1s ease;"
    document.querySelector("div.modal-box").style.cssText = "opacity: 1;"
    document.querySelector(".overlay").style.cssText = "opacity: 1;" 
}

function Close(){
    document.querySelector("section.filter").style.cssText = "pointer-events: none;"
    document.querySelector("div.char").style.cssText = "pointer-events: visible;"
    document.querySelector("button.filter").style.cssText = "pointer-events: visible;"
    document.querySelector("div.modal-box").style.cssText = "transition: all 1s ease;"
    document.querySelector("div.modal-box").style.cssText = "opacity: 0;"
    document.querySelector(".overlay").style.cssText = "opacity: 0;"
}


let Char_4 = true;
let Char_5 = true;

let sw = true;
let cm = true;
let pl = true;
let b = true;
let ctl = true;

let anm = true;
let co = true;
let dd = true;
let elt = true;
let go = true;
let hd = true;
let po = true;


const four = document.getElementsByClassName("four_star");
const five = document.getElementsByClassName("five_star");

const sword = document.getElementsByClassName("Sword");
const claymore = document.getElementsByClassName("Claymore");
const polearm = document.getElementsByClassName("Polearm");
const bow = document.getElementsByClassName("Bow");
const catalyst = document.getElementsByClassName("Catalyst");

const anemo = document.getElementsByClassName("Anemo");
const cryo = document.getElementsByClassName("Cryo");
const dendro = document.getElementsByClassName("Dendro");
const electro = document.getElementsByClassName("Electro");
const geo = document.getElementsByClassName("Geo");
const hydro = document.getElementsByClassName("Hydro");
const pyro = document.getElementsByClassName("Pyro");



function rarity_4(){
  if (Char_4 == true){

    for(four_star of four) {
        four_star.style.display = "none";
    }

    Char_4 = false;
    
    document.querySelector(".rarity_4").style.cssText = "background-color: white;"
    return
  }

  if (Char_4 == false){
    
    for(four_star of four) {
      four_star.style.display = "";
    }

    document.querySelector(".rarity_4").style.cssText = "background-color: Aquamarine;"
    Char_4 = true;
    return
  }

}

function rarity_5(){

  if (Char_5 == true){

    for(five_star of five) {
      five_star.style.display = "none";
    }

    Char_5 = false
    document.querySelector(".rarity_5").style.cssText = "background-color: white;"
    return
  }

  if (Char_5 == false){

    for(five_star of five) {
      five_star.style.display = "";
    }

    Char_5 = true;
    document.querySelector(".rarity_5").style.cssText = "background-color: Aquamarine;"
    return
  }

} 

function type_sword(){

  if (sw == true){

    for(Sword of sword) {
      Sword.style.display = "none";
    }
    
    document.querySelector(".type_sword").style.cssText = "background-color: white;"

    sw = false;
    return
  }

  if (sw == false){
    for(Sword of sword) {
      Sword.style.display = "";
    }

    document.querySelector(".type_sword").style.cssText = "background-color: Aquamarine;"

    sw = true;
    return
  }

}

function type_Claymore(){

  if (cm == true){

    for(Claymore of claymore) {
      Claymore.style.display = "none";
    }
    
    document.querySelector(".type_Claymore").style.cssText = "background-color: white;"

    cm = false;
    return
  }

  if (cm == false){
    for(Claymore of claymore) {
      Claymore.style.display = "";
    }

    document.querySelector(".type_Claymore").style.cssText = "background-color: Aquamarine;"

    cm = true;
    return
  }

}

function type_Pole(){

  if (pl == true){

    for(Polearm of polearm) {
      Polearm.style.display = "none";
    }
    
    document.querySelector(".type_Pole").style.cssText = "background-color: white;"

    pl = false;
    return
  }

  if (pl == false){
    for(Polearm of polearm) {
      Polearm.style.display = "";
    }

    document.querySelector(".type_Pole").style.cssText = "background-color: Aquamarine;"

    pl = true;
    return
  }

}

function type_Bow(){

  if (b == true){

    for(Bow of bow) {
      Bow.style.display = "none";
    }
    
    document.querySelector(".type_Bow").style.cssText = "background-color: white;"

    b = false;
    return
  }

  if (b == false){
    for(Bow of bow) {
      Bow.style.display = "";
    }

    document.querySelector(".type_Bow").style.cssText = "background-color: Aquamarine;"

    b = true;
    return
  }

}

function type_Catalyst(){

  if (ctl == true){

    for(Catalyst of catalyst) {
      Catalyst.style.display = "none";
    }
    
    document.querySelector(".type_Catalyst").style.cssText = "background-color: white;"

    ctl = false;
    return
  }

  if (ctl == false){
    for(Catalyst of catalyst) {
      Catalyst.style.display = "";
    }

    document.querySelector(".type_Catalyst").style.cssText = "background-color: Aquamarine;"

    ctl = true;
    return
  }

}

function E_Anemo(){

  if (anm == true){

    for(Anemo of anemo) {
      Anemo.style.display = "none";
    }
    
    document.querySelector(".E_Anemo").style.cssText = "background-color: white;"

    anm = false;
    return
  }

  if (anm == false){
    for(Anemo of anemo) {
      Anemo.style.display = "";
    }

    document.querySelector(".E_Anemo").style.cssText = "background-color: Aquamarine;"

    anm = true;
    return
  }

}

function E_Cryo(){

  if (co == true){

    for(Cryo of cryo) {
      Cryo.style.display = "none";
    }
    
    document.querySelector(".E_Cryo").style.cssText = "background-color: white;"

    co = false;
    return
  }

  if (co == false){
    for(Cryo of cryo) {
      Cryo.style.display = "";
    }

    document.querySelector(".E_Cryo").style.cssText = "background-color: Aquamarine;"

    co = true;
    return
  }

}

function E_Dendro(){

  if (dd == true){

    for(Dendro of dendro) {
      Dendro.style.display = "none";
    }
    
    document.querySelector(".E_Dendro").style.cssText = "background-color: white;"

    dd = false;
    return
  }

  if (dd == false){
    for(Dendro of dendro) {
      Dendro.style.display = "";
    }

    document.querySelector(".E_Dendro").style.cssText = "background-color: Aquamarine;"

    dd = true;
    return
  }

}

function E_Electro(){

  if (elt == true){

    for(Electro of electro) {
      Electro.style.display = "none";
    }
    
    document.querySelector(".E_Electro").style.cssText = "background-color: white;"

    elt = false;
    return
  }

  if (elt == false){
    for(Electro of electro) {
      Electro.style.display = "";
    }

    document.querySelector(".E_Electro").style.cssText = "background-color: Aquamarine;"

    elt = true;
    return
  }

}

function E_Geo(){

  if (go == true){

    for(Geo of geo) {
      Geo.style.display = "none";
    }
    
    document.querySelector(".E_Geo").style.cssText = "background-color: white;"

    go = false;
    return
  }

  if (go == false){
    for(Geo of geo) {
      Geo.style.display = "";
    }

    document.querySelector(".E_Geo").style.cssText = "background-color: Aquamarine;"

    go = true;
    return
  }

}

function E_Hydro(){

  if (hd == true){

    for(Hydro of hydro) {
      Hydro.style.display = "none";
    }
    
    document.querySelector(".E_Hydro").style.cssText = "background-color: white;"

    hd = false;
    return
  }

  if (hd == false){
    for(Hydro of hydro) {
      Hydro.style.display = "";
    }

    document.querySelector(".E_Hydro").style.cssText = "background-color: Aquamarine;"

    hd = true;
    return
  }

}

function E_Pyro(){

  if (po == true){

    for(Pyro of pyro) {
      Pyro.style.display = "none";
    }
    
    document.querySelector(".E_Pyro").style.cssText = "background-color: white;"

    po = false;
    return
  }

  if (po == false){
    for(Pyro of pyro) {
      Pyro.style.display = "";
    }

    document.querySelector(".E_Pyro").style.cssText = "background-color: Aquamarine;"

    po = true;
    return
  }

}




