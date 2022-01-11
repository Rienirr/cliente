"use strict";

import { Agenda } from "./imports/Agenda.js";
import {  Persona } from "./imports/Persona.js";

window.onload = ()=>{
   let buscar= document.getElementById("buscar");
   let borrar= document.getElementById("borrar");
   let ordenar= document.getElementById("ordenar");
   let  anyadir= document.getElementById("anyadir");
let agenda= new Agenda();
       
   buscar.addEventListener("click",(event)=>{//Añadir el formulario buscar.
      console.log("hola");
   },false);
   borrar.addEventListener("click",(event)=>{//Añadir el formulario de borrar.
      console.log("hola");
   },false);
   ordenar.addEventListener("click",(event)=>{//Añadir el formulario de ordenar.
      console.log("hola");
   },false);
   anyadir.addEventListener("click",(event)=>{//Añadir el formulario de añadir.
        /*  let nombre= document.getElementById("nombre").value;
          let apellido= document.getElementById("apellido").value;
        let  dirreccion= document.getElementById("direccion").value;
        let telf= document.getElementById("telefono");
        agenda.anyadir( new Persona(nombre, apellido,dirreccion,telf));
        agenda.setItem(agenda.listado); */
        console.log("hola");
       
   },false);
  


}