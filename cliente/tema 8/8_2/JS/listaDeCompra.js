/*Se encarga de manejar los datos que vienen de la base de datos correspondientes a la lista de la compra */
"use strict;"
import { app } from "./fileBase.js";
import { mensajesUsuario } from "./plantillas.js";
import {
  getFirestore,
  collection,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { obtenerProductos,filtrarPor, ordenarPor, buscarProducto } from "./conexionbd.js";
window.onload =()=> {
  var d= document;
  var eleccion = d.getElementById("eleccion");
  var numero= d.getElementById("numero");//Es el campo númerico de para el filtro de precio o peso.
  var busqueda= d.getElementById("busqueda");
    var mostrar= d.getElementById("mostrar");
    var buscar= d.getElementById("buscar");
  var filtrar= d.getElementById("filtrar");
  var ordenar= d.getElementById("ordenar")
    const db= getFirestore(app);
    const productos = collection(db,"Productos");

obtenerProductos(productos);//Mostramos todos los productos al iniciar.

   mostrar.addEventListener("click", (event)=>{//Mostramos todos los productos por si el usuario los quiere volver a ver.
    obtenerProductos(productos);
   },false);

    filtrar.addEventListener("click",(event)=>{ // Filtrar por peso o precio.
  var filtro= d.querySelector('input[name="filtro"]:checked');
  console.log(numero.value);
    filtrarPor(productos,filtro,numero.value);
    });
  
    ordenar.addEventListener("click",(event)=>{//Ordena los productos según el parámetro que recibe.
     
      var valorEleccion= eleccion.options[eleccion.selectedIndex].value;
      if(valorEleccion!=="nada"){
        ordenarPor(productos,valorEleccion);
        mensajesUsuario(`Prodcutos ordenados por ${valorEleccion}`); 
      }else mensajesUsuario("Por favor si quieres los productos ordenados por favor seleciona una opción");
      
    },false);
  buscar.addEventListener("click", (event)=>{//Busca si hay coincidencias con la busqueda.
  
    buscarProducto(productos,busqueda.value);
  },false);
  
  
  }
