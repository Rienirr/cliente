
'use strict';
function insertAfter(nuevoElemento, elementoExistente) {
    elementoExistente.parentNode.insertBefore(nuevoElemento, elementoExistente.nextSibling);
 
}
