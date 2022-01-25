/*Esta biblioteca nos permite crear plantillas que nos generar información necesaria para el cliente. */
"use strict;"
export function crearfila(id,nombre,peso,precio,descripcion,imagen="nada"){//Para crear la fila con todos los componentes del producto.
    let div = document.createElement("div");
    div.setAttribute("id",id);
    div.setAttribute("class","grid");
div.innerHTML =` <span class="colum">${nombre}</span>  <span class="colum">${peso} Kg </span> <span class="colum">${precio} €</span> <span class="colum">${descripcion} </span> <span class="colum img"> <img  class="colum" src=${imagen} alt="error en la imagen" width="100" height="100"> </span><div> <button  class="anyadirALaLista" > Añadir a la lista</button><img  class="EditarProducto" src="./imagenes/editar.png" alt="Editar producto" width="15" height="15"> </div>`;
return div;
}

export function crearfilaLista(id,nombre,fecha,creador, arrayP){//Para crear la fila con todos los componentes de la lista.
    let div = document.createElement("div");
    div.setAttribute("id",id);
    div.setAttribute("class","grid");
div.innerHTML =` <span class="colum">${nombre}</span>  <span class="colum">${fecha}  </span> <span class="colum">${creador} </span> `;
let productos="";
if(arrayP.length==1){//No hay productos en la lista.
 productos+="No hay productos en la lista";
}else{
    arrayP.map((v,i,a)=>{//Hay y los recorremos cada posicion es un string con todos los campos.
      if(i>0){
          
         let pcompleto= v.split(",");
    productos+= ` Nombre: <b class="nombreProducto">${pcompleto[0]}</b>, Peso: ${pcompleto[1]}, Precio: ${pcompleto[2]} Cantidad: ${pcompleto[3]}.`;//poner clase al peso y al precio para luego pillarlo en laconsulta.
        }
});
}
div.innerHTML+= `<span class="colum">${productos} </span> `;
div.innerHTML+=`<div> <button class="verLista" > Añadir Productos</button> <img  class="EditarLista" src="./imagenes/editar.png" alt="Editar lista" width="15" height="15"> </div>`;
return div;
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
export function ListaJSON(nombreL, creadorL){
    return {nombre: nombreL,
            creador: creadorL,
            productos: [""],
            fecha: new Date().toLocaleDateString(),//Nos devuelve la fecha en el formato dd/mm/aaaa
        }
}
export function ProductoJSON(Nombre,Precio,Peso,Descripcion,Imagen){
    return {nombre: Nombre,
            precio: Precio,
            peso: Peso,
            descripcion: Descripcion,
            imagen: Imagen,
        }
}
export function formulario(){
let form= document.createElement("form");
form.innerHTML= "<label> Nombre de la lista </label> <input type='text' id='nombreLista'> <label> Nombre del propietario</label> <input type='text' id='nombreCreador'> <input type='button' value='Crear' id='CrearLista'>";
return form;
}
export function formularioParaEditarLista(nombreLista,nombresProductos){
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
            