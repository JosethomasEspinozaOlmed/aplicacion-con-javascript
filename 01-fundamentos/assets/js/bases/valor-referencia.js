//Arreglos

const frutas = ['manzana','pera','naranaja'];
const otrasFrutas = [...frutas];// rompe ;a relacion y retorna de forma separada

otrasFrutas.push('mango');
otrasFrutas.push('aguacate')
frutas.push('mandarina');// con el pusch se anhade un nuevo elemento al final de un array

console.table({frutas,otrasFrutas});


// otra forma de romper la relacion en el array
//--------------------------------------------------

const frutas1 = ['uva','tomate','arandano'];
const otrasFrutas1 = [...frutas1];// rompe ;a relacion y retorna de forma separada

otrasFrutas1.push('mango');
otrasFrutas1.push('aguacate')
frutas1.push('mandarina');// con el pusch se anhade un nuevo elemento al final de un array

console.table({frutas,otrasFrutas});



// esto es una forma de usar slice 
//-----------------------------------------------

const frutas2 = ['anana','apepu','toronja'];

console.time('slice')
const otrasFrutas2 = frutas2.slice();
console.timeEnd('slice');


console.time('spread')
const otrasFrutas3 = frutas.slice(...frutas);
console.timeEnd('spread');


console.table({frutas2,otrasFrutas2});   




