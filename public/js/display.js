let csw = true;
let bsw = true;
let ransw = false;

function dischar(){
    if (csw==true){
        document.querySelector(".char-caret-right").style.cssText = "display: ;"
        document.querySelector(".char-caret-down").style.cssText = "display: none;"
        document.querySelector("div.char").style.cssText = "display: none;"
        document.querySelector(".unselectall_char").style.cssText = "display: none;"
        document.querySelector(".selectall_char").style.cssText = "display: none;"
        csw = false;
        return
    }
    if (csw==false){
        if (Character.length == CharCheck.length){
            document.querySelector(".selectall_char").style.cssText = "display: none;"
            document.querySelector(".unselectall_char").style.cssText = "display: ;"
        }else{
            document.querySelector(".selectall_char").style.cssText = "display: ;"
        }
        if(Character.length > 0){
            document.querySelector(".unselectall_char").style.cssText = "display: ;"
        }else{
            document.querySelector(".unselectall_char").style.cssText = "display: none;"
        }
        document.querySelector(".char-caret-right").style.cssText = "display: none;"
        document.querySelector(".char-caret-down").style.cssText = "display: ;"
        document.querySelector("div.char").style.cssText = "display: ;"
        csw = true;
    }
}

function dispboss(){
    if (bsw==true){
        document.querySelector(".boss-caret-right").style.cssText = "display: ;"
        document.querySelector(".boss-caret-down").style.cssText = "display: none;"
        document.querySelector("div.Boss").style.cssText = "display: none;"
        document.querySelector(".selectall_boss").style.cssText = "display: none;"
        document.querySelector(".unselectall_boss").style.cssText = "display: none;"
        bsw = false;
        return
    }
    if (bsw==false){
        if (Boss.length == Countboss.length){
            document.querySelector(".selectall_boss").style.cssText = "display: none;"
            document.querySelector(".unselectall_boss").style.cssText = "display: ;"
        }else{
            document.querySelector(".selectall_boss").style.cssText = "display: ;"
        }
        if(Boss.length > 0){
            document.querySelector(".unselectall_boss").style.cssText = "display: ;"
        }else{
            document.querySelector(".unselectall_boss").style.cssText = "display: none;"
        }
        document.querySelector(".boss-caret-right").style.cssText = "display: none;"
        document.querySelector(".boss-caret-down").style.cssText = "display: ;"
        document.querySelector("div.Boss").style.cssText = "display: ;"
        // document.querySelector(".selectall_boss").style.cssText = "display: ;"
        // document.querySelector(".unselectall_boss").style.cssText = "display: ;"
        bsw = true;
    }
}

function Random(){
    if (Character.length < 5 ){
        alert("You'd better choose more than 4 characters");
        return
    }else{
       if (Boss.length < 2 ){
            alert("You'd better choose more than 1 Boss");
            return
        } 
    }
    if (ransw == false){
        document.querySelector("div.Random").style.cssText = "display: ;"
        document.querySelector(".char-caret-right").style.cssText = "display: ;"
        document.querySelector(".char-caret-down").style.cssText = "display: none;"
        document.querySelector("div.char").style.cssText = "display: none;"
        document.querySelector(".boss-caret-right").style.cssText = "display: ;"
        document.querySelector(".boss-caret-down").style.cssText = "display: none;"
        document.querySelector("div.Boss").style.cssText = "display: none;"
        document.querySelector(".displaycharacter").style.cssText = "pointer-events: none;"
        document.querySelector(".displaycharacter").style.cssText = "display: none;"
        document.querySelector(".displayboss").style.cssText = "pointer-events: none;"
        document.querySelector(".displayboss").style.cssText = "display: none;"
        document.querySelector(".filter").style.cssText = "pointer-events: none;"
        document.querySelector(".selectall_char").style.cssText = "display: none;"
        document.querySelector(".unselectall_char").style.cssText = "display: none;"
        document.querySelector(".selectall_boss").style.cssText = "display: none;"
        document.querySelector(".unselectall_boss").style.cssText = "display: none;"
        document.querySelector(".return").style.cssText = "display: ;"
        document.querySelector(".search_input").disabled = true;
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
        document.querySelector(".search_input").disabled = false;

        if (Boss.length == Countboss.length){
            document.querySelector(".selectall_boss").style.cssText = "display: none;"
            document.querySelector(".unselectall_boss").style.cssText = "display: ;"
        }else{
            document.querySelector(".selectall_boss").style.cssText = "display: ;"
        }
        if(Boss.length > 0){
            document.querySelector(".unselectall_boss").style.cssText = "display: ;"
        }else{
            document.querySelector(".unselectall_boss").style.cssText = "display: none;"
        }
        if (Character.length == CharCheck.length){
            document.querySelector(".selectall_char").style.cssText = "display: none;"
            document.querySelector(".unselectall_char").style.cssText = "display: ;"
        }else{
            document.querySelector(".selectall_char").style.cssText = "display: ;"
        }
        if(Character.length > 0){
            document.querySelector(".unselectall_char").style.cssText = "display: ;"
        }else{
            document.querySelector(".unselectall_char").style.cssText = "display: none;"
        }

        csw = true;
        bsw = true;
        ransw = false;
        return
    }
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
    document.querySelector(".random_again").style.cssText = "display: none;"
    document.querySelector(".search_input").disabled = false;

    if (Boss.length == Countboss.length){
        document.querySelector(".selectall_boss").style.cssText = "display: none;"
        document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
        document.querySelector(".selectall_boss").style.cssText = "display: ;"
    }
    if(Boss.length > 0){
        document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    }else{
        document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    }
    if (Character.length == CharCheck.length){
        document.querySelector(".selectall_char").style.cssText = "display: none;"
        document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
        document.querySelector(".selectall_char").style.cssText = "display: ;"
    }
    if(Character.length > 0){
        document.querySelector(".unselectall_char").style.cssText = "display: ;"
    }else{
        document.querySelector(".unselectall_char").style.cssText = "display: none;"
    }

    ransw = false;
    csw = true;
    bsw = true;
}

const displays = document.getElementsByClassName("displaychar");
const namechar = document.getElementsByClassName("charname");
const displayboss = document.getElementsByClassName("disboss");
const nameboss = document.getElementsByClassName("bossname");

function selectcharall(){
    document.querySelector(".selectall_char").style.cssText = "display: none;"
    document.querySelector(".unselectall_char").style.cssText = "display: ;"
  
    for(displaychar of displays){
        displaychar.style.cssText = Borders;
    }

    Character.length = 0;
    Character.splice(0,Character.length);

    for(charname of namechar){
        Character[Character.length] = `${charname.innerHTML}`;
    }

    for (let i = 0; i < Countchar.length; i++){
        eval('count_' + Countchar[i] + ' = true;');
    }
}

function unselectcharall(){
    document.querySelector(".selectall_char").style.cssText = "display: ;"
    document.querySelector(".unselectall_char").style.cssText = "display: none;"

    for(displaychar of displays){
        displaychar.style.cssText = "";
    }

    for (let i = 0; i < Countchar.length; i++){
        eval('count_' + Countchar[i] + ' = false;');
    }

    Character.length = 0;
    Character.splice(0,Character.length);
}

function selectbossall(){
    document.querySelector(".selectall_boss").style.cssText = "display: none;"
    document.querySelector(".unselectall_boss").style.cssText = "display: ;"
    
    for(disboss of displayboss){
        disboss.style.cssText = Borders;
    }

    Boss.length = 0;
    Boss.splice(0,Boss.length);

    for(bossname of nameboss){
        Boss[Boss.length] = `${bossname.innerHTML}`;
    }

    for (let i = 0; i < Countboss.length; i++){
        eval('count_' + Countboss[i] + ' = true;');
    }
}

function unselectbossall(){
    document.querySelector(".selectall_boss").style.cssText = "display: ;"
    document.querySelector(".unselectall_boss").style.cssText = "display: none;"
    
    for(disboss of displayboss){
        disboss.style.cssText = "";
    }

    for (let i = 0; i < Countboss.length; i++){
        eval('count_' + Countboss[i] + ' = false;');
    }

    Boss.length = 0;
    Boss.splice(0,Boss.length);
}