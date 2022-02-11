// nos pida 2 numeros y nos diga cuales son y son mayores o menor

var  numero1 = parseInt(prompt("Escoge un primer número: ", 0));
var  numero2 = parseInt(prompt("Escoge un segundo número: ", 0));

while(numero1 <= 0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Escoge un primer número: ", 0));
    numero2 = parseInt(prompt("Escoge un segundo número: ", 0));
}

if (numero1 == numero2){
    alert("Los números son iguales"+numero1 +" = "+numero2);
}else if (numero1 > numero2){
    alert("El número que escogiste primero es mayor que el que escogiste segundo: " +numero1+ " >" +numero2)
}else if (numero2 > numero1){
    alert("El número que escogiste segundo es mayor que el que escogiste primero: " +numero2+ " >" +numero1)
}else {
    alert("Introduce números correctos")
}



