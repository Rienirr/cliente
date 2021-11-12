"use strict";

window.onload = ()=>{
var d=document;
d.body.setAttribute
var arrayAleatori=[];
var img=["img/astrology.jpg","img/snes.png", "img/drink.jpg", "img/beach.jpg","img/cliff.jpg","img/windmills.jpg","img/astrology.jpg","img/snes.png", "img/drink.jpg", "img/beach.jpg","img/cliff.jpg","img/windmills.jpg" ];

for(let i=0; i<12; i++ ){
    d.getElementsByClassName("rTableCell")[i].addEventListener("click",(event)=>{
   (event.target.setAttribute("src", img[Math.round(Math.random()*11)]));
 
    
    },false);

}
function crearimgAleatorias(){
    
for(let i=0; i<6; i++){
  let random=Math.round(Math.random()*5);
  if(arrayAleatori.indexOf(random)==arrayAleatori.lastIndexOf(random) && arrayAleatori[i]==undefined){
    arrayAleatori[i]=random;
  }
 

}

}
crearimgAleatorias();
console.log(arrayAleatori);

}
