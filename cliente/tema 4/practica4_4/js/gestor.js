"use strict";
var d=document;
window.onload= inicio();
var contadorTareasPendientes=0;
var contadorTareasCompletadas=0;
function limpiarPendientesYAcabadas(){// eliminos las tareas que nos dan de ejemplo
   let pendientes= d.getElementsByClassName("tarea");
   d.getElementById("pendientes").removeChild(pendientes[1]);
   d.getElementById("pendientes").removeChild(pendientes[0]);
   let acabadas=d.getElementsByClassName("acabada");
   d.getElementById("acabadas").removeChild(acabadas[0]);
}

function botones(){//para poner funcionalidad al inicio 
   let anyadir= d.getElementById("add");
   let mostrar= d.getElementById("sho")
   anyadir.setAttribute("onclick","asignarTarea()");
   mostrar.setAttribute("onclick", "mostrar()")

}
function inicio(){//añadimos las funciones que se ejecutan al iniciar el programa
    limpiarPendientesYAcabadas();
    botones();
}

function recogerTarea() {//esta función recoge el texto del gestor de tareas
    let tarea= d.getElementsByTagName("textarea")[0].value;
    if(tarea.trim().length !== 0 ){
        console.log(tarea);
        return tarea;
    }

      
    }
    
 function limpiarTarea() {//pone el texto del gestor en blanco para añadir más 
   d.getElementsByTagName("textarea")[0].value ="";

   

}


function asignarTarea(){//asigna la tarea a pendientes
   let divtareas= d.getElementById("pendientes");

    let div= d.createElement("div");
   let p= d.createElement("p")
   let botones= d.createElement("p");
   div.setAttribute("class","tarea");
   p.innerText= recogerTarea();
   botones.setAttribute("class", "botones");
   botones.innerHTML=`<input type='button' value='Borrar' class='del' onclick='borrar(${contadorTareasPendientes})' /> <input type='button' value='Acabar' class='end' onclick='asignarCompleta(${contadorTareasPendientes})' />`;
   div.appendChild(p);
   div.appendChild(botones);
   limpiarTarea();
   divtareas.appendChild(div);
   contadorTareasPendientes++;

    
}
/* Mirar bien pq necesito cambiarle las clases a los botones para que no de problemas  */
function asignarCompleta(elemento){//asigna la tarea a completa
    let divTareas= d.getElementById("pendientes");
    let divCompletadas= d.getElementById("acabadas");
    let div= d.createElement("div");
    let tareaCambiada= d.getElementsByClassName("tarea")[elemento];
   div.appendChild(tareaCambiada);
   divCompletadas.appendChild(div);



    contadorTareasCompletadas++;//hay sumar y restar para saber en que posición esta el que queramos borrar
    contadorTareasPendientes--;//restar 
    divTareas.removeChild(tareaCambiada);
}
function borrar(elemento){//borra la tarea pendiente
    let divTareas= d.getElementById("pendientes");
    let elementoBorrar= d.getElementsByClassName("tarea")[elemento];
    divTareas.removeChild(elementoBorrar);
    contadorTareasPendientes--;
} 

function archivar(elemento){//archiva el elemento de las tareas completadas

}
function devolver(elemento){// devuelve una tarea completada a la lista de pendientes 

}

function mostrar(){//muestra todas las tareas archivadas

}
 