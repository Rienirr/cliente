"use strict";
var d=document;
window.onload= function(){
inicio();
var contadorTareasPendientes=0;
var contadorTareasCompletadas=0;
var elemntoArrastrado;

function mostrarArchivados(){//muestra todas las tareas archivadas quitando su clase para que se vuelvan a mostrar
    
    let archivados= d.getElementsByClassName("archivado");
    
    for(let i=archivados.length-1;i>=0;i--){
        archivados[i].classList.replace("archivado", "acabada");
    }
    
    }
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
   anyadir.addEventListener("click",function(){
    asignarTarea();
   },false);
   mostrar.addEventListener("click",function(){
    mostrarArchivados();
   },false);
   

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
function asignarTarea(){//asigna la tarea a pendientes Para ello recogemos la tarea, la añadimos y la limpiamos dejando el textarea sin texto
  if(recogerTarea() !=""){ 
    let divtareas= d.getElementById("pendientes");

    let div= d.createElement("div");
    div.setAttribute("draggable","true");
   let p= d.createElement("p")
   let botones= d.createElement("p");
   div.setAttribute("class","tarea");
   let id= `tarea${contadorTareasPendientes}`;
   div.setAttribute("id", id);
   p.innerText= recogerTarea();
   botones.setAttribute("class", "botones");
   
   let  botonBorrar= d.createElement("input");
   botonBorrar.setAttribute("type", "button");
   botonBorrar.setAttribute("value","borrar");
   botonBorrar.setAttribute("class","del");
  
let botonAcabar=d.createElement("input");
botonAcabar.setAttribute("type", "button");
botonAcabar.setAttribute("value","Acabar");
botonAcabar.setAttribute("class","end");
botonBorrar.addEventListener("click", function(){
    borrar(id);
   },false);
   botonAcabar.addEventListener("click", function(){
    asignarCompleta(id);
   },false);

botones.appendChild(botonBorrar);
botones.appendChild(botonAcabar);

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

function asignarCompleta(elemento){
    //asigna la tarea a completa Para ello recogemos la tarea de pendientes la añadimos a completadas y la eliminamos de pendientes lo hemos cambiado para que funcione con eventos 
    let divTareas= d.getElementById("pendientes");
    let divCompletadas= d.getElementById("acabadas");

    let div= d.createElement("div");
    div.setAttribute("draggable","true");
    let tareaCambiada= d.getElementById(elemento);

  
    let p= d.createElement("p")
    let botones= d.createElement("p");
    div.setAttribute("class","acabada");
    let idacabadas= `acabada${contadorTareasCompletadas}`;
    div.setAttribute("id", idacabadas);
    p.innerText= tareaCambiada.innerText.trim();
    botones.setAttribute("class", "botones");
   
    let  botonVolver= d.createElement("input");
    botonVolver.setAttribute("type", "button");
    botonVolver.setAttribute("value","volver");
    botonVolver.setAttribute("class","del");
   
 let botonArchivar=d.createElement("input");
 botonArchivar.setAttribute("type", "button");
 botonArchivar.setAttribute("value","archivar");
 botonArchivar.setAttribute("class","end");

 botonVolver.addEventListener("click", function(){
    volver(idacabadas);
    },false);
    botonArchivar.addEventListener("click", function(){
    archivar(idacabadas);
    },false);
 
 botones.appendChild(botonVolver);
 botones.appendChild(botonArchivar);





   
    div.appendChild(p);
    div.appendChild(botones);


    
    divTareas.removeChild(tareaCambiada);//eliminamos 
    
    divCompletadas.appendChild(div);

   contadorTareasCompletadas++;//hay sumar y restar para saber en que posición esta el que queramos borrar
   

    
}
function borrar(elemento){//borra la tarea pendiente
    let divTareas= d.getElementById("pendientes");
 
    
    divTareas.removeChild(d.getElementById(elemento));
    
} 

function archivar(elemento){//archiva el elemento de las tareas completadas
    let tareaCambiada= d.getElementById(elemento);
    tareaCambiada.setAttribute("class", "archivado");

}
function volver(elemento){// devuelve una tarea completada a la lista de pendientes  para ello la copiamos la añadimos de vuelta a tareas y la borramos 
    let divtareas= d.getElementById("pendientes");
    let divCompletadas= d.getElementById("acabadas");
    let div= d.createElement("div");
    div.setAttribute("draggable","true");//añadimos el atributo draggable para la nueva funcionalidad
   let p= d.createElement("p")
   let botones= d.createElement("p");
   div.setAttribute("class","tarea");
   let id= `tarea${contadorTareasPendientes}`;
   div.setAttribute("id",id);
   let tareaCambiada= d.getElementById(elemento);
   p.innerText= tareaCambiada.innerText.trim();
   botones.setAttribute("class", "botones");
  
   
   let  botonBorrar= d.createElement("input");
   botonBorrar.setAttribute("type", "button");
   botonBorrar.setAttribute("value","borrar");
   botonBorrar.setAttribute("class","del");
  
let botonAcabar=d.createElement("input");
botonAcabar.setAttribute("type", "button");
botonAcabar.setAttribute("value","Acabar");
botonAcabar.setAttribute("class","end");
botonBorrar.addEventListener("click", function(){
    borrar(id);
   },false);
   botonAcabar.addEventListener("click", function(){
    asignarCompleta(id);
   },false);

botones.appendChild(botonBorrar);
botones.appendChild(botonAcabar);

   div.appendChild(p);
   div.appendChild(botones);
   
   divCompletadas.removeChild(tareaCambiada);
   divtareas.appendChild(div);
   contadorTareasPendientes++;
  

}
var posicionDelRaton;
d.addEventListener("mousemove", function(event){ //nos da la posisición del ratón en cada momento
    
      posicionDelRaton= event.y;
     
     
     

  },false);
function reemplazar(elemento){
 
    let divtareas= d.getElementById("pendientes");

    let div= d.createElement("div");
    div.setAttribute("draggable","true");
   let p= d.createElement("p")
   let botones= d.createElement("p");
   div.setAttribute("class","tarea");
   let id= `tarea${contadorTareasPendientes}`;
   div.setAttribute("id", id);
   let tareaCambiada= d.getElementById(elemento);
   p.innerText= tareaCambiada.innerText.trim();
   botones.setAttribute("class", "botones");
   borrar(elemento);
   let  botonBorrar= d.createElement("input");
   botonBorrar.setAttribute("type", "button");
   botonBorrar.setAttribute("value","borrar");
   botonBorrar.setAttribute("class","del");
  
let botonAcabar=d.createElement("input");
botonAcabar.setAttribute("type", "button");
botonAcabar.setAttribute("value","Acabar");
botonAcabar.setAttribute("class","end");
botonBorrar.addEventListener("click", function(){
    borrar(id);
   },false);
   botonAcabar.addEventListener("click", function(){
    asignarCompleta(id);
   },false);

botones.appendChild(botonBorrar);
botones.appendChild(botonAcabar);

   div.appendChild(p);
   div.appendChild(botones);
 //Lo siguiente es para reemplazrlo necesitamos su posición(y) que equivale a la altura y para eso nos valemos de las propiedades de los métodos
   divtareas.appendChild(div);
   contadorTareasPendientes++;


}




var posicionAlEmpezar;
var posicionAlSoltar;
d.addEventListener("drag",(event)=> {
 //he puesto esta vez funciones flecha para acostumbrarme a su uso ya que las funciones anónimas son más fáciles para mí ya que las he utilizado infinitamente más
elemntoArrastrado= event.target.id;



}, false);
d.addEventListener("dragover",(event)=>{
    event.preventDefault();
}, false);
d.getElementById("acabadas").addEventListener("drop", (event)=>{
    

    asignarCompleta(elemntoArrastrado); 

},false);
d.getElementById("pendientes").addEventListener("drop", (event)=>{
 
    if(elemntoArrastrado.includes("acabada") ){//así solo ponemos de vuelta las acabadas
        volver(elemntoArrastrado);
    }
    else{
      
        reemplazar(elemntoArrastrado);
    }

  

},false);


}
