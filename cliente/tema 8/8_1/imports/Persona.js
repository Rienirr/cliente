"use strict";
export class Persona {//Creamos la clave persona con los datos que necesitamos con sus getter y setters;
    constructor( Nombre,Apellidos, Direccion , Telefono){//Creamos un curso si lo que nos pasan son arrays.
   this.nombre= Nombre;
   this.apellidos= Apellidos;
   this.direccion= Direccion; 
   this.telf= Telefono;
}
	
    getNombre=()=>{
        return this.nombre;
    }
    setNombre=(Nombre)=>{
        this.nombre= Nombre;
    }

    getApellidos=()=>{
        return this.apellidos;
    }
    setApellidos=(Apellidos)=>{
        this.apellidos= Apellidos;
    }

    getDireccion=()=>{
        return this.direccion;
    }
    setDireccion=(Direccion)=>{
        this.direccion= Direccion;
    }

    getTelefono=()=>{
        return this.telf;
    }
    setNombre=(Telefono)=>{
        this.telf= Telefono;
    }
    equals=(Nombre, Apellidos)=>{//Si el nombre y el apellido coincide son iguales.
        if(this.getNombre()=== Nombre&& this.getApellidos()===Apellidos) return true;
        else return false;
    }

    mostrar = () => {
        return ` Nombre: ${this.getNombre()} , Apellidos: ${this.getApellidos()}, Dirección ${this.getDireccion()} y Teléfono ${this.getTelefono()}`;
    }
  

}