"use strict";
let puntuacionMediaJuan;
let puntuacionMediaMiguel;
let puntuacionMediaMaria;
let ganador;
let equipoGanador;
function puntuacionMedia(number1, number2,number3){
    let media=(number1+number2+number3)/3;
    return media;
}
puntuacionMediaJuan= puntuacionMedia(89,120,103);
puntuacionMediaMiguel= puntuacionMedia(116,94,123);
if (puntuacionMediaJuan>puntuacionMediaMiguel){
    ganador= "Juan"; equipoGanador=puntuacionMediaJuan;
}
else if(puntuacionMediaJuan === puntuacionMediaMiguel){
    ganador= "Juan y miguel"; equipoGanador=puntuacionMediaMiguel;/*ya que ambos tienen los mismos puntos */
}
else{
    ganador="Miguel"; equipoGanador=puntuacionMediaMiguel;
}
console.log("El equipo con más puntos es "+ganador+" "+equipoGanador);


console.log("Cambio de puntuaciones")
puntuacionMediaJuan= puntuacionMedia(99,120,113);
//puntuacionMediaJuan= puntuacionMedia(116,94,13);
puntuacionMediaMiguel= puntuacionMedia(116,94,13);
if (puntuacionMediaJuan>puntuacionMediaMiguel){
    ganador= "Juan"; equipoGanador=puntuacionMediaJuan;
}
else if(puntuacionMediaJuan === puntuacionMediaMiguel){
    ganador= "Juan y Miguel"; equipoGanador=puntuacionMediaMiguel;/*ya que ambos tienen los mismos puntos */
}
else{
    ganador="Miguel"; equipoGanador=puntuacionMediaMiguel;
}
console.log("el equipo con más puntos es "+ganador+" "+equipoGanador);

console.log("Cambio de puntuaciones a las iniciales añadiendo al equipo de María  ")
puntuacionMediaJuan= puntuacionMedia(89,120,103);
//puntuacionMediaJuan= puntuacionMedia(97,134,105);
//puntuacionMediaMiguel= puntuacionMedia(97,134,105); esta comentado para que ver que en caso de empate funciona como deseamos 
puntuacionMediaMiguel= puntuacionMedia(116,94,123);
puntuacionMediaMaria= puntuacionMedia(97,134,105);

/* He puesto todos estos if para comprobar los casos de empate pero hubiera sido más fácil una función */
if (puntuacionMediaJuan>puntuacionMediaMiguel && puntuacionMediaJuan>puntuacionMediaMaria){
    ganador= "Juan"; equipoGanador=puntuacionMediaJuan;
}
else if (puntuacionMediaMiguel> puntuacionMediaJuan && puntuacionMediaMiguel> puntuacionMediaMaria){
    ganador= "Miguel"; equipoGanador=puntuacionMediaMiguel;
}
else if(puntuacionMediaMaria> puntuacionMediaJuan && puntuacionMediaMaria> puntuacionMediaMiguel){
    ganador= "María"; equipoGanador=puntuacionMediaMaria;
}
else if(puntuacionMediaMiguel === puntuacionMediaMaria && puntuacionMediaMiguel === puntuacionMediaMaria){// he tenido problemas para poner este en el orden correcto ya que si lo ponía al final no llegaba
    ganador= "todos "; equipoGanador=puntuacionMediaMaria;
}

else if(puntuacionMediaJuan === puntuacionMediaMiguel){
    ganador= "Juan y Miguel"; equipoGanador=puntuacionMediaMiguel;
}
else if(puntuacionMediaJuan === puntuacionMediaMaria){
    ganador= "Juan y María"; equipoGanador=puntuacionMediaJuan;
}
else if(puntuacionMediaMiguel ===puntuacionMediaMaria){
    ganador= "Miguel y María"; equipoGanador=puntuacionMediaMaria;
}

console.log("el equipo con más puntos es "+ganador+" "+equipoGanador);