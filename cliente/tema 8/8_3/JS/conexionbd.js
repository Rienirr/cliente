
/*Esta biblioteca nos  permite hacer las consultas necesarias sobre la base de datos ahora es solo leer luego también nos permitirá escribir*/ 

import { cabecera, crearfila, mensajesUsuario,formulario } from "./plantillas.js";

import {getDocs,query,  where,orderBy,
 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
var  lista= document.getElementById("lista");
export const obtenerProductos = async (productos) => {    //Obtiene toda la lista de productos.
    
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
 
  export const buscarProducto = async (productos, palabra)=>{//Busca si hay alguna coincidencia si la hay lo muestra.
    lista.innerHTML="";  
    var busqueda= document.getElementById("busqueda");  
    if(palabra.trim()=="") {mensajesUsuario("Introduce algo en el campo a buscar"); return false;}//Si la palabra  esta en blanco no hacemos nada.
    else{ 
    var semaforo=false;
    try{
      lista.insertAdjacentElement("beforeend", cabecera()); 
    const productosDelDocumento = await getDocs(productos);
    productosDelDocumento.docs.map((documento) => {
      
      if(documento.data().nombre.toUpperCase().includes(palabra.toUpperCase())){
        semaforo= true;
        lista.insertAdjacentElement("beforeend", crearfila(documento.id,documento.data().nombre,documento.data().peso,documento.data().precio,documento.data().descripcion, documento.data().imagen) );
      }       
    });
}catch(error) {
    console.log(error);
}
if(semaforo){ mensajesUsuario(`Se han encontrado las siguientes coincidencias con ${busqueda.value}`);  
busqueda.value="";return true;}//Si ha encontrado coincidencia.
else {  mensajesUsuario(`No se han encontrado las siguientes coincidencias con ${busqueda.value}`) ;    lista.innerHTML=""; busqueda.value="";return false;} //Fallo en la coincidencia.    

} 
 
};
const comprobarDatos=(nombreLista,nombreCreador)=>{
   
  if(nombreLista.value.trim()!="" && nombreCreador.value.trim()!="")    return true;
  else return false;
  
};

export const nuevaLista = (ListaCompra)=>{
    lista.innerHTML="";
    lista.appendChild(formulario(ListaCompra));
    let boton=document.getElementById("CrearLista");
    boton.addEventListener("click",(event)=>{
      let nombreLista= document.getElementById("nombreLista");
      let nombreCreador=document.getElementById("nombreCreador");
      if(comprobarDatos(nombreLista,nombreCreador)){

      }else{
        mensajesUsuario(`Tienes que rellenar todos los campos `) ;    return false; //Fallo en la coincidencia.    
      }
    },false);
  }
  
   const crearListaCompra = async(ListaCompra,nombre)=>{
      
    const cestas = await getDocs(ListaCompra);
    cestas.docs.map((documento) => {
     if(documento.data().nombre.toUpperCase() != nombre.toUpperCase()){
      //Creamos la Lista de productos.
     }else{
      mensajesUsuario(`Esa lista ya existe !! Introduce otro nombre  `) ;    return false; //Fallo en la coincidencia.
     }
  });
};
  
  export const filtrarPor = async (productos,filtro,condicion) => {//Nos filtra por precio y peso.
    var valorFiltro= filtro.value;
    if(parseFloat(condicion)<=0 || condicion.trim()==""){mensajesUsuario(`Tienes que poner un número positivo`);   return false;}
    var complemento="";

    if (valorFiltro=="precio") complemento="€";
    else if (valorFiltro==="peso") complemento= "kg";
    lista.innerHTML="";  
    var comparador="<="; 
    var semaforo=false;
    try{
      
      lista.insertAdjacentElement("beforeend", cabecera());
          const consulta = query(
            productos,
      where(valorFiltro, comparador, parseFloat(condicion)),
      orderBy(valorFiltro, "desc"),
    ); 
    const productosDelDocumento = await getDocs(consulta);//Una vez filtrados los mostramos
    productosDelDocumento.docs.map((documento) => {
      semaforo=true;
   lista.insertAdjacentElement("beforeend", crearfila(documento.id,documento.data().nombre,documento.data().peso,documento.data().precio,documento.data().descripcion, documento.data().imagen) ); 
  });
}catch(error) {
    console.log(error);
}
if(semaforo)mensajesUsuario(`Productos con  ${valorFiltro} menor igual a  ${numero.value} ${complemento}`);
else{ mensajesUsuario(`No hay productos con  ${valorFiltro} menor igual a  ${numero.value} ${complemento}`); lista.innerHTML="";  }//Para que no muestre la cabecera de la lista.
return true;
  };

  
  
  export const ordenarPor= async(productos, filtro) =>{//Nos ordena los productos dependiendo del filtro que le pasemos que es nombre, peso y descripción.
   lista.innerHTML="";   
    try{
      lista.insertAdjacentElement("beforeend", cabecera());
      const consulta = query(
        productos,
  orderBy(filtro, "desc"),
); 
const productosDelDocumento = await getDocs(consulta);//Los mostramos una vez ordenados como queremos.
productosDelDocumento.docs.map((documento) => {
lista.insertAdjacentElement("beforeend", crearfila(documento.id,documento.data().nombre,documento.data().peso,documento.data().precio,documento.data().descripcion, documento.data().imagen) ); 
})
  }catch(error) {
    console.log(error);
}
}