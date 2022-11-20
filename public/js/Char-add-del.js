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
const character = document.getElementById("Character")
const boss = document.getElementById("boss")
const char5 = document.getElementById("5-star")

function Char() {
  if (character.style.display == "none") {
    character.style.display = "";
  } else{
    character.style.display = "none";
  }
}
function fivestar() {
  
}



function Boss() {
    if (boss.style.display === "none"){
      boss.style.display = "";
    } else{
      boss.style.display = "none";
    }
}
