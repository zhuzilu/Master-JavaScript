alert("Hola Mundo con JS");
alert("Bienvenido al curso");

var num1 = parseInt(prompt("Calc, primer num: ", 0));
var num2 = parseInt(prompt("Calc, segundo num: ", 0));

while (isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("Calc, primer num: ", 0));
    num2 = parseInt(prompt("Calc, segundo num: ", 0));
}

var suma = num1 + num2;
var resta = num1 - num2;
var multi = num1 * num2;
var divi = num1 / num2;

document.write(suma+" "+resta+" "+multi+" "+divi);
alert(suma+" "+resta+" "+multi+" "+divi);
console.log(suma+" "+resta+" "+multi+" "+divi);