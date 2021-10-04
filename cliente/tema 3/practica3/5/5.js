"use strict";
function calcularDni(letra){
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    if(letras.indexOf(letra)<0){//para controlar que sean letras Correctas 
        console.log("introduce una letra Correcta");
    }else{
      let num=  letras.indexOf(letra);
     for(let i=num;i<=999;i+=23){
         console.log(`${i}${letras.charAt(num)}`);
     }
}
}
calcularDni("T");


