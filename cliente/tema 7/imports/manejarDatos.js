"use strict";

  /*  // Origen de la petición.
  const url = "https://swapi.dev/api/planets";
  // Se crea el objeto.
  var httpRequest = new XMLHttpRequest();
  // Se abre la conexión.
  httpRequest.open("GET", url, true);
  // Se establecen laa cabeceras (dentifican el tipo de datos).
  httpRequest.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  httpRequest.addEventListener(
    "readystatechange",
    () => {
      // Si está recibiendo datos.
      if (httpRequest.readyState == 3) {
        console.log("Cargando…");
      }
      // Si la comunicación ha sido correcta.
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        console.log(JSON.parse(httpRequest.response)); // Respuesta por la consola.
        //return JSON.parse(httpRequest.response); // --> ¿?
      }
    },
    true
  );
  httpRequest.send(); // Se envía la acción y la información (opcional) al servidor
  // const respuesta = httpRequest.send();
  // console.log(respuesta); // --> ¿?
 */
  // Ejemplo de tratamiento de datos
  function mostrar(objeto) {
    let cadena = "";
    objeto.results.map((v, i, a) => {
      cadena += `El planeta ${v.name} tiene un periodo orbital de ${v.orbital_period} días terrestres.<br>`;
    });
    document.getElementById("feo").innerHTML = cadena;
  }; // fin del archivo