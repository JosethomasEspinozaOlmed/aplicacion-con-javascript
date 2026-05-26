/* dias de semana abrimos a las 11
 * pero los fines de semana abrimos a las 9*/

   // entra en un sitio web, para consultar si esta abierto hoy....



const dia = 1;
const horaActual = 10;

let horaapertura;
let mensaje;// esta abierto, hoy abrimos a las xx

// if (dia === 0 ||  dia ===6) {// tambien hay una forma de hacerlo oon in include
/*
    console.log('fin de semana')
    horaapertura = 9; 
}
else{
    console.log('dia de semana')
    horaapertura = 11
}
*/
horaapertura = ([0,6].includes(dia)) ? 9 : 11;
//si la hora de apertura de los dias 0 al 6 y el dia ingresado en este caso es 6, si se cumple el verdadero es 9 y si no es 11


// if (horaActual >= horaapertura ) {
//     mensaje = 'esta abierto';
    
// } else{
//     mensaje = `Esta cerrado, hoy abrimos a las ${ horaapertura}`;
// }

mensaje =( horaActual >= horaapertura)? 'esta abierto' : `esta cerrado, hoy abrimos a las ${ horaapertura}`;
console.log({horaapertura, mensaje})