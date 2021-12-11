"use strict";
export const getTrivial= (amount,difficulty,category )=>{
  /*Nos devuelve un objeto json con todas las preguntas que nosotros le pasemos con esos 3 parámetros cantidad, dificultad y categoría.
  (No he añadido más ya que creo que así hay bastante aleatoriedad pero lo más sencillo añadir más categorías si lo queremos ampliar en un futuro).*/

/* ------DATOS NECESARIOS----
historia=23 ,deportes=21 y no necesitas nada si son todas las categorías.
            */
if(category!= "todas"){
  var url=`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`;
}else url=`https://opentdb.com/api.php?amount=${amount}&&difficulty=${difficulty}`;
var peticion = new Request(url, {
    method: "GET",
    headers: new Headers({
      "Content-type": "application/x-www-form-urlencoded",
    }),
  });
    return new Promise((resolver, rechazar) => {
      fetch(peticion)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          resolver(datos);
        })
        .catch(() => {
          rechazar(new Error("Ha habido un error de comunicacón."));
        });
    });
};

 export function mostrarPreguntas(pregunta){ //Muestra las preguntas en orden aleatorio además muestra la categoría de cada pregunta.
  let arrayPreguntas= new Array();
   arrayPreguntas.push(pregunta.correct_answer);
 // console.log(pregunta.correct_answer); Para probar las correctas
  let div = document.getElementById("mostrar");
  div.classList.remove("hidden")
  div.innerHTML+=`<h2> ${pregunta.category}</h2><p>${pregunta.question}</p>`;

  pregunta.incorrect_answers.forEach(incorrecta => {
    arrayPreguntas.push(incorrecta);
   
  });
  let posicion=Math.round(Math.random()*3);
  
  for(let i= 0; i<4;i++){//Así conseguimos que se pongan las preguntas en orden aleatorio
    if(posicion>3)     posicion=0; //Para que no nunca se salga del array de 4 posiciones;
    if(posicion==0){//Sabemos que es la posición de la pregunta correcta
     div.innerHTML+=` <input type="radio" class="correct" name="${pregunta.question}" value="${arrayPreguntas[posicion]}">
      <label for="correct">${arrayPreguntas[posicion]}</label>`;
    }
    else if(arrayPreguntas[posicion]!= undefined){//Hay preguntas de verdadero o falso así las controlamos ya que esas posiciones serán 
       div.innerHTML+=`<input type="radio" class="false" name="${pregunta.question}" >
    <label for="pregunta">${arrayPreguntas[posicion]}</label>`;

    } 
    posicion++;
  }
 


  


} 
export function comprobarAcertadas(){//Así nos muestra la cantidad de preguntas acertadas y además da estilo a las correctas(verde) y si fallamos nos lo muestra en rojo.
//  

var contador=0;
  let acertadas= document.querySelectorAll("input[type='radio'].correct:checked");
  
  acertadas.forEach(acertada=>{
   contador++;
  });
  let correctas= document.querySelectorAll(".correct");

  correctas.forEach(acertada=>{
    acertada.setAttribute("class","verde");
  });
  let falladas= document.querySelectorAll("input[type='radio'].false:checked");
  falladas.forEach(fallada=>{
 fallada.setAttribute("class","rojo");
  })
 
  let div = document.getElementById("mostrar");
  div.innerHTML+=`<h2>Resultado del trivial</h2><p>Has acertado ${contador} preguntas</p>`;
  
}
export function vaciar(){//Volver a los valores iniciales
  var resultados = document.getElementById("final");
    var reiniciar = document.getElementById("reiniciar");
  let div = document.getElementById("mostrar");
  div.innerHTML=""; 
  resultados.classList.add("hidden");
  reiniciar.classList.add("hidden");
}