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
      
            if(minas[i][j]!=-1 && (i!=0 || j!=0 || i!=minas.length-1 || j!=minas.length-1)){//para comprobar que no este en el borde ni en esquinas
              for(let k=i-1;k<=i+1;k++){
                for(let z=j-1;z<=j+1;z++ ){
                  if (minas[k][z]==-1)   contadorMinasCercanas++;
                     }
              }

              }
              else if(minas[i][j]!=-1 &&((i==0 && j==0) ||(i==0 && j==minas.length-1)  ||(i==minas.length-1 && j==minas.length-1)||(i==minas.length-1 && j==0))){//comprobar esquinas 
               
              }
              else {//pues si no ni esquina ni centro solo es un borde 

              }
               
               minas[i][j]=contadorMinasCercanas;
            }
        }
        return minas;
    }

        
  // if(minas[i-1][j-1]==1 ||minas[i-1][j]==1 ||minas[i-1][j+1]==1 ||minas[i][j-1]==1 ||minas[i][j+1]==1 || minas[i-1][j-1]==1 ||minas[i-1][j]==1 ||minas[i-1][j+1]==1){}
console.log(tableroCliente(minas));