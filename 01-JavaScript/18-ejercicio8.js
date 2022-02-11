'use strict'

/* hacer una calculadora
pida dos numeros por pantalla
que si los numeros estan mal los vuelvan a introducri
body pagina, alerta y por consola, el resultado de sumar, restar, multiplicar y dividir
*/

var numero1 = parseInt(prompt("Introduce el primer numero: ", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero: ", 0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) | isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce el primer numero: ", 0));
    numero2 = parseInt(prompt("Introduce el segundo numero: ", 0));
}

var resultado = "La suma es: "+(numero1+numero2)+" <br/>"+
                "La resta es: "+(numero1-numero2)+" <br/>"+
                "La multiplicación es: "+(numero1*numero2)+" <br/>"+
                "La división es: "+(numero1/numero2)+" <br/>";

var resultadocmd = "La suma es: "+(numero1+numero2)+" \n"+
                "La resta es: "+(numero1-numero2)+" \n"+
                "La multiplicación es: "+(numero1*numero2)+" \n"+
                "La división es: "+(numero1/numero2)+" \n";

document.write(resultado);
alert(resultadocmd);
console.log(resultadocmd);
                                
