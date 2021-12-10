"use strict";
import {getTrivial, mostrarPreguntas} from "../importsAPI/TrivialApi.js"
window.onload = ()=>{
    var d= document;
    var numeroPreguntas= d.getElementById("preguntas");
    var dificultad= d.getElementById("dificultad");
    var categoria= d.getElementById("categoria");
    var boton = d.getElementById("empezar");
    boton.addEventListener("click",()=>{
       if( numeroPreguntas.selectedIndex==0 || dificultad.selectedIndex==0 || categoria.selectedIndex==0 ){
           console.log("error paquete");
        //Mostrar mensaje al usuario de Error.
       }
       else{
        let amount= numeroPreguntas.options[numeroPreguntas.selectedIndex].value;
        let difficulty=dificultad.options[dificultad.selectedIndex].value; 
        let category=categoria.options[categoria.selectedIndex].value; 
        getTrivial(amount,difficulty,category).then((trivial)=>{
            trivial.results.map((v,i,a)=>{//Así recorremos el array de preguntas y luego las mostramos debidamente
                console.log(v);
                mostrarPreguntas(v);
            });
        }).catch((error)=>{
console.log(error.message);
        });
    
        
       }
       
        
        
        
    });
}