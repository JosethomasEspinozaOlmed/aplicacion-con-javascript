    const jose = {
        nombre : 'tomas',
        edad: 21,
        imprimir() {
            console.log(`nombre: ${this.nombre} - edad: ${this.edad}`);
        }
    }


    const atsushi = {
        nombre : 'atsushi',
        edad: 21,
        imprimir() {
            console.log(`nombre: ${this.nombre} - edad: ${this.edad}`);
        }
     }
    



    function Personas (nombre, edad) {
            console.log('se ejecuto esta linea')
            this.nombre = nombre;
            this.edad = edad;

            this.imprimir = function(){
                console.log(`nombre: ${this.nombre} - edad: ${this.edad}`);
            }
    }

    const maria = new Personas('jose',20)// esto es para crear una nueva instancia 
    const melisa = new Personas('tomas',30)// esto es para crear una nueva instancia 
    console.log(maria)   
    maria.imprimir();
    melisa.imprimir();
