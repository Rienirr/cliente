/*Esta biblioteca nos permite crear plantillas que nos generar información necesaria para el cliente. */
"use strict;"
export function crearfila(nombre,peso,precio,descripcion,imagen="nada"){
    return `<tr> <td>${nombre}</td>  <td>${peso}</td> <td>${precio}</td> <td>${descripcion} </td> <td>${imagen} </td> </tr>`;
}
function añadirfila(id, fila){
    let espacioAñadir= document.getElementById(id);
    espacioAñadir.innerHTML+=fila;
}