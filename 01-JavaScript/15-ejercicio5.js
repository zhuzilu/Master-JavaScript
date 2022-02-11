'use strict'

/* 
Muestre todos los números divisores
de un número introduce en prompt
*/

var numero = parseInt(prompt("mete un numero: ", 1));

for(var i= 1; i <= numero; i++){
    
    if(numero%i == 0){
        console.log("Divisor: "+ i);
    }
}