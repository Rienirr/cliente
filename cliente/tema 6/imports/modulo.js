"use strict";
export class Modulo{
    constructor (pModulo, pHoras, pProfesorado ){//Comprobamos que creamos un módulo que se le pasa un profe y horas como un número enterno.
        if(prof.constructor.name=="Profesorado" && prof.nombre!=undefined && Number.isInteger(pHoras)){
        
            this.nombre= pModulo;
            this.horas=pHoras;
            this.Profesorado= new Array();
            pProfesorado.forEach(element => {
                this.Profesorado.push(element);
            });
          
        }
     

    }
    profesoradoAsignado= function(prof){//Comprobación que son de tipo de profesor
      if(prof.constructor.name=="Profesorado" && prof.nombre!=undefined){//Para sacar los tipos y que son correctos
          
        this.Profesorado.push(prof);
    }
    
}
}
