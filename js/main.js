/**************************************************************
 * Programa: Dibujo básico en Canvas
 * Lenguaje: JavaScript
 * Descripción:
 * Este programa utiliza el API de Canvas de HTML5 para dibujar
 * un rectángulo relleno dentro de un elemento <canvas>.
 * El tamaño del canvas se ajusta dinámicamente para ocupar
 * el 50% del ancho y el 50% del alto de la pantalla.
 *
 * Funcionamiento:
 * 1. Se obtiene el elemento canvas del documento HTML.
 * 2. Se ajusta el tamaño del canvas según el tamaño de la pantalla.
 * 3. Se accede al contexto de dibujo en dos dimensiones (2D).
 * 4. Se define el color de relleno.
 * 5. Se dibuja un rectángulo en el canvas.
 **************************************************************/

// Obtiene el elemento <canvas> desde el documento HTML
// mediante su identificador "lienzo"
var canvas = document.getElementById("lienzo");

// Ajusta el tamaño del canvas para que ocupe
// el 50% del ancho y el 50% del alto de la pantalla
canvas.width = window.innerWidth * 0.5;
canvas.height = window.innerHeight * 0.5;

// Obtiene el contexto de renderizado en 2D del canvas
// Este contexto permite dibujar figuras y gráficos
var ctx = canvas.getContext("2d");

// Define el color de relleno que se aplicará a las figuras
ctx.fillStyle = "rgba(255, 255, 255, 0.66)";

// Dibuja un rectángulo relleno en el canvas
// Parámetros:
// (10, 10) → posición inicial (X, Y)
// 500 → ancho del rectángulo
// 500 → alto del rectángulo
ctx.fillRect(10, 10, 200, 200);