"use strict";
let contadorvertical=1;


let sudoku = [];
sudoku[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sudoku[1] = [7, 8, 9, 1, 2, 3, 4, 5, 6];
sudoku[2] = [4, 5, 6, 7, 8, 9, 1, 2, 3];
sudoku[3] = [3, 1, 2, 6, 4, 5, 9, 7, 8];
sudoku[4] = [9, 7, 8, 3, 1, 2, 6, 4, 5];
sudoku[5] = [6, 4, 5, 9, 7, 8, 3, 1, 2];
sudoku[6] = [2, 3, 1, 5, 6, 4, 8, 9, 7];
sudoku[7] = [8, 9, 7, 2, 3, 1, 5, 6, 4];
sudoku[8] = [5, 6, 4, 8, 9, 7, 2, 3, 1];

function comprobarsudoku(sudoku){
    let mensaje="El sudoku esta correcto";
for(let i=0 ;i<sudoku.length;i++){
    let vertical=new Array(9);
    let horizontal=new Array(9);
    let  subcuadriculasIzq=new Array(9);
    let subcuadriculasCentrales=new Array(9);
    let subcuadriculasDerecha=new Array(9);
    if(i==3 ||i==6){//Con esto podemos comprobar las subcuadriculas 3x3 por zonas la izq(las 3 que hay), centro(igual) y der(igual)
        subcuadriculasIzq=new Array(9);
        subcuadriculasCentrales=new Array(9);
        subcuadriculasDerecha=new Array(9);
    }
    
    for(let j=0 ;j<sudoku.length;j++){// da igual que length usemos al ser cuadro ambos arrays tienen la misma longitud
        
            if(j<=2){
            subcuadriculasIzq.push(sudoku[[i][j]]);
            }
                else if(j<=5){
                 subcuadriculasCentrales.push(sudoku[[i][j]]);
                    }
            else{
                subcuadriculasDerecha.push(sudoku[[i][j]]);
            }
            if((j==2&& i==2) || (j==2&& i==5)|| (j==2&& i==8)){//Para hacer las 3 comprobaciones de las subcuadriculas izq 
                subcuadriculasIzq.sort();
        console.log
                for(let k=1;k<=sudoku.length;k++){
                    if(subcuadriculasIzq[k]!=k ){
                    mensaje="Hay algún fallo en sudoku";
                    }
                  }
                
            }
            else if ((j==5&& i==2) || (j==5&& i==5)|| (j==5&& i==8)){//Para hacer las 3 comprobaciones de las subcuadriculas centrales comprobamos en vertical 
                subcuadriculasIzq.sort();
                for(let k=1;k<=sudoku.length;k++){
                    if(subcuadriculasIzq[k]!=k ){
                    mensaje="Hay algún fallo en sudoku";
                    }
                  }
                
            }
            else if ((j==8&& i==2) || (j==8&& i==5)|| (j==8&& i==8)){//Para hacer las 3 comprobaciones de las subcuadriculas centrales comprobamos en vertical 
                subcuadriculasIzq.sort();
                for(let k=1;k<=sudoku.length;k++){
                    if(subcuadriculasIzq[k]!=k ){
                    mensaje="Hay algún fallo en sudoku";
                    }
                  }
                
            }
      horizontal[i]=sudoku[[i][j]];
      vertical[i]=sudoku[[j][i]];
      if(j==sudoku.length-1){
          horizontal.sort();
          vertical.sort();
          for(let k=1;k<=sudoku.length;k++){
            if(horizontal[k]!=k || vertical[k]!=k ){
            mensaje="Hay algún fallo en sudoku";
            }
          }
      }
    }

}

return console.log(mensaje);
}
console.log(comprobarsudoku(sudoku));