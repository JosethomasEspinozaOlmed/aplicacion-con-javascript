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
     console.log('hola a todos, esto es un mensaje de metodo estatico')   
    }
   

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
 
 class Heroe extends Personas{
    clan = 'sin clan ';

    constructor(nombre, cedula, carrera){

        super(nombre,cedula,carrera);// hace referencia a la clase que extiende, es decir trae los constructores definidos en Personas
        this.clan = 'los hurreros'
    }

    quiensoy(){
        console.log(`${this.nombre}, ${this.clan} es el clan`)
    }
    
 }



 const estudiante = new Heroe('fernando herrera',12121,'estudiante de software');// a esto se le llama una nueva instancia a partir de una clase
console.log(estudiante)
estudiante.quiensoy()


