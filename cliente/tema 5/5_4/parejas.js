"use strict";
window.onload = ()=>{
 
var d=document;

var minutos=0;
var segundos=0;
var imgAnterior="";
var aciertos=0;
var numero= d.getElementById("intentos").value=0;
function crearComunicacionUsuario(){//Este método lo usaremos siempre para comunicarnos con el usuario.
  var mostrar = d.createElement("div");
        mostrar.innerHTML="<p id='mensajeAlUsuario' class='hidden'> </p>"
 d.body.appendChild(mostrar);
 }
 crearComunicacionUsuario();
 function sumarIntento(){
     numero= d.getElementById("intentos");
        numero.value= parseInt(numero.value)+1;
   
 }
 setInterval(() => {
  tiempo= d.getElementById("tiempo"); 
 if(aciertos!=6){


    if(segundos==59){
      segundos=-1;
      minutos++;
    }
    else{
      segundos++;
    }
    tiempo.innerHTML=`El tiempo que llevas jugando es ${minutos} minutos y ${segundos} segundos; `; }
 }, 1000);
var img=["img/astrology.jpg","img/snes.png", "img/drink.jpg", "img/beach.jpg","img/cliff.jpg","img/windmills.jpg","img/astrology.jpg","img/snes.png", "img/drink.jpg", "img/beach.jpg","img/cliff.jpg","img/windmills.jpg","" ];
 
for(let i=0; i<12; i++ ){//Para poner el número aleatorio.
  let nAleatorio=Math.round(Math.random()*11);
  img[12]= img[i];
  img[i]=img[nAleatorio];
  img[nAleatorio]= img[12];}
  for(let i=0; i<12; i++ ){
    d.getElementsByClassName("rTableCell")[i].addEventListener("click",(event)=>{

      
if(aciertos!=6){


      
   event.target.setAttribute("src", img[i]);
      if(imgAnterior==""){
        imgAnterior= event.target;
       
      }
      else if(imgAnterior.name=== event.target.name){
        let mensajeError= d.getElementById("mensajeAlUsuario");
        mensajeError.classList.remove("hidden");
        mensajeError.innerText="Has pulsado en la misma carta tuercebotas!!";
 setTimeout(()=>{      
   mensajeError.className="hidden";
}, 2000)
      }
      else if(imgAnterior.src== event.target.src){ 
        let mensajeError= d.getElementById("mensajeAlUsuario");
               mensajeError.classList.remove("hidden");
               mensajeError.innerText="Has acertado";
               aciertos++;
        setTimeout(()=>{      
          mensajeError.className="hidden";
    }, 2000)
        imgAnterior="";

      }
      
      else{
        let mensajeError= d.getElementById("mensajeAlUsuario");
               mensajeError.classList.remove("hidden");
               mensajeError.innerText=" ¡Esta vez no has conseguido pareja!";
              sumarIntento();
        setTimeout(()=>{//Así dejamos el error 2 segundos. 
          imgAnterior.src="img/baraja.jpg"
          event.target.src="img/baraja.jpg";
          imgAnterior="";
          mensajeError.className="hidden";
          
    }, 500)
  } 


  if(aciertos==6){
   let p= d.createElement("p");
  p.innerText=` Te has pasado el juego puedes comprobar los intentos y el tiempo que has tardado en la parte de arriba.`;
  
  d.body.appendChild(p);
  
  
   }
}


     
    
 
    },false);
  }

    
 
       

}
