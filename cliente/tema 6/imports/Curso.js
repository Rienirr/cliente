"use strict";


export class Curso{
    constructor( pNombre, pAula, pAlumnando,pModulos ){//Creamos un curso si lo que nos pasan son arrays.
  
    
     if(pModulos.constructor.name=="Array" && pModulos.constructor.name=="Array"){
 this.alumnando= new Array();
     this.modulos= new Array();
     
        pAlumnando.forEach(alu => {
            if( alu.constructor.name=="Alumno" && alu.nombre!=undefined ){//Que además de ser un Array es de Alumnos.
                this.alumnando.push(alu);}
                else{
                    return undefined;
                }
            });
      
        pModulos.forEach(modulo =>{
            if( modulo.constructor.name=="Modulo" && modulo.nombre!=undefined ){//Que además de ser un Array es de Módulos.

                this.modulos.push(modulo);
                return true;
            }else{
                 return undefined;}
           
    
        });
              
     this.nombre= pNombre;
     this.aula=pAula;
     return true;//Si todo ha ido bien. 
    }else{//Así controlamos que alumnado y curso sea un Array.
        return undefined;
    }
}

    notaMedia= function(){//Nota media de toda la clase.
        let mediaClase=0;
        let totalAlumnos=  this.alumnando.length
        this.alumnando.forEach(a => {
            mediaClase+= a.getNotaMedia();
        });
        return mediaClase/totalAlumnos;
        }
     listadoAlumnos= function(e =""){//Recibe un parámetro para ordenar.
        let listados= new Array();
        let texto="";
        let formatoElegido="ascendiente alfabéticamente";
        this.alumnando.forEach(alumno =>{//Así los añadimos al listado.
            listados.push(` ${alumno.apellidos}, ${alumno.nombre} `);
          });
          listados.sort();//Orden alfabético.
        if(e!=="a"){//Comenzamos por el final.
            listados.reverse();
            formatoElegido="descendiente alfabéticamente";
    }
      
        listados.forEach( alu =>{
            texto+=`<li>${alu}</li>`;
            });
            return `Los alumnos del curso ${this.nombre} son en orden ${formatoElegido}:<ol>${texto} </ol>`;
     }
     matricular= function( alu){
        if(alu.constructor.name=="Alumno" && alu.nombre!=undefined ){
        this.alumnando.push(alu);
        return true;

     }
     }
     impartir= function(){//Mostramos todos los módulos 
       let contenidoTabla= "";
       let table="";
        contenidoTabla+=" <thead> <th> </th> </th><th> Modulo </th>  <th>Profesores </th> </thead>";
       
        this.modulos.forEach(modulo => {
            let mo="";
           mo+=` <td> ${modulo.nombre}</td>`;
           let profesores="";
            modulo.Profesorado.forEach(profesor=>{//En cada módulo recorremos los profesores que tiene;
                profesores+=`${profesor.nombre} ${profesor.apellidos}`;
            });
            contenidoTabla+=`<tr> <td> ${mo}</td> <td> ${profesores}</td> </tr>`;
        });
        return table+= `<table> ${contenidoTabla}</table> `;
     } 
     CursoCompleto= function(){/*Esto nos devuelve un array de 3 posiciones la primera el nombre del módulo 
        la  2 el método impartir que muestra todos  módulos con sus profesores
        la 3 el array de alumnos mostrados */

        let ar=new Array();
        ar.push(`${this.nombre} informe completo`);
        ar.push(this.impartir());
        let alums= `Los alumnos matriculados en el curos ${this.nombre} son:<br>`;
        
        this.alumnando.forEach(alu => {
            alums+=alu.mostrarProfesores();
        });
        ar.push(alums);
return ar;
     }
      
    
    }



