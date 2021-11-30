import {getConsulta, mostrar} from "./imports/starWarsAPI.js";
"use strict";
 window.onload= ()=>{
//Consultamos los datos de las películas.

getConsulta()
.then((peliculas) => {
  mostrar(peliculas);
})
.catch((error) => {
  console.log(error.message); // Si hay algún error, muestro el mensaje.
});


} 