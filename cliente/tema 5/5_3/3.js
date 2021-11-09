"use strict";

window.onload = () => {
    var d= document;
    let form= d.getElementsByTagName("form")[0];
    let boton= d.getElementById("guardar");
    let divListado= d.createElement("div");
    var contador=0;
    var ListadoDeDiscos=[];
    d.body.appendChild(divListado);
    function crearComunicacionUsuario(){//Este método lo usaremos siempre para comunicarnos con el usuario.
        let mostrar = d.createElement("div");
              mostrar.innerHTML="<p id='mensajeAlUsuario' class='hidden'> Tienes que rellenar todos los campos melón y en los el año de publicación tiene que ser de 1901 a 2021(presente) y en la localización un número mayor o igual a 0</p>"
       d.body.appendChild(mostrar);
       }
       crearComunicacionUsuario();

    boton.addEventListener("click",(e)=>{//Para mostrar los discos que se guardan correctamente
        let disco= d.getElementById("disco").value;
        let grupo=  d.getElementById("grupo").value;
        let anyo= d.getElementById("anyo").value;
        let cbox1= d.getElementById("rock");
        let cbox2= d.getElementById("progre");
        let cbox3= d.getElementById("punk");
        let cbox4= d.getElementById("trash");
        let estanteria= d.getElementById("est");
        let radio = document.getElementsByName("prestado");
        
       
//Es muy largo la comprobación que miramos todos los escenarios posibles para que no haya ningún error.
    if(disco.trim().length == 0 || grupo.trim().length==0 ||anyo.trim().length==0 ||  parseInt(anyo)<1900 ||  parseInt(anyo)>=2022 || estanteria.value.trim().length==0|| parseInt(estanteria.value)<=0 ){
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
            form.reset();//Para resetear el formulario una vez enviado.
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
        

        
        ListadoDeDiscos.push(discoCompleto(disco, grupo, anyo, mensajePrestado, generosDelDisco, mensajeLocalizacion)) ;
            
           
        divListado.innerHTML="";
            for(let i=0; i<ListadoDeDiscos.length; i++){
             
                let p=d.createElement("p");
                p.innerHTML=`El disco: ${ListadoDeDiscos[i].disco} creado por ${ListadoDeDiscos[i].grupo} se lanzó en el año ${ListadoDeDiscos[i].anyo} y se encuentra: ${ListadoDeDiscos[i].mensajePrestado}${ListadoDeDiscos[i].generosDelDisco} ${ListadoDeDiscos[i].mensajeLocalizacion} </p>`;
                divListado.appendChild(p);
                
            }
          
       d.body.appendChild(divListado);
               
    
        
      
    }
    }, false);
}