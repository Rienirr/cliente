'use strict';

var u ="una cadena cani es como esta";
var muyCAni= "casi acabo comiendo en casa";
;
function convertirCani(prueba){
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
       cani+="HHH";
       return cani;
}


console.log(convertirCani(u));

console.log(convertirCani(muyCAni));
