'use strict'

/*Tabla de multiplicar*/

var numero = parseInt(prompt("¿De que numero quieres la tabla?", 1))

document.write("<h1>Tabla del "+numero+"</h1>");

for(var i = 1; i <= 10; i++){
    document.write(i+ " x "+ numero + " = "+(i*numero)+"<br/>");
}

// Todas las tablas de multiplicar con bucles anidados

for(var t = 1; t <= 10; t++){
    document.write("<h1>Tabla del "+t+"</h1>");
    for(var i = 1; i<=10; i++){
        document.write(i+" x "+t+" = "+(i*t)+"<br/>");
    }
}