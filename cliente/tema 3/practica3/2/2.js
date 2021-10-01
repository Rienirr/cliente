"use strict";
function temporizador(minutos, segundos){
    if(arguments.length==1){
        
        segundos=arguments[0];
        minutos= 0;
    }
    try{
        if (segundos<0 || segundos>59 || minutos<0 || minutos>59 || typeof segundos!=="number" || typeof minutos!=="number" ){
            throw "introduce los nuneros correctamente los minutos y segundo deben estar entre 0 y 59 ";
        } var tempo = setInterval(() => {
            if (minutos<0 ) {
               clearInterval(tempo);
            }
            else{
                console.log(`El tiempo restante son ${minutos} minutos y ${segundos} segundos `);
                segundos--;
                if(segundos==0  ){
                  segundos= 59;
                  minutos--;
                };
            }
            
         }, 1000);
      
      }catch(err){
          console.log(err);
      }
    
      
    }


    temporizador(1,25);