let csw = true;
let bsw = true;

function dischar(){
    if (csw==true){
        document.querySelector(".char-caret-right").style.cssText = "display: ;"
        document.querySelector(".char-caret-down").style.cssText = "display: none;"
        document.querySelector("div.char").style.cssText = "display: none;"
        csw = false;
        return
    }
    if (csw==false){
        document.querySelector(".char-caret-right").style.cssText = "display: none;"
        document.querySelector(".char-caret-down").style.cssText = "display: ;"
        document.querySelector("div.char").style.cssText = "display: ;"
        csw = true;
    }
}

function disboss(){
    if (bsw==true){
        document.querySelector(".boss-caret-right").style.cssText = "display: ;"
        document.querySelector(".boss-caret-down").style.cssText = "display: none;"
        document.querySelector("div.Boss").style.cssText = "display: none;"
        bsw = false;
        return
    }
    if (bsw==false){
        document.querySelector(".boss-caret-right").style.cssText = "display: none;"
        document.querySelector(".boss-caret-down").style.cssText = "display: ;"
        document.querySelector("div.Boss").style.cssText = "display: ;"
        bsw = true;
    }
}

