"use strict";
window.onload= function() {
var d=document;
var parrafo = d.createElement("p");
d.body.appendChild(parrafo);//añadimos el párrafo con antelación para luego ir cambiando su valor
    d.addEventListener("mousemove", function(event){ //nos da la posisición del raton en cada momento
      let x=  event.x;
        let y= event.y;
       
        parrafo.innerText= `La posición del ratón es para la coordenada x: ${x} y para la coordenada y: ${y}`;
       

    },false);

}
