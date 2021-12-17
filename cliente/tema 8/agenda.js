"use strict";

import { Agenda } from "./imports/Agenda.js";
import {  Persona } from "./imports/Persona.js";

window.onload = ()=>{

   let per = new Persona("toni","bonmati","calle valle Inclán", 685515440);
   let per1 = new Persona("as","2cas","calle valle Inclán", 685515440);
    console.log(per.mostrar());
    let agenda= new Agenda(per);
    let agendaMal = new Agenda(arra);
    console.log(agenda);
    console.log(agendaMal);


}