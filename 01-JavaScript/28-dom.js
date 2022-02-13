'use strict'

// DOM - Document Object Model - cambiar html de una página

//ConSeguir elementos con un ID concreto
var caja = document.getElementById("micaja");

var caja = document.querySelector("#micaja"); // como si fuera css: vacío # o .


// .innerHTML recoge el html
caja = document.getElementById("micaja").innerHTML;

caja.innerHTML = "texto en la caja desde JS"; // puede atribuir nuevo html

// Para cambiar color desde console:
function cambiarColor(color){
    caja.style.background = color;
}


caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola"; // cambiar nombre de clase

console.log(caja);

// Conseguir elementos por su etiqueta

var todosLosDivs =document.getElementsByTagName("div");
var valor;
for(valor in todosLosDivs){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.appendChild(texto);
    document.querySelector("#miseccion").appendChild(parrafo);
}

// .textContent -> Devuelve el texto contenido
// . innerHTML -> permite modificar el texto

console.log(todosLosDivs);

//conseguir elementos por class

var divsRojos = document.getElementsByClassName("rojo");

var div;
for(div in divsRojos){
    divsRojos[d].style.backgroundColor ="red";
}

//Query selector

var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);