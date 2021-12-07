"use strict";


  export const getTiempo = (ciudad) => {//Con esto obtenemos el tiempo de una api 
 
  return new Promise((resolver, rechazar) => {
    const API ="79c68d0e95b5caad6bc7869bb373bc56";
    const URL= `https://api.openweathermap.org/data/2.5/weather?id=${ciudad}&appid=${API}`;
   
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", URL, true);
    httpRequest.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
      );
    httpRequest.addEventListener(
      "readystatechange",
      () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//Una vez acabada la consulta mostramos las películas.
           resolver(JSON.parse(httpRequest.response));
        }

      },
      true
    );
    httpRequest.send(); 
});
}
export function tiempoEnCelsius(tiempo){//Ya que nos da el tiempo en kelvin.
   var celsius= tiempo-273.15;
   return Math.round(celsius);
}
export function getIconoTiempo(id){
 return `http://openweathermap.org/img/wn/${id}@2x.png`;
}

export const getTiempoProximosDias = (ciudad) => {//Con esto obtenemos el tiempo de una api 
 
  return new Promise((resolver, rechazar) => {
    const API ="79c68d0e95b5caad6bc7869bb373bc56";
    const URL= `https://api.openweathermap.org/data/2.5/weather?id=${ciudad}&appid=${API}`;
   
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", URL, true);
    httpRequest.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
      );
    httpRequest.addEventListener(
      "readystatechange",
      () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//Una vez acabada la consulta mostramos las películas.
           resolver(JSON.parse(httpRequest.response));
        }

      },
      true
    );
    httpRequest.send(); 
});
}

