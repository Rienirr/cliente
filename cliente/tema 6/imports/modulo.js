"use strict";
export class Modulo{
    constructor (pModulo, pHoras, pIdProfesorado ){
        this.nombre= pModulo;
        this.horas=pHoras;
        pIdProfesorado.forEach(element => {
            this.idProfesorado= element.dni;
        });
      
    }
   
}