
/*Esta biblioteca lo que hace es limpiar la web y organizarla como queremos*/ 
"use strict";

        export function crearComunicacionUsuario(){//Este método lo usaremos siempre para comunicarnos con el usuario.
            var mostrar = document.createElement("div");
                  mostrar.innerHTML="<div id='mensajeAlUsuario' class='hidden'> </div>"
                  document.body.insertAdjacentElement("afterbegin",mostrar);
           }
           export function mostrarUsuario(contenedor,textoAMostrar,tiempo){//Así podemos elegir Lo que mostramos tanto el lugar, el texto y el tiempo que lo hacemos.
            contenedor.innerHTML= `${textoAMostrar}`;
            contenedor.classList.remove("hidden");
           setTimeout(()=>{
            contenedor.classList.add("hidden");
           },tiempo); 
           }