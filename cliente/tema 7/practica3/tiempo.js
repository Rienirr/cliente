"use strcit";
import {getCiudad} from "./imports/ciudad.js"
import { getTiempo,tiempoEnCelsius,getIconoTiempo } from "./imports/openWeather.js";
/*En nuestro proyecto queremos usar una API del tiempo ya que la venta de nuestros productos 
dependen en buena parte del tiempo así que nos gustaría de ofrecer este servicio */ 
window.onload= ()=>
{
        
    var d= document;
    let mmostrarCiudades= d.getElementById("ciudades");

getCiudad().then((ciudades)=>{//Nos da las ciudades que queremos 
    mmostrarCiudades.innerHTML+= "<h2>Elige una ciudad y te daremos el tiempo actual que hay en ella</h2>";
    ciudades.forEach(ciudad => {
       let p= d.createElement("p");
        p.innerHTML=` ${ciudad.name}`;
        p.setAttribute("id", ciudad.id);
        p.setAttribute("class","ciudad");
        p.addEventListener("click", (event)=>{//Cada ciudad añadimos un evento para mostrar su tiempo hoy.
                getTiempo(event.target.id).then((ciudadElegida)=>{
                           
                  let    divTiempo=  d.getElementById("tiempo");
                  divTiempo.innerHTML=`<h3> El tiempo en la ciudad ${ciudadElegida.name} hoy </h3>`;
                  divTiempo.innerHTML+=`<img src="${getIconoTiempo(ciudadElegida.weather[0].icon)}" alt="Error al cargar imagen" />`;
                  divTiempo.innerHTML+=`<p class="tiempo">La temperatura actual hoy es <em>${tiempoEnCelsius(ciudadElegida.main.temp)}ºC </em> y la sensación térmica es <em>${tiempoEnCelsius(ciudadElegida.main.feels_like)}ºC </em> </p>`;
                divTiempo.innerHTML+=`<p class="tiempo">La temperatura máxima hoy será <em>${tiempoEnCelsius(ciudadElegida.main.temp_max)}ºC</em> y la mínima será <em>${tiempoEnCelsius(ciudadElegida.main.temp_min)}ºC </em> </p>`;
                divTiempo.classList.remove("hidden");
                },false);
        });
        mmostrarCiudades.insertAdjacentElement("beforeend",p);
     }); 
}
);

}
  