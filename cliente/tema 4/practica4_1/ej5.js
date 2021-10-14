
'use strict';
//He puesto para varios id para que puedas comprobar que funciona correctamente 
let d= document;
function insertAfter(nuevoElemento, elementoExistente) {
    elementoExistente.parentNode.insertBefore(nuevoElemento, elementoExistente.nextSibling);
/*  Esto lo que hace es que buscamos el hermano siguiente ,es decir, el siguiente elemento dentro del mismo nivel y lo insertamos antes 
 consiguiendo el efecto del insertAfter */
}
let elem= d.createElement("h1");
elem.innerHTML="Creado dinamicamente después de otro elemento por suerte :)"//elemento que se muestra después del que le pasamos 

insertAfter(elem,d.getElementById("g"));// si pruebas cualquier combinación funciona