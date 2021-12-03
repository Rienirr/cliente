 "use strict";

   let indice="";//Para asegurarnos que salgan 10 personajes.
  
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
    httpRequest.send(); 
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
  
   document.getElementById("descripcion").innerHTML =`${cadena}`;
   document.getElementById("descripcion").classList="";
    }

export function anyadirPersonaje(actor){//Añadimos los personajes hasta 10;
  let div =document.getElementById("personajes");
  let parrafo= document.createElement("p");
  //Se ha cambiado esto para poder crear los párrafos y tener más control sobre ellos en lugar de con innerHTML que daba problemas con el código asíncrono.
                              parrafo.innerHTML =`${actor.name}`;  
                              console.log(actor);
                      div.classList="";
                        parrafo.addEventListener("click",(event)=>{
                        masInfo(actor);
                        },false);
                        div.appendChild(parrafo);
}
   export function masInfo(actor,id="info"){//Así añadimos información extra a los personajes.
    
    
   
    document.getElementById("info").innerHTML =`<h2> Más información sobre ${actor.name}:</h2> Siendo su género es: ${actor.gender} con una altura ${actor.height} con un peso de  ${actor.mass} kg y tiene un color de pelo ${actor.hair_color} y con un color de ojos ${actor.eye_color} y su fecha de nacimiento es ${actor.birth_year}`;
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
                  getPersonajes(v).then((actor) => {
                   anyadirPersonaje(actor);//Si nos devuelve un actor lo añadimos. 
                 })
                  
                 }
                });
            } 
        });
        
      }
      
      const getPersonajes=(direccion)=>{//La Api devuelve una dirección para saber los 
      return new Promise((resolver, rechazar) => {
       console.log(direccion);
        var httpRequest = new XMLHttpRequest();
                  httpRequest.open("GET", direccion, true);
                  httpRequest.setRequestHeader(
                    "Content-Type",
                    "application/x-www-form-urlencoded"
                  );
                  httpRequest.addEventListener(
                    "readystatechange",
                    () => { 

                      if (httpRequest.readyState == 4 && httpRequest.status == 200) {//Hemos cambiado
                        resolver(JSON.parse(httpRequest.response));   //nos devuelve un actor      

                      }
                    },
                    true
                  );
                  httpRequest.send(); 
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
  console.log(listas);
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





    
