"use strict";
var dni;
var nDNI;
 var listaDNI=[];
var error = true;
 while(dni!== "-1"){
   dni=prompt("Introduce un DNI sin la letra ");
    nDNI=( parseInt(dni));
    if((nDNI<0 || nDNI>99999999 || dni.length!=8) && dni!=="-1") {
        console.log("Introduce el Dni correctamente son 8 dígitos")
    }else if( dni!=="-1"){
        error = false;//se introduce al menos un número en el array 
        let posicionEnArray=nDNI%23;//ya que tenemos el string ordenado con la letra que toca dependiendo del resto lo usamos 
        let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        listaDNI.push(letras.charAt(posicionEnArray));
    }
 }
 if(error){
       
       console.log("No se han introducido DNI correctamente");
 }else{
     console.log("Las letras de los DNI introducidos son:");
     for (let i=0;i<listaDNI.length;i++){
         console.log(`La letra del ${i+1} DNI es: ${listaDNI[i]}`);// le sumo más 1 para que sea más legible a ojos humanos
     }
 }
