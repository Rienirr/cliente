"use strict";
let d=document;

function desaparecer(posicion){ //le pasamos la posición del párrafo a la que aplicar el estilo 
let parrafo =d.getElementsByTagName("p")[posicion];
parrafo.setAttribute("class","desaparecer");

}
function eliminar(posicion){ //le pasamos la posición del párrafo a la que aplicar el estilo
    
    let parrafo =d.getElementsByTagName("p")[posicion];
parrafo.setAttribute("class","eliminado");
}
function restaurar(){
    let parrafos =d.getElementsByTagName("p");
    for (const valor in parrafos) {
        parrafos[valor].removeAttribute("class");
}
}
