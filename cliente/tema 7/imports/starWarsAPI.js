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
  let listas= document.getElementsByTagName("li");
  console.log(listas);
   for(let i=0;i<listas.length;i++){
     listas[i].addEventListener("click",(event)=>{
       sinopsis(i,peliculas);
      personajes(i,peliculas);
     },false);
   }

} 
}
function personajes (indice,pelicula){
   let personaje = document.createElement("p");
   let div =document.getElementById("personajes");
   div.innerHTML=      '<h2>Personajes</h2>' ;
   pelicula.results.map((v, i, a) => {
       if(i==indice){
          
           v.characters.map((v,i,a)=>{
            if(i<10){
              
              var httpRequest = new XMLHttpRequest();
              httpRequest.open("GET", v, true);
              httpRequest.setRequestHeader(
                "Content-Type",
                "application/x-www-form-urlencoded"
              );
              httpRequest.addEventListener(
                "readystatechange",
                () => {
                  
                  if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                    let actor=JSON.parse(httpRequest.response); 
                   
                  div.innerHTML+=` <p>${actor.name}</p>`;
                  
                  }
                },
                true
              );
              httpRequest.send(); 
            }
           });
       } 
   });
 } 
function sinopsis(indice,pelicula){
   let cadena = " ";
   pelicula.results.map((v, i, a) => {
      if(i==indice){
       cadena+=   v.opening_crawl;
      }       
   });
   document.getElementById("descripcion").innerHTML =` <h2> Sinopsis</h2> ${cadena}`;
}