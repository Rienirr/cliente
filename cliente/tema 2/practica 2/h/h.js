'use strict';
function curso(pNombreCurso,pAnyo,pDescripcion) {
  let nombre=new Array();
  let apellidos=new Array();
    return {nombreCurso: pNombreCurso,
    anyo: pAnyo,
    descripcion: pDescripcion,
   
    alumnado:{nombre,apellidos},
    mostrarCurso: function(){// mostrar específico (sabiendo sus parámetros)
         console.log(`El nombre del curso es: ${this.nombreCurso}, el año de desarrollo es ${this.anyo}, 
        con la descripcion ${this.descripcion} y con los alumnos matriculados: ${this.alumnado}` );
    },
    matricular:function(estudiantes){
    this.alumnado.nombre.push(estudiantes.nombre);
    this.alumnado.apellidos.push(estudiantes.apellidos);
     }
    }
}
  

function mostrarCualquiera (objeto){// mostrar objeto genérico creo que funciona correctamente 
    for(let propiedad in objeto){
       if(Array.isArray(objeto[propiedad])){//comprobar Array primero puesto que es objeto y si comprobamos un objeto antes da problemas  lo único 
                                              // que no se como quieres el formateo por eso lo he dejado así 
    
       console.log(` Array ${propiedad} : ${objeto[propiedad]}`);
      }
  
      else if(typeof objeto[propiedad] === 'object'){//comprobar objeto 
       console.log(`Objeto  ${propiedad}` );
          for(let prop in objeto[propiedad]){
            console.log(`  ${prop} : ${objeto[propiedad][prop]}`);
          
              }
          }
        
       else if(typeof objeto[propiedad] ==='function'){
       //  console.log(`Funcion ${propiedad}`)
      console.log(`Funcion ${propiedad}`);
      
      }
  
      else{
        console.log(`${propiedad} : ${objeto[propiedad]} `);
      } 
    
    
      }
  
  }
  
  const  daw2= curso("2ºDAW",2021,"Desarrollo aplicaciones WEB",["antonio","pepito"]);
  const daw1=curso("1ºDAW",2020,"Desarrollo aplicaciones WEB",["Goku","Vegeta"]);
 //por si quieres comprobar que los añade de forma correcta aquí se ve vacio  console.log(mostrarCualquiera(daw2));
  let estudiante ={ nombre: "Luis", apellidos: "Martinez GiL" };
let tardio={ nombre: "Listo", apellidos: "siempre"};
//así los añade de forma correcta lo único que luego no tenemos una forma de mostrarlos debidamente a cada alumno salen todos los nombres 

daw2.matricular(estudiante);
daw2.matricular(tardio);


console.log(mostrarCualquiera(daw2));