/*Esta biblioteca se encarga de mover los datos sin que haya problema ,es decir, que el gestor de tarea funcione correctamente.
Así podríamos exportar el gestor de tareas a proyectos más grandes con muy pocos cambios. Al no poder hacer exports aquí no la mayoría de funciones  */

/*El código tiene muchas mejoras sobre todo el no usar innerHTML más a menudo.
Sin embargo, al no tener tiempo de hacerlo  puesto que  habría que cambiar todas las funciones he añadido otras mejoras
 ejemplo: la comunicación con el usuario cuando hace algo mal ahora sale un párrafo que está escondido  */ 
"use strict";

var d=document;
var contadorTareasPendientes=0;
var contadorTareasCompletadas=0;
export function limpiarPendientesYAcabadas(){// Eliminos las tareas que nos dan de ejemplo.
   let pendientes= d.getElementsByClassName("tarea");
   d.getElementById("pendientes").removeChild(pendientes[1]);
   d.getElementById("pendientes").removeChild(pendientes[0]);
   let acabadas=d.getElementsByClassName("acabada");
   d.getElementById("acabadas").removeChild(acabadas[0]);
}
export function botones(){//Para poner funcionalidad al inicio. 
   let anyadir= d.getElementById("add");
   let mostrar= d.getElementById("sho")
   anyadir.addEventListener("click",function(){
    asignarTarea();
   },false);
   mostrar.addEventListener("click",function(){
    mostrarArchivados();
   },false);
}
export function inicio(){//Añadimos las funciones que se ejecutan al iniciar el programa.
   limpiarPendientesYAcabadas();
   botones();
 
}
export function mostrarUsuario(contenedor,textoAMostrar,tiempo){//Así podemos elegir Lo que mostramos tanto el lugar, el texto y el tiempo que lo hacemos.
   contenedor.innerHTML= `${textoAMostrar}`;
   contenedor.classList.remove("hidden");
  setTimeout(()=>{
   contenedor.classList.add("hidden");
  },tiempo); 
  }
export function mostrarArchivados(){//Muestra todas las tareas archivadas quitando su clase para que se vuelvan a mostrar.
   
       let archivados= d.getElementsByClassName("archivado");
       
       for(let i=archivados.length-1;i>=0;i--){
           archivados[i].classList.replace("archivado", "acabada");
       }
       
       }

export function recogerTarea(textarea="textarea",pos=0) {//Esta función recoge el texto del gestor de tareas.
   let prueba= d.getElementsByTagName(textarea)[pos].value;
   if(prueba.trim().length !== 0 ){
        return prueba;

   }
   else{
       prueba="";
       return prueba;
   }
         
   }  
   export function limpiarTarea(textarea="textarea",pos = 0) {//Pone el texto del gestor en blanco para añadir más. 
      d.getElementsByTagName(textarea)[pos].value="";
   }
   
   export function archivar(elemento){//Archiva el elemento de las tareas completadas.
      let tareaCambiada= d.getElementById(elemento);
      tareaCambiada.setAttribute("class", "archivado");
  
  }
export function asignarTarea(asig="pendientes"){//Asigna la tarea a pendientes Para ello recogemos la tarea, la añadimos y la limpiamos dejando el textarea sin texto.
    if(recogerTarea() !=""){ 
      let divtareas= d.getElementById(asig);
      let div= d.createElement("div");
      div.setAttribute("draggable","true");
     let p= d.createElement("p")
     let botones= d.createElement("p");
     div.setAttribute("class","tarea");
     let id= `tarea${contadorTareasPendientes}`;
     div.setAttribute("id", id);
     p.innerText= recogerTarea();
     botones.setAttribute("class", "botones");
     
     let  botonBorrar= d.createElement("input");
     botonBorrar.setAttribute("type", "button");
     botonBorrar.setAttribute("value","borrar");
       
let botonAcabar=d.createElement("input");
  botonAcabar.setAttribute("type", "button");
  botonAcabar.setAttribute("value","Acabar");
  botonAcabar.setAttribute("class","end");
  botonBorrar.addEventListener("click", function(){
      borrar(id);
     },false);
     botonAcabar.addEventListener("click", function(){
      asignarCompleta(id);
     },false);
  botones.appendChild(botonBorrar);
  botones.appendChild(botonAcabar);
     div.appendChild(p);
     div.appendChild(botones);
     limpiarTarea();
     divtareas.appendChild(div);
     contadorTareasPendientes++;
    
    }
    else{//Esta en blacno y le mostramos el texto al usuari
      var mensajeAlUsuario=d.getElementById("mensajeAlUsuario");
        mostrarUsuario(mensajeAlUsuario, "Introduce algo zángano una tarea no puede estar en blanco!",5000);
    }
  }

  export function asignarCompleta(elemento,pendientes="pendientes", acabadas="acabadas"){
    //Asigna la tarea a completa Para ello recogemos la tarea de pendientes la añadimos a completadas y la eliminamos de pendientes lo hemos cambiado para que funcione con eventos.
    let divTareas= d.getElementById(pendientes);
    let divCompletadas= d.getElementById(acabadas);
    let div= d.createElement("div");
    div.setAttribute("draggable","true");
    let tareaCambiada= d.getElementById(elemento);
    let p= d.createElement("p")
    let botones= d.createElement("p");
    div.setAttribute("class","acabada");
    let idacabadas= `acabada${contadorTareasCompletadas}`;
    div.setAttribute("id", idacabadas);
    p.innerText= tareaCambiada.innerText.trim();
    botones.setAttribute("class", "botones");
    let  botonVolver= d.createElement("input");
    botonVolver.setAttribute("type", "button");
    botonVolver.setAttribute("value","volver");
    botonVolver.setAttribute("class","del");
 let botonArchivar=d.createElement("input");
 botonArchivar.setAttribute("type", "button");
 botonArchivar.setAttribute("value","archivar");
 botonArchivar.setAttribute("class","end");

 botonVolver.addEventListener("click", function(){
    volver(idacabadas);
    },false);
    botonArchivar.addEventListener("click", function(){
    archivar(idacabadas);
    },false);

 botones.appendChild(botonVolver);
 botones.appendChild(botonArchivar);  
    div.appendChild(p);
    div.appendChild(botones);
      divTareas.removeChild(tareaCambiada);
      divCompletadas.appendChild(div);
 contadorTareasCompletadas++;//Hay sumar y restar para saber en que posición esta el que queramos borrar.
    
}
export function borrar(elemento, id="pendientes"){//Borra la tarea pendiente.
    let divTareas= d.getElementById(id);
    divTareas.removeChild(d.getElementById(elemento));
    
} 

export  function volver(elemento,pendientes="pendientes",acabadas="acabadas"){// Devuelve una tarea completada a la lista de pendientes  para ello la copiamos la añadimos de vuelta a tareas y la borramos. 
    let divtareas= d.getElementById(pendientes);
    let divCompletadas= d.getElementById(acabadas);
    let div= d.createElement("div");
    div.setAttribute("draggable","true");//Añadimos el atributo draggable para la nueva funcionalidad.
   let p= d.createElement("p")
   let botones= d.createElement("p");
   div.setAttribute("class","tarea");
   let id= `tarea${contadorTareasPendientes}`;
   div.setAttribute("id",id);
   let tareaCambiada= d.getElementById(elemento);
   p.innerText= tareaCambiada.innerText.trim();
   botones.setAttribute("class", "botones"); 
   let  botonBorrar= d.createElement("input");
   botonBorrar.setAttribute("type", "button");
   botonBorrar.setAttribute("value","borrar");
   botonBorrar.setAttribute("class","del");
let botonAcabar=d.createElement("input");
botonAcabar.setAttribute("type", "button");
botonAcabar.setAttribute("value","Acabar");
botonAcabar.setAttribute("class","end");
botonBorrar.addEventListener("click", function(){
    borrar(id);
   },false);
   botonAcabar.addEventListener("click", function(){
    asignarCompleta(id);
   },false);

botones.appendChild(botonBorrar);
botones.appendChild(botonAcabar);

   div.appendChild(p);
   div.appendChild(botones);
   
   divCompletadas.removeChild(tareaCambiada);
   divtareas.appendChild(div);
   contadorTareasPendientes++;
  

}

export function reemplazar(elemento,pendientes="pendientes"){
 
    let divtareas= d.getElementById(pendientes);

    let div= d.createElement("div");
    div.setAttribute("draggable","true");
   let p= d.createElement("p")
   let botones= d.createElement("p");
   div.setAttribute("class","tarea");
   let id= `tarea${contadorTareasPendientes}`;
   div.setAttribute("id", id);
   let tareaCambiada= d.getElementById(elemento);
   p.innerText= tareaCambiada.innerText.trim();
   botones.setAttribute("class", "botones");
   borrar(elemento);
   let  botonBorrar= d.createElement("input");
   botonBorrar.setAttribute("type", "button");
   botonBorrar.setAttribute("value","borrar");
   botonBorrar.setAttribute("class","del");
  
   let botonAcabar=d.createElement("input");
botonAcabar.setAttribute("type", "button");
botonAcabar.setAttribute("value","Acabar");
botonAcabar.setAttribute("class","end");
botonBorrar.addEventListener("click", function(){
    borrar(id);
   },false);
   botonAcabar.addEventListener("click", function(){
    asignarCompleta(id);
   },false);
botones.appendChild(botonBorrar);
botones.appendChild(botonAcabar);

   div.appendChild(p);
   div.appendChild(botones);
   divtareas.appendChild(div);
   contadorTareasPendientes++;
}
export function despues(elemento, elementoSoltado){//Pone el elemento  después que el que le pasamos. 
    let antes= d.getElementById(elementoSoltado);
    let div= d.createElement("div");
    div.setAttribute("draggable","true");
   let p= d.createElement("p")
   let botones= d.createElement("p");
   div.setAttribute("class","tarea");
   let id= `tarea${contadorTareasPendientes}`;
   div.setAttribute("id", id);
   let tareaCambiada= d.getElementById(elemento);
   p.innerText= tareaCambiada.innerText.trim();
   botones.setAttribute("class", "botones");
   borrar(elemento);
   let  botonBorrar= d.createElement("input");
   botonBorrar.setAttribute("type", "button");
   botonBorrar.setAttribute("value","borrar");
   botonBorrar.setAttribute("class","del");
  
let botonAcabar=d.createElement("input");
botonAcabar.setAttribute("type", "button");
botonAcabar.setAttribute("value","Acabar");
botonAcabar.setAttribute("class","end");
botonBorrar.addEventListener("click", function(){
    borrar(id);
   },false);
   botonAcabar.addEventListener("click", function(){
    asignarCompleta(id);
   },false);

botones.appendChild(botonBorrar);
botones.appendChild(botonAcabar);

   div.appendChild(p);
   div.appendChild(botones);
 
   antes.insertAdjacentElement("afterend",div);
   contadorTareasPendientes++;
}
export function antes(elemento, elementoSoltado){//Pone un elemento antes que otro. 
  
       let antes= d.getElementById(elementoSoltado);
   
       let div= d.createElement("div");
       div.setAttribute("draggable","true");
      let p= d.createElement("p")
      let botones= d.createElement("p");
      div.setAttribute("class","tarea");
      let id= `tarea${contadorTareasPendientes}`;
      div.setAttribute("id", id);
      let tareaCambiada= d.getElementById(elemento);
      p.innerText= tareaCambiada.innerText.trim();
      botones.setAttribute("class", "botones");
      borrar(elemento);
      let  botonBorrar= d.createElement("input");
      botonBorrar.setAttribute("type", "button");
      botonBorrar.setAttribute("value","borrar");pendientes
      botonBorrar.setAttribute("class","del");
     
   let botonAcabar=d.createElement("input");
   botonAcabar.setAttribute("type", "button");
   botonAcabar.setAttribute("value","Acabar");
   botonAcabar.setAttribute("class","end");
   botonBorrar.addEventListener("click", function(){
       borrar(id);
      },false);
      botonAcabar.addEventListener("click", function(){
       asignarCompleta(id);
      },false);
   
   botones.appendChild(botonBorrar);
   botones.appendChild(botonAcabar);
   
      div.appendChild(p);
      div.appendChild(botones);
    //Lo siguiente es para reemplazrlo necesitamos su posición(y) que equivale a la altura y para eso nos valemos de las propiedades de los métodos.
      antes.insertAdjacentElement("beforebegin",div);
      contadorTareasPendientes++;
   
   
   }
   


//para saber la posción del ratón al arrastrar los elementos en tareas pendientes y decidir si hacer un insert before o after


/*He conseguido los efectos funcionen de la forma deseada era debido a que en el drop controlo el lugar que sueltan.
Al añadir un drop global al documento y eliminar esa clase funciona adecuadamente en todos los lugares.
*/