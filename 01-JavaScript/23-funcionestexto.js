'user strict'

// Transformación de textos

var numero = 444;
var texto1 = "Bienvenido al curso de JS";
var texto2 = "Es muy buen curso";

var dato = numero.toString();
    dato = texto1.toUpperCase();
    dato = texto1.toLowerCase();

console.log(dato);

// Calcular longitud

var nombre = "lorem ipsum"; // Cuenta caracteres
    nombre = ["Lucia", "Nuria"]; // Cuenta elementos del array
console.log(nombre.length);

// CONCATENAR - unir textos

//var textoTotal = texto1+" "+texto2;

var textoTotal = texto1.concat(" "+texto2);
console.log(textoTotal);

// BÚSQUEDAS

var busqueda = texto1.match("curso"); 
/*. indexOf encuentra la posición de la primera conincidencia
  .lastIndexOf encuentra la posición de la ultima coincidencia
  .search nos indica donde se encuentra
  Si no aparece pone -1
  .match devuelve array 
  text1.match(/curso/gi) busca todas las coincidencias en un array 
  .substr(14, 5) devuelve desde la posición 14, 5 posiciones adelante.
  .charAt(44) devuelve un char de una posición en concreto, pos 44 
  .startsWith("Victor") -> devuelve false porque el string empieza por Bi 
  .endsWith("JS") -> devuelve true porque el string termina así 
  .includes("JS") -> true. cuidado es case sensitive */
  
console.log(busqueda);

// REEMPLAZO

/* .replace("JS", "JavaScript") reemplar 1º parametro por el 2º
   .slice(14) separa el string a partir del caracter 14
   .split(), mete dentro de un array
   .split(" ") separa un texto por palabras en un array ******* MUY INTERESANTE
   .trim() borra espacios en blanco por delante y detrás  ***** útil para usuarios, login, formularios, etc.*/
