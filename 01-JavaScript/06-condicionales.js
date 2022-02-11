'use strict'

var edad = 25;
var nombre = "David";

/* Operadores relacionales
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Distinto: !=
*/

if(edad >= 18){
    console.log(nombre+" es mayor de edad");

    //Un if anidado
    if(edad <= 33){
        console.log('Todavía es millenial');
    }else if(edad >= 40){
        console.log('Ya no eres millenial');
    }

}else{ 
    console.log(nombre+" es menor de edad");
}


/* Operadores lógicos
AND &&
OR ||
Negación !
*/

var year = 2021;
if(year != 2016){
    console.log("El año no es 2016. Es el año "+year)
}
if(year >= 2000 && year <= 2022){
    console.log("Estamos en la era actual");
}