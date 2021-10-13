"use strict";

function temporizador(){
    let d= document;
   let segundos=parseInt(d.getElementById("segundos").innerText.toString());//para así convertir el número que recogemos por html a number
   let minutos= parseInt(d.getElementById("minutos").innerText.toString());//para así convertir el número que recogemos por html a number
let elem=d.createElement("p");

    try{
        if (segundos<0 || segundos>59 || minutos<0 || minutos>59 || typeof segundos!=="number" || typeof minutos!=="number" ){
            throw "introduce los nuneros correctamente los minutos y segundo deben estar entre 0 y 59 ";
        } var tempo = setInterval(() => {
            if (minutos<0 ) {
                elem.innerText="Se ha acabado el tiempo";//ponemos lo mismo que en el ejercicio anterior 
               // console.log("Se ha acabado el tiempo");
               clearInterval(tempo);
            }
            else{
                elem.innerText= ` ${minutos}:${segundos}`
                //console.log(`El tiempo restante son ${minutos} minutos y ${segundos} segundos `);
                segundos--;
                if(segundos==0  ){
                  segundos= 59;
                  minutos--;
                };
            }
            d.getElementById("temporizador").appendChild(elem); //añadimos el temporizador
         }, 1000);
      
      }catch(err){
          console.log(err);
      }
    
      
    }
