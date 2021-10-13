"use strict";

var d= document;//para ir más rápido como dijiste en clase
 var numeroParrafos=d.getElementsByTagName("p").length;
 var textoSegundoParrafo=d.getElementsByTagName("p")[1].innerText ; // ponemos 1 ya que siempre se empieza por el cero
 var numeroEnlaces=d.getElementsByTagName("a").length;
 var primerEnlace=d.getElementsByTagName("a")[0].getAttribute("href");
 var penultimoEnlance=d.getElementsByTagName("a")[numeroEnlaces-2].getAttribute("href");//ya que al empezar en el cero necesitamos restar dos para el penúltimo lugar
 
 //creamos un parrafo para mostrar las respuesta bien formateadas 
 var elemParrafos= d.createElement("p");
 var elemTexto= d.createElement("p");
 var elemNumeroEnlaces= d.createElement("p");
 var elemPrimer=d.createElement("p");
 var elemPenultimo=d.createElement("p");

 //creamos el texto dentro de los parrafos

 elemParrafos.innerHTML= `Numero de parrafos en el texto: ${numeroParrafos}` ;
elemTexto.innerHTML=`El segundo parrafo es: ${textoSegundoParrafo}`;
elemNumeroEnlaces.innerHTML= `Numero de enlaces en el texto: ${numeroEnlaces}` ;
elemPrimer.innerHTML= `Primer enlace es : "${primerEnlace}"` ;
elemPenultimo.innerHTML= `Penúltimo enlace es : "${penultimoEnlance}"` ;
//los insertamos donde queramos que es dentro de la id de info que en este caso es un div 

d.getElementById("info").appendChild(elemParrafos );
d.getElementById("info").appendChild(elemTexto );
d.getElementById("info").appendChild(elemNumeroEnlaces );
d.getElementById("info").appendChild(elemPrimer );
d.getElementById("info").appendChild(elemPenultimo );