const heroes = ['batman','robbin','superman','mujer maravilla','iron man'];

console.warn('for tradicional');

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
    
}

console.warn('for in');
for(let i in heroes ){
    console.log(heroes[i])
}

console.warn('for of');

for (const i   of heroes) {
    console.log(i)
}

// no es necesario definir el const, otra forma 
console.warn('otro for of');// este es el for of cambiando solamente el valor del indice en este caso por losheroes

for (const losherores of heroes) {
    console.log(losherores)
}
