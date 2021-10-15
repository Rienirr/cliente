"use strict";
var d= document;
var texto=d.body.innerHTML;
//He encontrado la función replaceAll que funciona como se espera sin usar expresiones regulares 
var textoReemplazado= texto.replaceAll("sexo","<strong id='rojo'> Contenido bloqueado</strong>");//le añado la id para luego en la hoja de estilos añadir el estilo que nos pide
d.body.innerHTML=textoReemplazado;