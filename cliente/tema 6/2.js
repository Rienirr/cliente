"use strict";
import { Modulo } from "./imports/modulo.js";
import { Alumno } from "./imports/alumnado.js";
import { Curso } from "./imports/Curso.js";
import { Profesorado } from "./imports/profesorado.js";
import { crearComunicacionUsuario} from "./imports/output.js";

window.onload= ()=>{    
    var d= document;
    crearComunicacionUsuario();
    var alu = new Alumno("74015595P","b","c",1900, 8.78);
    //console.log(alu.constructor.name=="Alumno" && alu.nombre!=undefined);//Para sacar los tipos y que son correctos
    console.log(alu.fNac);
    
}