"use strict";


export class Curso{
    constructor( pNombre, pAula, pAlumnando,pModulos ){
     this.nombre= pNombre;
     this.aula=pAula;
     this.alumnando= new Array();
        pAlumnando.forEach(element => {//Comprobación que son de tipo de Alumno.
            this.alumnando.push(element);
           
        });
        this.modulos= pModulos;//Comprobación de array.
        pModulos.forEach(element =>{
            this.modulos.push(element);

        });
    }
    notaMedia= function(){//Nota media de toda la clase.
        let mediaClase=0;
        let totalAlumnos=  this.alumnando.length
        this.alumnando.forEach(a => {
            mediaClase+= a.getNotaMedia();
        });
        return mediaClase/totalAlumnos;
        }
     listadoAlumnos= function(e){//Recibe un parámetro para ordenar
        let listados= new Array();
        this.alumnando.forEach(alumno =>{//Así los añadimos al listado;
            listados.push(`${alumno.apellido}, ${$alumno.nombre} `);
          });
          listados.sort();
        if(e==="a"){//Orden alfabético.
        return listados;
        }
        else{//Contrario al alfabético.
            return listados.reverse();//De
        }
     }
     matricular= function( alu){
        if(alu.constructor.name=="Alumno" && alu.nombre!=undefined ){
        this.alumnando.push(alu);
        return true;

     }
     }
     impartir= function(){//Mostramos todos los módulos 
        
        this.modulos.forEach(modulo => {
            modulo.nombre;//De cada módulo
            modulo.profesorado.forEach(profesor=>{//En cada módulo recorremos los profesores que tiene;
 
            });
        });
     }  
      
    }




