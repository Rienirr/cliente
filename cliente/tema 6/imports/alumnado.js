"use strict";
export class Alumno{
    constructor (pDni, pNombre, pApellidos,pFnac, pNotaMedia  ){
        this.dni= pDni;//Vemos que sigue la expresion regular de un Dni.
        this.nombre= pNombre;
        this.apellidos= pApellidos;
        this.fNac=pFnac;//Solo nos da el año el nacimiento. Por lo tanto 4 números entre 1900 y el 2017
        this.notaMedia= pNotaMedia;
        this.modulos= new Array();

    }
    setNotaMedia = function(nota){
    this.notaMedia= nota;
    return "ok";
    }
    getNotaMedia = function(){ 
        return this.notaMedia;
    }
    elegirModulos= function(modulo){
        this.modulos.push(modulo);

    }
    
    getMayorEdad = function(){
        let edad=2021- parseInt(fNac);
        if(edad >=18){
            return true;//Es mayor de Edad.
        }else{
            return false;//Es menor de Edad.
        }
        
    }
    mostrarProfesores =function(){//Recorremos el array de módulos y mostramos
        
        this.modulos.forEach(modulo => {
            //crear p por cada módulo HACER!!!!!!!!
            modulo.idProfesorado.forEach(profesor => {
                    //cada módulo le ponemos la información de los profesores que lo imparten. HACER!!!!
            });
        });
    }

}