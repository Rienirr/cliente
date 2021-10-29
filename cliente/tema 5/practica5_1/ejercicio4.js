"use strict";
window.onload= function() {
var d =document;
var iVacia= d.createElement("img");
var iBola= d.createElement("img");
var iLlena=d.createElement("img");

 function crearImg(){

     iVacia.setAttribute("src", "img/vacia.jpeg");
     iVacia.setAttribute("class","vacia");
    

 iBola.setAttribute("src", "img/papel.jpeg");
 iBola.setAttribute("draggable","true");
 
 iLlena.setAttribute("src", "img/llena.jpg");
 iLlena.setAttribute("class", "invisible");

 d.body.appendChild(iVacia);
 d.body.appendChild(iBola);
 
 d.body.appendChild(iLlena);
 }
 crearImg();
 var elementoArrastrado;
 document.addEventListener(
    "dragstart",
    function (evento) {
      elementoArrastrado = evento.target; // para tener el elemento que estoy Arrastrando
      
    },
    false
  );

 document.addEventListener(
    "dragover",
    function (evento) {
      evento.preventDefault(); // IMPORTANTE -> previene el funcionamiento por defecto
    },
    false
  );


 document.addEventListener(
    "drop",
    function (evento) {
      evento.preventDefault(); // IMPORTANTE -> previene el funcionamiento por defecto
      if (evento.target.className == "vacia") {
              evento.target.setAttribute("class","invisible");//para hacer que no se vea
            elementoArrastrado.setAttribute("class","invisible");//para hacer que no se vea
            iLlena.setAttribute("class","visible");
      }
    },
    false
  );


}