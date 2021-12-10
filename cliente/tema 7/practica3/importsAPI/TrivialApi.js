"use strict";
export const getTrivial= (amount,difficulty,category )=>{

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

 export function mostrarPreguntas(pregunta){
   let arrayPreguntas= new Array();
   arrayPreguntas.push(pregunta.correct_answer);
  
  let div =  document.createElement("div");
  /* div.innerHTML=`<h2> ${pregunta.category}</h2><p>${pregunta.question}</p>
  <input type="radio" id="correct" name="pregunta" value="${pregunta.correct_answer}">
  <label for="correct">${pregunta.correct_answer}</label>`; */
  pregunta.incorrect_answers.forEach(incorrecta => {
    arrayPreguntas.push(incorrecta);
    /* div.innerHTML+=`<input type="radio" class="false" name="pregunta" >
    <label for="pregunta">${incorrecta}</label>`; */
  });
console.log(arrayPreguntas);
  //insertar una función para mezclar las preguntas
  
  
  document.body.appendChild(div);
} 