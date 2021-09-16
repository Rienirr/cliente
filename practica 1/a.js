"use strict";
let alturaJuan = 175;
let alturaMarcos= 183;
let masaJuan = 68;
let masaMarcos = 9;
let marcosEsMasPesado = true;
let imcJuan = 0;
let imcMarcos= 0;
let indice= 0;
function imc(altura, masa){

indice = masa/(altura*altura);
return indice;

}

 imcMarcos= imc(alturaMarcos,masaMarcos);
 imcJuan= imc(alturaJuan,masaJuan);

if (imcMarcos<imcJuan){
    marcosEsMasPesado= false;
}
console.log(" ¿Tiene Marco más IMC "+marcosEsMasPesado);