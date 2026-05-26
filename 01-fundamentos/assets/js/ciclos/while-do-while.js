console.warn('while');

const carros = ['ford', 'toyota', 'nissan'];
let i = 0;
// while (i<carros.length) {
    while (carros[i]) {
    console.log(carros[i])
    i++;
    
}



console.warn('do while');

let j = 0;
do {
    console.log(carros[j])
    j ++;
} while(carros[j])

