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


   inputNombre.addEventListener("click",(event)=>{

   },false);

   inputContrasenya.addEventListener("click",(event)=>{

},false);

inputTextArea.addEventListener("click",(event)=>{

},false);

inputLabel.addEventListener("click",(event)=>{

},false);

inputImagen.addEventListener("click",(event)=>{

},false);
inputCheckBox.addEventListener("click",(event)=>{

},false);
inputRadio.addEventListener("click",(event)=>{

},false);
inputSubmit.addEventListener("click",(event)=>{

},false);
}