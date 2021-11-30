 "use strict";

/*export function consulta(){//Hacemos la consulta que se encarga de mostrar las películas.
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
    
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {//Una vez acabada la consulta mostramos las películas.
      let peliculas=JSON.parse(httpRequest.response); 
      mostrar(peliculas);
    
    }
  },
  true
);
httpRequest.send(); //Envíamos la consulta.*/



  export const getConsulta = () => {
  return new Promise((resolver, rechazar) => {
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
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//Una vez acabada la consulta mostramos las películas.
           resolver(JSON.parse(httpRequest.response));
        }
       
      },
      true
    );
    
});
}


/* getConsulta()
.then((peliculas) => {
  mostrar(peliculas);
})
.catch((error) => {
  console.log(error.message); // Si hay algún error, muestro el mensaje.
}); */


export function mostrar(peliculas,id="peliculas") {//Mostramos las películas y añadimos los manejadores de forma dinámica. 
  //Al tener como parámetro opcional una id luego podemos ponerlo en cualquier otro lugar si nos tenemos que ajustar a las plantilla.
  let cadena = " ";
  peliculas.results.map((v, i, a) => {
    cadena += `<li>(${v.episode_id}) ${v.title} `;
  });
  document.getElementById("peliculas").innerHTML =` <h1> Películas</h1> <ul>${cadena}</ul>`;
  document.getElementById("peliculas").classList="";
  let listas= document.getElementsByTagName("li");
  console.log(listas);
   for(let i=0;i<listas.length;i++){
     listas[i].addEventListener("click",(event)=>{
       sinopsis(i,peliculas);
      personajes(i,peliculas);
     },false);
   }

} 

function personajes (indice,pelicula,id ="personajes"){//Muestra 10 personajes de la película indicada.
  //Al tener como parámetro opcional una id luego podemos ponerlo en cualquier otro lugar si nos tenemos que ajustar a las plantilla.
   let div =document.getElementById("personajes");
 
   pelicula.results.map((v, i, a) => {
       if(i==indice){
        div.innerHTML=      `<h2>10 Personajes de ${v.title} </h2>` ;
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
                  div.classList="";

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
function sinopsis(indice,pelicula,id="descripcion"){//Muestra la sinopsis de la película indicada.
  //Al tener como parámetro opcional una id luego podemos ponerlo en cualquier otro lugar si nos tenemos que ajustar a las plantilla.
   let cadena = " ";
   pelicula.results.map((v, i, a) => {
      if(i==indice){
       cadena+= `<h2> Sinopsis de ${v.title}</h2>   <p>${v.opening_crawl}</p> <img src='images/${i}.jpeg' alt="Star Wars"  width="250"> `;
       //Las películas estan ordenadas según la Api,es decir, en orden de salida.
       
      }       
   });
  
   document.getElementById("descripcion").innerHTML =`  ${cadena}`;
   document.getElementById("descripcion").classList="";
    }



    