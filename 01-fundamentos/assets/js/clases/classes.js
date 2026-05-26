// primero se declara las propiedades y metodos,. luego las propiedades de las clases
//  constructor
// gets
// metodos
 
 
 
 
 class Personas{// clase persona          propiedades de la clase

   static _conteo = 0;
   static get conteo(){
    return Personas._conteo + ' instancias que existe'
   }

   static mensaje(){
    console.log(this.nombre);
    console.log('hola a todos, esto es un mensaje de metodo estatico')   }

    nombre = ''
    cedula = ''//declaracion de variables
    carrera = ''
    comida = ''


    //constructor
    constructor(nombre = 'sin nombre', cedula = '2323', carrera = 'carpediem'){// aca recibp
        if (!nombre)  throw Error('necesitamos el nombre')// esto muestra un error si es que no tiene el onmbre
            
        
        this.nombre = nombre// debe ser igual al nombre que recibo o frase que recibo
        this.cedula = cedula//
        this.carrera = carrera 


        Personas ._conteo++;// lo que hace esto es contar la instancia creada a partir de una clase
    }
// set es para establecer un valor 
set setcomidaFavorita(comida){ // el set solo recibe solo un argumento, os sets no pueden tener el mismo nombre igual que la propiedad
        this.comida = comida.toUpperCase();// esto hace que siempre estee en mayusculas
}
// el get es para recuperar un valor
get getComidaFavorita(){
    return `la comida favorita de ${this.nombre} es ${this.comida}`;
}

// metodos o funciones 
    quiensoy(){
        console.log(`Hola soy ${this.nombre } y mi cedula de identidad es ${this.cedula} en la carrera de ${this.carrera}`)
    }

    miCarrera(){
        this.quiensoy(); // esto si es que quiero ponerle tambien una funcion dentro de una funcion
        console.log(`${this.cedula} dice : ${this.carrera}`)
    }
 }


 // a esto se le dice una nueva instancia a partir de una clase
const estudiante = new Personas ('jose tomas','5.543.016','informatica');// a esto se le llama una nueva instancia a partir de una clase
const colegiante = new Personas('alfredo becker','5.565.012',' Bachiller ciencias sociales')



// estudiante.quiensoy()// muestra la informacion del estudiante
// colegiante.quiensoy()
// estudiante.miCarrera()
// colegiante.miCarrera()


//como utilizar el set
// lo que hace el set es agregarle a la funcion en este caso a estudiantes le agrego la comida
estudiante.setcomidaFavorita = 'Vori vori de pollo';
//console.log(estudiante)



estudiante.getComidaFavorita = 'caldo de pollo'  
// console.log(estudiante.getComidaFavorita)



console.log('conteo estatico', Personas._conteo)// conteo de instancias que existe o tengo
console.log(Personas.conteo)

Personas.mensaje()


Personas.propiedadExterna = 'hola, propiedad externa'
console.log(Personas.propiedadExterna)
console.log(Personas)




