"use strict";
function fehcha(){
    setTimeout(() => {
           
        let hoy= new Date();
        let hoyFormateado=`${hoy.getUTCDay()}`;
        return hoyFormateado;
          
       }, 10000);

        }
    
        let hoy= new Date();
        let hoyFormateado=`${hoy.getUTCDay()}`;
        console.log(hoyFormateado);