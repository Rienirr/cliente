"use strict"
let precioInicial =[124,48,268];
let propinas = new Array(3);
let precioFinal = new Array(3);
function Calculadora(array){
    for(let i=0; i<array.length;i++){
        if(array[i]<50){
       propinas[i]=  array[i]*20/100;
       precioFinal[i]= propinas[i]+ precioInicial[i];
        }
        else if (array[i]>=50 && array[i]<=200){
            propinas[i]=  array[i]*15/100;
            precioFinal[i]= propinas[i]+ precioInicial[i];
        } 
        else{
            propinas[i] =     array[i]/10;
            precioFinal[i] = propinas[i] + precioInicial[i];
        }
        console.log("los precios iniciales son "+precioInicial[i]+"€ las propinas que vamos a dejar "+ propinas[i] +"€ y el precio final sumando lo anterior es "+ precioFinal[i])+"€";
    }
  

}
Calculadora(precioInicial);
