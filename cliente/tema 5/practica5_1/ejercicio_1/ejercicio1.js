"use strict";
window.onload= function(){//para seguir con los consejos que has dicho 
var seguirSaludando;

var d= document;
// es la función que saluda 
   

//creamos el botón , le damos funcionalidad de Saludar cadad 2 segundos y lo añadimos al DOM
var saludar= d.createElement("button");
saludar.innerText= "Comenzar Saludos";
saludar.addEventListener("click", function(e){
seguirSaludando=true;//este semáforo es el que permite que se salude si está a true 
saludos= setInterval(function(){
    var cabecera = d.createElement("h1");
    if(!seguirSaludando){
        clearInterval(saludos);
    }else{
        cabecera.innerText= "Hola feos!!";
        d.body.appendChild(cabecera);
    }

},2000);
},false);
d.body.appendChild(saludar);

//creamos el botón, le damos de parar Saludos y lo añadimos al DOM

var parar= d.createElement("button");
parar.addEventListener("click", function(e){
seguirSaludando= false;// aquí lo ponemos a false para que no pueda saludar más 
},false);
parar.innerText="Parar Saludos";
d.body.appendChild(parar);










}
