"use strict";

window.onload = () => {
    let d= document;
    let form= d.createElement("form");
    
    

   d.body.appendChild(form);
   

  
   function marcarTodos(){//Recorremos la lognitud de los inputs para marcarlos.
    let longitud=d.body.getElementsByTagName("input").length;
    for(let i=0; i<longitud;i++){
        d.body.getElementsByTagName("input")[i].checked= true;
    }
   }
   function desmarcarTodos(){//Recorremos la lognitud de los inputs para desmarcarlos.
    let longitud=d.body.getElementsByTagName("input").length;
    for(let i=0; i<longitud;i++){
        d.body.getElementsByTagName("input")[i].checked= false;
    }

   }
function crear(){//La función necesaria para crear el formulario y los botones.
    let marcar= d.createElement("button");
    marcar.innerText="Marcar todas las casillas";
    marcar.addEventListener("click",(e)=>{
        marcarTodos();
    },false);
    let desmarcar= d.createElement("button");
    desmarcar.innerText="Desmarcar todas las casillas";
    desmarcar.addEventListener("click",(e)=>{
            desmarcarTodos();
    },false);
 for(let i=0; i<100;i++){
    let input= d.createElement("input");
    input.setAttribute("type", "checkbox"); 
    input.setAttribute("name", "numeros");  
     let random= Math.round(Math.random()*100);
     input.setAttribute("value", random);
     let label= d.createElement("label");
     label.innerText= `${random}`;
     
    d.body.getElementsByTagName("form")[0].appendChild(input);
    d.body.getElementsByTagName("form")[0].appendChild(label);

    d.body.insertAdjacentElement("afterbegin",marcar);
    d.body.insertAdjacentElement("afterbegin",desmarcar);

 }
}
crear();

}