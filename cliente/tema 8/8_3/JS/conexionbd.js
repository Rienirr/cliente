
/*Esta biblioteca nos  permite hacer las consultas necesarias sobre la base de datos ahora es solo leer luego también nos permitirá escribir*/ 

import { cabecera, crearfila, mensajesUsuario,formulario,crearfilaLista, ListaJSON, formularioParaEditarLista, formularioParaEditarProductos, ProductoJSON } from "./plantillas.js";

import {getDocs,query,  where,orderBy,addDoc,doc,getDoc,updateDoc,arrayUnion,arrayRemove,deleteDoc 
 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
var  lista= document.getElementById("lista");
var titulo = document.getElementById("titulo");

export const obtenerProductos = async (listas,productos,listaElegida) => {    //Obtiene toda la lista de productos.
  titulo.innerHTML="Listado de los productos de la compra";
    lista.innerHTML="";   
    try{
      lista.insertAdjacentElement("beforeend", cabecera()); 
    const productosDelDocumento = await getDocs(productos);
    productosDelDocumento.docs.map((documento) => {

        lista.insertAdjacentElement("beforeend", crearfila(documento.id,documento.data().nombre,documento.data().peso,documento.data().precio,documento.data().descripcion, documento.data().imagen) );
    });

botonesAñadirProductos(listas,listaElegida);//para añadir la funcionalidad de añadir productos;
botonesEditarProductos(listas,productos,listaElegida,productosDelDocumento);
}catch(error) {
    console.log(error);
}
    return true;
  };
  function botonesAñadirProductos(listas,listaElegida){
    var botonesAñadirProductos=document.getElementsByClassName("anyadirALaLista");
for(let i=0; i<botonesAñadirProductos.length;i++){
  botonesAñadirProductos[i].addEventListener("click",(event)=>{
  if(listaElegida!==""){
    let arrays= [event.target.parentNode.parentNode.children[0].textContent,event.target.parentNode.parentNode.children[1].textContent,event.target.parentNode.parentNode.children[2].textContent,1];//nombre, peso, precio , cantidad
    
    ActulizarLista(listas,listaElegida,arrays);
  }else{
    mensajesUsuario(`Para añadir productos elige una lista primero`) ; 
  }
  },false);
  }
}
function botonesEditarProductos(listas,productos,listaElegida,productosDelDocumento){
  var botonesEditarProductos=document.getElementsByClassName("EditarProducto");
for(let i=0; i<botonesEditarProductos.length;i++){
  botonesEditarProductos[i].addEventListener("click",(event)=>{
    lista.innerHTML="";  
    lista.appendChild(formularioParaEditarProductos(productosDelDocumento.docs[i].id,productosDelDocumento.docs[i].data().nombre,productosDelDocumento.docs[i].data().peso,productosDelDocumento.docs[i].data().precio,productosDelDocumento.docs[i].data().descripcion,productosDelDocumento.docs[i].data().imagen));
    EditarProducto(listas,productos,listaElegida);//Añade la funcionalidad al botón editar.
    EliminarProducto(listas,productos,listaElegida);//Añade la funcionalidad al botón eliminar.
  },false);
}


}
function EditarProducto(listas,productos,listaElegida){
  var botonesEdit=document.getElementById("EditarProductos");
    botonesEdit.addEventListener("click",(event)=>{
     var nuevoNombre =document.getElementById("nombreProducto");
     var nuevoPeso =document.getElementById("pesoProducto");
     var nuevoPrecio =document.getElementById("precioProducto");
     var nuevoDescripcion=document.getElementById("descripcionProducto");
     var nuevoImagen=document.getElementById("imagenProducto");
     if(isNaN(parseFloat(nuevoNombre.value))&& (!isNaN(parseFloat(nuevoPeso.value))&&parseFloat(nuevoPeso.value)>0 )&&(!isNaN(parseFloat(nuevoPrecio.value))&&parseFloat(nuevoPrecio.value)>0 ) &&isNaN(parseFloat(nuevoDescripcion.value))&&isNaN(parseFloat(nuevoImagen.value))) {
      ActulizarProducto(productos,event.target.parentNode.id,nuevoNombre.value,nuevoPeso.value,nuevoPrecio.value,nuevoDescripcion.value,nuevoImagen.value);
      obtenerProductos(listas,productos,listaElegida);
      mensajesUsuario(`Se ha actulizado el producto`);
     }else{
      mensajesUsuario(`Has introducido mal los valores`);
     }
   
    },false);
}
export function anyadirProducto(listas,productos,listaElegida){
  var botonesEdit=document.getElementById("CrearProductos");
  botonesEdit.addEventListener("click",(event)=>{
   var nuevoNombre =document.getElementById("nombreProducto");
   var nuevoPeso =document.getElementById("pesoProducto");
   var nuevoPrecio =document.getElementById("precioProducto");
   var nuevoDescripcion=document.getElementById("descripcionProducto");
   var nuevoImagen=document.getElementById("imagenProducto");
   if(isNaN(parseFloat(nuevoNombre.value))&& (!isNaN(parseFloat(nuevoPeso.value))&&parseFloat(nuevoPeso.value)>0 )&&(!isNaN(parseFloat(nuevoPrecio.value))&&parseFloat(nuevoPrecio.value)>0 ) &&isNaN(parseFloat(nuevoDescripcion.value))&&isNaN(parseFloat(nuevoImagen.value))) {
    crearProducto(productos,nuevoNombre.value,nuevoPeso.value,nuevoPrecio.value,nuevoDescripcion.value,nuevoImagen.value,listas,listaElegida);
 
    mensajesUsuario(`Se ha actulizado el producto`);
   }else{
    mensajesUsuario(`Has introducido mal los valores`);
   }
  },false);
}
function EliminarProducto(listas,productos,listaElegida){
  var botonBorrar=document.getElementById("BorrarProductos");
  botonBorrar.addEventListener("click",(event)=>{
   console.log( event.target.parentNode.id);
    borrarDoc(productos,event.target.parentNode.id);
    obtenerProductos(listas,productos,listaElegida);
    mensajesUsuario(`Se ha borrado el producto`);
},false);
}

const borrarDoc = async (productos,id) => {
  await deleteDoc(doc(productos, id));
};

const ActulizarProducto = async (Coleccion,id,nuevoNombre,nuevoPeso,nuevoPrecio,nuevoDescripcion,nuevoImagen) => {
  const productoId = await doc(Coleccion, id);
 
   await updateDoc(productoId, {
    nombre: nuevoNombre,
    peso: nuevoPeso,
    descripcion: nuevoDescripcion,
    precio: nuevoPrecio,
    imagen: nuevoImagen,
  });
 
};

  const ActulizarLista = async (Coleccion,id,array) => {
    const listaId = await doc(Coleccion, id);
   
     await updateDoc(listaId, {
      productos: arrayUnion(`${array[0]}, ${array[1]},${array[2]}, ${array[3]}`),
    });
   
  };

  export const obtenerListas= async(listas,productos,listaElegida)=>{
    titulo.innerHTML="Listas de la compra";
    lista.innerHTML="";  
    const consulta = query(
      listas,
orderBy("fecha", "desc"),
);  
    try{
    const todasListas = await getDocs(consulta);
    todasListas.docs.map((documento) => {
        lista.insertAdjacentElement("beforeend", crearfilaLista(documento.id,documento.data().nombre, documento.data().fecha , documento.data().creador, documento.data().productos));
    });
}catch(error) {
    console.log(error);
}

ListaAnyadirProducto(listas,productos,listaElegida);
ListaEditarProductos(listas,listaElegida, productos);
    return true;
  };
 
   const ListaEditarProductos= (listas,listaElegida,productos )=>{
    var botonesEditarProductosLista=document.getElementsByClassName("EditarLista");
    for(let i=0; i<botonesEditarProductosLista.length;i++){
      botonesEditarProductosLista[i].addEventListener("click",(event)=>{
     listaElegida = event.target.parentNode.parentNode.id;//Cada vez Elegimos una Lista
   var productosParaEditar=event.target.parentNode.parentNode.querySelectorAll(` .nombreProducto`);
   console.log(productosParaEditar);
   var nombreListaParaEditar=event.target.parentNode.parentNode.children[0].textContent;
lista.innerHTML="";
   lista.appendChild(formularioParaEditarLista(nombreListaParaEditar,productosParaEditar));
   let boton=document.getElementById("EditarLista");
    boton.addEventListener("click",async(event)=>{
      let nombreLista= document.getElementById("nombreLista");
      let productosSelecionados=document.querySelectorAll("input[type='checkbox']:checked");
      let nuevoNombre=false;
      let arrayProductosSelecionados=[];
      
      if(nombreLista.value !=nombreListaParaEditar){//nombre ha cambiado
       nuevoNombre =nombreLista.value;
      } if(productosSelecionados.length!=0){
        
        try{
          const productosDelDocumento = await getDocs(productos);
          productosDelDocumento.docs.map((documento) => {
            for(let k=0;k<productosSelecionados.length;k++){
            if(documento.data().nombre==productosSelecionados[k].value){
              console.log(productosSelecionados[k].value);
              arrayProductosSelecionados.push(documento.data().nombre);
              arrayProductosSelecionados.push(`${documento.data().peso} Kg`);
              arrayProductosSelecionados.push(`${documento.data().precio} €`);
              arrayProductosSelecionados.push(1);
            }
          }
          });
        }catch(error) {
    console.log(error);
}
      }
         editarLista(listas,listaElegida,arrayProductosSelecionados,nuevoNombre,productos);
      },false);
    },false);
  }
};

const editarLista = async (Coleccion,id,arrayProductosSelecionados,nuevoNombre,productos) => {
  const listaId = await doc(Coleccion, id);
    var string="";
  var stringCompleto="";
  if(nuevoNombre && arrayProductosSelecionados.length>0 ){//Se han selecionado productos y cambiado el nombre.
    
  for(let i=0;i<arrayProductosSelecionados.length;i+=4){
   string="";
      string+=`${arrayProductosSelecionados[i]}, ${arrayProductosSelecionados[1+i]} ,${arrayProductosSelecionados[2+i]}, ${arrayProductosSelecionados[3+i]}`;
      stringCompleto=string;
      await updateDoc(listaId, {
        nombre: nuevoNombre,
        productos: arrayRemove(stringCompleto),
      }); 
    }
    mensajesUsuario(`El nombre de la lista ha sido editada a ${nuevoNombre} y se ha borrado los productos seleccionados con éxito`);
  }
  else if(nuevoNombre && arrayProductosSelecionados.length==0 ){//Solo se cambia el nombre.
     await updateDoc(listaId, {
      nombre: nuevoNombre,
    });
    mensajesUsuario(`El nombre de la lista ha sido editada a ${nuevoNombre}`);
  }
  else if(!nuevoNombre && arrayProductosSelecionados.length>0){//Solo se los productos.
  for(let i=0;i<arrayProductosSelecionados.length;i+=4){
     string="";
      string+=`${arrayProductosSelecionados[i]}, ${arrayProductosSelecionados[1+i]} ,${arrayProductosSelecionados[2+i]}, ${arrayProductosSelecionados[3+i]}`;
      stringCompleto=string;
      await updateDoc(listaId, { 
        productos: arrayRemove(stringCompleto),
      });
    }
    mensajesUsuario("Productos borrado con exito;")
  }
 obtenerListas(Coleccion,productos,id);
 
};


  function ListaAnyadirProducto(listas,productos,listaElegida){
    var botonesAñadirProductosLista=document.getElementsByClassName("verLista");
    for(let i=0; i<botonesAñadirProductosLista.length;i++){
      botonesAñadirProductosLista[i].addEventListener("click",(event)=>{
     listaElegida = event.target.parentNode.parentNode.id;//Cada vez Elegimos una Lista.
     console.log(listaElegida);
     console.log(event.target.parentNode.id);
     obtenerProductos(listas,productos,listaElegida);
      },false);
    }
  }
 
  export const buscarProducto = async (productos, palabra,listaElegida,listas)=>{//Busca si hay alguna coincidencia si la hay lo muestra.
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
    botonesAñadirProductos(listas,listaElegida);//para añadir la funcionalidad de añadir productos
    botonesEditarProductos(listas,productos,listaElegida,productosDelDocumento);
}catch(error) {
    console.log(error);
}
if(semaforo){ mensajesUsuario(`Se han encontrado las siguientes coincidencias con ${busqueda.value}`);  
busqueda.value="";
;
return true;}//Si ha encontrado coincidencia.
else {  mensajesUsuario(`No se han encontrado las siguientes coincidencias con ${busqueda.value}`) ;    lista.innerHTML=""; busqueda.value="";return false;} //Fallo en la coincidencia.   
} 
};

const comprobarDatos=(nombreLista,nombreCreador)=>{
  if(nombreLista.value.trim()!="" && nombreCreador.value.trim()!="")    return true;
  else return false;
};

export const nuevaLista = (ListaCompra)=>{
  titulo.innerHTML="Listas de la compra";
    lista.innerHTML="";
    lista.appendChild(formulario());
    let boton=document.getElementById("CrearLista");
    boton.addEventListener("click",(event)=>{
      let nombreLista= document.getElementById("nombreLista");
      let nombreCreador=document.getElementById("nombreCreador");
      if(comprobarDatos(nombreLista,nombreCreador)){
        crearListaCompra(ListaCompra, nombreLista.value, nombreCreador.value);
      }else{
        mensajesUsuario(`Tienes que rellenar todos los campos `) ;    return false; //Fallo en la coincidencia.    
      }
      let botoneslista= document.getElementsByClassName("verLista");
      for(let i=0; i<botoneslista.length;i++){
        console.log("");
        //añadir funcionalidad a añadir productos lista
      }
    },false);
  }
  const guardarlista = async (ListaCompra,listaCreada) => {
    const ListaGuardada = await addDoc(ListaCompra, listaCreada);
    console.log(`Lista guardado con el id ${ListaGuardada.id}`);
    mensajesUsuario(`Lista añadida con éxito `) ;
  };
   const crearListaCompra = async(ListaCompra,nombre, creador)=>{
    const consulta = query(
      ListaCompra,
where("nombre", "==", nombre)

); 
   let listaCreada = ListaJSON(nombre, creador);
   console.log(listaCreada);
   const cestas = await getDocs(consulta);
   let semaforo= true;// para filtrar que el nombre no este 
   cestas.docs.map((documento) => {
   semaforo= false;
 });
 if(semaforo){
  guardarlista(ListaCompra,listaCreada);  
   obtenerListas(ListaCompra);
 } 
      else mensajesUsuario(`Esa lista ya existe !! Introduce otro nombre  `) ;    //Fallo en la coincidencia.
     
 
};
const guardarProducto = async (productos,productoCreado) => {
  const ProductoGuardado = await addDoc(productos, productoCreado);
  console.log(`Producto guardado con el id ${ProductoGuardado.id}`);
  mensajesUsuario(`Producto añadido con éxito `) ;
};
const crearProducto = async(Coleccion,nuevoNombre,nuevoPeso,nuevoPrecio,nuevoDescripcion,nuevoImagen,listas,listaElegida )=>{
  const consulta = query(
    Coleccion,
where("nombre", "==", nuevoNombre)

); 
 let pruductoCreados =ProductoJSON(nuevoNombre,nuevoPeso,nuevoPrecio,nuevoDescripcion,nuevoImagen);
 console.log(pruductoCreados);
 const cestas = await getDocs(consulta);
 let semaforo= true;// para filtrar que el nombre no este 
 cestas.docs.map((documento) => {
 semaforo= false;
});
if(semaforo){
  guardarProducto(Coleccion,pruductoCreados);  
  obtenerProductos(listas,Coleccion,listaElegida);
} 
    else mensajesUsuario(`Ese producto ya existe !! Introduce otro nombre  `) ;    //Fallo en la coincidencia.
   

};


  
  export const filtrarPor = async (productos,filtro,condicion,listaElegida,listas) => {//Nos filtra por precio y peso.
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
if(semaforo){
  mensajesUsuario(`Productos con  ${valorFiltro} menor igual a  ${numero.value} ${complemento}`);
  botonesAñadirProductos(listas,listaElegida);//para añadir la funcionalidad de añadir productos;
  botonesEditarProductos(listas,productos,listaElegida,productosDelDocumento);
}
else{ mensajesUsuario(`No hay productos con  ${valorFiltro} menor igual a  ${numero.value} ${complemento}`); lista.innerHTML="";  }//Para que no muestre la cabecera de la lista.
return true;
  };



  export const filtrarPorFecha = async (ListaCompra,filtro,productos,listaElegida) => {//Para filtrar por fecha
    var valorFiltro=  filtro.split("-");;
    var dia= parseInt(valorFiltro[2]);//Para que los días y meses que tengan un 0 delante los pierdan y así se puedan comparar con la base de datos.
    var mes= parseInt(valorFiltro[1]);
    var anyo= valorFiltro[0];
   
     if(isNaN(dia)){//Para comprobar que los datos introducidos sean correctos;
      mensajesUsuario("Escoge una fecha válida");
     }else{
//console.log(`${dia}/${mes}/${anyo}`);
    lista.innerHTML="";  
    
    var semaforo=false;
    try{
      
      lista.insertAdjacentElement("beforeend", cabecera());
          const consulta = query(
            ListaCompra,
      where("fecha", "<=", `${dia}/${mes}/${anyo}`),
      orderBy("fecha", "desc"),
    ); 
    const productosDelDocumento = await getDocs(consulta);//Una vez filtrados los mostramos
    productosDelDocumento.docs.map((documento) => {
      semaforo=true;
      lista.insertAdjacentElement("beforeend", crearfilaLista(documento.id,documento.data().nombre, documento.data().fecha , documento.data().creador, documento.data().productos)); 
  });
  ListaAnyadirProducto(ListaCompra,productos,listaElegida);
  ListaEditarProductos(ListaCompra,listaElegida, productos);
}catch(error) {
    console.log(error);
}
if(semaforo)mensajesUsuario(`Listas creadas  antes de ${dia}/${mes}/${anyo}`);
else{ mensajesUsuario(`No hay listas creadas  antes de ${dia}/${mes}/${anyo}`); lista.innerHTML="";  }//Para que no muestre la cabecera de la lista.
return true;
  }
};

  
  
  export const ordenarPor= async(productos, filtro,listaElegida,listas) =>{//Nos ordena los productos dependiendo del filtro que le pasemos que es nombre, peso y descripción.
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
});
  }catch(error) {
    console.log(error);
}

botonesAñadirProductos(listas,listaElegida);//para añadir la funcionalidad de añadir productos;
botonesEditarProductos(listas,productos,listaElegida,productosDelDocumento);
}
  