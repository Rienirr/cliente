"use strict";
import { Modulo } from "./imports/modulo.js";
import { Alumno } from "./imports/alumnado.js";
import { Curso } from "./imports/Curso.js";
import { Profesorado } from "./imports/profesorado.js";
import { crearComunicacionUsuario,mostrarUsuario} from "./imports/output.js";

window.onload= ()=>{    
    var d= document;
    var texto="";
    crearComunicacionUsuario();
   var mensajeUsuario= d.getElementById("mensajeAlUsuario");
    var alu = new Alumno("74015515P","Antonio","Bonmati",1993, 8);
    var al2= new Alumno("74015591P","Pepito","Grillo",1950, 10);
    var al3=  new Alumno("74015511P","Ejemplo","Inventado",1954, 9);
    var jC= new Profesorado(1,"Juan Carlos","Gomez",1988 );
    var rosa=new Profesorado(2,"Mª Rosa","Aravid",1988 );
    var fer=new Profesorado(3,"Fernando","Iñigo",1988 );
  var  DIW = new Modulo("Diseño aplicaciones Web",6);
  var  DWC =  new Modulo("Diseño aplicaciones Web Entorno Cliente",7);
   var DAWS=  new Modulo("Diseño aplicaciones Web Entorno Servidor",8);
    
   (DIW.profesoradoAsignado(rosa));//Aquí comprobamos que los arquetipos de los módulos y profesorado funcionan como se espera.
   (DIW.profesoradoAsignado("silvia"));//Así comprobamos que no mete datos erróneos y devuelve false por si quisieramos mostrar algún mensaje.
    DWC.profesoradoAsignado(jC);
    DWC.profesoradoAsignado(fer);
    DAWS.profesoradoAsignado(fer);
   //console.log(DIW.Profesorado);
    alu.elegirModulos(DIW);
    alu.elegirModulos(DAWS);
    alu.elegirModulos(DWC);
    alu.elegirModulos("FOL");//Comprobamos que si no ponemos el tipo de datos no funciona.
    //console.log(alu.modulos);Funcionan todos los métodos de ALumno.
    al2.elegirModulos(DAWS);
    al3.elegirModulos(DWC);
 /*     texto= al3.mostrarProfesores();;//Nos muestra todos los módulos con todos los profesores de los alumnos.
    mostrarUsuario(mensajeUsuario,texto,5000); 
    texto=alu.mostrarProfesores();
    mostrarUsuario(mensajeUsuario,texto,5000);*/
    var alumnos=[alu,al2, al3];
    var modulos=[DAWS,DIW,DWC];
   
  
    /*  CURSO */
   var DAW = new Curso("Desarrollo Aplicaciones Web","Aula b", alumnos,modulos);
   console.log(DAW);
  /*var DAwMAL = new Curso("Desarrollo Aplicaciones Web","Aula b", alu,DWC);
  console.log(DAwMAL);
  Mostramos la nota media debidamente formateada
   var notamedia =`<p> La nota media del curso: ${DAW.nombre} es: ${DAW.notaMedia()}</p>` ;
    mostrarUsuario(mensajeUsuario,notamedia,5000); 
    var listado= DAW.listadoAlumnos();
    mostrarUsuario(mensajeUsuario,listado,5000);
    var modulosImpartidos=DAW.impartir();
    var divImpartir= d.getElementById("impartir");
    mostrarUsuario(divImpartir,modulosImpartidos,50000);*/
  var cursoCompleto= DAW.CursoCompleto();
   var encabezado= d.getElementById("encabezado");
   var divImpartir= d.getElementById("impartir");
   var divAlumnado= d.getElementById("alumnos");
   mostrarUsuario(encabezado,cursoCompleto[0],50000);
  mostrarUsuario(divImpartir,cursoCompleto[1],50000);
  mostrarUsuario(divAlumnado,cursoCompleto[2],50000);
  


}