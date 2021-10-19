"use strict";
var d=document;
window.onload =inicio();
function crearTabla(){
    let tamanyo=100;
    let table=d.createElement("table");
    
    for(let i=0;i<tamanyo;i++){//con esto hacemos 100 filas 
      let fila=d.createElement("tr");
      for(let j=0;j<tamanyo;j++){//creamos las 100 celdas de cada fila con un contador para que el dato sea el que queramos
        let dato=d.createElement("td");
       
        fila.appendChild(dato);
     
      }
      table.appendChild(fila);//insertamos una fila vez la tenemos completada de elementos 
      
    }
    d.body.appendChild(table);//añadimos la tabla al body 
  }

function botones() {// para crear los elementos como botones de ese color 
   let  botonRojo= d.createElement("button");
    botonRojo.setAttribute("class", "rojo");
    d.body.appendChild(botonRojo);

   let botonVerde= d.createElement("button");
   botonVerde.setAttribute("class", "verde");
      d.body.appendChild(botonVerde);

   let botonAzul=d.createElement("button");
    botonAzul.setAttribute("class", "azul");
    d.body.appendChild(botonAzul);

    let botonNegro= d.createElement("button");
    botonNegro.setAttribute("class", "negro");
    d.body.appendChild(botonNegro);
    
    let botonBlanco=d.createElement("button");
    botonBlanco.setAttribute("class", "blanco");
    d.body.appendChild(botonBlanco);

}
function inicio() {
    botones();
    crearTabla();
  
}


/* pintar(color){

} */