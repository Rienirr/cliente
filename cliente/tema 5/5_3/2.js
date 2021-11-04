"use strict";

window.onload = () => {
let d= document;
let div= d.createElement("div");
//Creamos el formulario de forma dinámica.
div.innerHTML= "<form > <fieldset> <legend>Formulario </legend><textarea> </textarea> <select> <option value='claro'>Fondo claro</option><option value='oscuro'>Fondo oscuro</option> <option value='degradado'>Degradado</option></select> <p id='crear'>Crear parrafo</p>  </fieldset> </form>"
d.body.appendChild(div);
let boton= d.getElementsByTagName("p")[0];
 boton.addEventListener("click", (e)=>{//
        let valor=(d.getElementsByTagName("textarea")[0].value);
        
        let di=d.createElement("div");
        di.innerHTML=`<p> ${valor}</p> `;
        d.forms[0].insertAdjacentElement("afterend", di);
        d.getElementsByTagName("textarea")[0].value="";
 }, false);



}

