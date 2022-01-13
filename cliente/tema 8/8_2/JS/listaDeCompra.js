/*Se encarga de manejar los datos que vienen de la base de datos correspondientes a la lista de la compra */
"use strict;"
import { app } from "./fileBase.js";
import { crearfila } from "./plantillas.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  onSnapshot,
  doc,
  query,
  where,
  orderBy,
  limit,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { obtenerProductos,filtrarPor } from "./conexionbd.js";
window.onload =()=> {
  var d= document;
 
  var mensajesUsuario= d.getElementById("comunicacion_usuario");
    var mostrar= d.getElementById("mostrar");
  var filtrar= d.getElementById("filtrar");
  var ordenar= d.getElementById("ordenar")
    const db= getFirestore(app);
    const productos = collection(db,"Productos");

obtenerProductos(productos);//Mostramos todos los productos al iniciar.
   mostrar.addEventListener("click", (event)=>{//Mostramos todos los productos por si el usuario los quiere volver a ver.
    obtenerProductos(productos);
   },false);
    filtrar.addEventListener("click",(event)=>{
    filtrarPor(productos,d.querySelector('input[name="filtro"]:checked').value);
    })
    }
