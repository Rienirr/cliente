"use strict";
var d=document;
window.onload =inicio();//cargamos la funciones que necesitamos al empezar 
var color="s";
var clickado=false;

function crearTabla(){// creamos la tabla y el h1 dando los valores que nos conviene para el ejercicio y los metemos en un div
  let div=d.createElement("div");
  d.body.appendChild(div);
  var mensaje="Esperando Color a Elegir ";
    let tamanyo=50;
    let table=d.createElement("table");
    
    for(let i=0;i<30;i++){//para no hacerlo tan larga
      let fila=d.createElement("tr");
      for(let j=0;j<tamanyo;j++){
        let dato=d.createElement("td");
        dato.setAttribute("onclick", `pintar(this)`);//para que se comienze a pintar o se pare con el onclick
        dato.setAttribute("onmouseover",`rellenar(this)` );
        //para que una vez que el pintar comienze poder rellenar todas las filas de forma sencilla

    //Hacemos las inserciones necesarias para que la tabla y el encabezado se queden como deseamos 
        fila.appendChild(dato);
     
      }
      table.appendChild(fila);
      
    }
    let encabezado= d.createElement("h1");
    encabezado.innerText= mensaje;
    div.appendChild(encabezado);
    div.appendChild(table); 
    
    
  
  }

function botones() {
  // para crear los elementos como botones(dentro de un div) de ese color dandole la clase para luego poder recogerla con el onclick
   
  let div=d.createElement("div");
  d.body.appendChild(div);
  let  botonRojo= d.createElement("button");
    botonRojo.setAttribute("class", "rojo");
    botonRojo.setAttribute("onclick", "getColor(this)");//para al pinchar en el botón tener el color 
div.appendChild(botonRojo);
  

   let botonVerde= d.createElement("button");
   botonVerde.setAttribute("class", "verde");
   botonVerde.setAttribute("onclick", "getColor(this)");
      div.appendChild(botonVerde);

   let botonAzul=d.createElement("button");
    botonAzul.setAttribute("class", "azul");
    botonAzul.setAttribute("onclick", "getColor(this)");
    div.appendChild(botonAzul);

    let botonNegro= d.createElement("button");
    botonNegro.setAttribute("class", "negro");
    botonNegro.setAttribute("onclick", "getColor(this)");
    div.appendChild(botonNegro);

    let botonBlanco=d.createElement("button");
    botonBlanco.setAttribute("class", "blanco");
    botonBlanco.setAttribute("onclick", "getColor(this)");
    div.appendChild(botonBlanco);

    let  borrar= d.createElement("button");
    borrar.setAttribute("class", "borra");
    borrar.setAttribute("onclick", "borrar()");  
    borrar.innerHTML="<p>Borra el dibujo</p>";
    div.appendChild(borrar);

}
function inicio() {//las funciones que queremos iniciar al cargar la página
    botones();
    crearTabla();
  
}


function getColor(colorDelMomento){//para poner el color que queremos en cada momento con los botonones 
 
color=colorDelMomento.className;


 d.getElementsByTagName("h1")[0].innerText= "";//para borrar el mensaje por defecto
d.getElementsByTagName("h1")[0].setAttribute("class", color);}


function pintar(elemento) {   //usamos un semáforo para saber si ha clickado una vez o no 
 
  if(!clickado){// si no ha clickado lo ponemos a true y además pintamos esta casilla 
    elemento.setAttribute("class", color);
    clickado=true;// para que la primera vez clique y ponga el semáforo
  }

  else{ clickado=false; }//para que cuando vuelva a clickar el semáforo se ponga a false
}
function rellenar(elemento) {
  //esta función es la que permite cambiar el fondo de las celdas si se ha clickado de otra forma no hace nada
  if(clickado) elemento.setAttribute("class", color); 
}
function borrar() {//para dejar los valores predeterminados
  d.getElementsByTagName("h1")[0].removeAttribute("class");
    let celdas=d.getElementsByTagName("td");//tengo un array de td 
    color="";
    d.getElementsByTagName("h1")[0].innerText= "Esperando Color a Elegir ";//valor predeterminado
    for (let valor in celdas) {
    
         celdas[valor].removeAttribute("class");//borramos todas las clases
         
        
      
    }
  }
  
