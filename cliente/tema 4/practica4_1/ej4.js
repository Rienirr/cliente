"use strict";
var contador=2;// pongo un contador para añadir filas de forma dinámica que cada una sea con un valor diferente al anterior
let d=document;
function toCani(filaParaConvertir){
   
let prueba= d.getElementById(filaParaConvertir).innerText;

    let cani="";
    do{
        prueba=  prueba.replace('c', 'k') ;// para que me cambie las c k mientras haya
       } while(prueba.search("c")>1);
       
       for(let i=0;i<prueba.length;i++){
          if(i%2==0){
              
        cani+= prueba.charAt(i).toLocaleUpperCase();  
           }else {
               cani+= prueba.charAt(i).toLocaleLowerCase();  
               // para asegurarnos que son minúsculas. El usuario por definición es idiota e igual nos pasa un string en mayúscula con esto lo tenemos controlado
       }
       
}
cani+="HHH";


d.getElementById(filaParaConvertir).innerText= cani;

}
function anyadir(){// el método recoge el valor y lo añade en la tabla con Inner html como lo queremos debidamente formateado
let fila =d.getElementById("texto").value;

let id=`fila${contador}`;
let elemento=d.createElement("tr");
elemento.innerHTML=`<td id="${id}" onmouseover="fondo('${id}')" onmouseout="eliminarCani('${id}')"> ${fila}  </td>  <td><button onclick="toCani('${id}')" " >Caniar</button> </td>`;
//añadimos todo lo que nos interesa para que el método funcione bien

d.getElementById("bodyTabla").appendChild(elemento);

d.getElementById("texto").value="";// ponemos el valor en blanco de nuevo
contador++;
}
function fondo(filaParaConvertir){//para que cuando pase por encima le ponemos un fondo cani
d.getElementById(filaParaConvertir).setAttribute("class","cani");
}

function eliminarCani(filaParaConvertir){
    d.getElementById(filaParaConvertir).removeAttribute("class"); //le quitamos esa clase cani


}
