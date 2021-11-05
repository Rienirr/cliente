"use strict";

window.onload = () => {
let d= document;
let div= d.createElement("div");
function crearComunicacionUsuario(){//este método lo usaremos siempre para comunicarnos con el usuario.
 let mostrar = d.createElement("div");
       mostrar.innerHTML="<p id='mensajeAlUsuario' class='hidden'> Listopan pon algo en textarea y selecciona una opción</p>"
d.body.appendChild(mostrar);
}
crearComunicacionUsuario();
//Creamos el formulario de forma dinámica.
div.innerHTML= "<form > <fieldset> <legend>Formulario </legend><textarea> </textarea> <select id='op'> <option value='cero'>Seleciona una de las siguientes opciones</option> <option value='claro'>Fondo claro</option><option value='oscuro'>Fondo oscuro</option> <option value='degradado'>Degradado</option></select> <input type='button' id='crear' value='Crear parrafo'>  </fieldset> </form>"
d.body.appendChild(div);
let boton= d.getElementById("crear");
 boton.addEventListener("click", (e)=>{//

       let posicion=d.getElementById("op").selectedIndex;
       let select=d.getElementById("op");
       let estilo= select.options[posicion].value
        let valor=(d.getElementsByTagName("textarea")[0].value);
        if (valor.trim().length == 0 || estilo == "cero" ){// Valoramos para que en caso de error nos muestre un mensaje por pantalla 2 segundos.
               let mensajeError= d.getElementById("mensajeAlUsuario");
               mensajeError.classList.remove("hidden");
               setTimeout(()=>{
                     mensajeError.classList.add("hidden");
               }, 2000)
              
        }
        else{//Si no hay error hacemos lo que pide el programa.


      
        let di=d.createElement("div");
        di.innerHTML=`<p class="${estilo}"> ${valor}</p> `;
        d.forms[0].insertAdjacentElement("afterend", di);
        d.getElementsByTagName("textarea")[0].value="";
       select.selectedIndex=0;// Para poner el valor a 0 y cada vez tengamos que elegir las opciones.
       }
 }, false);



}

