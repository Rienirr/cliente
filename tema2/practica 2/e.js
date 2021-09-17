'use strict';

function curso(pNombreCurso,pAnyo,pDescripcion, pAlumnado) {
    return {nombreCurso: pNombreCurso,
    anyo: pAnyo,
    descripcion: pDescripcion,
    alumnado: pAlumnado,
    mostrarCurso: function(){// mostrar específico (sabiendo sus parámetros)
        return console.log(`El nombre del curso es: ${this.nombreCurso}, el año de desarrollo es ${this.anyo}, 
        con la descripcion ${this.descripcion} y con los alumnos matriculados: ${this.alumnado}` );
    }
    
    }
  }
   function mostrarCualquiera (objeto){// mostrar objeto genérico
    for(let propiedad in objeto){
       return console.log(`${propiedad} : ${objeto[propiedad]} `);
    }
  
}
  const  daw2= curso("2ºDAW",2021,"Desarrollo aplicaciones WEB",["antonio","pepito"]);
  const daw1=curso("1ºDAW",2020,"Desarrollo aplicaciones WEB",["Goku","Vegeta"]);

  
  console.log(daw2.mostrarCurso());
  console.log(daw1.mostrarCurso());
  console.log(mostrarCualquiera(daw2));