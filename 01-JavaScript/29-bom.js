'use strict'


/* BOM - Browser Object Model */

function getBom(){
console.log(window.innerHeight); // tamaño ventana
console.log(window.innerWidth);
console.log(screen.width);
console.log(screen.height);
console.log(window.location.href);

}
getBom();

function redirect(url){
    window.location.href = url;
}

function abrirVentana(url){
    window.open(url, "google.com", "width=400,height=300");
}

