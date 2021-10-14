"use strict";

function temporizador(){
 
    let d= document;
   let segundos=parseInt(d.getElementById("segundos").value);//para así convertir el número que recogemos por html a number
   let minutos= parseInt(d.getElementById("minutos").value);//para así convertir el número que recogemos por html a number

let elem=d.createElement("p");

    try{
        if (segundos<0 || segundos>59 || minutos<0 || minutos>59 || typeof segundos!=="number" || typeof minutos!=="number" ){
            
            elem.innerHTML="introduce los nuneros correctamente los minutos y segundo deben estar entre 0 y 59 ";
            throw "introduce los nuneros correctamente los minutos y segundo deben estar entre 0 y 59 ";
           
        } var tempo = setInterval(() => {
            if (minutos<0 ) {
                elem.innerHTML="Se ha acabado el tiempo";//ponemos lo mismo que en el ejercicio anterior 
               // console.log("Se ha acabado el tiempo");
               comprobar= false;
               clearInterval(tempo);
               d.getElementById("boton").removeAttribute("disabled");
            }
            else{
                d.getElementById("boton").setAttribute("disabled","o");
                //console.log(`El tiempo restante son ${minutos} minutos y ${segundos} segundos `);
                elem.innerHTML= ` ${minutos}:${segundos}`;
                
                if(segundos==0){
                  segundos=59;
                  minutos--;
                }
                segundos--;
            }
            d.getElementById("temporizador").appendChild(elem); //añadimos el temporizador
         }, 1000);
      
      }catch(err){
        d.getElementById("temporizador").appendChild(elem);
      }
    
      
    }
