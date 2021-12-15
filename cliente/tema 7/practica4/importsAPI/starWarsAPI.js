 "use strict";
   let indice="";//Para asegurarnos que salgan 10 personajes.
   const peliculas= () => {//Con un fethc se hace muy sencillo y con menos líneas ya que no tenemos que crear el objeto AJAX.
    const url = "https://swapi.py4e.com/api/films/";
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
  

  function vehiculos(vehicles, naves)  {//Con un fethc se hace muy sencillo y con menos líneas ya que no tenemos que crear el objeto AJAX.
    var arrayVehiculos=[];
    var arrayNaves=[];//Para poder hacer las promesas todas juntas.
    if(naves.length>0){ 
      naves.map((v, i, a) => {
        arrayNaves.push(peticionVehiculos(v));
    });
mostrarVehiculoAsin(arrayNaves,"Naves");//Le pasamos el tipo que son ya que así la función se puede reutilizar para naves y vehículos.
    }  
  if(vehicles.length>0){ 
  vehicles.map((v, i, a) => {
    arrayVehiculos.push(peticionVehiculos(v));
});
mostrarVehiculoAsin(arrayVehiculos,"Vehicle");
} 

}

 
function sinopsis(indice,pelicula,id="descripcion"){//Muestra la sinopsis de la película indicada.
  //Al tener como parámetro opcional una id luego podemos ponerlo en cualquier otro lugar si nos tenemos que ajustar a las plantilla.
   let cadena = " ";
   pelicula.results.map((v, i, a) => {
      if(i==indice){
       cadena+= `<h2> Sinopsis de ${v.title}</h2>   <p>${v.opening_crawl}</p> <img src='../images/${i}.jpeg' alt="Star Wars"  width="250"> `;
       //Las películas estan ordenadas según la Api,es decir, en orden de salida.
       
      }       
   });
  
   document.getElementById("descripcion").innerHTML =`${cadena}`;
   document.getElementById("descripcion").classList="";
    }

 function anyadirPersonaje(actor){//Añadimos los personajes hasta 10;
  let div =document.getElementById("personajes");
  let parrafo= document.createElement("p");
                              parrafo.innerHTML =`${actor.name}`;  
                      div.classList="";
                        parrafo.addEventListener("click",(event)=>{
                        masInfo(actor);    
                       vehiculos(actor.vehicles,actor.starships);           
                        },false);
                        div.appendChild(parrafo);
}



    function masInfo(actor,id="info"){//Así añadimos información extra a los personajes.
    document.getElementById("info").innerHTML =`<h2> Más información sobre ${actor.name}:</h2> Siendo su género  ${actor.gender} con una altura ${actor.height}cm con un peso de  ${actor.mass} kg y tiene un color de pelo ${actor.hair_color} y con un color de ojos ${actor.eye_color} y su fecha de nacimiento es ${actor.birth_year}`;
    document.getElementById("info").classList="";
    }

function personajes (indice,pelicula,id ="personajes"){//Muestra 10 personajes de la película indicada.
      //Al tener como parámetro opcional una id luego podemos ponerlo en cualquier otro lugar si nos tenemos que ajustar a las plantilla.
     let info= document.getElementById("info")
      info.innerHTML="";
      info.classList.add("hidden");
      var actoresArray= [];
        let div =document.getElementById("personajes");
        pelicula.results.map((v, i, a) => {
            if(i==indice){
             div.innerHTML=      `<h2>10 Personajes de ${v.title} </h2>` ;
                v.characters.map((v,i,a)=>{
                 if(i<10){
                   actoresArray.push(peticionPersonajes(v));   //Asi creamos un array de 10 promesas que serán personajes.
                 }
                });
            } 
        });
         mostrarPersonajes(actoresArray);//Con está función asíncrona mostramos los 10 personajes una vez estén todos.
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
const peticionVehiculos = (url)=>{//Con un fetch hacemos la petición de los personajes. 
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

function mostrarVehiculo(vehiculo, tipo){
  return  `El nombre del ${tipo} es :${vehiculo.name}  su modelo:${vehiculo.model} y el construsctor:${vehiculo.manufacturer} `;
  
}

 function mostrar(peliculas,id="peliculas") {//Mostramos las películas y añadimos los manejadores de forma dinámica. 
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

export const mostrarPeliculas = async() => {//Así conseguimos mostrar las peliculas 
  let todasLasPeliculas= await peliculas();
  mostrar(todasLasPeliculas);
}

 const mostrarPersonajes= async(array)=>{ //Mostramos todos los personajes de golpe y no hay esos parones tan desagrables que se daban anteriormente.
  let personajes= await Promise.allSettled(array);
  for(let i=0;i<personajes.length;i++){//Al tener todos los personajes en un Array lo recorremos y los mostramos al igual que las veces anteriores.
    anyadirPersonaje(personajes[i].value);
  }
}

 const mostrarVehiculoAsin= async(array,tipo,)=>{ 
  let vehiculos= await Promise.allSettled(array);
  let info=document.getElementById("info");
  info.innerHTML+=` <h2> ${tipo}  que usan: </h2>`;
  for(let i=0;i<vehiculos.length;i++){
   info.innerHTML+=`<li>${(mostrarVehiculo(vehiculos[i].value, tipo))}</li>`;
  }
}





    
