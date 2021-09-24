'use strict';


let minas=[[-1, 0, 0, 0],
[ 0, 0, 0, 0],
[ 0,-1, 0, 0],
[ 0, 0, 0, 0],];
function tableroCliente(minas){
    let contadorMinasCercanas=0
        for(let i=0;i<minas.length;i++ ){
        for(let j=0;j<minas.length;j++ ){
            contadorMinasCercanas=0//para reiniciarlo en cada iteración
            if(minas[i][j]!=1){
               for(let k=i-1;k<=i+1;k++){
                for(let z=0;z<3;z++ ){
                  
                    if(typeof minas[k][i] == 'undefined'){continue;
               if (minas[k][i]==1)   contadorMinasCercanas++;
                 } }
               }
            minas[i][j]=contadorMinasCercanas;
            }
        }
    }
}
        
  // if(minas[i-1][j-1]==1 ||minas[i-1][j]==1 ||minas[i-1][j+1]==1 ||minas[i][j-1]==1 ||minas[i][j+1]==1 || minas[i-1][j-1]==1 ||minas[i-1][j]==1 ||minas[i-1][j+1]==1){}
console.log(tableroCliente(minas));