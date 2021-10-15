"use strict";

function temporizador(){
  let segundos;
  let minutos;
    let d= document;
   let seg=(d.getElementById("segundos").value);//para así convertir el número que recogemos por html a number
   let min= (d.getElementById("minutos").value);//para así convertir el número que recogemos por html a number
   let elem=d.createElement("p");
if(seg!=="" && min!==""){//para comprobar que si no sea vacío ya que si no da un error 
 segundos= parseInt(seg);
 minutos =parseInt (min);
}





    try{
        if (segundos<0 || segundos>59 || minutos<0 || minutos>59 || typeof segundos!=="number" || typeof minutos!=="number" ){
            
            elem.innerHTML="introduce los números correctamente los minutos y segundo deben estar entre 0 y 59 ";// he cambio el mensaje ya que en la práctica anterior estaba mal
            throw "introduce los númeroscorrectamente los minutos y segundo deben estar entre 0 y 59 ";
           
        } var tempo = setInterval(() => {
            if (minutos<0 ) {
                elem.innerHTML="Se ha acabado el tiempo";//ponemos lo mismo que en el ejercicio anterior 
               // console.log("Se ha acabado el tiempo");
              
               d.getElementById("boton").removeAttribute("disabled");// para que se pueda volver a accionar 
               clearInterval(tempo);
              
            }
            else{
                d.getElementById("boton").setAttribute("disabled","o");//para que no se pueda dar otra vez hasta que se acabe el tiempo
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
