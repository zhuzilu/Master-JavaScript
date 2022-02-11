'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el body y en la consola
3. Ordenar array y mostrarlo
4. Invertir orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario y que nos diga si está en el array y si lo encuentra y su indice
*/

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1> Contenido del array "+textoCustom+"</h1>");
    elementos.forEach((elemento, index) => {
        document.write("<ul>");
        document.write("<li>"+elemento+"</li>");
        document.write("</ul>");
    });
}

/* Primera opción
var numeros = [];

for(var i = 0; i <=5; i++){
    numeros[i] = parseInt(prompt("Introduce un número", 0));
}
console.log(numeros);

*/

// Segunda opción; 

var numeros = [];

for (var i = 0; i <= 5; i++){
    numeros.push(parseInt(prompt("Introduce un numero : ", 0)));
}


console.log(numeros);

//Mostrar array en el cuerpo de la pag
mostrarArray(numeros);

numeros.sort(); // 1 2 24 3 44 56
mostrarArray(numeros, "ordenado de forma alfabética");

numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, "ordenado");

numeros.reverse(function(a, b){return b-a});
mostrarArray(numeros, "revertido");

document.write("<h3>El array tiene "+numeros.length+" elementos</h3>");

// Búsqueda

var busqueda = parseInt(prompt("Introduce un número para buscar: "));

var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<h1> ENCONTRADO</h1");
    document.write("El elemento "+busqueda+" está en la lista.");
}else{
    document.write("NO ENCONTRADO. El elemento "+busqueda+" no está en la lista.")
}
