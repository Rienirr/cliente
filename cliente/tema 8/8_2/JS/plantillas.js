/*Esta biblioteca nos permite crear plantillas que nos generar información necesaria para el cliente. */
"use strict;"
export function crearfila(id,nombre,peso,precio,descripcion,imagen="nada"){//Para crear la fila con todos los componentes del producto.
    let div = document.createElement("div");
    div.setAttribute("id",id)
div.innerHTML =` <span>${nombre}</span>  <span>${peso} Kg </span> <span>${precio} €</span> <span>${descripcion} </span> <span> <img src=${imagen} alt="no se ha podido cargar la imagen" width="50" height="50"> </span> `;
return div;
}
export function cabecera(){//Para añadir la cabecera a los productos
    let div = document.createElement("div");
    div.setAttribute("id","cabecera_lista")
    div.innerHTML="<span>Nombre</span>  <span>Peso </span> <span>Precio</span> <span>Descripción </span> <span>Imagen </span>";
    return div;
}

export function mensajesUsuario(texto){//Para comunicar al usuario todo lo que va ocurriendo
 let div=  document.getElementById("comunicacion_usuario");
 div.classList.remove("hidden");
 div.innerHTML= texto;
 setTimeout(() => {
    div.classList.add("hidden");   
 }, 3000);
}
