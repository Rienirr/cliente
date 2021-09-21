"use strict";

let multiplicacion= function (num){
    for(let i=0;i<=10;i++){  
     console.log(`${num} x ${i} = ${num*i}`);
    }
}
function tablasMultiplicar(num,funcion){
    if(typeof num!== "number" || num<=2){
        return "Asegúrate de introducir un numero correcto";
    }
    else{
     for( num;num>=2;num--){
         console.log(`--- Tabla del ${num} ---`);
         funcion(num);
     }

    }
}
tablasMultiplicar(5,multiplicacion);