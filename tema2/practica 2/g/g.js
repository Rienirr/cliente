'use strict';
function alumnado(p_Id,p_Nombre,p_Apellidos1, p_Aficiones,p_Notas) {
    return {Id: p_Id,
    nombre: p_Nombre,
    apellido1: p_Apellidos1,
    
    aficiones: p_Aficiones,
    notas: p_Notas,
    calcularMedia: function(){//
       let media= this.notas.primera+this.notas.segunda+this.notas.tercera;
       console.log(` Las notas de las evaluaciones son las siguientes  primera: ${this.notas.primera} segunda: ${this.notas.segunda}  y tercera ${this.notas.tercera} dando la media de: ${media/3}`);
      
       },
    imprimirAficiones: function(){
        console.log(` Aficiones : ${this.aficiones}`);
    },
    imprimirInformeCompleto: function(){
           
    console.log(`El nombre del alumno/a es : ${p_Nombre} ${p_Apellidos1} `);
       console.log (`${this.calcularMedia()}`);

       console.log (`${this.imprimirAficiones()}`);
        }
    
    }
}

    
    
    

    let Antonio=(alumnado(98,"Antonio","Bonmati",["leer","hablar","jugar"],{primera: 8,segunda: 7, tercera : 9}));
   // console.log(Antonio.calcularMedia());
    //console.log(Antonio.imprimirAficiones());
    console.log(Antonio.imprimirInformeCompleto());
