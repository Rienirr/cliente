"use strict";
        let hoy= new Date();
        let diaSemana=hoy.getDay();
        let dia;
        switch(diaSemana){
            case 0:
                dia = "Domingo";
                break;
            case 1:
                dia = "Lunes";
                break;
            case 2:
                dia = "Martes";
                break;
            case 3:
                dia = "Miércoles";
                break;
            case 4:
                dia = "Jueves";
                break;
            case 5:
                dia = "Viernes";
                break;
            case 6:
                dia = "Sádabo";
                break;
        } 
        let nMes= hoy.getMonth();
        let mes;
        switch(nMes){
        case 0:
            mes="Enero";
          break;
        case 1:
            mes="Febero";
          break;
        case 2:
          mes="Marzo";
          break;
        case 3:
          mes="Abril";
          break;
        case 4:
          mes="Mayo";
          break;
        case 5:
          mes="Junio";
          break;
        case 6:
          mes="Julio";
          break;
        case 7:
          mes="Agosto";
          break;
        case 8:
          mes="Septiembre";
          break;
        case 9:
          mes="Octubre";
          break;
        case 10:
          mes="Noviembre";
          break;
        case 11:
          mes="Diciembre";
          break;
        }
        let hoyFormateado=` Hoy es ${dia} día ${hoy.getDate()} de ${mes} del año ${hoy.getFullYear()} y son las ${hoy.getHours()}:${hoy.getMinutes()}`;
        function fechaActual(){
            setTimeout(() => {  
                console.log(hoyFormateado);   
               }, 10000);
        
                }
            fechaActual();
