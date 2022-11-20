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
var character = document.getElementById("Character")
var boss = document.getElementById("boss")

function Char() {
  if (character.style.display === "none") {
    character.style.display = "";
  } else{
    character.style.display
  }
}

function Boss() {
    if (boss.style.display === "none"){
      boss.style.display = "";
      console.log(boss.style.display);
    } else{
      boss.style.display = "none"
      console.log(boss.style.display);

    }
}
