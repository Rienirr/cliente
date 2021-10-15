"use strict";
let d=document;
let div=d.createElement("div");
div.setAttribute("id", "d");
let contador=0;
let semaforo=false;
//lo creo de forma dinámica para siempre mostrar ese elemento  y que salga un carrusel
let elem1= d.createElement("span");
let elem2= d.createElement("span");
let elem3= d.createElement("span");
let elem4= d.createElement("span");
div.appendChild(elem1);//así después el carrusel solo cambia las imágenes de posición 
div.appendChild(elem2);
div.appendChild(elem3);
div.appendChild(elem4);
d.body.appendChild(div);



var imagenes = ["img/feo.jpg", "img/fea.jpg", "img/feos.jpg", "img/feas.jpg"];
var carrusel = setInterval(() => {
  if(semaforo){//para controlar que la primera vez no cambia nada 

    // pone la primera posición del array al final para crear el carrusel
    var imagenAcambiar= imagenes[0];
       imagenes.shift();
       imagenes.push(imagenAcambiar);
  }
 


        
   elem1.innerHTML=`<img src="${imagenes[0]}"></img>`;
   elem2.innerHTML=`<img src="${imagenes[1]}"></img>`;
   elem3.innerHTML=`<img src="${imagenes[2]}"></img>`;
   elem4.innerHTML=`<img src="${imagenes[3]}"></img>`;
    semaforo=true;
    
}, 2000);


