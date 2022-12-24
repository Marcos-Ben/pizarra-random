var pantalla= document.querySelector("canvas");
var pincel= pantalla.getContext("2d");

pincel.fillStyle="gray";
pincel.fillRect(0,0,600,400);
pincel.strokeRect(0,0,600,400);

var puedoDibujar= false;

//Variables para dibujar la paleta
var xRed= 0;
var xGreen= 20;
var xBlue= 40;
var xBviolet= 60;
var yCuadrados= 0;
var tamanhoCuadrado= 20;
var colorActual= "black"

function dibujarCirculo(xposit,yposit,colorActual){

    if(puedoDibujar){
        pincel.fillStyle=colorActual;
        pincel.beginPath();
        pincel.arc(xposit,yposit,5,0,2*Math.PI);
        pincel.fill();
    }
    }

function IcanDraw(){
        puedoDibujar= true;
    }
function IcantDraw(){
        puedoDibujar= false;
    }

function dibujarcuadrado(x,y,tamanio,color){
    pincel.fillStyle=color;
    pincel.fillRect(x,y,tamanio,tamanio);
    
}
function paletaColores(){
    dibujarcuadrado(xRed,yCuadrados,tamanhoCuadrado,"red");
    dibujarcuadrado(xGreen,yCuadrados,tamanhoCuadrado,"green");
    dibujarcuadrado(xBlue,yCuadrados,tamanhoCuadrado,"blue");
    dibujarcuadrado(xBviolet,yCuadrados,tamanhoCuadrado,"blueviolet");
}

//Función para delimitar el área osea ahi no se puede dibujar pibe
function diseniarArea(xcoordenada,ycoordenada){
    if((xcoordenada >=0 && xcoordenada<(4*tamanhoCuadrado+5)) &&
        (ycoordenada >=0 && ycoordenada <(tamanhoCuadrado+5))){
            return false;
    }else{
        return true;
    }
}

function CapturarMovimientoMouse(evento){
    var x=evento.pageX - pantalla.offsetLeft;
    var y=evento.pageY - pantalla.offsetTop;
    if (diseniarArea(x,y)){
        dibujarCirculo(x,y,colorActual);
    }
}
function seleccionarColor(evento){
    var x= evento.pageX - pantalla.offsetLeft;
    var y= evento.pageY - pantalla.offsetTop;

    //Cada condición altera el color de la variable colorActual
    //Comenzamos por la condición del eje Y que es común para todas
    if (y > yCuadrados && y <(yCuadrados + tamanhoCuadrado)){

        if(x > xRed && x < (xRed + tamanhoCuadrado)) {

                colorActual = "red";
                console.log(colorActual);
        }else if (x > xGreen && x < (xGreen + tamanhoCuadrado)) {

            colorActual = "green";
            console.log(colorActual);
        }else if (x > xBlue && x < (xBlue + tamanhoCuadrado)) {

            colorActual = "blue";
            console.log(colorActual);

    }else if (x > xBviolet && x < (xBviolet + tamanhoCuadrado)) {

        colorActual = "blueviolet";
        console.log(colorActual);

}

}
}
//calls
pantalla.onmousemove = CapturarMovimientoMouse;

pantalla.onmousedown = IcanDraw;

pantalla.onmouseup = IcantDraw;

paletaColores();

pantalla.onclick = seleccionarColor;












