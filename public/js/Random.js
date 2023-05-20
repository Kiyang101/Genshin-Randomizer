function start_random(){
  let ran1 = Character.splice(Math.floor(Math.random()*Character.length), 1);
  let ran2 = Character.splice(Math.floor(Math.random()*Character.length), 1);
  let ran3 = Character.splice(Math.floor(Math.random()*Character.length), 1);
  let ran4 = Character.splice(Math.floor(Math.random()*Character.length), 1);
  let ranboss = Boss.splice(Math.floor(Math.random()*Boss.length), 1);
  let Element = Elements.splice(Math.floor(Math.random()*Elements.length), 1);

  document.getElementById("charf").src = `image/Character/all/${ran1[0]}.png`;
  document.getElementById("chars").src = `image/Character/all/${ran2[0]}.png`;
  document.getElementById("charth").src = `image/Character/all/${ran3[0]}.png`;
  document.getElementById("charfth").src = `image/Character/all/${ran4[0]}.png`;
  document.getElementById("bossf").src = `image/Boss/${ranboss[0]}.png`;

  document.getElementById("name_text_first").innerHTML = `${ran1[0]}`;
  document.getElementById("name_text_second").innerHTML = `${ran2[0]}`;
  document.getElementById("name_text_thrid").innerHTML = `${ran3[0]}`;
  document.getElementById("name_text_fourth").innerHTML = `${ran4[0]}`;
  document.getElementById("name_text_boss").innerHTML = `${ranboss[0]}`;

  if (ran1[0] == "Aether"){
    document.getElementById("elementf").src = "";
    document.querySelector(".random .bg.f").style.cssText = "background-image: url(image/Character/bg/Background_Item_5_Star.png);";
    document.getElementById("elementf").src = `image/Element/${Element[0]}.png`;
  }
  if (ran2[0] == "Aether"){
    document.getElementById("elements").src = "";
    document.querySelector(".random .bg.s").style.cssText = "background-image: url(image/Character/bg/Background_Item_5_Star.png);";
    document.getElementById("elements").src = `image/Element/${Element[0]}.png`;
  }
  if (ran3[0] == "Aether"){
    document.getElementById("elementth").src = "";
    document.querySelector(".random .bg.th").style.cssText = "background-image: url(image/Character/bg/Background_Item_5_Star.png);";
    document.getElementById("elementth").src = `image/Element/${Element[0]}.png`;
  }
  if (ran4[0] == "Aether"){
    document.getElementById("elementfth").src = "";
    document.querySelector(".random .bg.fth").style.cssText = "background-image: url(image/Character/bg/Background_Item_5_Star.png);";
    document.getElementById("elementfth").src = `image/Element/${Element[0]}.png`;
  }

  //////////////////////////////////////////////////////////////////////////First Random Character
  for (let i = 0; i < listAnemo.length; i++){
    if(ran1[0] == listAnemo[i]){    
      document.getElementById("elementf").src = "image/Element/Anemo.png";
    }
  }

  for (let i = 0; i < listCryo.length; i++){
    if(ran1[0] == listCryo[i]){
      document.getElementById("elementf").src = "image/Element/Cryo.png";
    }
  }

  for (let i = 0; i < listDendro.length; i++){
    if(ran1[0] == listDendro[i]){
      document.getElementById("elementf").src = "image/Element/Dendro.png";
    }
  }

  for (let i = 0; i < listElectro.length; i++){
    if(ran1[0] == listElectro[i]){
      document.getElementById("elementf").src = "image/Element/Electro.png";
    }
  }

  for (let i = 0; i < listGeo.length; i++){
    if(ran1[0] == listGeo[i]){
      document.getElementById("elementf").src = "image/Element/Geo.png";
    }
  }

  for (let i = 0; i < listHydro.length; i++){
    if(ran1[0] == listHydro[i]){
      document.getElementById("elementf").src = "image/Element/Hydro.png";
    }
  }

  for (let i = 0; i < listPyro.length; i++){
    if(ran1[0] == listPyro[i]){
      document.getElementById("elementf").src = "image/Element/Pyro.png";
    }
  }

  ///////////////////////////////////////////////////////////////////////////Second Random Character
  for (let i = 0; i < listAnemo.length; i++){
    if(ran2[0] == listAnemo[i]){
      document.getElementById("elements").src = "image/Element/Anemo.png";
    }
  }

  for (let i = 0; i < listCryo.length; i++){
    if(ran2[0] == listCryo[i]){
      document.getElementById("elements").src = "image/Element/Cryo.png";
    }
  }

  for (let i = 0; i < listDendro.length; i++){
    if(ran2[0] == listDendro[i]){
      document.getElementById("elements").src = "image/Element/Dendro.png";
    }
  }

  for (let i = 0; i < listElectro.length; i++){
    if(ran2[0] == listElectro[i]){
      document.getElementById("elements").src = "image/Element/Electro.png";
    }
  }

  for (let i = 0; i < listGeo.length; i++){
    if(ran2[0] == listGeo[i]){
      document.getElementById("elements").src = "image/Element/Geo.png";
    }
  }

  for (let i = 0; i < listHydro.length; i++){
    if(ran2[0] == listHydro[i]){
      document.getElementById("elements").src = "image/Element/Hydro.png";
    }
  }

  for (let i = 0; i < listPyro.length; i++){
    if(ran2[0] == listPyro[i]){
      document.getElementById("elements").src = "image/Element/Pyro.png";
    }
  }

  ///////////////////////////////////////////////////////////////////////////////Third Random Character
  for (let i = 0; i < listAnemo.length; i++){
    if(ran3[0] == listAnemo[i]){
      document.getElementById("elementth").src = "image/Element/Anemo.png";
    }
  }

  for (let i = 0; i < listCryo.length; i++){
    if(ran3[0] == listCryo[i]){
      document.getElementById("elementth").src = "image/Element/Cryo.png";
    }
  }

  for (let i = 0; i < listDendro.length; i++){
    if(ran3[0] == listDendro[i]){
      document.getElementById("elementth").src = "image/Element/Dendro.png";
    }
  }

  for (let i = 0; i < listElectro.length; i++){
    if(ran3[0] == listElectro[i]){
      document.getElementById("elementth").src = "image/Element/Electro.png";
    }
  }

  for (let i = 0; i < listGeo.length; i++){
    if(ran3[0] == listGeo[i]){
      document.getElementById("elementth").src = "image/Element/Geo.png";
    }
  }

  for (let i = 0; i < listHydro.length; i++){
    if(ran3[0] == listHydro[i]){
      document.getElementById("elementth").src = "image/Element/Hydro.png";
    }
  }

  for (let i = 0; i < listPyro.length; i++){
    if(ran3[0] == listPyro[i]){
      document.getElementById("elementth").src = "image/Element/Pyro.png";
    }
  }

  //////////////////////////////////////////////////////////////////////////////Fourth Random Character
  for (let i = 0; i < listAnemo.length; i++){
    if(ran4[0] == listAnemo[i]){
      document.getElementById("elementfth").src = "image/Element/Anemo.png";
    }
  }

  for (let i = 0; i < listCryo.length; i++){
    if(ran4[0] == listCryo[i]){
      document.getElementById("elementfth").src = "image/Element/Cryo.png";
    }
  }

  for (let i = 0; i < listDendro.length; i++){
    if(ran4[0] == listDendro[i]){
      document.getElementById("elementfth").src = "image/Element/Dendro.png";
    }
  }

  for (let i = 0; i < listElectro.length; i++){
    if(ran4[0] == listElectro[i]){
      document.getElementById("elementfth").src = "image/Element/Electro.png";
    }
  }

  for (let i = 0; i < listGeo.length; i++){
    if(ran4[0] == listGeo[i]){
      document.getElementById("elementfth").src = "image/Element/Geo.png";
    }
  }

  for (let i = 0; i < listHydro.length; i++){
    if(ran4[0] == listHydro[i]){
      document.getElementById("elementfth").src = "image/Element/Hydro.png";
    }
  }

  for (let i = 0; i < listPyro.length; i++){
    if(ran4[0] == listPyro[i]){
      document.getElementById("elementfth").src = "image/Element/Pyro.png";
    }
  }

  ///Change BG character 
  ///444
  for (let i = 0; i < FourStar.length; i++){
    if(ran1[0] == FourStar[i]){
      document.querySelector(".random .bg.f").style.cssText = "background-image: url(image/Character/bg/Background_Item_4_Star.png);";
    }
  }
  for (let i = 0; i < FourStar.length; i++){
    if(ran2[0] == FourStar[i]){
      document.querySelector(".random .bg.s").style.cssText = "background-image: url(image/Character/bg/Background_Item_4_Star.png);";
    }
  }
  for (let i = 0; i < FourStar.length; i++){
    if(ran3[0] == FourStar[i]){
      document.querySelector(".random .bg.th").style.cssText = "background-image: url(image/Character/bg/Background_Item_4_Star.png);";
    }
  }
  for (let i = 0; i < FourStar.length; i++){
    if(ran4[0] == FourStar[i]){
      document.querySelector(".random .bg.fth").style.cssText = "background-image: url(image/Character/bg/Background_Item_4_Star.png);";
    }
  }

  ///555
  for (let i = 0; i < FiveStar.length; i++){
    if(ran1[0] == FiveStar[i]){
      document.querySelector(".random .bg.f").style.cssText = "background-image: url(image/Character/bg/Background_Item_5_Star.png);";
    }
  }
  for (let i = 0; i < FiveStar.length; i++){
    if(ran2[0] == FiveStar[i]){
      document.querySelector(".random .bg.s").style.cssText = "background-image: url(image/Character/bg/Background_Item_5_Star.png);";
    }
  }
  for (let i = 0; i < FiveStar.length; i++){
    if(ran3[0] == FiveStar[i]){
      document.querySelector(".random .bg.th").style.cssText = "background-image: url(image/Character/bg/Background_Item_5_Star.png);";
    }
  }
  for (let i = 0; i < FiveStar.length; i++){
    if(ran4[0] == FiveStar[i]){
      document.querySelector(".random .bg.fth").style.cssText = "background-image: url(image/Character/bg/Background_Item_5_Star.png);";
    }
  }

  Character[Character.length] = ran1[0];
  Character[Character.length] = ran2[0];
  Character[Character.length] = ran3[0];
  Character[Character.length] = ran4[0];
  Boss[Boss.length] = ranboss[0];
  Elements[Elements.length] = Element[0];

  document.querySelector(".start_random").style.cssText = "display: none;"
  document.querySelector(".section_random").style.cssText = "display: ;"
  document.querySelector(".return").style.cssText = "display: ;"
  document.querySelector(".random_again").style.cssText = "display: ;"
  document.querySelector(".random").style.cssText = "pointer-events: none;"
}