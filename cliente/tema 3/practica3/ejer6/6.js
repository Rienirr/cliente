"use strict";
let numero = "";
let numeroReves = "";

function primoyPaliidromo() {
  for (let i = 1; i <= 100000; i++) {
     numero = i.toString();
     numeroReves = "";
     if( i==2 || i==3 || i==5 || i==7 || i==11 ){
      console.log(i.toString());// ya que estos numeros son los primeros primos lo pongo to String para que se muestren igual

     }
    else if (                 //significa que no es primo pq estos son los primos menores 
      i % 2 != 0 &&
      i % 3 != 0 &&
      i % 5 != 0 &&
      i % 7 != 0 &&
      i % 11 != 0 &&
      i % 13 != 0 
    ) {
      for (let j = numero.length - 1; j >= 0; j--) {
        
        numeroReves += numero[j];
        if (numero == numeroReves) {
          console.log(numero)
        }
      }
    }
  }
}
primoyPaliidromo();
