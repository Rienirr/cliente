"use strict";
let d=document;
desaparecer(posicion){//le pasamos la posición del párrafo a la que aplicar el estilo 
let parrafo =d.getElementsByTagName("p")[posicion];
parrafo.setAttribute("class","desaparecer");
}
eliminar(posicion){//le pasamos la posición del párrafo a la que aplicar el estilo 
    let parrafo =d.getElementsByTagName("p")[posicion];
parrafo.setAttribute("class","eliminado");
}