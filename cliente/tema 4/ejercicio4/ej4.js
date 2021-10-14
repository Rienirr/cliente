"use strict";
function toCani(){
    let d=document;
let prueba= d.getElementById("fila1").innerHTML;
console.log(prueba);

    let cani="";
    do{
        prueba=  prueba.replace('c', 'k') ;// para que me cambie las c k mientras haya
       } while(prueba.search("c")>1);
       
       for(let i=0;i<prueba.length;i++){
          if(i%2==0){
              
        cani+= prueba.charAt(i).toLocaleUpperCase();  
           }else {
               cani+= prueba.charAt(i).toLocaleLowerCase();  // para asegurarnos que son minúsculas. El usuario por definición es idiota e igual nos pasa un string en mayúscula con esto lo tenemos controlado
       }
       
}
cani+="HHH";


d.getElementById("fila1").innerText= cani;

}
