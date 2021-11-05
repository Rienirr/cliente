"use strict";

window.onload = () => {
    let d= document;
    let boton= d.getElementById("guardar");
    function crearComunicacionUsuario(){//este método lo usaremos siempre para comunicarnos con el usuario.
        let mostrar = d.createElement("div");
              mostrar.innerHTML="<p id='mensajeAlUsuario' class='hidden'> Tienes que rellenar todos los campos melón y en los el año de publicación tiene que ser de 1901 a 2021(presente) y en la localización un número mayor o igual a 0</p>"
       d.body.appendChild(mostrar);
       }
       crearComunicacionUsuario();

    boton.addEventListener("click",(e)=>{//para mostrar los discos que se guardan correctamente
        let disco= d.getElementById("disco");
        let grupo=  d.getElementById("grupo");
        let anyo= d.getElementById("anyo");
        let cbox1= d.getElementById("rock");
        let cbox2= d.getElementById("progre");
        let cbox3= d.getElementById("punk");
        let cbox4= d.getElementById("trash");
        let estanteria= d.getElementById("est");
        let radio = document.getElementsByName("prestado");
        
       
//Es muy largo la comprobación que miramos todos los escenarios posibles para que no haya ningún error.
    if(disco.value.trim().length == 0 || grupo.value.trim().length==0 ||anyo.value.trim().length==0 ||  parseInt(anyo.value)<1900 ||  parseInt(anyo.value)>=2022 || estanteria.value.trim().length==0|| parseInt(estanteria.value)<=0 ){
        let mensajeError= d.getElementById("mensajeAlUsuario");
        mensajeError.classList.remove("hidden");
        setTimeout(()=>{
              mensajeError.classList.add("hidden");
        }, 5000)
    }
    else{
        let div= d.createElement("div");
        div.setAttribute("class", "listado");
       let mensajePrestado;
       let mensajeLocalizacion="";
       let generosDelDisco=" los generos que tiene el disco son";
        if(radio[0].checked=== true){
            mensajePrestado="prestado";
        }
        else{
           
            mensajePrestado="disponible";
            mensajeLocalizacion= `y se encuentra en la estantería ${estanteria.value}`;//Así solo muestra la información de la estantería si se encuentra disponible.
        }
        if(cbox1.checked=== true) generosDelDisco+= ` ${cbox1.value}`;
        if(cbox2.checked=== true) generosDelDisco+= ` ${cbox2.value}`;
        if(cbox3.checked=== true) generosDelDisco+= ` ${cbox3.value}`;
        if(cbox4.checked=== true) generosDelDisco+= ` ${cbox4.value}`;;
        if( generosDelDisco===" los generos que tiene el disco son" ){
            generosDelDisco="";//Puesto que no se ha añadido nada.
        }

        div.innerHTML=` <p> El disco: ${disco.value} creado por ${grupo.value} se lanzó en el año ${anyo.value} y se encuentra: ${mensajePrestado}${generosDelDisco} ${mensajeLocalizacion} </p>`;
        d.body.appendChild(div);


    }
    }, false);
}