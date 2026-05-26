const personaje = {
    nombre: 'jose tomas',
    apellido:'Espinoza',
    vivo: false,
    edad: 123,
    coordenadas:{// a esto se le llama propiedad
        latitud: 34.64,
        longitud: -118.7
    },
    trajes: ['con cuellos','sin cuello','con corbata','sin bolsillo','jonie walker'],// esto es un array, cuando es con corchete
    direccion: {//esto es otra propiedad
        ciudad: 'pirapo',
        barrio: 'san fransisco',
        departamento: 'itapua',
        pais:'Paraguay'
    },
    'ultima-Pelicula': 'INFITY WORD'// si es que quiero imprimir con caracat spcials entonces debo ponerle como un string, por eso el entre comillas 
}//cuando es una llave es un objeto literal
console.log(personaje);
// console.log('nombre ', personaje.nombre);
// console.log('nombre ', personaje['nombre']);
console.log('Edad: ', personaje.edad);
console.log('coordenadas: ', personaje.coordenadas);
console.log('coordenadas: ', personaje.coordenadas.latitud);

console.log('clase de traje: ',personaje.trajes.length);
console.log('ultimo traje: ', personaje.trajes[personaje.trajes.length -1]);//se utiliza para buscar el ultimo elemento de un array

const x = 'vivo';
console.log('esta vivo?',personaje[x]);

console.log('la ultima pelicula es: ', personaje['ultima_Pelicula']);//esto referencia a la ultima pelicula



// mas detalles

delete personaje.edad;
console.log(personaje);


personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

console.log(personaje)


