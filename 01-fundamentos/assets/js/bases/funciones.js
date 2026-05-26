// este son funciones con flechas
function saludar() {
    console.log('hola esto es un saludo con funcion');
    return 10;
}
function saludarEnChino(){
    console.log('la idea es saludar en chino, como nihao')
}

const  saludar2 = function() {// a esto se lo conoce como una funcion anonima
    console.log('hola esto es un saludo con funcion anonima');
}

function saludarConArgumento(nombre){// esto es una funcion con argumento
    console.log('esto es un mensaje de una funcion con argumento + return' + nombre);

}
const saludarConArgumento2 = function( nombre ){//concatenacion de string
    console.log('hola'+ nombre);
}

function argumentos(nombre){
    console.log( arguments );//argumentos
    console.log('argumentos: ' + nombre);
}

const saludarFlecha = ()  => {
    console.log('hola flecha')
}
const saludarFlecha2 = (nombre)  => {
    console.log('hola flecha con nombre ' + nombre);
}

const retornoDeSaludar = saludar('tomas', true, 40, 'pirapo');
console.log({retornoDeSaludar});

saludar();

saludarEnChino();

saludar2();

saludarConArgumento(' fernando');

saludarConArgumento2(' jose ');

//argumentos('tomas', true, 40, 'pirapo');

saludarFlecha();

saludarFlecha2(' ana maria');

//ejercicio de return

function sumar(a,b){
     return a + b ;
}
console.log(sumar(1,3));

// funcion con flecha
const sumar2 = (a,b) => {
    return a +b ;
}
console.log(sumar2(50,50));

//tambien se puede abreviar la funcion de flechas
const sumar3 = (a,b) => a+b;
console.log(sumar3(100,100));

function getAleatorio(){
    return Math.random();
}
console.log(getAleatorio());

// funncion con flechas que no tenga llaves
const getAleatorio2 = () => {
    return Math.random();
}
//o tambien es lo mismo pero sin el return
const getAleatorio3 = () => Math.random();

console.log(getAleatorio3())
console.log(getAleatorio2())
console.log()