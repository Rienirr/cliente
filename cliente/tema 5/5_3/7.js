"use strict";

window.onload = () => {
   var d= document;
   var table=d.createElement("table");
   //Creamos la tabla dinámicamente y con los input que nos pide el enunciado
   table.innerHTML=`<tr><td> <input type="button" value="Crear Nombre" ></td>  <td><input type="button" value="Crear Password" ></td> <td > <input type="button" value="CrearTextArea" > </td> <td > <input type="button" value="CrearLabel" ></td> <td> <input type="button" value="Crear Imagen" ></td>  <td><input type="button" value="Crear CheckBox" ></td> <td><input type="button" value="Crear radio button" ></td> <td> <input type="button" value="Crear Submit" ></td> </tr>`;
   d.body.appendChild(table);
   //He creado una variable por cada botón para verlo de forma más clara que si pongo input[0].
   var inputNombre =d.getElementsByTagName("input")[0];
   var inputContrasenya =d.getElementsByTagName("input")[1];
   var inputTextArea =d.getElementsByTagName("input")[2];
   var inputLabel= d.getElementsByTagName("input")[3];
   var inputImagen=d.getElementsByTagName("input")[4];
   var inputCheckBox=d.getElementsByTagName("input")[5];
   var inputRadio=d.getElementsByTagName("input")[6];
   var inputSubmit= d.getElementsByTagName("input")[7];
   var form= d.createElement("form");
   form.innerHTML="<legend> Crea un formulario dinámicamente</legend>"
 
   d.body.appendChild(form);

function comprobar(elemento){//creamos una función para 
   do{

      var inputUsuario= prompt( `¿Cuál es tu ${elemento}?(mínimo 5 caracteres)`);
      var patron=/^[a-zA-Z]{4,}[\s+[a-zA-Z]{1,}]*/;
   }while(!patron.test(inputUsuario));
   return inputUsuario;
} 
function comprobarDosVeces(elemento){

   do{
         
      var idElemento= prompt(`¿Cuál es la id del ${elemento} a crear?(mínimo 2 caracteres)`);
      var patron=/^[a-zA-Z]{1}[\s+\w{1,}]*/;
      var valueElemento=  prompt(`¿Cuál es el value del ${elemento} a crear?(mínimo 2 caracteres)`);
   }while(!patron.test(idElemento)|| !patron.test(valueElemento));
   return{
      id: idElemento,
      value:valueElemento
   }
}
   inputNombre.addEventListener("click",(event)=>{
      var nombre=comprobar("nombre");
      let input=d.createElement("input");
      input.setAttribute("type","text");
      input.setAttribute("id",nombre);
      form.appendChild(input);
  
   },false);

   inputContrasenya.addEventListener("click",(event)=>{
    
       var contraseyaa= comprobar("contraseña");
       var input=d.createElement("input");
       input.setAttribute("type","contraseña");
       input.setAttribute("id",contraseyaa);
       form.appendChild(input);
},false);

inputTextArea.addEventListener("click",(event)=>{
   
      var text= comprobar("textArea");
      var input=d.createElement("textarea");
   
       input.setAttribute("id",text);
       form.appendChild(input);
      
},false);

inputLabel.addEventListener("click",(event)=>{    
      var label= comprobar("label");

},false);

inputImagen.addEventListener("click",(event)=>{
  
       var img= prompt("¿Cuál es la ruta de la imagen?");
      var ruta;
   

},false);
inputCheckBox.addEventListener("click",(event)=>{
 
 var checkBox=comprobarDosVeces("checkbox");
   let input=

},false);
inputRadio.addEventListener("click",(event)=>{
   var radio=comprobarDosVeces("radio button");

},false);
inputSubmit.addEventListener("click",(event)=>{
  var submit=comprobarDosVeces("submit");
   inputSubmit.setAttribute("disabled","true");
},false);
}