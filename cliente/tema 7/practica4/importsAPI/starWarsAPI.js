 "use strict";
var arrayPersonajesDepiluca= new Array();
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
  

  function vehiculos(vehicles, naves)  {//Con un fethc se hace muy sencillo y con menos líneas ya que no tenemos que crear el objeto AJAX.
    
  
    document.getElementById("info").innerHTML+=`<h2 id="ve"> Vehículos  que usan: </h2>`;//Añadimos los dos encabezados de esta forma ya que el código asíncrono funciona de forma un poco extraña a veces.
    if(naves.length>0){ 
      document.getElementById("info").innerHTML+=`<h2 id="naves"> Naves  que usan:</h2>`;
      let encabezadoNaves= document.getElementById("naves");
      naves.map((v, i, a) => {
              peticionVehiculos(v).then((nave) => {
                encabezadoNaves.insertAdjacentElement("afterend",(mostrarVehiculo(nave, "Naves")));//Añadimos tantas naves a la lista como haya.
             });    
    });
    }  
if(vehicles.length>0){ 
  let encabezadoVehiculos= document.getElementById("ve");
  vehicles.map((v, i, a) => {
          peticionVehiculos(v).then((vehiculo) => {
           encabezadoVehiculos.insertAdjacentElement("afterend",(mostrarVehiculo(vehiculo, "vehículos")));//Añadimos tantos vehículos a la lista como haya.
         });
   
});
} 
else{//Esto es para ocultar vehículos si no hay.
  let encabezadoVehiculos= document.getElementById("ve");
  encabezadoVehiculos.setAttribute("class", "hidden");
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

export function anyadirPersonaje(actor){//Añadimos los personajes hasta 10;
  let div =document.getElementById("personajes");
  let parrafo= document.createElement("p");
  //Se ha cambiado esto para poder crear los párrafos y tener más control sobre ellos en lugar de con innerHTML que daba problemas con el código asíncrono.
                              parrafo.innerHTML =`${actor.name}`;  
                              //console.log(actor);
                      div.classList="";
                        parrafo.addEventListener("click",(event)=>{
                        masInfo(actor); 
                        
                       vehiculos(actor.vehicles,actor.starships);
                       
                        },false);
                        div.appendChild(parrafo);
}



   export function masInfo(actor,id="info"){//Así añadimos información extra a los personajes.
 
    document.getElementById("info").innerHTML =`<h2> Más información sobre ${actor.name}:</h2> Siendo su género  ${actor.gender} con una altura ${actor.height}cm con un peso de  ${actor.mass} kg y tiene un color de pelo ${actor.hair_color} y con un color de ojos ${actor.eye_color} y su fecha de nacimiento es ${actor.birth_year}`;
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
    let li= document.createElement("li");
    li.innerHTML=`El nombre del ${tipo} es :${vehiculo.name}  su modelo:${vehiculo.model} y el construsctor:${vehiculo.manufacturer} `;
    return li;
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

export const mostrarPeliculas = async() => {
  let todasLasPeliculas= await peliculas();
  mostrar(todasLasPeliculas);
}
export const mostrarPersonaje= async(url)=>{
  let personaje= await peticionPersonajes(url);
  anyadirPersonaje(personaje);
}
export const mostrarVehiculoAsin= async(url)=>{
  let vehiculo= await  peticionVehiculos(url);


}





    
