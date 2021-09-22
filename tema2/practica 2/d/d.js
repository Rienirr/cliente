'use strict';
function curso(pNombreCurso,pAnyo,pDescripcion, pAlumnado) {
    return {nombreCurso: pNombreCurso,
    anyo: pAnyo,
    descripcion: pDescripcion,
    alumnado: pAlumnado,
    }
  }
  var daw= curso("2ºDAW",2021,"Desarrollo aplicaciones WEB",["antonio","pepito"]);
  console.log(daw);//no he creado función para mostrar puesto que está en el siguiente 