let csw = true;
let bsw = true;
let ransw = false;

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

function Random(){

    if (ransw == false){
        document.querySelector("div.Random").style.cssText = "display: ;"
        document.querySelector(".char-caret-right").style.cssText = "display: ;"
        document.querySelector(".char-caret-down").style.cssText = "display: none;"
        document.querySelector("div.char").style.cssText = "display: none;"
        document.querySelector(".boss-caret-right").style.cssText = "display: ;"
        document.querySelector(".boss-caret-down").style.cssText = "display: none;"
        document.querySelector("div.Boss").style.cssText = "display: none;"
        document.querySelector(".displaycharacter").style.cssText = "pointer-events: none;"
        document.querySelector(".displayboss").style.cssText = "pointer-events: none;"
        document.querySelector(".filter").style.cssText = "pointer-events: none;"

        csw = false;
        bsw = false;
        ransw = true;
        return
    }

    if (ransw == true){
        document.querySelector("div.Random").style.cssText = "display: none;"
        document.querySelector(".char-caret-right").style.cssText = "display: none;"
        document.querySelector(".char-caret-down").style.cssText = "display: ;"
        document.querySelector("div.char").style.cssText = "display: ;"
        document.querySelector(".boss-caret-right").style.cssText = "display: none;"
        document.querySelector(".boss-caret-down").style.cssText = "display: ;"
        document.querySelector("div.Boss").style.cssText = "display: ;"
        document.querySelector(".displaycharacter").style.cssText = "pointer-events: visible;"
        document.querySelector(".displayboss").style.cssText = "pointer-events: visible;"
        document.querySelector(".filter").style.cssText = "pointer-events: visible;"

        csw = true;
        bsw = true;
        ransw = false;
        return
    }
}

function start_random(){
    document.querySelector(".start_random").style.cssText = "display: none;"
    document.querySelector(".section_random").style.cssText = "display: ;"
    document.querySelector(".return").style.cssText = "display: ;"
    document.querySelector(".random").style.cssText = "pointer-events: none;"
}

function Return(){
    document.querySelector("div.Random").style.cssText = "display: none;"
    document.querySelector(".char-caret-right").style.cssText = "display: none;"
    document.querySelector(".char-caret-down").style.cssText = "display: ;"
    document.querySelector("div.char").style.cssText = "display: ;"
    document.querySelector(".boss-caret-right").style.cssText = "display: none;"
    document.querySelector(".boss-caret-down").style.cssText = "display: ;"
    document.querySelector("div.Boss").style.cssText = "display: ;"
    document.querySelector(".displaycharacter").style.cssText = "pointer-events: visible;"
    document.querySelector(".displayboss").style.cssText = "pointer-events: visible;"
    document.querySelector(".filter").style.cssText = "pointer-events: visible;"
    document.querySelector(".random").style.cssText = "pointer-events: visible;"
    document.querySelector(".section_random").style.cssText = "display: none;"
    document.querySelector(".start_random").style.cssText = "display: ;"
    document.querySelector(".return").style.cssText = "display: none;"

    ransw = false;
    csw = true;
    bsw = true;
}