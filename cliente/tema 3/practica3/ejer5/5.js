"use strict";
function calcularDni(letra) {
  let todo = "";
  let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  if (letras.indexOf(letra) < 0) {
    //para controlar que sean letras Correctas
    console.log("introduce una letra Correcta");
  } else {
    let num = letras.indexOf(letra);
    for (let i = num; i <= 999; i += 23) {
      if (i + 23 > 999) {
        todo += `${i}${letras.charAt(num)} `; // para que la última posición no muestre la coma
      } else {
        todo += `${i}${letras.charAt(num)} ,`;
        // console.log(`${i}${letras.charAt(num)}`); no había visto que lo querías en una  sola muestra todo no por partes
      }
    }
  }
  return todo;
}
console.log(calcularDni("T"));
