//Array
const Boss = [];
const Character = [];
const Elements = ["Anemo", "Dendro", "Electro", "Geo", "Hydro"];

const listAnemo = ["Faruzan", "Jean", "Kazuha", "Sayu", "Heizou", "Sucrose", "Venti", "Wanderer", "Xiao", "Lynette"];
const listCryo = ["Aloy", "Chongyun", "Diona", "Eula", "Ganyu", "Kaeya", "Ayaka", "Layla", "Mika", "Qiqi", "Rosaria", "Shenhe", "Freminet","Wriothesley"];
const listDendro = ["Alhaitham", "Baizhu", "Collei", "Kaveh", "Kirara", "Nahida", "Tighnari", "Yaoyao"];
const listElectro = ["Beidou", "Cyno", "Dori", "Fischl", "Keqing", "Kujou Sara", "Kuki Shinobu", "Lisa", "Raiden", "Razor", "Yae Miko"];
const listGeo = ["Albedo", "Arataki Itto", "Gorou", "Ningguang", "Noelle", "Yunjin", "Zhongli"];
const listHydro = ["Barbara", "Candace", "Ayato", "Mona", "Nilou", "Kokomi", "Tartaglia", "Xingqiu", "Yelan", "Neuvillette"];
const listPyro = ["Amber", "Bennett", "Dehya", "Diluc", "Hutao", "Klee", "Thoma", "Xiangling", "Xinyan", "Yanfei", "Yoimiya", "Lyney"];

const FourStar = ["Amber", "Barbara", "Beidou", "Bennett", "Candace", "Chongyun", "Collei", "Diona", "Dori", "Faruzan", "Fischl",
    "Gorou", "Kaeya", "Kaveh", "Kirara", "Kujou Sara", "Kuki Shinobu", "Layla", "Lisa", "Mika", "Ningguang", "Noelle", "Razor",
    "Rosaria", "Sayu", "Heizou", "Sucrose", "Thoma", "Xiangling", "Xingqiu", "Xinyan", "Yanfei", "Yaoyao", "Yunjin", "Lynette", "Freminet"
];

const FiveStar = ["Albedo", "Alhaitham", "Aloy", "Arataki Itto", "Baizhu", "Cyno", "Dehya", "Diluc", "Eula", "Ganyu", "Hutao",
    "Jean", "Ayaka", "Ayato", "Kazuha", "Keqing", "Klee", "Mona", "Nahida", "Nilou", "Qiqi", "Raiden",
    "Kokomi", "Shenhe", "Tartaglia", "Tighnari", "Venti", "Wanderer", "Xiao", "Yae Miko", "Yelan", "Yoimiya", "Zhongli", "Lyney", "Neuvillette", "Wriothesley"
];

const Countchar = ["Amber", "Barbara", "Beidou", "Bennett", "Candace", "Chongyun", "Collei", "Diona", "Dori", "Faruzan", "Fischl",
    "Gorou", "Kaeya", "Kaveh", "Kirara", "Kujou_Sara", "Kuki_Shinobu", "Layla", "Lisa", "Mika", "Ningguang", "Noelle", "Razor",
    "Rosaria", "Sayu", "Heizou", "Sucrose", "Thoma", "Xiangling", "Xingqiu", "Xinyan", "Yanfei", "Yaoyao", "Yunjin", "Lynette", "Freminet", "Aether", "Albedo",
    "Alhaitham", "Aloy", "Arataki_Itto", "Baizhu", "Cyno", "Dehya", "Diluc", "Eula", "Ganyu", "Hutao", "Jean", "Ayaka", "Ayato",
    "Kazuha", "Keqing", "Klee", "Mona", "Nahida", "Nilou", "Qiqi", "Raiden", "Kokomi", "Shenhe", "Tartaglia", "Tighnari", "Venti",
    "Wanderer", "Xiao", "Yae_miko", "Yelan", "Yoimiya", "Zhongli", "Lyney", "Neuvillette", "Wriothesley"
];

const Countboss = ["Anemo_Hypotasis", "Cryo_Hypotasis", "Dendro_Hypotasis", "Electro_Hypotasis", "Geo_Hypotasis", "Hydro_Hypotasis", "Pyro_Hypotasis", "Cryo_Regisvine", "Electro_Regisvine", "Pyro_Regisvine",
    "Oceanid", "Primo_Geovishap", "Golden_Wolflord", "Bathysmal_Vishap", "Thunder_Manifestation", "Iniquitous_Baptist", "Jadeplume_Terrorshroom", "Setekh_Wenut", "Maguu_Kenki", "Aeonblight_Drake", "Algorithm",
    "Perpetual_Mechanical_Array", "Ruin_Serpent", "Lupus_Boreas", "Stormterror", "Azhdaha", "Childe", "La_Signora", "Magatsu_Mitake", "Shouki_no_Kami", "Warden_of_Oasis", "Icewind_Suite", "Emperor_of_Fire_and_Iron"
];

const CharCheck = ["Amber", "Barbara", "Beidou", "Bennett", "Candace", "Chongyun", "Collei", "Diona", "Dori", "Faruzan", "Fischl",
    "Gorou", "Kaeya", "Kaveh", "Kirara", "Kujou Sara", "Kuki Shinobu", "Layla", "Lisa", "Mika", "Ningguang", "Noelle", "Razor",
    "Rosaria", "Sayu", "Shikanoin Heizou", "Sucrose", "Thoma", "Xiangling", "Xingqiu", "Xinyan", "Yanfei", "Yaoyao", "Yunjin", "Lynette", "Freminet", "Aether traveler mc Lumine", "Albedo",
    "Alhaitham", "Aloy", "Arataki Itto", "Baizhu", "Cyno", "Dehya", "Diluc", "Eula", "Ganyu", "Hu tao Hutao", "Jean", "Kamisato Ayaka", "Kamisato Ayato",
    "Kaedehara Kazuha", "Keqing", "Klee", "Mona", "Nahida", "Nilou", "Qiqi", "Raiden Shogun", "Sangonomiya Kokomi", "Shenhe", "Tartaglia Childe", "Tighnari", "Venti",
    "Wanderer Scaramouche", "Xiao", "Yae Miko", "Yelan", "Yoimiya", "Zhongli", "Lyney", "Neuvillette", "Wriothesley"
];

//Select
const Borders = "border-top: 5px solid #00FFDD; border-bottom: 5px solid #00FFDD;transition: all .15s ease-in-out;";

let count_Aether = false;
let count_Albedo = false;
let count_Alhaitham = false;
let count_Aloy = false;
let count_Amber = false;
let count_Arataki_Itto = false;
let count_Baizhu = false;
let count_Barbara = false;
let count_Beidou = false;
let count_Bennett = false;
let count_Candace = false;
let count_Chongyun = false;
let count_Collei = false;
let count_Cyno = false;
let count_Dehya = false;
let count_Diluc = false;
let count_Diona = false;
let count_Dori = false;
let count_Eula = false;
let count_Faruzan = false;
let count_Fischl = false;
let count_Freminet = false;
let count_Ganyu = false;
let count_Gorou = false;
let count_Hutao = false;
let count_Jean = false;
let count_Kaeya = false;
let count_Kaveh = false;
let count_Ayaka = false;
let count_Ayato = false;
let count_Kazuha = false;
let count_Keqing = false;
let count_Kirara = false;
let count_Klee = false;
let count_Kujou_Sara = false;
let count_Kuki_Shinobu = false;
let count_Layla = false;
let count_Lisa = false;
let count_Lynette = false;
let count_Lyney = false
let count_Mika = false;
let count_Mona = false;
let count_Nahida = false;
let count_Neuvillette = false;
let count_Nilou = false;
let count_Ningguang = false;
let count_Noelle = false;
let count_Qiqi = false;
let count_Raiden = false;
let count_Razor = false;
let count_Rosaria = false;
let count_Kokomi = false;
let count_Sayu = false;
let count_Shenhe = false;
let count_Heizou = false;
let count_Sucrose = false;
let count_Tartaglia = false;
let count_Thoma = false;
let count_Tighnari = false;
let count_Venti = false;
let count_Wanderer = false;
let count_Wriothesley = false;
let count_Xiangling = false;
let count_Xiao = false;
let count_Xingqiu = false;
let count_Xinyan = false;
let count_Yae_miko = false;
let count_Yanfei = false;
let count_Yaoyao = false;
let count_Yelan = false;
let count_Yoimiya = false;
let count_Yunjin = false;
let count_Zhongli = false;

let count_Anemo_Hypotasis = false;
let count_Cryo_Hypotasis = false;
let count_Dendro_Hypotasis = false;
let count_Electro_Hypotasis = false;
let count_Geo_Hypotasis = false;
let count_Hydro_Hypotasis = false;
let count_Pyro_Hypotasis = false;
let count_Cryo_Regisvine = false;
let count_Electro_Regisvine = false;
let count_Pyro_Regisvine = false;
let count_Oceanid = false;
let count_Primo_Geovishap = false;
let count_Golden_Wolflord = false;
let count_Bathysmal_Vishap = false;
let count_Thunder_Manifestation = false;
let count_Iniquitous_Baptist = false;
let count_Jadeplume_Terrorshroom = false;
let count_Setekh_Wenut = false;
let count_Maguu_Kenki = false;
let count_Aeonblight_Drake = false;
let count_Algorithm = false;
let count_Perpetual_Mechanical_Array = false;
let count_Ruin_Serpent = false;
let count_Icewind_Suite = false;
let count_Emperor_of_Fire_and_Iron = false;
let count_Lupus_Boreas = false;
let count_Stormterror = false;
let count_Azhdaha = false;
let count_Childe = false;
let count_La_Signora = false;
let count_Magatsu_Mitake = false;
let count_Shouki_no_Kami = false;
let count_Warden_of_Oasis = false;


////Filter
let Char_4 = true;
let Char_5 = true;
let Char_all = true;

let sw = true;
let cm = true;
let pl = true;
let b = true;
let ctl = true;
let types_all = true;

let anm = true;
let co = true;
let dd = true;
let elt = true;
let go = true;
let hd = true;
let po = true;
let elements_all = true;

///////////////////////////4
let sw_anm_four = true;
let sw_co_four = true;
let sw_dd_four = true;
let sw_elt_four = true;
let sw_geo_four = true;
let sw_hydro_four = true;
let sw_pyro_four = true;

let cm_anm_four = true;
let cm_co_four = true;
let cm_dd_four = true;
let cm_elt_four = true;
let cm_geo_four = true;
let cm_hydro_four = true;
let cm_pyro_four = true;

let pl_anm_four = true;
let pl_co_four = true;
let pl_dd_four = true;
let pl_elt_four = true;
let pl_geo_four = true;
let pl_hydro_four = true;
let pl_pyro_four = true;

let b_anm_four = true;
let b_co_four = true;
let b_dd_four = true;
let b_elt_four = true;
let b_geo_four = true;
let b_hydro_four = true;
let b_pyro_four = true;

let ctl_anm_four = true;
let ctl_co_four = true;
let ctl_dd_four = true;
let ctl_elt_four = true;
let ctl_geo_four = true;
let ctl_hydro_four = true;
let ctl_pyro_four = true;

///////////////////////////5
let sw_anm_five = true;
let sw_co_five = true;
let sw_dd_five = true;
let sw_elt_five = true;
let sw_geo_five = true;
let sw_hydro_five = true;
let sw_pyro_five = true;

let cm_anm_five = true;
let cm_co_five = true;
let cm_dd_five = true;
let cm_elt_five = true;
let cm_geo_five = true;
let cm_hydro_five = true;
let cm_pyro_five = true;

let pl_anm_five = true;
let pl_co_five = true;
let pl_dd_five = true;
let pl_elt_five = true;
let pl_geo_five = true;
let pl_hydro_five = true;
let pl_pyro_five = true;

let b_anm_five = true;
let b_co_five = true;
let b_dd_five = true;
let b_elt_five = true;
let b_geo_five = true;
let b_hydro_five = true;
let b_pyro_five = true;

let ctl_anm_five = true;
let ctl_co_five = true;
let ctl_dd_five = true;
let ctl_elt_five = true;
let ctl_geo_five = true;
let ctl_hydro_five = true;
let ctl_pyro_five = true;

//////////////////////////////
const four = document.getElementsByClassName("four_star");
const five = document.getElementsByClassName("five_star");

const sword = document.getElementsByClassName("Sword");
const claymore = document.getElementsByClassName("Claymore");
const polearm = document.getElementsByClassName("Polearm");
const bow = document.getElementsByClassName("Bow");
const catalyst = document.getElementsByClassName("Catalyst");

const anemo = document.getElementsByClassName("Anemo");
const cryo = document.getElementsByClassName("Cryo");
const dendro = document.getElementsByClassName("Dendro");
const electro = document.getElementsByClassName("Electro");
const geo = document.getElementsByClassName("Geo");
const hydro = document.getElementsByClassName("Hydro");
const pyro = document.getElementsByClassName("Pyro");

////////////////////////////////////////////////////////////////////////4444
const sword_anemo_four = document.getElementsByClassName("Sword_Anemo_Four");
const sword_cryo_four = document.getElementsByClassName("Sword_Cryo_Four");
const sword_dendro_four = document.getElementsByClassName("Sword_Dendro_Four");
const sword_electro_four = document.getElementsByClassName("Sword_Electro_Four");
const sword_geo_four = document.getElementsByClassName("Sword_Geo_Four");
const sword_hydro_four = document.getElementsByClassName("Sword_Hydro_Four");
const sword_pyro_four = document.getElementsByClassName("Sword_Pyro_Four");

const claymore_anemo_four = document.getElementsByClassName("Claymore_Anemo_Four");
const claymore_cryo_four = document.getElementsByClassName("Claymore_Cryo_Four");
const claymore_dendro_four = document.getElementsByClassName("Claymore_Dendro_Four");
const claymore_electro_four = document.getElementsByClassName("Claymore_Electro_Four");
const claymore_geo_four = document.getElementsByClassName("Claymore_Geo_Four");
const claymore_hydro_four = document.getElementsByClassName("Claymore_Hydro_Four");
const claymore_pyro_four = document.getElementsByClassName("Claymore_Pyro_Four");

const polearm_anemo_four = document.getElementsByClassName("Polearm_Anemo_Four");
const polearm_cryo_four = document.getElementsByClassName("Polearm_Cryo_Four");
const polearm_dendro_four = document.getElementsByClassName("Polearm_Dendro_Four");
const polearm_electro_four = document.getElementsByClassName("Polearm_Electro_Four");
const polearm_geo_four = document.getElementsByClassName("Polearm_Geo_Four");
const polearm_hydro_four = document.getElementsByClassName("Polearm_Hydro_Four");
const polearm_pyro_four = document.getElementsByClassName("Polearm_Pyro_Four");

const bow_anemo_four = document.getElementsByClassName("Bow_Anemo_Four");
const bow_cryo_four = document.getElementsByClassName("Bow_Cryo_Four");
const bow_dendro_four = document.getElementsByClassName("Bow_Dendro_Four");
const bow_electro_four = document.getElementsByClassName("Bow_Electro_Four");
const bow_geo_four = document.getElementsByClassName("Bow_Geo_Four");
const bow_hydro_four = document.getElementsByClassName("Bow_Hydro_Four");
const bow_pyro_four = document.getElementsByClassName("Bow_Pyro_Four");

const catalyst_anemo_four = document.getElementsByClassName("Catalyst_Anemo_Four");
const catalyst_cryo_four = document.getElementsByClassName("Catalyst_Cryo_Four");
const catalyst_dendro_four = document.getElementsByClassName("Catalyst_Dendro_Four");
const catalyst_electro_four = document.getElementsByClassName("Catalyst_Electro_Four");
const catalyst_geo_four = document.getElementsByClassName("Catalyst_Geo_Four");
const catalyst_hydro_four = document.getElementsByClassName("Catalyst_Hydro_Four");
const catalyst_pyro_four = document.getElementsByClassName("Catalyst_Pyro_Four");

////////////////////////////////////////////////////////////////////////555
const sword_anemo_five = document.getElementsByClassName("Sword_Anemo_Five");
const sword_cryo_five = document.getElementsByClassName("Sword_Cryo_Five");
const sword_dendro_five = document.getElementsByClassName("Sword_Dendro_Five");
const sword_electro_five = document.getElementsByClassName("Sword_Electro_Five");
const sword_geo_five = document.getElementsByClassName("Sword_Geo_Five");
const sword_hydro_five = document.getElementsByClassName("Sword_Hydro_Five");
const sword_pyro_five = document.getElementsByClassName("Sword_Pyro_Five");

const claymore_anemo_five = document.getElementsByClassName("Claymore_Anemo_Five");
const claymore_cryo_five = document.getElementsByClassName("Claymore_Cryo_Five");
const claymore_dendro_five = document.getElementsByClassName("Claymore_Dendro_Five");
const claymore_electro_five = document.getElementsByClassName("Claymore_Electro_Five");
const claymore_geo_five = document.getElementsByClassName("Claymore_Geo_Five");
const claymore_hydro_five = document.getElementsByClassName("Claymore_Hydro_Five");
const claymore_pyro_five = document.getElementsByClassName("Claymore_Pyro_Five");

const polearm_anemo_five = document.getElementsByClassName("Polearm_Anemo_Five");
const polearm_cryo_five = document.getElementsByClassName("Polearm_Cryo_Five");
const polearm_dendro_five = document.getElementsByClassName("Polearm_Dendro_Five");
const polearm_electro_five = document.getElementsByClassName("Polearm_Electro_Five");
const polearm_geo_five = document.getElementsByClassName("Polearm_Geo_Five");
const polearm_hydro_five = document.getElementsByClassName("Polearm_Hydro_Five");
const polearm_pyro_five = document.getElementsByClassName("Polearm_Pyro_Five");

const bow_anemo_five = document.getElementsByClassName("Bow_Anemo_Five");
const bow_cryo_five = document.getElementsByClassName("Bow_Cryo_Five");
const bow_dendro_five = document.getElementsByClassName("Bow_Dendro_Five");
const bow_electro_five = document.getElementsByClassName("Bow_Electro_Five");
const bow_geo_five = document.getElementsByClassName("Bow_Geo_Five");
const bow_hydro_five = document.getElementsByClassName("Bow_Hydro_Five");
const bow_pyro_five = document.getElementsByClassName("Bow_Pyro_Five");

const catalyst_anemo_five = document.getElementsByClassName("Catalyst_Anemo_Five");
const catalyst_cryo_five = document.getElementsByClassName("Catalyst_Cryo_Five");
const catalyst_dendro_five = document.getElementsByClassName("Catalyst_Dendro_Five");
const catalyst_electro_five = document.getElementsByClassName("Catalyst_Electro_Five");
const catalyst_geo_five = document.getElementsByClassName("Catalyst_Geo_Five");
const catalyst_hydro_five = document.getElementsByClassName("Catalyst_Hydro_Five");
const catalyst_pyro_five = document.getElementsByClassName("Catalyst_Pyro_Five");
