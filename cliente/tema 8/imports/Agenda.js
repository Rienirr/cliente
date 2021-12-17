"use strict";

import { Persona } from "./Persona.js";


export class Agenda{
    constructor(persona=""){//Controlamos si nos pasan un array de personas o una persona de otra forma no lo añadimos al listado.
        if(persona.constructor.name==="Array"){//Así comprobamos si nos pasan un Array de personas.
            var semaforo= true;
            var array= new Array();
            persona.forEach(p => {
                if(p.constructor.name==="Persona")  array.push(p);
            
                else semaforo= false;
            });
            if(semaforo)this.listado=array;
        }
       else if(persona.constructor.name==="Persona"){//Una sola persona.
           this.listado= new Array();
           this.listado.push(persona);
        }

    }


     buscar=(persona)=>{/*Si está o no en la agenda.*/ 
        if(persona.constructor.name==="Persona"){

        }
    }
     anyadir=(persona)=>{/*Añade si no está en la agenda.*/
     if(persona.constructor.name==="Persona"){
           
        }
    }
    borrar=(persona)=>{/*Borra si está en la agenda. */
        if(persona.constructor.name==="Persona"){
            
        }
    }
    
    ordenar=()=>{/*Todos los registros alfabeticamente por nombre => n o por Apellido => */
    
    }
    listar=(id)=>{/*Muestra en el DOM la lista */ 
    
    }
}




