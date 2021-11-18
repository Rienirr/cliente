"use strict";
export class Alumno{
    constructor (pDni, pNombre, pApellidos,pFnac, pNotaMedia  ){
        this.dni= pDni;
        this.nombre= pNombre;
        this.apellidos= pApellidos;
        this.fNac=pFnac;//Solo nos da el año el nacimiento.
        this.notaMedia= pNotaMedia;
        this.modulos= new Array();

    }
    setNotaMedia= function(nota){
    this.notaMedia= nota;
    return "ok";
    }
    getNotaMedia = function(){ 
        return this.notaMedia;
    }
    elegirModulos= function(modulo){
        this.modulos.push(modulo);

    }
    
    getMayorEdad= function(){
        let edad=2021- parseInt(fNac);
        if(edad >=18){
            return true;//Es mayor de Edad.
        }else{
            return false;//Es menor de Edad.
        }
        
    }
}