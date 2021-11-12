"use strict";

window.onload = () => {
    let d= document;
    let segundoSelect= d.createElement("select");
    segundoSelect.setAttribute("class","hidden");
    d.forms[0].appendChild(segundoSelect);
    let select= d.getElementsByTagName("select")[0];
    let selectCiudades= d.getElementsByTagName("select")[1];
    let ciudadesAlicante=["Seleccione una opción válida","Alicante", "Elche","Petrer"];
    let ciudadesCastellon=["Seleccione una opción válida","Castellón", "Oropesa", "Vinazoz"];
    let ciudadesValencia=["Seleccione una opción válida","Valencia","Xàtiva","Torrent"];
    var submit=d.createElement("input");
    submit.setAttribute("type","submit");
    submit.setAttribute("class" ,"hidden");
    d.forms[0].appendChild(submit);
    
    
     select.addEventListener("change", (e)=>{//Con el cambio se ejecuta la función para mostrar los resultados.
    
     let posicion=select.selectedIndex;
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
            segundoSelect.innerHTML=` <option value='${provincia[0]}'>${provincia[0]}</option> <option value='${provincia[1]}'>${provincia[1]}</option>  <option value='${provincia[2]}'>${provincia[2]}</option>  <option value='${provincia[3]}'>${provincia[3]}</option> `
            segundoSelect.classList.remove("hidden");
          }
          else{//Para ocultar el select si tenemos una opción seleccionada.
            segundoSelect.setAttribute("class","hidden");
          }
          
           
           }
     , false);
     selectCiudades.addEventListener("change", (e)=>{//Así solo puede enviar las consultas si está bien de otra forma no aparece el boton de envío.
    
      let posicion2=selectCiudades.selectedIndex;
      console.log(posicion2);
    if(posicion2===0){
      submit.setAttribute("class" ,"hidden");
    }else{
      submit.setAttribute("class" ,"");
    }
    
    }, false);
  }
    
    