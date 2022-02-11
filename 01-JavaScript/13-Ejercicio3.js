// mostrar numeros entre dos numeros introducidos por el usuario

var numero1 = parseInt(prompt("Introduce un numero", 0));
var numero2 = parseInt(prompt("Introduce un numero", 0));

while(isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce un numero", 0));
    numero2 = parseInt(prompt("Introduce un numero", 0));
}
document.write("<h1>De "+numero1+" a "+numero2+ " están estos numeros:</h1>")
for (var i = numero1; i <= numero2; i++){
    document.write(i+"</br>");
}