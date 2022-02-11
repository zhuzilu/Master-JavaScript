'use strict'

/* PARAMETROS REST Y SPREAD
Rest: Cuando tenemos parámetros que son indefinidos con los ... seguido de un nombre de variable
*/

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandía", "Pera", "Melón", "Coco");


// En este caso SPREAD -> el array se amplía con 
var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Sandía", "Pera", "Melón", "Coco");
