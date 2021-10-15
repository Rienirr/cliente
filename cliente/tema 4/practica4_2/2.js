"use strict";
"use strict";
let numero = "";
var d=document;
window.onload =crearTabla();

function primo() {
/* modificamos la función del tema 3 para que ahora nos devuelva un array
de todos los números primos hasta el 10000 para luego recorrerlo y hacer las comparaciones necesarias */

  let array=[];
  for (let i = 1; i <= 10000; i++) {
     numero = i.toString();
  if(i==1){
//no hacemos nada pero controlamos que no entre en el segundo if 
  }
     else if( i==2 || i==3 || i==5 || i==7 || i==11 ){
      array.push(numero);

     }
    else if (                 //significa que no es primo pq estos son los primos menores 
      i % 2 != 0 &&
      i % 3 != 0 &&
      i % 5 != 0 &&
      i % 7 != 0 &&
      i % 11 != 0 &&
      i % 13 != 0 
    ) {
       array.push(numero);
        }
       
      }
      
      return array;
    }
  

     

function crearTabla(){
  let tamanyo=100;
  let contador=0;
  let table=d.createElement("table");
  
  for(let i=0;i<tamanyo;i++){//con esto hacemos 100 filas 
    let fila=d.createElement("tr");
    for(let j=0;j<tamanyo;j++){//creamos las 100 celdas de cada fila con un contador para que el dato sea el que queramos
      let dato=d.createElement("td");
      dato.innerText=contador;
      fila.appendChild(dato);
      contador++;
    }
    table.appendChild(fila);//insertamos una fila vez la tenemos completada de elementos 
    
  }
  d.body.appendChild(table);//añadimos la tabla al body 
}
function recorrerTabla(){
  let primos= primo(); 
  let celdas=d.getElementsByTagName("td");//tengo un array de td 
  for (const valor in celdas) {
   
      let element = (celdas[valor].innerText);//tengo las celdas pero solo necesito su valor 
     if(primos.includes(element)){
       //si su valor equivale a un primo para eso lo buscamos dentro del array de primos le ponemos la class primo
       celdas[valor].setAttribute("class", "primo");
     }
      
    
  }
}
