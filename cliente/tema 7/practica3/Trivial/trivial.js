"use strict";
import {comprobarAcertadas, getTrivial, mostrarPreguntas, vaciar} from "../importsAPI/TrivialApi.js"
window.onload = ()=>{
    var d= document;
    var numeroPreguntas= d.getElementById("preguntas");
    var dificultad= d.getElementById("dificultad");
    var categoria= d.getElementById("categoria");
    var boton = d.getElementById("empezar");
    var resultados = d.getElementById("final");
    var reiniciar = d.getElementById("reiniciar");
    boton.addEventListener("click",()=>{
       if( numeroPreguntas.selectedIndex==0 || dificultad.selectedIndex==0 || categoria.selectedIndex==0 ){
           console.log("error paquete");
        //Mostrar mensaje al usuario de Error.
       }
       else{
        let div = document.getElementById("mostrar");
        div.innerHTML="";
        let amount= numeroPreguntas.options[numeroPreguntas.selectedIndex].value;
        let difficulty=dificultad.options[dificultad.selectedIndex].value; 
        let category=categoria.options[categoria.selectedIndex].value; 
        getTrivial(amount,difficulty,category).then((trivial)=>{
            trivial.results.map((v,i,a)=>{//Así recorremos el array de preguntas y luego las mostramos debidamente
                mostrarPreguntas(v);
            });
         resultados.classList.remove("hidden");
         reiniciar.classList.remove("hidden");
        }).catch((error)=>{
        console.log(error.message);
        });
       }
    });
    

    resultados.addEventListener("click",()=>{
        comprobarAcertadas();
        
    },false);
    reiniciar.addEventListener("click",()=>{
        vaciar();
    },false);
}