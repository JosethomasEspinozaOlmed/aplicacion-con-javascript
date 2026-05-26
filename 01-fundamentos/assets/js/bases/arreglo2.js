let juegos = ['mario', 'selda','jose','tomas','espinoza'];
console.log('largo:', juegos.length);

let primero = juegos[0];
let ultimo  = juegos[juegos.length -1]; //esto es una forma para saber el utlimo indice
console.log({primero,ultimo});// si es la impresion entre llaves tambien imprime el nombre de la variable



juegos.forEach((elemento, indice,arr)=>{// esto sirve para indicar el elemento que seria, loq esta escrito adentro
                                        //ya sea string o numeros,etc, tambien la posicion y cuantos numeros de arrays hay
    console.log({elemento, indice,arr})// si la impresion es dentro de llaves, hace una impresion las variables, siempre en el console.log

});


let nuevaLongitud  =  juegos.push('f-zero');//esto sirve para agregar un  nuevo elemento en el arreglo, en este caso se agrego al arreglo '''juego''' primeramente creado en este caso 
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('goku ');// esto sirve para poner un nuevo elemento al principio de un arreglo
console.log({nuevaLongitud,juegos});

 let juegoborrado = juegos.pop(); // lo que hace es que borra el ultimo elemento de un array
 console.log({juegoborrado, juegos});



let borrarposicion = 1;
console.log(juegos);
let juegosBorrados = juegos.splice(borrarposicion,2);// se usa para borrar elementos de acuerdo a la posicion que se quiere eliminar, poniendo la posicion y hasta cuantos elementos se quiere borrar
console.log({juegosBorrados,juegos});


let saberlaPosicionIndice = juegos.indexOf('tomas');//es case sensitive, es decir el que quiero buscar hay que cuidar las minusculas y mayusculas, se usa para buscar algun string, etc
// si no encuentra da como resultado -1, eso significa que no ha encontrado

console.log({saberlaPosicionIndice,juegos});





