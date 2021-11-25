
/*Esta biblioteca lo que hace es limpiar la web y organizarla como queremos*/ 
"use strict";
var d=document; 
import { asignarTarea } from "./tareas.js";
export function limpiarPendientesYAcabadas(){// Eliminos las tareas que nos dan de ejemplo.
    let pendientes= d.getElementsByClassName("tarea");
    d.getElementById("pendientes").removeChild(pendientes[1]);
    d.getElementById("pendientes").removeChild(pendientes[0]);
    let acabadas=d.getElementsByClassName("acabada");
    d.getElementById("acabadas").removeChild(acabadas[0]);
 }
 export function botones(){//Para poner funcionalidad al inicio. 
    let anyadir= d.getElementById("add");
    let mostrar= d.getElementById("sho")
    anyadir.addEventListener("click",function(){
     asignarTarea();
    },false);
    mostrar.addEventListener("click",function(){
     mostrarArchivados();
    },false);
 }
 export function inicio(){//Añadimos las funciones que se ejecutan al iniciar el programa.
    limpiarPendientesYAcabadas();
    botones();
    crearComunicacionUsuario();
}

export function mostrarArchivados(){//Muestra todas las tareas archivadas quitando su clase para que se vuelvan a mostrar.
    
        let archivados= d.getElementsByClassName("archivado");
        
        for(let i=archivados.length-1;i>=0;i--){
            archivados[i].classList.replace("archivado", "acabada");
        }
        
        }
 export function archivar(elemento){//Archiva el elemento de las tareas completadas.
            let tareaCambiada= d.getElementById(elemento);
            tareaCambiada.setAttribute("class", "archivado");
        
        }
        export function crearComunicacionUsuario(){//Este método lo usaremos siempre para comunicarnos con el usuario.
            var mostrar = document.createElement("div");
                  mostrar.innerHTML="<div id='mensajeAlUsuario' class='hidden'> </div>"
                  document.body.insertAdjacentElement("afterbegin",mostrar);
           }
           export function mostrarUsuario(contenedor,textoAMostrar,tiempo){//Así podemos elegir Lo que mostramos tanto el lugar, el texto y el tiempo que lo hacemos.
            contenedor.innerHTML= `${textoAMostrar}`;
            contenedor.classList.remove("hidden");
           setTimeout(()=>{
            contenedor.classList.add("hidden");
           },tiempo); 
           }