var text = document.querySelector("#text");
var epaule = document.querySelector("#p1");
var le_coude = document.querySelector("#p2");
var poignet = document.querySelector("#p3");
var hanche = document.querySelector("#p4");
var genou = document.querySelector("#p5");
var cheville = document.querySelector("#p6");

epaule.addEventListener("mouseover", function(){ text.innerHTML = "L\'EPAULE : L\'épaule (nom_féminin) est la région morphologique se situant à la jonction du tronc avec le membre supérieur. Elle comporte plusieurs articulations qui concourent à en faire le complexe articulaire le plus mobile du corps humain. Elle permet d'orienter le membre supérieur dans lespace, autorisant en particulier son extrémité effectrice, la main, à assurer ses rôles de préhension et de communication avec l'environnement situé à sa portée.";
});

epaule.addEventListener("mouseout", function(){ text.innerHTML="";});

le_coude.addEventListener("mouseover", function(){ text.innerHTML = "LE COUDE : Partie extérieure du bras, à l'endroit où il se plie.";
});

le_coude.addEventListener("mouseout", function(){ text.innerHTML="";});

poignet.addEventListener("mouseover", function(){ text.innerHTML = "LE POIGNET : Articulation qui réunit l'avant-bras à la main.";
});

poignet.addEventListener("mouseout", function(){ text.innerHTML="";});

hanche.addEventListener("mouseover", function(){ text.innerHTML = "LA HANCHE : Chacune des deux régions symétriques du corps formant saillie au-dessous de la taille (os iliaque).";
});

hanche.addEventListener("mouseout", function(){ text.innerHTML="";});

genou.addEventListener("mouseover", function(){ text.innerHTML = "LE GENOU : Partie du corps humain où la jambe s'articule avec la cuisse.";
});

genou.addEventListener("mouseout", function(){ text.innerHTML="";});

cheville.addEventListener("mouseover", function(){ text.innerHTML = "LA CHEVILLE : Tige rigide dont on se sert pour boucher un trou, assembler des pièces.";
});

cheville.addEventListener("mouseout", function(){ text.innerHTML="";});