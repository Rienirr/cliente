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
        if(e==="a"){//Orden alfabético.

        }
        else{//Si recibimos otra cosa nos da igual Mostramos a los alumnos por dni;

        }
     }
     matricular= function( modulos){
 
        this.alumnando.forEach(element=> {
            element.elegirModulos(modulos);
        });

     } 
     impartir= function(){//Mues

        this.alumnando.forEach(element => {
            element.mostarProfesores();//Así mostramos los profesores de todos los módulos del curso
        });
     }  
      
    }




