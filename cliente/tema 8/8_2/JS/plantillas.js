/*Esta biblioteca nos permite crear plantillas que nos generar información necesaria para el cliente. */
"use strict;"
export function crearfila(id,nombre,peso,precio,descripcion,imagen="nada"){//Para crear la fila con todos los componentes del producto.
    let div = document.createElement("div");
    div.setAttribute("id",id);
    div.setAttribute("class","grid");
div.innerHTML =` <span class="colum">${nombre}</span>  <span class="colum">${peso} Kg </span> <span class="colum">${precio} €</span> <span class="colum">${descripcion} </span> <span class="colum img"> <img  class="colum" src=${imagen} alt="no se ha podido cargar la imagen" width="100" height="100"> </span> `;
return div;
}
export function cabecera(){//Para añadir la cabecera a los productos
    let div = document.createElement("div");
    div.setAttribute("id","cabecera_lista")
    div.innerHTML="<span>Nombre</span>  <span>Peso </span> <span>Precio</span> <span class='des'>Descripción </span> <span class='des'>Imagen </span>";
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