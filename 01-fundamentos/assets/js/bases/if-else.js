let a = 5;

if(a>=10){// tambien el null, undefined, null
    console.log('A es mayor o igual que 10')
}
else{
    console.log('A es menor a 10')
}

const hoy = new Date();
let dia = hoy.getDay();// 0: domingo, 1: lunes, 2:martes.....

console.log(dia);

// quiero saber que dia es 
/*
if (dia===0) {
    console.log('hoy es domingo')
} else {
    if (dia === 1) {
        console.log('lunes');
    } else {
        console.log('no es lunes ni domingo');
    }
}  */


    if (dia == 0) {
        console.log('domingo')
    }
    else if (dia ===1 ) {
        console.log('lunes');
    }
    else if (dia ===2 ) {
        console.log('martes');
    }
    else if (dia ===5 ) {
        console.log('martes');
    }
    else {
        console.log('no es  lunes ni tampoco martes')
    }

// una forma de hacer sin usar if, ni else, ni switch, unicamente objetos

dia = 6;

semana = 4;

anho = 4;

const diasletras = {
     0: 'domingo',
     1: 'lunes',
     2: 'martes',
     3: 'miercoles',
     4: 'jueves',
     5: 'viernes',
     6: 'sabado',

}

const mesesletras = {
    0: 'enero',
    1: 'febrero',
    2: 'marzo',
    3: 'abril',
    4: 'mayo',
    5: 'junio',
    6: 'julio',
    7: 'agosto',
    8: 'septiembre',
    9: 'octubre',
    10: 'noviembre',
    11: 'diciembre'
};

console.log(mesesletras[mes] || 'mes no definido');

const semanasletras = {
    0: 'primera semana',
    1: 'segunda semana',
    2: 'tercera semana',
    3: 'cuarta semana',
}
console.log(semanasletras[semana]|| 'no es de la semana');



// o tambien se puede hacer con un arreglo

const anhosletras = [
    'anho 2003', 'anho 2004', 'anho 2005', 'anho 2006',  'anho 2007',]

console.log(anhosletras[anho]);