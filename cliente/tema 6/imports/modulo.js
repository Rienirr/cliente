"use strict";
export class Modulo{
    constructor (pModulo, pHoras, pIdProfesorado ){
        this.nombre= pModulo;
        this.horas=pHoras;
        this.idProfesorado= new Array();
        pIdProfesorado.forEach(element => {
            this.idProfesorado.push(element);
        });
      

    }
    profesoradoAsignado= function(prof){//Comprobación que son de tipo de profesor
         
        this.idProfesorado.push(prof);
    }
   
}