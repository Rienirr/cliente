"use strict";
window.onload=()=>{


String.prototype.repetir =function (numero){//Controlamos que es un número.Con esto convertimos los números decimales a enteros.
     
    if(Number.isInteger(numero)&& numero>0)
  
    {
        
        for(let i=0;i<numero;i++){
            if(i== numero-1){
                return this;
            }
       console.log(this);//Así lo imprimos por pantalla todas las veces menos la última.Que devolvemos un string.
         
        }
      
    }
    else{//Controlamos que no es un número.
    return "Pon un número correcto animal!!";
    }

 
};
console.log("hola x veces".repetir("3.6"));
console.log("hola x veces".repetir("a"));
console.log("hola x veces".repetir(2));

;

}