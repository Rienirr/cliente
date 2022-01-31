/*Esta biblioteca nos permite crear plantillas que nos generar información necesaria para el cliente. */
"use strict;"
export function crearfila(id,nombre,peso,precio,descripcion,imagen="nada"){//Para crear la fila con todos los componentes del producto.
    let div = document.createElement("div");
    div.setAttribute("id",id);
    div.setAttribute("class","grid");
div.innerHTML =` <span class="colum">${nombre}</span>  <span class="colum">${peso} Kg </span> <span class="colum">${precio} €</span> <span class="colum">${descripcion} </span> <span class="colum img"> <img  class="colum" src=${imagen} alt="error en la imagen" width="50" height="50"> </span><div> <button  class="anyadirALaLista hidden" > Añadir a la lista</button><img  class="EditarProducto hidden" src="./imagenes/editar.png" alt="Editar producto" width="15" height="15"> </div>`;
return div;
}

export function crearfilaLista(id,nombre,fecha,creador, arrayP){//Para crear la fila con todos los componentes de la lista.
    let div = document.createElement("div");
    div.setAttribute("id",id);
    div.setAttribute("class","grid");
div.innerHTML =` <span class="colum">${nombre}</span>  <span class="colum">${fecha}  </span> <span class="colum">${creador} </span> `;
let productos="";
let pesoDeLaCompra=0;//Para hacer las recomendaciones.
let costeTotal=0;
if(arrayP.length==1){//No hay productos en la lista.
 productos+="No hay productos en la lista";
}else{
    arrayP.map((v,i,a)=>{//Hay y los recorremos cada posicion es un string con todos los campos.
      if(i>0){ //La primera posición siempre está vacía.
         let pcompleto= v.split(",");//Producto completo.
    productos+= ` Nombre: <b class="nombreProducto">${pcompleto[0]}</b>, Peso: ${pcompleto[1]}, Precio: ${pcompleto[2]} Cantidad: ${pcompleto[3]}.<br>`;//poner clase al peso y al precio para luego pillarlo en laconsulta.
        let price= pcompleto[2].split(" ");
        let weight =  pcompleto[1].split(" ");
        costeTotal+= parseFloat(price[0]);
     pesoDeLaCompra+=parseFloat(weight[1]);
}
});
}
let recomendacionAlUsuario= recomendaciones(costeTotal,pesoDeLaCompra);
div.innerHTML+= `<span class="colum">${productos} ${recomendacionAlUsuario} </span> `;
div.innerHTML+=`<div> <button class="verLista" > Añadir Productos</button> <img  class="EditarLista" src="./imagenes/editar.png" alt="Editar lista" width="15" height="15"> </div>`;
return div;
}
function recomendaciones(costeTotal, pesoDeLaCompra){
    let recomendacion=` El coste total de tu compra es ${costeTotal}€ .`;
    if(pesoDeLaCompra>0 && pesoDeLaCompra<10)//Es decir el peso es menor a 10kg 
        recomendacion+=` El peso total de tu compra es ${pesoDeLaCompra} Kg<b> puedes ir andando.</b>`;
else if(pesoDeLaCompra>=10)//Si es mayor a 10kg y eres un valiente adelante.
 recomendacion+=` El peso total de tu compra es ${pesoDeLaCompra}Kg <b> puedes ir andando o coger el coche ya que es un peso considerable.</b>`;

else if(pesoDeLaCompra>=20)//Si es mayor a 20kg recomendamos ir en coche.
    recomendacion+=` El peso total de tu compra es ${costeTotal}Kg <b> te recomendamos ir en coche.</b>`;

else if(pesoDeLaCompra==0 ) //No decimos nada ya que no hayu productos.
recomendacion="";
return recomendacion;
}



export function cabecera(){//Para añadir la cabecera a los productos
    let div = document.createElement("div");
    div.setAttribute("id","cabecera_lista")
    div.innerHTML="<span>Nombre</span>  <span>Peso </span> <span>Precio</span> <span class='des'>Descripción </span> <span class='des'>Imagen </span>";
    return div;
}

export function mensajesUsuario(texto){//Para comunicar al usuario todo lo que va ocurriendo
 let div=  document.getElementById("comunicacion_usuario");
 div.classList.remove("hidden");
 div.innerHTML= texto;
 setTimeout(() => {
    div.classList.add("hidden");   
 }, 3000);
}
export function ListaJSON(nombreL, creadorL){//Creamos la lista con los parametros necesarios
    return {nombre: nombreL,
            creador: creadorL,
            productos: [""],
            fecha: new Date().toLocaleDateString(),//Nos devuelve la fecha en el formato dd/mm/aaaa
        }
}
export function ProductoJSON(Nombre,Precio,Peso,Descripcion,Imagen){//Creamos los objetos que recibimos por formulario.
    return {nombre: Nombre,
            precio: Precio,
            peso: Peso,
            descripcion: Descripcion,
            imagen: Imagen,
        }
}
export function formulario(){//Para crear Lista.
let form= document.createElement("form");
form.innerHTML= "<label> Nombre de la lista </label> <input type='text' id='nombreLista'> <input type='button' value='Crear' id='CrearLista'>";
return form;
}
export function formularioParaEditarLista(nombreLista,nombresProductos){//Así podemos editar Lista
    let form= document.createElement("form");
    form.innerHTML= `<label> Nuevo nombre de la lista </label> <input type='text' id='nombreLista' value="${nombreLista}"> <label> Productos a eliminar de la lista</label>  `;
    for(let i=0;i<nombresProductos.length;i++){
        form.innerHTML+= `<label>${nombresProductos[i].innerHTML}  </label> <input type="checkbox"  value="${nombresProductos[i].innerHTML}"> `;
    }
    form.innerHTML+="<input type='button' value='Editar' id='EditarLista'> </input><input type='button' value='Borrar' id='BorrarLista'>";
    return form;
    }
    export function formularioParaEditarProductos(id="",nombre="",peso="",precio="",descripcion="",imagen=""){//Le pongo parámetros opcionales para poder usar el mismo formulario para crear nuevos que para editar los ya existentes;
        let form= document.createElement("form");
        form.setAttribute("id",id);
        form.innerHTML= `<label>Nombre del producto</label><input type='text' id='nombreProducto' value="${nombre}"> <label>Peso del producto</label><input type='number' id='pesoProducto' value="${peso}"><label>Precio del producto</label><input type='number' id='precioProducto' value="${precio}"> <label>Descripción del producto</label><input type='text' id='descripcionProducto' value="${descripcion}"> <label>Ruta de la imagen</label><input type='text' id='imagenProducto' value="${imagen}">`;
       if(id==""){
        form.innerHTML+="<input type='button' value='Crear' id='CrearProductos'> " ;
       }else{
        form.innerHTML+="<input type='button' value='Editar' id='EditarProductos'> <input type='button' value='Borrar' id='BorrarProductos'>" ;
       }
       
        return form;
        }
        export function formularioLogin(){
            let form= document.createElement("form");
            form.innerHTML= "<label>Correo </label> <input type='text' id='correo'>  <label>Nombre Completo </label> <input type='text' id='nombre'><label> contraseña</label> <input type='password' id='password'> <label> Admin</label> <input type='radio' name='rol' value='admin'> <label> Usuario</label><input type='radio' name='rol' value='usuario' checked><input type='button' value='Registrarse' id='login'>";
            return form;
            }
            export function registrarse(){
                let form= document.createElement("form");
                form.innerHTML= "<label>Correo </label> <input type='text' id='correo'>  contraseña</label> <input type='password' id='password'> <input type='button' value='Iniciar sesión' id='iniciarSesion'>";
                return form;
            
            }
            export function usuarioJSON(nombreL, rolL,correoL){
                return {nombre: nombreL,
                        rol: rolL,
                        correo: correoL,
                    }
            }

            