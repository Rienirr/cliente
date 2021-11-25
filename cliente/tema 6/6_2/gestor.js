
import * as tarea from "./tareas.js";
import * as output  from "./output.js";
"use strict";

window.onload= function(){
    var d= document;
    var elemntoArrastrado;
var  posicionInicial;
var posicionFinal;
tarea.inicio();
output.crearComunicacionUsuario();
//Esta función la necesitamos poner ya que es la que nos deja el documento para poder trabjar con las bibliotecas de la forma deseada.
d.addEventListener("drag",(event)=> {
    //He puesto esta vez funciones flecha para acostumbrarme a su uso ya que las funciones anónimas son más fáciles para mí ya que las he utilizado infinitamente más.
   elemntoArrastrado= event.target.id;
    posicionInicial= d.getElementById(elemntoArrastrado).getBoundingClientRect();// Para saber en la posción en la que se encuentra el ratón.
   console.log(posicionInicial.y);
   
   }, false);
   d.addEventListener("dragover",(event)=>{
      
       event.preventDefault();
   }, false);
   d.getElementById("acabadas").addEventListener("drop", (event)=>{//Para colocar los elementos en acabadas.
      event.target.classList.remove("encima");//Para eliminar los estilos que doy al soltar y solucionar el fallo que tenía al darle estilos.
       tarea.asignarCompleta(elemntoArrastrado); 
   
   },false);
   d.addEventListener("drop", (event)=>{
      event.target.classList.remove("encima");//para eliminar los efectos
   
   },false);
   
   d.getElementById("pendientes").addEventListener("drop", (event)=>{//Para colocar los elementos en pendientes.
      event.target.classList.remove("encima");
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
           tarea.volver(elemntoArrastrado);
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
   d.addEventListener("dragenter", (event)=>{//Añado la clase para darle un efecto 
   event.target.classList.add("encima");
   },false);
   d.addEventListener("dragleave", (event)=>{//Para quitar los efectos que voy poniendo.
   event.target.classList.remove("encima");
   },false);
   d.addEventListener("dragexit", (event)=>{//Para quitar los efectos que voy poniendo, al salir de los contextos.
      
     event.target.classList.remove("encima");
   },false);
   d.addEventListener("dragend",(event)=>{
      //Para quitar los efectos que voy poniendo. 
     
      event.target.classList.remove("encima");
   },false);
}

