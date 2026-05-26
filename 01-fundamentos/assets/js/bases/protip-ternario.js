const elmayor = (a,b) => {
    return(a>b)? a : b;
}// o tambien si es que tengo un solo return en mi funcion entonces se puede simplificar
// const elmayor = (a,b) => (a,b)? a:b;

const tienemenbresia = (miembro) => (miembro) ? 'tiene entonces es solo 2 dolares' : 'no tiene, entonces es 5 dolares';



console.log(elmayor(20,15));

console.log(tienemenbresia(true));
console.log(tienemenbresia(false));


const amigo = true;
const amigarr = ['peter',
                 'jose',
                 'keigo',
                  amigo ?'si amigo es true entonces es juan':'si amigo es false entonces es pedro'];
console.log(amigarr);


const nota = 19;
const grado =        nota >= 40 ? 'calificacion 5':
                     nota >= 35 ? 'calificacion 4':
                     nota >= 30 ? 'calificacion 3':
                     nota >= 25 ? 'calificacion 2':
                     nota >= 20 ? 'calificacion 1': 'APLAZADO'
console.log({nota,grado})

