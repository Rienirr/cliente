"use strict";


    
window.onload = () => {
    var generosDelDisco=" los generos que tiene el disco son";
    var d= document;
   
    var form= d.getElementsByTagName("form")[0];
    var boton= d.getElementById("guardar");
    let contador=0;
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
              mostrar.innerHTML="<p id='mensajeAlUsuario' class='hidden'> Tienes que rellenar todos los campos debidamente melón </p>"
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
    if(disco.trim().length <= 4){//Comprobación de disco.
       let patron= /^[a-zA-Z]{4,16}$/;
        elementoDisco.setAttribute("class","error");
        correcto=false;
    }
    if(grupo.trim().length <= 4){//Comprobación de grupo.
        let patron= /^[a-zA-Z]{4,16}$/;
        elementoGrupo.setAttribute("class","error");
        correcto=false;
    }//Comprobaciones de 
   
    if(anyo.trim().length < 4){
        let patron= /^[0-9]{4}$/;
        elementoAnyo.setAttribute("class","error");
        correcto=false;
    }
    if(estanteria.value.trim().length  <4){
        //comparar bien con expresiones regulares
        let patron= /^[0-9]{4}$/;
        estanteria.setAttribute("class","error");
        correcto=false;
    }
    if(cbox1.checked=== true) generosDelDisco+= ` ${cbox1.value}`;
    if(cbox2.checked=== true) generosDelDisco+= ` ${cbox2.value}`;
    if(cbox3.checked=== true) generosDelDisco+= ` ${cbox3.value}`;
    if(cbox4.checked=== true) generosDelDisco+= ` ${cbox4.value}`;;
    if( generosDelDisco===" los generos que tiene el disco son" ){
        generosDelDisco="";
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