"use strict";
function numeroaletorio() {
    return Math.floor(Math.random()*101);}

let v1;
let v2;
let resultado;

function crearyrellenarArrays() {
let longitud= numeroaletorio();
 v1= new Array(longitud);
 v2= new Array(longitud);
         for(let i=0;i<longitud;i++){
             v1[i]=numeroaletorio();
             v2[i]=numeroaletorio();
         }
         return("Los arrays han sido creados y rellenados aleatoriamente");//para ir informando de todo lo que ocurre
 }
 function sumarArrays() {
    resultado= new Array(v1.length);

         for(let i=0;i<v1.length;i++){
             resultado[i]=v1[i]+v2[i];            
         }
         return("Se ha sumado los array de forma correcta");//para ir informando de todo lo que ocurre
     
 }
 function mostrar() {
    
            console.log(`los arrays creados son [${v1}] y [${v2}] dando la suma como resultado [${resultado}]`);
    
     
 }
let suma= sumarArrays;
let aletorio= crearyrellenarArrays;
let imprimir= mostrar;

 function calcular(f1,f2,f3) {
    console.log(f1());
    console.log(f2());
    console.log(f3());
     
 }
 calcular(aletorio,suma, imprimir);