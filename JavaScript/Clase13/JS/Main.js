

/* let animales = {
    Color: 'Azul',
    Edad: '3',
    Nombre: 'Flopp',
    Raza: 'Pug',
    Tipo: 'Perro'
}; */

/*
function animales(Tipo, Raza, Edad, Color, Nombre) {


    let contenedor = document.getElementsByTagName('boy')[0];

    let elemento = document.createElement('div');

    // TEMPLATE
    elemento.innerHTML = `
        <p>Color: ${Color} </p>
        <p>Raza: ${Raza} </p>
        <p>Edad: ${Edad} </p>
        <p>Tipo: ${Tipo} </p>
        <p>Nombre: ${Nombre} </p>


    `;

    container.appendChild(elemento);
} */



// POO

/**
 * * This crea solo la propiedad.
 * * Una Funcion anónima no tiene nombre
 */



function animales(Tipo, Raza, Edad, Color, Nombre) {

    this.Tipo = Tipo;
    this.Raza = Raza;
    this.Edad = Edad;
    this.Color = Color;
    this.Nombre = Nombre;

    // Crear METODO

    this.cambiarNombre = function (nuevoNombre) {
        this.Nombre = nuevoNombre;
    }

}

/**
 * * New significa que se está creando un nuevo objeto
 */


var animal1 = new animales('Perro', 'Pug', 'Flop', 3, 'Cafe');

console.log(animal1);