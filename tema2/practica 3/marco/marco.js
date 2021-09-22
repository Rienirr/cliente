"use strict";
function marco(num){
    let array  = new Array(num);

    for (let i = 0; i < array.length; i++) {
      array[i] = new Array(num);
    }
    
    let cruz =num/3;
    let fincruz= cruz*2;
    let hastag="#";
    let punto =".";
    
    for(let i=0;i<num;i++){
    
        for(let j=0;j<num;j++){
        
            if((i>=cruz && i<fincruz) &&(j>=cruz && j<fincruz)){
              array[i][j]=punto;
            }
            else{
              array[i][j]=hastag;
                
            }
           
        }
        
    }
    
    let linea="";
    for(let i=0; i<array.length; i++) {
      for(let j=0; j<array[i].length; j++) {
        linea = linea + array[i][j];
        
      }
      console.log(linea);
      linea="";
    }
    
}
console.log(marco(18));
