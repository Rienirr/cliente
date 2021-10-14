"use strict";
function anyadir(){
    let numero =Math.round(Math.random()*100000) ;//he puesto para que haya más variedad un número grande
   let elem= document.createElement("li");
    elem.innerHTML=numero;
    document.getElementById("lista").appendChild(elem);//he puesto un ID ya que he visto en los apuntes la forma más óptima de buscar así nos vamos acostumbrando
   
    }