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
window.onload =()=> {
    
    const db= getFirestore(app);
    const productos = collection(db,"Productos");
    const obtenerProductos = async () => {
        
        const productosDelDocumento = await getDocs(productos);
        document.body.innerHTML+="<table> <th>Nombre </th> <th> Peso</th> <th> Precio</th> <th> Descripcion</th> <th> imagen</th>";
        productosDelDocumento.docs.map((documento) => {
            
         
            document.body.innerHTML+= crearfila(documento.data().nombre,documento.data().peso,documento.data().precio,documento.data().descripcion, documento.data().imagen);
           
        });
        document.body.innerHTML+="</table>"
      };
obtenerProductos();
   
    
    }
