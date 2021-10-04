'use strict';
function cliente(cli) {
  let partes = cli.split(":");
  let servidorasociado = partes[3].split("@");
  return {
    nombre: partes[0],
    apellidos: partes[1],
    telefono: partes[2],
    email: partes[3],
    codigoPostal: partes[4],
    mostrar: function () {
      console.log(
        `El nombre del cliente es: ${this.nombre} ${this.apellidos}, su teléfono es ${this.telefono} ,su email ${this.email} siendo el servidor asociado ${servidorasociado[1]} y el CP de su ciudad ${this.codigoPostal}`
      );
    },
  };
}



let cliente1 = cliente("Antonio:BONMATI:6855555:antoniobonmati@iespacomolla.es:0336");

cliente1.mostrar();
