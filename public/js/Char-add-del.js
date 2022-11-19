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
var allchar = document.getElementsByClassName("char")
var boss 

function char(){
    if (allchar.style.display === "none") {
        allchar.style.display = "block";
      }
}

function boss() {
    if (allchar.style.display === "block"){
        allchar.style.display = "none";
    } 
}
