'user strict'
//.toString() para convertir dato a string

var numero = 12;
var texto = "Hola mmundo soy una variable global";
holaMundo(texto);

function holaMundo(texto){
    var hola_mundo = "Texto dentro de función"; // Esta variable solo se puede acceder dentro de la función, no fuera.
    
    console.log(texto);
    console.log(numero.toString()); //Se puede llamar a una variable que está fuera
    console.log(hola_mundo); // solo dentro de la funcion pero no fuera
}

/* console.log(hola_mundo);  
Error porque la variable no está definida en el ámbito global.*/