


/* function suma(num1, num2, num3) {
    return num1 + num2 +num3
}

let total = suma(12, 20, 30);

console.log(total); */




function suma(num1, num2, num3) {
    let perro = num1 + num2 + num3

    return perro;
}

let total = suma(12, 20, 30);
/* console.log(total); */


/* const sum2 = function (equis1, equis2) {
    console.log(equis1+equis2)
} */



// FUNCIONES FLECHA ECMASCRIPT

const suma3 = (equis1, equis2) => {
    let perro = equis1 + equis2;
    return perro
}

function msg(nombre) {
    return 'hola ' + nombre;
}


/* let person1 = msg('Pedro');
console.log(person1); */


// FUNCION
const person2 = (equis3) => {
    return 'Hola ' + equis3
}

// FUNCION DE UNA LÍNEA DE CÓDIGO, ES LO MISMO DE ARRIBA
/*
? Esta funcion solo sirve con un parámetro y una línea de código
 */

const person3 = equis3 => 'Hola ' + equis3;

const msg2 = () => alert('Hola');
