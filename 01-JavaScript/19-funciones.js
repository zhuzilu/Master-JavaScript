'use strict'

/* Funciones
Una función es una agrupación reutilizabale de un conjunto de instrucciones*/

function calculadora(){
    // Conjunto de instrucciones a ejecutar
    console.log("Esto es una calculadora");
    console.log("String dentro de console");
 
    return "Esto es una calculadora";
} 

// Invocar o llamar a la función
calculadora();

// Se puede guardar en una variable
var resultado = calculadora();

console.log(resultado);

// Funciones con parámetros

function porConsola(numero1, numero2){
    console.log("Suma " + (numero1+numero2));
    console.log("Resta " + (numero1-numero2));
    console.log("Multiplicación " + (numero1*numero2));
    console.log("División " + (numero1/numero2));
    console.log("*******************");
}

// Invocar o llamar a la función con parámetros

porConsola(10, 2);
porConsola(55, 5);


// Usar la función dentro de un bucle

for(var i = 1; i <= 10; i++){
    console.log(i);
    porConsola(i, 8);
}

// Parametros opcionales, por ejemplo: mostrar. 

function porPantalla(numero1, numero2){
    document.write("Suma " + (numero1+numero2)+"<br/>");
    document.write("Resta " + (numero1-numero2)+"<br/>");
    document.write("Multiplicación " + (numero1*numero2)+"<br/>");
    document.write("División " + (numero1/numero2)+"<br/>");
    document.write(mostrar);
    document.write("*******************");
}

//Si mostrar es false, nos muestra los números porConsola. Si es true muestra los números porPantalla.

// La función principal Calculadora, llamará a otra función que está contenida dentro de sí misma.

function calculadora(numero1, numero2, mostrar = false){
    if (mostrar == false){
         porConsola(numero1, numero2);
    }else{
         porPantalla(numero1, numero2);
    }
    return true;
 }

 // Invocamos con el parámetro opcional
 calculadora(20, 6, true);







