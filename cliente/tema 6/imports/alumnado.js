"use strict";
export class Alumno{
    constructor (pDni, pNombre, pApellidos,pFnac, pNotaMedia  ){
       
           
        if(Number.isInteger(pFnac)&& pFnac>=1900 && pFnac<=2021 && this.comprobarDni(pDni)===true && this.ComprobarDecimal(pNotaMedia)){
            //Hacemos todas las comprobaciones posibles 
            
            this.dni= pDni;//Vemos que sigue la expresion regular de un Dni.
            this.fNac=pFnac;//Solo nos da el año el nacimiento. Por lo tanto 4 números entre 1900 y el 2021.
            this.nombre= pNombre;
            this.apellidos= pApellidos;
            this.notaMedia= pNotaMedia;
            this.modulos= new Array();
        }
        return undefined;

    }
    setNotaMedia = function(nota){
        if(this.ComprobarDecimal(nota)){//Aquí comprobamos que nos ponen un nota válida.
            this.notaMedia= nota;
            return true;
        }else{
            return false;
        }
        
    }
    getNotaMedia = function(){ 
        return this.notaMedia;
    }
    elegirModulos= function(modulo){
        if( modulo.constructor.name=="Profesorado" && modulo.nombre!=undefined ){//Así solo añadimos a módulos los objetos con clase Modulo.

            this.modulos.push(modulo);
            return true;
        }
        return false;

    }
    
    getMayorEdad = function(){
        let edad=2021- parseInt(this.fNac);
        if(edad >=18){
            return true;//Es mayor de Edad.
        }else{
            return false;//Es menor de Edad.
        }
        
    }
    mostrarProfesores =function(){//Recorremos el array de módulos y mostramos
            let div= document.createElement("div");
        this.modulos.forEach(modulo => {
           div.innerHTML+=`<p>El ${modulo} tiene de profesor/es:`;
            modulo.idProfesorado.forEach(profesor => {
                div.innerHTML+=` ${profesor.nombre} ${profesor.apellido}`;
            });
            div.innerHTML+="</p>";
        });
        return div;//Devolvemos un div que tiene un párrafo por cada módulo;
    }
    comprobarDni = function(dni) {
        
       
        var expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
       
        if(expresion_regular_dni.test (dni) == true){
           return true;
        }else return false;

}
ComprobarDecimal= function(num) {
    //Comprobamos que sea un número. 
    if(typeof num == 'number' && !isNaN(num)){
        if (Number.isInteger(num)) {
            return true;
        }
        else {
          return true;
        }
    
    } else {
        return false;
    }
}

}
