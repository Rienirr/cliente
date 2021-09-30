"use strict"
let nombreProducto;
let precio;
let impuestos;
let precioFinal;
function mostrarProducto(producto="Producto generico", precio = 100, impuestos= 21){

    impuestos= impuestos/100;
    precioFinal= precio +(precio*impuestos);/*se podría añadir controladores para que nada más se puedan poner los tipos de IVA actuales*/ 


    if ( isNaN(precioFinal) ){//no me aclaraba con los nan puesto que al hacer la comparación me daba error y con esa función me ha salido bien
        console.log("los números no son válidos has cometido algún tipo de error");
}
else{
    console.log("El precio del "+producto+" es "+precioFinal);
}
}

mostrarProducto("lista de la compra ",10, 66 );