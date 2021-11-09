"use strict";


    
window.onload = () => {
    var generosDelDisco=" los generos que tiene el disco son";
    var d= document;
    var correcto=true;
    var form= d.getElementsByTagName("form")[0];
    var boton= d.getElementById("guardar");
    let contador=0;
    function crearComunicacionUsuario(){//Este método lo usaremos siempre para comunicarnos con el usuario.
        let mostrar = d.createElement("div");
              mostrar.innerHTML="<p id='mensajeAlUsuario' class='hidden'> Tienes que rellenar todos los campos debidamente melón </p>"
       d.body.appendChild(mostrar);
       }
       crearComunicacionUsuario();

    boton.addEventListener("click",(e)=>{//Para mostrar los discos que se guardan correctamente.
        //Se ponen las clases de los elementos a vacía para que cada vez se muestre únicamente los errores.
        var disco= d.getElementById("disco");
        disco.className="";
        var grupo=  d.getElementById("grupo");
        grupo.className="";
        var anyo= d.getElementById("anyo");
        grupo.className="";
        var cbox1= d.getElementById("rock");
        var cbox2= d.getElementById("progre");
        var cbox3= d.getElementById("punk");
        var cbox4= d.getElementById("trash");
        var estanteria= d.getElementById("est");
        estanteria.className="";
        var radio = document.getElementsByName("prestado");
        
       
//Es muy largo la comprobación que miramos todos los escenarios posibles para que no haya ningún error.
    /* parseInt(anyo.value)<1900 ||  parseInt(anyo.value)>=2022 || estanteria.value.trim().length==0|| parseInt(estanteria.value)<=0 ){
       
    }*/
    if(disco.value.trim().length <= 4){//Comprobación de disco.
       let patron= /^[a-zA-Z]{4,16}$/;
        disco.setAttribute("class","error");
        correcto=false;
    }
    if(grupo.value.trim().length <= 4){//Comprobación de grupo.
        let patron= /^[a-zA-Z]{4,16}$/;
        grupo.setAttribute("class","error");
        correcto=false;
    }//Comprobaciones de 
    if(cbox1.checked=== true) generosDelDisco+= ` ${cbox1.value}`;
    if(cbox2.checked=== true) generosDelDisco+= ` ${cbox2.value}`;
    if(cbox3.checked=== true) generosDelDisco+= ` ${cbox3.value}`;
    if(cbox4.checked=== true) generosDelDisco+= ` ${cbox4.value}`;;
    if( generosDelDisco===" los generos que tiene el disco son" ){
        generosDelDisco="";
        correcto= false;//Puesto que no se ha añadido nada.

    }
    if(anyo.value.trim().length < 4){
        let patron= /^[0-9]{4}$/;
        anyo.setAttribute("class","error");
        correcto=false;
    }
    if(estanteria.value.trim().length  <4){
        //comparar bien con expresiones regulares
        let patron= /^[0-9]{4}$/;
        estanteria.setAttribute("class","error");
        correcto=false;
    }
    if(correcto){
        let div= d.createElement("div");
        div.setAttribute("class", "listado");
       let mensajePrestado;
       let mensajeLocalizacion="";
       
        if(radio[0].checked=== true){
            mensajePrestado="prestado";
        }
        else{
           
            mensajePrestado="disponible";
            mensajeLocalizacion= `y se encuentra en la estantería ${estanteria.value}`;//Así solo muestra la información de la estantería si se encuentra disponible.
        }
       
            form.reset();//Para resetear el formulario una vez enviado.
        }
        else{
            let mensajeError= d.getElementById("mensajeAlUsuario");
            mensajeError.classList.remove("hidden");
            setTimeout(()=>{
                  mensajeError.classList.add("hidden");
            }, 5000)
        }
        function discoCompleto(pDisco, pGrupo, pAnyo, pMensajePrestado, pGenerosDelDisco, pMensajeLocalizacion){
           
             return {
            disco: pDisco,
            grupo: pGrupo,
            anyo: pAnyo,
            mensajePrestado: pMensajePrestado,
            generosDelDisco: pGenerosDelDisco,
            mensajeLocalizacion: pMensajeLocalizacion
           } 
        }
        

        var ListadoDeDiscos= {
            
            
            /*Meter método de añadir objetos dentro de otros*/
           
        };
        


        /*let disco1= discoCompleto(disco.value, grupo.value, anyo.value, mensajePrestado, generosDelDisco, mensajeLocalizacion);
        ListadoDeDiscos*/
        
        //div.innerHTML=` <p> El disco: ${disco.value} creado por ${grupo.value} se lanzó en el año ${anyo.value} y se encuentra: ${mensajePrestado}${generosDelDisco} ${mensajeLocalizacion} </p>`;
        //d.body.appendChild(div);
    
      
    
    }, false);
}