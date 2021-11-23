"use strict";
export class Modulo{
    constructor (pModulo, pHoras ){//Comprobamos que creamos un módulo que se le pasa un profe y horas como un número enterno.
        if(Number.isInteger(pHoras)){
        
            this.nombre= pModulo;
            this.horas=pHoras;
            this.Profesorado= new Array();
            
          
        }else 
     return undefined;

    }
    profesoradoAsignado= function(prof){//Comprobación que son de tipo de profesor
      if(prof.constructor.name=="Profesorado" && prof.nombre!=undefined){//Para sacar los tipos y que son correctos
          
        this.Profesorado.push(prof);
        return true;
    }
    return false;
}
}
