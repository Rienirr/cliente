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
    let prueba= d.getElementsByTagName("textarea")[0].value;
    if(prueba.trim().length !== 0 ){
         return prueba;

    }
    else{
        prueba="";
        return prueba;
    }
    

      
    }   
 function limpiarTarea() {//pone el texto del gestor en blanco para añadir más 
   d.getElementsByTagName("textarea")[0].value ="";


}


function asignarTarea(){//asigna la tarea a pendientes
  if(recogerTarea() !=""){

  
    let divtareas= d.getElementById("pendientes");

    let div= d.createElement("div");
   let p= d.createElement("p")
   let botones= d.createElement("p");
   div.setAttribute("class","tarea");
   div.setAttribute("id", `tarea${contadorTareasPendientes}`);
   p.innerText= recogerTarea();
   botones.setAttribute("class", "botones");
   botones.innerHTML=`<input type='button' value='Borrar' class='del' onclick='borrar(tarea${contadorTareasPendientes})' /> <input type='button' value='Acabar' class='end' onclick='asignarCompleta(tarea${contadorTareasPendientes})' />`;
   div.appendChild(p);
   div.appendChild(botones);
   limpiarTarea();
   divtareas.appendChild(div);
   contadorTareasPendientes++;
  
  }
  else{
      alert("Introduce una Tarea no un espacio en Blanco");
  }
    
}
/* Mirar bien pq necesito cambiarle las clases a los botones para que no de problemas  */
function asignarCompleta(elemento){//asigna la tarea a completa Para ello recogemos la tarea, la añadimos y la limpiamos dejando el textarea sin texto
    let divTareas= d.getElementById("pendientes");
    let divCompletadas= d.getElementById("acabadas");

    let div= d.createElement("div");
    let tareaCambiada= elemento;

  
    let p= d.createElement("p")
    let botones= d.createElement("p");
    div.setAttribute("class","acabada");
    div.setAttribute("id", `acabada${contadorTareasCompletadas}`);
    p.innerText= elemento.innerText;
    botones.setAttribute("class", "botones");
    botones.innerHTML=`<input type='button' value='volver' class='del' onclick='volver(acabada${contadorTareasCompletadas})' /> <input type='button' value='archivar' class='end' onclick='archivar(acabada${contadorTareasCompletadas})' />`;
    div.appendChild(p);
    div.appendChild(botones);


    
    divTareas.removeChild(tareaCambiada);//eliminamos 
    
    divCompletadas.appendChild(div);

   contadorTareasCompletadas++;//hay sumar y restar para saber en que posición esta el que queramos borrar
   

    
}
function borrar(elemento){//borra la tarea pendiente
    let divTareas= d.getElementById("pendientes");
 
    
    divTareas.removeChild(elemento);
    
} 

function archivar(elemento){//archiva el elemento de las tareas completadas
    elemento.setAttribute("class", "archivado");

}
function volver(elemento){// devuelve una tarea completada a la lista de pendientes  para ello la copiamos la añadimos de vuelta a tareas y la borramos 
    let divtareas= d.getElementById("pendientes");
    let divCompletadas= d.getElementById("acabadas");
    let div= d.createElement("div");
   let p= d.createElement("p")
   let botones= d.createElement("p");
   div.setAttribute("class","tarea");
   div.setAttribute("id", `tarea${contadorTareasPendientes}`);
   p.innerText= elemento.innerText;
   botones.setAttribute("class", "botones");
   botones.innerHTML=`<input type='button' value='Borrar' class='del' onclick='borrar(tarea${contadorTareasPendientes})' /> <input type='button' value='Acabar' class='end' onclick='asignarCompleta(tarea${contadorTareasPendientes})' />`;
   div.appendChild(p);
   div.appendChild(botones);
   
   divtareas.appendChild(div);
   contadorTareasPendientes++;

    divCompletadas.removeChild(elemento);
  




}

function mostrar(){//muestra todas las tareas archivadas quitando su clase para que se vuelvan a mostrar
    
let archivados= d.getElementsByClassName("archivado");

for(let i=archivados.length-1;i>=0;i--){
    archivados[i].classList.replace("archivado", "acabada");
}

}