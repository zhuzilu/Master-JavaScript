'use strict'

//SWITCH

var edad = 25;
var imprime ="";

switch(edad){
    case 18:
        imprime = "Acabas de cumplir la mayoría de edad";
    break;
    case 25:
        imprime = "Ya eres un adulto";
    break;
    case 40:
        imprime = "Crisis de los 40";
    break;
    case 75:
        imprime = "Eres un anciano";
    break;
    default:
        imprime = "Tu edad es neutra";
}
console.log(imprime);