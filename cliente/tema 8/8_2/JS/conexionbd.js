
/*Esta biblioteca nos  permite hacer las consultas necesarias sobre la base de datos ahora es solo leer luego también nos permitirá escribir*/ 

import { crearfila,crearfilaFiltrada } from "./plantillas.js";
import {getDocs,
 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

export const obtenerProductos = async (productos) => {    
    var  lista= document.getElementById("lista");
    lista.innerHTML="";   
    try{
    const productosDelDocumento = await getDocs(productos);
    productosDelDocumento.docs.map((documento) => {
      
      
        lista.insertAdjacentElement("beforeend", crearfila(documento.id,documento.data().nombre,documento.data().peso,documento.data().precio,documento.data().descripcion, documento.data().imagen) );
    });
}catch(error) {
    console.log(error);
}
    return true;
  };
  
  export const filtrarPor= async (productos,filtro) => {
    var  lista= document.getElementById("lista");
    lista.innerHTML="";   
    try{
        const productosDelDocumento = await getDocs(productos);
        productosDelDocumento.docs.map((documento) => {
           if(filtro==="nombre")  lista.insertAdjacentElement("beforeend", crearfilaFiltrada(documento.id,documento.data().nombre) );
           else if(filtro==="precio") lista.insertAdjacentElement("beforeend", crearfilaFiltrada(documento.id,documento.data().precio," €") );
         });
     
  }catch(error) {
    console.log(error);
}
  }