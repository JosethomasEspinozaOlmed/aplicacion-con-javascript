const regresaTrue = () =>{
    console.log('regres true');
    return true;
}
const regresaFalse = () =>{
    console.log('regresa false');
    return false;
}

console.warn('not o la negacion');
console.log(true)
console.log( true);
console.log(!false);// true
console.log(!true)// false

console.log(!regresaFalse())// tiene que regresar true, porque le esta negando 

console.warn('and')

console.log(true && true); // si vervadero y verdadero es verd = v= true
console.log(true && false);//falso porque ambos no son verdaderas
console.log(false && !false);// ambos son verdaderas

console.log('===============================');

console.log(regresaFalse() && regresaTrue());// false
console.log(regresaTrue() && regresaFalse());// false


console.warn('or');// cuando es verdadero una condicion entonces ya es toda verdadera
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse())
console.log('3 condiciones', true || true || false );

// asignaciones con operadores
console.warn('asignaciones')
const soyindefinido = undefined
const soynull = null;
const soyfalso = false;

const a1 = true && 'hola mundo' && 150 && true;
const a2  = 'hola ' && 'mundo';
const a3 = soyfalso || 'ya no soy falso';
const a4 = soyfalso|| soyindefinido || soynull || 'ya no soy falso de nuevo'|| true;
const a5 = soyfalso|| soyindefinido || regresaTrue() || 'ya no soy falso de nuevo'|| true;
console.log({a1,a2,a3,a4,a5})

