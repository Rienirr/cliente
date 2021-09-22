'use strict';

function curso(pNombreCurso,pAnyo,pDescripcion, pAlumnado) {
    return {nombreCurso: pNombreCurso,
    anyo: pAnyo,
    descripcion: pDescripcion,
    alumnado: [pAlumnado],
    modulos: {
      DWC: "7 horas", DWS: "8 horas" //es algo que 
    },
    mostrarCurso: function(){// mostrar específico (sabiendo sus parámetros)
        return console.log(`El nombre del curso es: ${this.nombreCurso}, el año de desarrollo es ${this.anyo}, 
        con la descripcion ${this.descripcion} y con los alumnos matriculados: ${this.alumnado}` );
    }
    
    }
  }
   function mostrarCualquiera (objeto){// mostrar objeto genérico
    for(const propiedad in objeto){
      console.log(Array.isArray(propiedad));
     if(Array.isArray(propiedad)){
        for(let i=0; i<propiedad.legnth;i++){
         // console.log(`poscion ${i} valor ${propiedad[i]}`);
         console.log("falso");
        }
      }
      else if(typeof propiedad === 'object'){
        for(const subpropiedad in propiedad){
          console.log(` ${subpropiedad}: ${propiedad[subpropiedad]} `);
        }
      }
      else{
      console.log(` ${propiedad}: ${objeto[propiedad]} `);}
      }
}
  let  daw2= curso("2ºDAW",2021,"Desarrollo aplicaciones WEB",[ "antonio", "pepito","finito"]);
  let daw1=curso("1ºDAW",2020,"Desarrollo aplicaciones WEB",["Goku","Vegeta" ,"Picolo"]);

 
  //console.log(daw2.mostrarCurso());
  //console.log(daw1.mostrarCurso()); diferentes pruebas
  console.log(mostrarCualquiera(daw2));
   console.log(mostrarCualquiera(daw1));
  console.log(Array.isArray(daw2.alumnado));