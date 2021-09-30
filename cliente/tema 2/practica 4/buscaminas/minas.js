'use strict';


let minas=[[-1, 0, 0, 0],
[-1, 0, 0, 0]
];
function tableroCliente(minas){
let dibujominascercanas= Array.from(minas);//para crear copia del array y mostar el dibujo.Así en caso de crear el juego tendríamos los dos tableros bien diferenciados
    let contadorMinasCercanas=0
        for(let i=0;i<minas.length;i++ ){
        for(let j=0;j<minas.length;j++ ){
            contadorMinasCercanas=0//para reiniciarlo en cada iteración
         if(minas[i][j]!=-1){
              for(let k=i-1;k<=i+1;k++){
                for(let z=j-1;z<=j+1;z++ ){
                  if((k>=0  && z>=0 && k<=minas.length-1  && z<=minas.length-1)) {//para comprobar que no este en el borde ni en esquinas
                  if (minas[k][z]==-1)   contadorMinasCercanas++;
                     }
              }
              }
              dibujominascercanas[i][j]=contadorMinasCercanas;
            }  
        }
    }
    return  dibujominascercanas;
  }   
let minascercanas=tableroCliente(minas);
minascercanas.forEach(element => console.log(element));
 // console.log(tableroCliente(minas));