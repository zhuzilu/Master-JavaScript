'use strict'

//plantillas - incluir variables sin concatenar

var nombre = prompt("Escribe tu nombre");
var apellidos = prompt("Escribe tus apellidos");

// Con comillas invertidas, es multilinea, sin necesidad de <br/>

var texto = `
    <h1>Hola</h1>
    <h3>Mi nombre es ${nombre}</h3>
    <h3> Mis apellidos son ${apellidos}</h3>
    `;
document.write(texto);