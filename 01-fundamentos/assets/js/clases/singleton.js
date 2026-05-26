class Singleton {

    static instancia;
    nombre = ''
    

    constructor(nombre = ''){

        const a = 1;
        console.log(a);
        console.log(!a);
        console.log(!!a);
        if(!!Singleton.instancia){// doble negacion 
            return Singleton.instancia
        }

        Singleton.instancia = this;// esta haciendo referencia a la instancia
        this.nombre = nombre;

        return this;
    }
}

const instancia1 = new Singleton('iron man ');
const instancia2 = new Singleton('spiderman')
const instancia3 = new Singleton('batman')
console.log(`nombre en la instancia1 es: ${instancia1.nombre}`)
console.log(`nombre en la instancia1 es: ${instancia2.nombre}`)
console.log(`nombre en la instancia1 es: ${instancia3.nombre}`)
