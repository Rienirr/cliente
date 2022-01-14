
/*Esta biblioteca nos  permite hacer las consultas necesarias sobre la base de datos ahora es solo leer luego también nos permitirá escribir*/ 

import { cabecera, crearfila } from "./plantillas.js";
import {getDocs,query,  where,orderBy,
 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

export const obtenerProductos = async (productos) => {    
    var  lista= document.getElementById("lista");
    lista.innerHTML="";   
    try{
      lista.insertAdjacentElement("beforeend", cabecera()); 
    const productosDelDocumento = await getDocs(productos);
    productosDelDocumento.docs.map((documento) => {
      
      
        lista.insertAdjacentElement("beforeend", crearfila(documento.id,documento.data().nombre,documento.data().peso,documento.data().precio,documento.data().descripcion, documento.data().imagen) );
    });
}catch(error) {
    console.log(error);
}
    return true;
  };
  
  export const filtrarPor= async (productos,filtro,) => {
    var  lista= document.getElementById("lista");
    lista.innerHTML="";  
    var comparador="";
 
    if (filtro === "mayor") comparador=">=";
    else if (filtro === "menor") comparador="<";
    try{
      lista.insertAdjacentElement("beforeend", cabecera());
          const consulta = query(
            productos,
      where("precio", comparador, 5),
      orderBy("precio", "desc"),
    ); 
  
    const productosDelDocumento = await getDocs(consulta);
    productosDelDocumento.docs.map((documento) => {
   lista.insertAdjacentElement("beforeend", crearfila(documento.id,documento.data().nombre,documento.data().peso,documento.data().precio,documento.data().descripcion, documento.data().imagen) ); 
  });
}catch(error) {
    console.log(error);
}
  }




  export const ordenarPor= async(productos, filtro) =>{
    var  lista= document.getElementById("lista");
    lista.innerHTML="";   
    try{
      lista.insertAdjacentElement("beforeend", cabecera());
      const consulta = query(
        productos,
  orderBy(filtro, "asc"),
); 

const productosDelDocumento = await getDocs(consulta);
productosDelDocumento.docs.map((documento) => {
lista.insertAdjacentElement("beforeend", crearfila(documento.id,documento.data().nombre,documento.data().peso,documento.data().precio,documento.data().descripcion, documento.data().imagen) ); 
});


  }catch(error) {
    console.log(error);
}
}