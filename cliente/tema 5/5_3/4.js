"use strict";

window.onload = () => {
    let d= document;
    
    let boton= d.getElementsByTagName("input")[2];
    let form= d.getElementsByTagName("form")[0];
   
    function crearComunicacionUsuario(){//este método lo usaremos siempre para comunicarnos con el usuario.
        let mostrar = d.createElement("div");
              mostrar.innerHTML="<p id='mensajeAlUsuario' class='hidden'> </p>"
       d.body.appendChild(mostrar);
       }
       crearComunicacionUsuario();

       function compare(texto1, texto2) {//Para crear un array de letras y además comparalos así sabemos si tienen las mismas letras y nos da igual el orden.
      let  a= texto1.split("").sort();
        let b= texto2.split("").sort();
        let mensajeError= d.getElementById("mensajeAlUsuario");
        for (let i=0; i<a.length; i++) {
          if(a.length===b.length) { 
            if (a[i]===b[i]){//Según lo que ocurra mostramos un mensaje 
             mensajeError.innerText="Los dos textos son anagramas! ";
            }
            else {
                mensajeError.innerText="Los dos textos NO!! son anagramas ";
                break;
            }
          }
          else {
            mensajeError.innerText="Los dos textos no tienen el mismo tamaño ";
            break;
          }
          
        }
      }
      boton.addEventListener("click", (event)=>{

        let texto1= d.getElementsByTagName("input")[0].value;
        let texto2= d.getElementsByTagName("input")[1].value;
        compare(texto1,texto2);
        var mensajeError= d.getElementById("mensajeAlUsuario");
        mensajeError.classList.remove("hidden");
        setTimeout(()=>{
              mensajeError.classList.add("hidden");
        }, 3000);//Mostramos el mensaje durante 3 segundos para que luego se pueda volver a comparar más.
    
        form.reset();
      },false)


    

       
}