document.querySelector(".search_input").addEventListener("input",()=>{
    let input = document.querySelector(".search_input").value.toLowerCase();
    for(var i=0;i<CharCheck.length;i++){
        if(CharCheck[i].toLowerCase().indexOf(input) > -1){
            document.querySelector(`.${Countchar[i]}`).style.display = "";
        }else{
            document.querySelector(`.${Countchar[i]}`).style.display = "none";
        }            
    }
});
