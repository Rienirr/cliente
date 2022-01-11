"use strict";

import { Persona } from "./Persona.js";
import {localStorage} from './Localserver.js';

export class Agenda extends localStorage {
    
    constructor(){//Controlamos si nos pasan un array de personas o una persona de otra forma no lo añadimos al listado.
      super();
        this.listado= new Array();
    }
     buscar=(persona)=>{/*Si está o no en la agenda.*/ 
        if(persona.constructor.name==="Persona"){
            let resultado= false;
            this.listado.map((v,i,a)=>{//si la encontramos devolvemos true  si no false.
                if( v.equals(persona.getNombre(),persona.getApellidos()) ) resultado = true;
                
            });
            return resultado;
        }//Si no es una persona 
        else return false;
    }
     anyadir=(persona)=>{/*Añade si no está en la agenda.*/
     if(persona.constructor.name==="Persona" && !this.buscar(persona)){//Para que sea una persona que no esté en la agenda y pueda ser añadida.
           this.listado.push(persona);
           return true;
        }
      else if(persona.constructor.name==="Array"){//Así comprobamos si nos pasan un Array de personas.
            var semaforo= true;
            var array= new Array();
            persona.forEach(p => {
                if(p.constructor.name==="Persona" && !this.buscar(persona))  array.push(p);//Las insertanos
            
                else semaforo= false;
            });
            if(semaforo)this.listado=array;
            return true;
        }
        else return false;
        }

    borrar=(persona)=>{/*Borra si está en la agenda. */
        let resultado= false;
        if(persona.constructor.name==="Persona" ){//Para que una persona que esté en la lista y pueda borrarse
            this.listado.map((v,i,a)=>{//si la encontramos devolvemos true  si no false.
                if( v.equals(persona.getNombre(),persona.getApellidos()) ){
                    resultado= true;
                    this.listado.slice(i,1);//Para que lo borre.
                }
            });
        } 
        return resultado;
    }
    
    ordenar=()=>{/*Todos los registros alfabeticamente por nombre => n o por Apellido => */
    
    }
    listar=(id)=>{/*Muestra en el DOM la lista */ 
     let table= document.getElementById(id);
     table.innerHTML+=`<thead><th>Nombre </th> <th> Apellidos</th> <th>Dirreción  </th> <th> Teléfono de Contacto</th> </thead>`;
     this.listado.map((persona,i,a)=>{
       console.log(persona);
        table.innerHTML+=`<tr> <td>${persona.getNombre()}</td>   <td>${persona.getApellidos()}</td> <td>${persona.getDireccion()}</td> <td>${persona.getTelefono()}</td>   </tr>`;   
    });
   
     
    
}
}




