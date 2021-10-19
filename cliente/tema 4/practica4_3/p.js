"use strict";
var d=document;
window.onload =inicio();
var color="s";
var clickado=false;

function crearTabla(){
  var mensaje="Esperando Color a Elegir ";
    let tamanyo=50;
    let table=d.createElement("table");
    
    for(let i=0;i<tamanyo;i++){//con esto hacemos 100 filas 
      let fila=d.createElement("tr");
      for(let j=0;j<tamanyo;j++){//creamos las 100 celdas de cada fila con un contador para que el dato sea el que queramos
        let dato=d.createElement("td");
        dato.setAttribute("onclick", `pintar(this)`);
        dato.setAttribute("onmouseover",`rellenar(this)` );

    
        fila.appendChild(dato);
     
      }
      table.appendChild(fila);//insertamos una fila vez la tenemos completada de elementos 
      
    }
    let encabezado= d.createElement("h1");
    encabezado.innerText= mensaje;
    d.body.appendChild(encabezado);
    d.body.appendChild(table);//añadimos la tabla al body 
    
    
  
  }

function botones() {// para crear los elementos como botones de ese color dandole la clase para luego poder  recogerla con el onclick
   let  botonRojo= d.createElement("button");
    botonRojo.setAttribute("class", "rojo");
    botonRojo.setAttribute("onclick", "getColor(this)");
    d.body.appendChild(botonRojo);

   let botonVerde= d.createElement("button");
   botonVerde.setAttribute("class", "verde");
   botonVerde.setAttribute("onclick", "getColor(this)");
      d.body.appendChild(botonVerde);

   let botonAzul=d.createElement("button");
    botonAzul.setAttribute("class", "azul");
    botonAzul.setAttribute("onclick", "getColor(this)");
    d.body.appendChild(botonAzul);

    let botonNegro= d.createElement("button");
    botonNegro.setAttribute("class", "negro");
    botonNegro.setAttribute("onclick", "getColor(this)");
    d.body.appendChild(botonNegro);

    let botonBlanco=d.createElement("button");
    botonBlanco.setAttribute("class", "blanco");
    botonBlanco.setAttribute("onclick", "getColor(this)");
    d.body.appendChild(botonBlanco);

    let  borrar= d.createElement("button");
    borrar.setAttribute("class", "borra");
    borrar.setAttribute("onclick", "borrar()");  
    borrar.innerHTML="<p>Borra el dibujo</p>";
    d.body.appendChild(borrar);

}
function inicio() {//las funciones que queremos iniciar al cargar la página
    botones();
    crearTabla();
  
}


function getColor(colorDelMomento){//para poner el color que queremos en cada momento
 
color=colorDelMomento.className;
if(color!="blanco"){


d.getElementsByTagName("h1")[0].innerText= `El color elegido es ${color}`;
d.getElementsByTagName("h1")[0].setAttribute("class", color);}
else{
  
}

} 

function pintar(elemento) {   //para cada elemento borre las clase si la tiene y ponga el color que hemos elegido 
 
  if(!clickado){
    elemento.setAttribute("class", color);
    clickado=true;// para que la primera vez clique y ponga el semaforo
  
    

    
  }

  else{ clickado=false; }
}
function rellenar(elemento) {
  if(clickado){
    elemento.setAttribute("class", color);
  }
}
function borrar() {//para dejar los valores predeterminados
  d.getElementsByTagName("h1")[0].removeAttribute("class");
    let celdas=d.getElementsByTagName("td");//tengo un array de td 
    for (let valor in celdas) {
    
         celdas[valor].removeAttribute("class");
         
        
      
    }
  }
  
