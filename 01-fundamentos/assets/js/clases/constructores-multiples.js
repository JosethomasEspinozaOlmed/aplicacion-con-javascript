

class Personas{
// esto es un simple metodo
    static porObjeto({nombre,apellido,pais}){//recibo una persona, si o si debe de ir dentro de llaves
        return new Personas(nombre,apellido,pais)
    }
    constructor(nombre,apellido,pais){
        this.nombre = nombre
        this.apellido = apellido
        this.pais = pais
    }

    getInfo(){
        console.log(`info:${this.nombre}, ${this.apellido}, ${this.pais}`)
    }
}

const nombre1 = 'jose',
      apellido1 = 'espinoza',
      pais1 = 'paraguay'
      
      const fer = {// ESTO ES UN OBJETO 
        nombre: 'fernando',
        apellido:'morikai',
        pais: 'costa rica'
      }
   

      const persona1 = new Personas(nombre1, apellido1, pais1);
      const persona2 = Personas.porObjeto(fer)

  persona1.getInfo()
  persona2.getInfo()

