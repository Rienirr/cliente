"use strict";
window.onload= function(){//para seguir con los consejos que has dicho 
var seguirSaludando;//son dos semáforos
var clickado;
var d= document;
// es la función que saluda 
   

//creamos el botón , le damos funcionalidad de Saludar cadad 2 segundos y lo añadimos al DOM
var saludar= d.createElement("button");
saludar.setAttribute("class", "primero");
saludar.innerText= "Comenzar Saludos";
saludar.addEventListener("click", function(e){
seguirSaludando=true;//este semáforo es el que permite que se salude si está a true 
saludos= setInterval(()=>{
    clickado=true;
    var cabecera = d.createElement("h1");
    saludar.setAttribute("disabled","true");
    if(!seguirSaludando){
        clearInterval(saludos);
    }
        cabecera.innerText= "Hola feos!!";
        d.body.appendChild(cabecera);
    

},2000);
},false);
d.body.appendChild(saludar);

//creamos el botón, le damos de parar Saludos y lo añadimos al DOM

var parar= d.createElement("button");
parar.addEventListener("click", function(e){ // aquí lo ponemos a false para que no pueda saludar más 
   
    seguirSaludando= false;
    if(clickado){  //para que no lo pueda deshabilitar sin haber comenzado a saludar
        parar.setAttribute("disabled","true");
        var mensajeFinal = d.createElement("h1");
        mensajeFinal.setAttribute("class","mensaje");
        mensajeFinal.innerText="Has acabado de saludar";
        d.body.appendChild(mensajeFinal);
    } 
},false);
parar.innerText="Parar Saludos";
d.body.appendChild(parar);










}
