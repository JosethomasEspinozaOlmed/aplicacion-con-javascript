// observaciones
// para crear una nueva instancia debe de ser compatible el tema de case sensitive, en este caso la clase rectangulo comienza en mayus por lo tanto en new tambien debe ser asi 

class Rectangulo{

    area = 0;

    constructor(base = 0, altura = 0 ){
        this.base = base;
        this.altura = altura;

        this.area = base * altura
    }

    calcularArea(){
        console.log(this.area * 2)
    }
}

const rectangulo = new Rectangulo(10,15);

rectangulo.calcularArea()
console.log(rectangulo) 
console.log(rectangulo.area)
 

