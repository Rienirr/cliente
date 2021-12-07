"use strict";


  export const getCiudad = () => {
 
  return new Promise((resolver, rechazar) => {


const peticion = new XMLHttpRequest();


peticion.open("GET", "./imports/ciudadesquenosinteresan.json");
peticion.addEventListener("readystatechange", () => {
    if (peticion.readyState === 4 && peticion.status === 200){
        
        resolver(JSON.parse(peticion.response));
       
     
    }

  },false);
    
peticion.send(); 

});
  }

