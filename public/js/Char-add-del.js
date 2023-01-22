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
