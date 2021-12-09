 "use strict";

   let indice="";//Para asegurarnos que salgan 10 personajes.
   
  export const peliculas= () => {//Con un fethc se hace muy sencillo y con menos líneas ya que no tenemos que crear el objeto AJAX.
    const url = "https://swapi.dev/api/films";
   var peticionPeliculas = new Request(url, {
    method: "GET",
    headers: new Headers({
      "Content-type": "application/x-www-form-urlencoded",
    }),
  });
    return new Promise((resolver, rechazar) => {
      fetch(peticionPeliculas)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          resolver(datos);
        })
        .catch(() => {
          rechazar(new Error("Ha habido un error de comunicacón."));
        });
    });
  };

 
function sinopsis(indice,pelicula,id="descripcion"){//Muestra la sinopsis de la película indicada.
  //Al tener como parámetro opcional una id luego podemos ponerlo en cualquier otro lugar si nos tenemos que ajustar a las plantilla.
   let cadena = " ";
   pelicula.results.map((v, i, a) => {
      if(i==indice){
       cadena+= `<h2> Sinopsis de ${v.title}</h2>   <p>${v.opening_crawl}</p> <img src='images/${i}.jpeg' alt="Star Wars"  width="250"> `;
       //Las películas estan ordenadas según la Api,es decir, en orden de salida.
       
      }       
   });
  
   document.getElementById("descripcion").innerHTML =`${cadena}`;
   document.getElementById("descripcion").classList="";
    }

export function anyadirPersonaje(actor){//Añadimos los personajes hasta 10;
  let div =document.getElementById("personajes");
  let parrafo= document.createElement("p");
  //Se ha cambiado esto para poder crear los párrafos y tener más control sobre ellos en lugar de con innerHTML que daba problemas con el código asíncrono.
                              parrafo.innerHTML =`${actor.name}`;  
                              //console.log(actor);
                      div.classList="";
                        parrafo.addEventListener("click",(event)=>{
                     
                        masInfo(actor);
                        console.log(actor.starships, actor.vehicles);
                        },false);
                        div.appendChild(parrafo);
}
   export function masInfo(actor,id="info"){//Así añadimos información extra a los personajes.
   let prueba;
    document.getElementById("info").innerHTML =`<h2> Más información sobre ${actor.name}:</h2> Siendo su género  ${actor.gender} con una altura ${actor.height}cm con un peso de  ${actor.mass} kg y tiene un color de pelo ${actor.hair_color} y con un color de ojos ${actor.eye_color} y su fecha de nacimiento es ${actor.birth_year}`;
    if(actor.starships.length>0 && actor.vehicles.length>0 ){ 
      //Funciona ahora falta hacer las llamadas al servidos según nos convenga. primera peli luke 
      prueba="tiene todo";
  }
  else if(actor.starships.length>0){ //primera peli darth Vader
    prueba="tiene naves";
  }
  else if(actor.vehicles.length>0){ // primera peli leia 
    prueba="tiene vehi";
  }
    document.getElementById("info").innerHTML+=prueba;
    document.getElementById("info").classList="";
    }
        function personajes (indice,pelicula,id ="personajes"){//Muestra 10 personajes de la película indicada.
      //Al tener como parámetro opcional una id luego podemos ponerlo en cualquier otro lugar si nos tenemos que ajustar a las plantilla.
      document.getElementById("info").innerHTML="";
    
        let div =document.getElementById("personajes");
        pelicula.results.map((v, i, a) => {
            if(i==indice){
             div.innerHTML=      `<h2>10 Personajes de ${v.title} </h2>` ;
                v.characters.map((v,i,a)=>{
                 if(i<10){        
                  peticionPersonajes(v).then((actor) => {
                   anyadirPersonaje(actor);//Si nos devuelve un actor lo añadimos. 
                 })
                  
                 }
                });
            } 
        });
        
      }
   const peticionPersonajes = (url)=>{//Con un fetch hacemos la petición de los personajes. 
  //Como habíamos fragmentado el código no hemos tenido que cambiar nada apenas. Simplemente crearnos el objeto request y hacer un fethc dentro de la promesa
   var peticion = new Request(url, {
    method: "GET",
    headers: new Headers({
      "Content-type": "application/x-www-form-urlencoded",
    }),
  });
  return new Promise((resolver, rechazar) => {
    fetch(peticion)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        resolver(datos);
      })
      .catch(() => {
        rechazar(new Error("Ha habido un error de comunicacón."));
      });
  });
}
     

export function mostrar(peliculas,id="peliculas") {//Mostramos las películas y añadimos los manejadores de forma dinámica. 
  //Al tener como parámetro opcional una id luego podemos ponerlo en cualquier otro lugar si nos tenemos que ajustar a las plantilla.
  let cadena = " ";
  peliculas.results.map((v, i, a) => {
    cadena += `<li class='lista'>(${v.episode_id}) ${v.title} `;
  });
  document.getElementById("peliculas").innerHTML =` <h1> Películas</h1> <ul>${cadena}</ul>`;
  document.getElementById("peliculas").classList="";
  let listas= document.getElementsByClassName("lista");
  //console.log(listas);
   for(let i=0;i<listas.length;i++){
     listas[i].addEventListener("click",(event)=>{
      if(indice!=i){//Así comprobamos que no pueda ser clicado más de una vez en la misma posción consiguiendo nuestro objetivo que se muestren 10.
        indice=i;
        sinopsis(i,peliculas);
        personajes(i,peliculas);
       
      }
     
      
     },false);
   }

} 





    
