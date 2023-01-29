

function Filter(){
    /*
    if (filter_count == true){
        document.querySelector("section.filter").style.cssText = "pointer-events: none;"
        document.querySelector("div.char").style.cssText = "pointer-events: ;"
        document.querySelector("div.modal-box").style.cssText = "transition: all 1s ease;"
        document.querySelector("div.modal-box").style.cssText = "opacity: 0;"
        document.querySelector(".overlay").style.cssText = "opacity: 0;"
        filter_count = false;
        return
    }*/
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

