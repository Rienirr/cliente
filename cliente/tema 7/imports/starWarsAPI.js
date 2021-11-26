"use strict";
export function consulta(){
const url = "https://swapi.dev/api/films";
var httpRequest = new XMLHttpRequest();
httpRequest.open("GET", url, true);
httpRequest.setRequestHeader(
  "Content-Type",
  "application/x-www-form-urlencoded"
);
httpRequest.addEventListener(
  "readystatechange",
  () => {
    
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
      let peliculas=JSON.parse(httpRequest.response); 
      mostrar(peliculas);
      /*personajes(4, peliculas);
      sinopsis(4,peliculas);
      console.log();*/
    }
  },
  true
);
httpRequest.send(); 

function mostrar(peliculas) {
  let cadena = " ";
  peliculas.results.map((v, i, a) => {
    cadena += `<li>(${v.episode_id}) ${v.title} `;
  });
  document.getElementById("peliculas").innerHTML =` <h1> Películas</h1> <ul>${cadena}</ul>`;

} }
function personajes (episode_id,pelicula){
   let cadena = "";
   document.getElementById("personajes");
   pelicula.results.map((v, i, a) => {
       if(v.episode_id==episode_id){
           console.log(v.characters);
       } 
   });
 } 
function sinopsis(episode_id,pelicula){
   let cadena = " ";
   pelicula.results.map((v, i, a) => {
      if(v.episode_id==episode_id){
       cadena+=   v.opening_crawl;
      }       
   });
   document.getElementById("personajes").innerHTML =` <h2> Sinopsis</h2> ${cadena}`;
}