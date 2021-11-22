export function crearComunicacionUsuario(){//Este método lo usaremos siempre para comunicarnos con el usuario.
    var mostrar = d.createElement("div");
          mostrar.innerHTML="<p id='mensajeAlUsuario' class='hidden'> </p>"
   d.body.appendChild(mostrar);
   }