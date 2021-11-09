"use strict";

window.onload = () => {
    let d= document;
    let segundoSelect= d.createElement("select");
    segundoSelect.setAttribute("class","hidden");
    d.forms[0].appendChild(segundoSelect);
    let select= d.getElementsByTagName("select")[0];
    let ciudadesAlicante=["Alicante", "Elche","Petrer"];
    let ciudadesCastellon=["Castellón", "Oropesa", "Vinazoz"];
    let ciudadesValencia=["Valencia","Xàtiva","Torrent"];
 
    
    
     select.addEventListener("change", (e)=>{//Con el cambio se ejecuta la función para mostrar los resultados.
    
     let posicion=d.getElementById("provincia").selectedIndex;
           let provincia="false";
         
          if(posicion===1){
            provincia=ciudadesAlicante;
          }
          else if(posicion===2){
            provincia=ciudadesCastellon;
          }
          else if(posicion===3){
            provincia=ciudadesValencia;
          }
          if(provincia!="false"){
            segundoSelect.innerHTML=`<option value='${provincia[0]}'>${provincia[0]}</option> <option value='${provincia[1]}'>${provincia[1]}</option>  <option value='${provincia[2]}'>${provincia[2]}</option></select>  `
            segundoSelect.classList.remove("hidden");
          }
          else{//Para ocultar el select si tenemos una opción seleccionada.
            segundoSelect.setAttribute("class","hidden");
          }
          
           
           }
     , false);
    
    
    
    }
    
    