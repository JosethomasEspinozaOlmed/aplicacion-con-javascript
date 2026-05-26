function crearpersonas(nombre,apellido){
    return{nombre,apellido
        //nombffre: nombre,//con la nueva version no hace falta declarar dos veces
        //apellido: apellido
    }
}
const persona = crearpersonas( 'fernando', 'Espinoza' );
console.log( persona );
//----------------------------------------------------------------
//funcion con flecha
const  Crearpersonasconflecha = (direccion,edad) => ({direccion,edad}) ;
const persona1 = Crearpersonasconflecha('pirapo centro',30);
console.log(persona1)

//----------------------------------------------------------------

//function tradicional
function imprimeArgumentos() {
    console.log(arguments);
}

imprimeArgumentos(10,true,' juan','hola mundo')


// esto con funcion de flecha
const imprimeArgumentos2 = (...arguments)=>{// si se hace ... es para traer el resto del array
    // despues del parametro res, no puede venir ningun otro argumento , pero antes si 

    console.log(arguments)
} 
imprimeArgumentos2(30,50,90,'gus fring', 'walter white');

// esto es un argumento array que trae todas las cosas, el mismo que el anterior
const imprimeArgumentos3 = (edad,direccion,departamento,telefono,nombre,apelido, ...args) => {
    console.log({edad,direccion,departamento,telefono,nombre,apelido,args});
}
imprimeArgumentos3(21,'pirapo centro','itapua',4,'jose espinoza','olmedo')
//------------------------------------------------------------------------------------------------------


const tony = {
    nombre: 'jose tomas',
    codename:'Espinoza',
    vivo: false,
    //edad: 123,
    trajes: ['spiderman','iron man']// si es que quiero imprimir con caracat spcials entonces debo ponerle como un string, por eso el entre comillas 
};

const imprimepropiedades = ({nombre, codename, vivo, edad = 15,trajes}) => {
//   edad = edad || 0;

    console.log({nombre});
    console.log({codename}) ;
    console.log({vivo});
     console.log({edad});
     console.log({trajes});
    } 

    imprimepropiedades(tony);