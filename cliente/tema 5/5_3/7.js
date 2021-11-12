"use strict";

window.onload = () => {
   var d= document;
   function crearComunicacionUsuario(){//Este método lo usaremos siempre para comunicarnos con el usuario.
      let mostrar = d.createElement("div");
            mostrar.innerHTML=`<p id='mensajeAlUsuario' class='hidden'> No se pueden repetir IDs tuercebotas!! </p>`;
     d.body.appendChild(mostrar);
     }
     crearComunicacionUsuario();
   var table=d.createElement("table"); //Creamos la tabla dinámicamente y con los input que nos pide el enunciado
   table.innerHTML=`<tr><td> <input type="button" value="Crear Nombre" ></td>  <td><input type="button" value="Crear Password" ></td> <td > <input type="button" value="CrearTextArea" > </td> <td > <input type="button" value="CrearLabel" ></td> <td> <input type="button" value="Crear Imagen" ></td>  <td><input type="button" value="Crear CheckBox" ></td> <td><input type="button" value="Crear radio button" ></td> <td> <input type="button" value="Crear Submit" ></td> </tr>`;
   d.body.appendChild(table); //He creado una variable por cada botón para verlo de forma más clara que si pongo input[0].
   var inputNombre =d.getElementsByTagName("input")[0];
   var inputContrasenya =d.getElementsByTagName("input")[1];
   var inputTextArea =d.getElementsByTagName("input")[2];
   var inputLabel= d.getElementsByTagName("input")[3];
   var inputImagen=d.getElementsByTagName("input")[4];
   var inputCheckBox=d.getElementsByTagName("input")[5];
   var inputRadio=d.getElementsByTagName("input")[6];
   var inputSubmit= d.getElementsByTagName("input")[7];
   var form= d.createElement("form")
  form.setAttribute("class","hidden");
   form.innerHTML="<legend> Crea un formulario dinámicamente</legend>"
   d.body.appendChild(form);
function mostrarError(){
   let mensajeError= d.getElementById("mensajeAlUsuario");
   mensajeError.classList.remove("hidden");
   setTimeout(()=>{
         mensajeError.classList.add("hidden");
   }, 5000)
}
function comprobar(elemento){//creamos una función para reutilzar cuando necesitamos solo id.
   do{
      var inputUsuario= prompt( `¿Cuál es tu ${elemento}?(mínimo 5 caracteres)`);
      var patron=/^[a-zA-Z]{4,}[\s+[a-zA-Z]{1,}]*/;
   }while(!patron.test(inputUsuario));
   if(d.getElementById(inputUsuario)==null){
      return inputUsuario;
   }

} 
function comprobarDosVeces(elemento){//Otra si necesitamos value y id.

   do{  
      var idElemento= prompt(`¿Cuál es la id del ${elemento} a crear?(mínimo 5 caracteres)`);
      var patron=/^[a-zA-Z]{4,}[\s+[a-zA-Z]{1,}]*/;
      var valueElemento=  prompt(`¿Cuál es el value del ${elemento} a crear?(mínimo 5 caracteres)`);
   }while(!patron.test(idElemento)|| !patron.test(valueElemento));
   if(d.getElementById(idElemento)==null){
   return{
      id: idElemento,
      value:valueElemento
   }}
}
   inputNombre.addEventListener("click",(event)=>{
      let nombre=comprobar("nombre");
      if(nombre==undefined){
        mostrarError();
      }else{
         form.classList="";//Para que siempre se muestre el formulario escondido.
         form.innerHTML+= `<input type="text" id="${nombre}" >`; 
      }
   
   },false);

   inputContrasenya.addEventListener("click",(event)=>{
      let contraseyaa= comprobar("contraseña");
      if(contraseyaa==undefined){
         mostrarError();
       }else{
      
       form.classList="";//Para que siempre se muestre el formulario escondido.
       form.innerHTML+= `<input type="password" id="${contraseyaa}" >`; 
       }
},false);

inputTextArea.addEventListener("click",(event)=>{
   let text= comprobar("textArea");
   if(text==undefined){
      mostrarError();
    }else{
     
      form.classList="";//Para que siempre se muestre el formulario escondido.
      form.innerHTML+= `<textarea < id="${text}" cols="40" rows="5"></textarea>`; 
    }
},false);

inputLabel.addEventListener("click",(event)=>{    //Este método es el más largo ya que necesitamos hacer más cosas buscar el elemento y añadir el label antes para que tenga sentido, si no existe mandamos un mensaje al usuario.
     
   do{
      var label= prompt( `¿Cuál es la id para este label?(mínimo 5 caracteres)`);
         var patronLabel=/^[a-zA-Z]{4,}[\s+[a-zA-Z]{1,}]*/;
      }while(!patronLabel.test(label));
     if (d.getElementById(label)!=null){
      var labelAInsertar= d.createElement("label");
      labelAInsertar.innerText=`${label}:`;
      labelAInsertar.setAttribute("for",label);
      d.getElementById(label).insertAdjacentElement("beforebegin",labelAInsertar);
     }else{
      let mensajeError= d.getElementById("mensajeAlUsuario");
      mensajeError.innerHTML="Has de poner un id ya existente";
      mensajeError.classList.remove("hidden");
      setTimeout(()=>{
            mensajeError.classList.add("hidden");
      }, 5000)
  
     };

},false);

inputImagen.addEventListener("click",(event)=>{//Aquí no se como controlar el error ya que si el usuario puede insertar cualquier imagen de internet no sé como hacer el patrón.
  
       var img= prompt("¿Cuál es la ruta de la imagen?");
       form.classList="";//Para que siempre se muestre el formulario escondido.
      form.innerHTML+= `<img id="${img}" src="${img}" width="250" ></img>`;
     
   

},false);
inputCheckBox.addEventListener("click",(event)=>{
 
 var checkBox=comprobarDosVeces("checkbox");
 if(checkBox==undefined){
   mostrarError();
 }else{
 form.classList="";//Para que siempre se muestre el formulario escondido.
 form.innerHTML+= `<input type="checkbox" id="${checkBox.id}" value="${checkBox.value}" >`; 
 }
},false);
inputRadio.addEventListener("click",(event)=>{
   var radio=comprobarDosVeces("radio button");
   if(radio==undefined){
      mostrarError();
    }else{
   form.classList="";//Para que siempre se muestre el formulario escondido.
   form.innerHTML+= `<input type="radio" id="${radio.id}" value="${radio.value}" >`; 
    }
},false);
inputSubmit.addEventListener("click",(event)=>{
  var submit=comprobarDosVeces("submit");
  if(submit==undefined){
   mostrarError();
 }else{
  form.classList="";//Para que siempre se muestre el formulario escondido.
  form.innerHTML+= `<input type="submit" id="${submit.id}" value="${submit.value}" >`;
 }
},false);
}