'use strict'

// Array multidimensional -> Array dentro de un array 

var categorias = ["Acción", "Terror", "Comedia"];
var peliculas = ["Star Wars", "Carol", "Ghostbusters"];

var cine = [categorias, peliculas];

console.log(cine[0][1]); // Terror
console.log(cine[1][2]); // Ghostbusters

//Ordenar array
peliculas.sort(); // orden alfabetico)
peliculas.reverse(); // orden alfab inverso

//Añadir un elemento a un array con push
peliculas.push("Batman");
console.log(peliculas);

// Añadir elemento desde el prompt

var elemento = "";

do{
    elemento = prompt("Introduce tu pelicula favorita: ");
    peliculas.push(elemento);
}while(elemento !="ACABAR");

console.log(peliculas);

// .pop elimina el ultimo elemento de un array
peliculas.pop();


var indice = peliculas.indexOf("Carol");
console.log(indice);
if(indice > -1){
    peliculas.splice(indice, 2);
}

// Pasar de array a string

var peliculas_string = peliculas.join();
console.log(peliculas_string);

// Pasar de string a array

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array);