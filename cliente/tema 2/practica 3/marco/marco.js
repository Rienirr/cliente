"use strict";
function marco(num,area){
    let array  = new Array(num);

    for (let i = 0; i < array.length; i++) {
      array[i] = new Array(num);
    }
    let mitad=num/2;
    let mitadarea= area/2;
    let iniarea=mitad-mitadarea;
    let finarea= mitad+mitadarea;
    let hastag="#";
    let punto =".";
    
    
    for(let i=0;i<num;i++){
    
        for(let j=0;j<num;j++){
        
            if((i>=iniarea && i<finarea) &&(j>=iniarea && j<finarea)){
              array[i][j]=punto;
            }
            else{
              array[i][j]=hastag;
                
            }
           
        }
        
    }
    let contador=1;
    let linea=`${contador}`;
    for(let i=0; i<array.length; i++) {
      contador=i+2;
      for(let j=0; j<array[i].length; j++) {
        linea = linea + array[i][j];
        
      }
      console.log(linea);
      linea=`${contador}`;
    }
    
}
console.log(marco(21,7));