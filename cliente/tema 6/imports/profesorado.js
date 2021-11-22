"use strict";
export class Profesorado{
    constructor (pId, pNombre, pApellidos,pFnac  ){
        if(Number.isInteger(pFnac)&& pFnac>=1900 && pFnac<=2002){
            //Comprobamos solo el año de nacimiento y vemos que un profesor tiene que ser mayor de Edad obligatoriamente.
      
        this.pId= pId;
        this.nombre= pNombre;
        this.apellidos= pApellidos;
        this.fNac=pFnac;
    }else{
        return undefined;
    }
     

    }
}