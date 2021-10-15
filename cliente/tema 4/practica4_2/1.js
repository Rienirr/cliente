"use strict";
var d= document;
var texto=d.body.innerHTML;
var textoReemplazado= texto.replaceAll("sexo","<strong id='rojo'> Contenido bloqueado</strong>");
d.body.innerHTML=textoReemplazado;