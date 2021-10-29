"use strict";
window.onload= function() {
    var d=document;
    var p= d.createElement("p");
    d.body.appendChild(p);
    p.innerHTML="Pincha para cambiar el fondo";
    function colorRamdon(){//Hacemos que cree 6 números aleatorios entre el 0 y 15  para luego asignarlos al array que nos has dado
        let color="#";
        for(let i=0;i<6;i++) {
            let numero=  Math.trunc(Math.random()*15);
            color+=letras[numero];
        }
        return color;
    }
    d.addEventListener("click", function(event){// cada vez que hace click con la función anterior cambiamos el color de fondo con valores en hexadecimal
           d.body.style.backgroundColor=colorRamdon();
    },false);
    var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"]; 

}