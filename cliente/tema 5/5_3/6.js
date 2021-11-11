"use strict";  
window.onload = () => {
    var generosDelDisco=" los generos que tiene el disco son";
    var d= document;
    var form= d.getElementsByTagName("form")[0];
    var boton= d.getElementById("guardar");
    let divListado= d.createElement("div");
    var ListadoDeDiscos=[];
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
   
    function crearComunicacionUsuario(){//Este método lo usaremos siempre para comunicarnos con el usuario.
        let mostrar = d.createElement("div");
              mostrar.innerHTML="<p id='mensajeAlUsuario' class='hidden'> Tienes que rellenar todos los campos debidamente melón. Consejo mira los apartados en ROJO!!! </p>"
       d.body.appendChild(mostrar);
       }
       crearComunicacionUsuario();

    boton.addEventListener("click",(e)=>{//Para mostrar los discos que se guardan correctamente.
        //Se ponen las clases de los elementos a vacía para que cada vez se muestre únicamente los errores.
        var correcto=true;
        var disco= d.getElementById("disco").value;
       var elementoDisco=d.getElementById("disco");//Creamos estos elementos ya que en esta ocasión necesitamos el contenedor para mostar el error.
         elementoDisco.className="";
        var grupo=  d.getElementById("grupo").value;
        var elementoGrupo= d.getElementById("grupo");//Creamos estos elementos ya que en esta ocasión necesitamos el contenedor para mostar el error.
        elementoGrupo.className="";
        var anyo= d.getElementById("anyo").value;
        var elementoAnyo=d.getElementById("anyo");

        elementoAnyo.className="";
        d.getElementsByTagName("fieldset")[1].className="";
        var cbox1= d.getElementById("rock");
        var cbox2= d.getElementById("progre");
        var cbox3= d.getElementById("punk");
        var cbox4= d.getElementById("trash");
        var estanteria= d.getElementById("est");
      
        estanteria.className="";
        var radio = document.getElementsByName("prestado");
        
       
        let patronDiscoyGrupo = /^[a-zA-Z]{4,}[\s+[a-zA-Z]{1,}]*/;
        let patronAnyo=/^[0-9]{4}$/;
        let patronEstanteria=/^[E]{1}[S]{1}[-]{1}[0-9]{3}[A-Z]{2}$/;//si queremos ponerlo que de igual mayúsculas ponemos i al final para que sea insensitive
        let estanteriaComprobacion= patronEstanteria.test(estanteria.value);
        let discoComprobacion= patronDiscoyGrupo.test(disco);
        let grupoComprobacion=patronDiscoyGrupo.test(grupo);
        let anyoComprobaccion=patronAnyo.test(anyo);
        
    if(!discoComprobacion ){//Comprobación de disco sale mal ponemos la error en el resto hacemos lo mismo.
     
        elementoDisco.setAttribute("class","error");
        correcto=false;
    }
    if(!grupoComprobacion ){//Comprobación de grupo.
       
        elementoGrupo.setAttribute("class","error");
        correcto=false;
    }
   
    if(!anyoComprobaccion || parseInt(anyo)<1900  || parseInt(anyo)>=2022){//Comprobamos además que el año sea desde el 1900 hasta el presente
      
        elementoAnyo.setAttribute("class","error");
        correcto=false;
    }
    if(!estanteriaComprobacion){
     estanteria.setAttribute("class","error");
        correcto=false;
    }
    if(cbox1.checked=== true) generosDelDisco+= ` ${cbox1.value}`;
    if(cbox2.checked=== true) generosDelDisco+= ` ${cbox2.value}`;
    if(cbox3.checked=== true) generosDelDisco+= ` ${cbox3.value}`;
    if(cbox4.checked=== true) generosDelDisco+= ` ${cbox4.value}`;
    if( generosDelDisco===" los generos que tiene el disco son" ){
        generosDelDisco="";
        d.getElementsByTagName("fieldset")[1].setAttribute("class","error");
        correcto= false;//Puesto que no se ha añadido nada.

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
        ListadoDeDiscos.push(discoCompleto(disco, grupo, anyo, mensajePrestado, generosDelDisco, mensajeLocalizacion)) ;
            
           
        divListado.innerHTML="";
            for(let i=0; i<ListadoDeDiscos.length; i++){     
                let p=d.createElement("p");
                p.innerHTML=`El disco: ${ListadoDeDiscos[i].disco} creado por ${ListadoDeDiscos[i].grupo} se lanzó en el año ${ListadoDeDiscos[i].anyo} y se encuentra: ${ListadoDeDiscos[i].mensajePrestado}${ListadoDeDiscos[i].generosDelDisco} ${ListadoDeDiscos[i].mensajeLocalizacion} </p>`;
                divListado.appendChild(p);
                
            } 
       d.body.appendChild(divListado);
        
        }
        else{
            let mensajeError= d.getElementById("mensajeAlUsuario");
            mensajeError.classList.remove("hidden");
            setTimeout(()=>{
                  mensajeError.classList.add("hidden");
            }, 5000)
        }
    
    }, false);
}