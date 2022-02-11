'use strict'

/* Mostrar todos los numero impares
que hay entre dos numeros introducidos por el 
usuario*/

var numero1 = parseInt(prompt("Escoge un número: ", 0));
var numero2 = parseInt(prompt("Escoge otro número: ", 0));

while(numero1 < numero2){
    numero1++; 

    if(numero1%2 !=0){
        console.log("El "+numero1+ " es impar.");
    }
}