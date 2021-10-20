"use strict";
let d=document;
let div=d.createElement("div");
div.setAttribute("id", "d");
let contador=0;



//lo creo de forma dinámica para siempre mostrar ese elemento  y que salga un carrusel
let elem1= d.createElement("span");


div.appendChild(elem1);//así después el carrusel solo cambia las imágenes de posición 

d.body.appendChild(div);



var imagenes = ["img/feo.jpg", "img/fea.jpg", "img/feos.jpg", "img/feas.jpg"];//imágenes libre de copyright
var carrusel = setInterval(() => {//intervalo de imagen 


  elem1.innerHTML=`<img id="mostrar" src="${imagenes[contador]}"></img>`;// cogemos la posición que queramos cada vez
  
  d.getElementById("mostrar").style.absolute;

  let change=0;

      var tempo= setInterval(()=>{//intervalo de posición
       
        
      if(change>=100){
        change=0;
        clearInterval(tempo);
      }
       
      d.getElementById("mostrar").style.marginLeft= change+"vw";

  //para que salga de la forma más bonita posible le sumamos uno así se va moviendo de posición   
      change+=1;
       
        
       
        },20);
        

   //para reiniciar
    contador++;
    if(contador>3){
      contador=0;
    }
    
}, 2000);




