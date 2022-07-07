var canvas = document.getElementById("canvas_dibujo");
var papel = canvas.getContext("2d");
var button = document.getElementById("button_azul");
canvas.addEventListener("mousedown", punto_inicial);
canvas.addEventListener("mousemove", movimiento_cursor);
canvas.addEventListener("mouseup", punto_final);
var estado;
var x;
var y;

function punto_inicial(evento)
{
    console.log("punto inicial");
}

function movimiento_cursor(evento)
{
    console.log("el muose se ta moveindo crack");
}

function punto_final(evento)
{
    console.log("puntoFinal");
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    papel.beginPath();
    papel.lineWidth = 2;
    papel.strokeStyle = color;
    papel.moveTo(xinicial, yinicial);
    papel.lineTo(xfinal, yfinal);
    papel.stroke();
    papel.closePath;
}