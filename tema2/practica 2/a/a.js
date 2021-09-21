"use strict";
function sumar( num1, num2){
    if(  arguments.length<2){
     return 'Error para sumar se se necesitan al menos dos operandos';
    }
    else{
      let suma=0;//si no lo inicializo a como 0 me da que el resultado es NaN 
        for(let i=0;i<arguments.length;i++){
          if(typeof arguments[i]  !=='number' ) {
            return 'Los parámetros para la suma no son numéricos '; break;
         
        }
        else{  suma += arguments[i]; }
        }
        return `El resultdao de la suma de los números es ${suma}`;
     
    }
  }
  // pongo todas las posibilades para facilitar la correción
console.log(sumar());
console.log(sumar(4,2,3,'s',5,17));
console.log(sumar(4,2,3,5,16));
