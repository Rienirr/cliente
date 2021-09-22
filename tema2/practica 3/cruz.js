"use strict";
function Cruz(num){
    let cruz =num/3;
    let fincruz= cruz*2;
    let hastag="#";
    let punto =".";
    let linea="";
    for(let i=0;i<num;i++){
       
        for(let k=0;k<num;k++){
           let linea="";
            if(i<cruz || i>fincruz){
                linea+=hastag;
            }
            else{
                linea+=punto;
            }
           
        }
        console.log(linea);
    }
}
console.log(Cruz(21));