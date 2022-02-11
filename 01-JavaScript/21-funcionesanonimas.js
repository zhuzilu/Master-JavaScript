'use strict'

/* Funciones anonimas  -  Funciones sin nombre

Funcion flecha se quita function y parentesis y se pone => después de la variable */

var pelicula = function(nombre){
    return "La pelicula es: "+nombre;
}

pelicula("Ghostbusters");


// Función con dos parámetros y dos funciones anónimas pasadas como parámetros

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

// Función de callback, llamada dentro de una función

sumame(5, 7, function(dato){
    console.log("La suma es: ", dato);
},
function(dato){
    console.log("La suma por dos es: ", (dato*2));
});

/* Función de flecha. 
Sustituimos function por flecha =>
Si lleva un parámetro se pueden quitar los parentesis */


sumame(5, 7, dato => {
    console.log("La suma es: ", dato);
},
dato => {
    console.log("La suma por dos es: ", (dato*2));
});

