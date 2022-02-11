'use strict'

// Arrays, conjunto de variables dentro de []. Se pueden definir con [] o como objecto.

var nombre = "Lucía López";
var nombres = ["Lucía", "Nuria", "Laura", "Alba"];
// índice Lucia = 0, Nuria = 1, etc.

var lenguajes = new Array("PHP", "JS", "Go", "Java");

console.log(nombres);
console.log(lenguajes);
console.log(nombres[0]);

//Longitud array
console.log(nombres.length);


var elemento = parseInt(prompt("QUe elemento del array quiere? ", 0));
alert(nombres[elemento]);

if(elemento >= nombres.length){
    alert("Introduce el número correcto menor que "+nombres.length);
}else{
    alert("El usuario seleccionado es: "+nombres[elemento]);
}

// Formatear un array para que aparezca como una lista con bucles:

document.write("<h1>Lenguajes de programación</h1>");
document.write("<ul>");

// con un for
for(var i=0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}

// con un forEach
lenguajes.forEach((elemento, index, data)=>{
    console.log(data);
    document.write("<li>"+index+" - "+elemento+"</li>");
})

// con un for in (lenguaje es el indice, lenguajes el contenido)
for (let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");


//BÚSQUEDAS

/* var busqueda = lenguajes.find(function(lenguaje){
        return lenguaje == "PHP7";
}); */

var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");

console.log(busqueda);

var precios = [10, 20, 50, 80, 12];

// Buscar con parámetros

var busqueda = precios.some(precio => precio >= 20);



console.log(busqueda);