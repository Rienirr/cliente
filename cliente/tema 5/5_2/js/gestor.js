"use strict";
var d=document;
window.onload= function(){

var contadorTareasPendientes=0;
var contadorTareasCompletadas=0;
var elemntoArrastrado;

function mostrarArchivados(){//Muestra todas las tareas archivadas quitando su clase para que se vuelvan a mostrar.
    
    let archivados= d.getElementsByClassName("archivado");
    
    for(let i=archivados.length-1;i>=0;i--){
        archivados[i].classList.replace("archivado", "acabada");
    }
    
    }
function limpiarPendientesYAcabadas(){// Eliminos las tareas que nos dan de ejemplo.
   let pendientes= d.getElementsByClassName("tarea");
   d.getElementById("pendientes").removeChild(pendientes[1]);
   d.getElementById("pendientes").removeChild(pendientes[0]);
   let acabadas=d.getElementsByClassName("acabada");
   d.getElementById("acabadas").removeChild(acabadas[0]);
}

function botones(){//Para poner funcionalidad al inicio. 
   let anyadir= d.getElementById("add");
   let mostrar= d.getElementById("sho")
   anyadir.addEventListener("click",function(){
    asignarTarea();
   },false);
   mostrar.addEventListener("click",function(){
    mostrarArchivados();
   },false);
   

}

function inicio(){//Añadimos las funciones que se ejecutan al iniciar el programa.
    limpiarPendientesYAcabadas();
    botones();
}
inicio();
function recogerTarea() {//Esta función recoge el texto del gestor de tareas.
    let prueba= d.getElementsByTagName("textarea")[0].value;
    if(prueba.trim().length !== 0 ){
         return prueba;

    }
    else{
        prueba="";
        return prueba;
    }
          
    }   
 function limpiarTarea() {//Pone el texto del gestor en blanco para añadir más. 
   d.getElementsByTagName("textarea")[0].value ="";
}
function asignarTarea(){//Asigna la tarea a pendientes Para ello recogemos la tarea, la añadimos y la limpiamos dejando el textarea sin texto.
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
    //Asigna la tarea a completa Para ello recogemos la tarea de pendientes la añadimos a completadas y la eliminamos de pendientes lo hemos cambiado para que funcione con eventos.
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


    
    divTareas.removeChild(tareaCambiada);
    
    divCompletadas.appendChild(div);

   contadorTareasCompletadas++;//Hay sumar y restar para saber en que posición esta el que queramos borrar.
   

    
}
function borrar(elemento){//Borra la tarea pendiente.
    let divTareas= d.getElementById("pendientes");
 
    
    divTareas.removeChild(d.getElementById(elemento));
    
} 

function archivar(elemento){//Archiva el elemento de las tareas completadas.
    let tareaCambiada= d.getElementById(elemento);
    tareaCambiada.setAttribute("class", "archivado");

}
function volver(elemento){// Devuelve una tarea completada a la lista de pendientes  para ello la copiamos la añadimos de vuelta a tareas y la borramos. 
    let divtareas= d.getElementById("pendientes");
    let divCompletadas= d.getElementById("acabadas");
    let div= d.createElement("div");
    div.setAttribute("draggable","true");//Añadimos el atributo draggable para la nueva funcionalidad.
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

function reemplazar(elemento, elementosoltado){
 
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
   divtareas.appendChild(div);
   contadorTareasPendientes++;


}
function despues(elemento, elementoSoltado){//Pone el elemento  después que el que le pasamos. 
    let antes= d.getElementById(elementoSoltado);
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
 
   antes.insertAdjacentElement("afterend",div);
   contadorTareasPendientes++;


}
function antes(elemento, elementoSoltado){//Pone un elemento antes que otro. 
  
       let antes= d.getElementById(elementoSoltado);
   
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
    //Lo siguiente es para reemplazrlo necesitamos su posición(y) que equivale a la altura y para eso nos valemos de las propiedades de los métodos.
      antes.insertAdjacentElement("beforebegin",div);
      contadorTareasPendientes++;
   
   
   }
   

var  posicionInicial;
//para saber la posción del ratón al arrastrar los elementos en tareas pendientes y decidir si hacer un insert before o after
var posicionFinal;
d.addEventListener("drag",(event)=> {
 //He puesto esta vez funciones flecha para acostumbrarme a su uso ya que las funciones anónimas son más fáciles para mí ya que las he utilizado infinitamente más.
elemntoArrastrado= event.target.id;
 posicionInicial= d.getElementById(elemntoArrastrado).getBoundingClientRect();// Para saber en la posción en la que se encuentra el ratón.
console.log(posicionInicial.y);

}, false);
d.addEventListener("dragover",(event)=>{
    event.preventDefault();
}, false);
d.getElementById("acabadas").addEventListener("drop", (event)=>{
    

    asignarCompleta(elemntoArrastrado); 

},false);
d.getElementById("pendientes").addEventListener("drop", (event)=>{

 /*Para saber el ID que darle y funcione correctamente tenemos que comprobar donde suelta el ratón
 si en el div con id, en el parrafo o en algunos de los inputs para ajustar acorde*/
   var idTarea="final";
 
  if (event.target.parentNode.id.includes("tarea")){//Si lo recibe el p que es el hijo del div.
   idTarea=event.target.parentNode.id;
  }
  else if(event.target.parentNode.parentNode.id.includes("tarea")){//Si lo recibe culaquiera de los inputs que son nietos del div.
   idTarea=event.target.parentNode.parentNode.id;
  }
  else if(event.target.id.includes("tarea")){//Si es el div.
   idTarea=event.target.id;
  }

  
  
 posicionFinal= event.target.getBoundingClientRect();
    if(elemntoArrastrado.includes("acabada") ){//Así solo ponemos de vuelta las acabadas.
        volver(elemntoArrastrado);
    }
    else if(idTarea.includes("tarea")){
        

       
       if(posicionFinal.y>posicionInicial.y){
          //Si la posición final de la y(altura es mayor) lo insertamos después.
//console.log("insert After");
despues(elemntoArrastrado,idTarea);
       } else if(posicionFinal.y<posicionInicial.y){//Si la posición final de la y(altura es menor) lo insertamos antes. 
         
         //console.log("insert before");
       
        
        antes(elemntoArrastrado,idTarea);
       }
      
    }
    else{//Para insertar al final si arrastramos y cae en el div.
      reemplazar(elemntoArrastrado);
    } 
},false);
d.addEventListener("dragenter", (event)=>{//Añado las 
event.target.classList.add("encima");
},false);
d.addEventListener("dragleave", (event)=>{//Para quitar los efectos que voy poniendo.
event.target.classList.remove("encima");
},false);
d.addEventListener("dragexit", (event)=>{//Para quitar los efectos que voy poniendo.
   
   event.target.classList.remove("encima");//No funciona, te lo comenté en clase, y no quita la clase.
},false);
d.addEventListener("dragend",(event)=>{
   //Para quitar los efectos que voy poniendo.No funciona, te lo comenté en clase, y no quita la clase.
  
   event.target.classList.remove("encima");
},false);

}

