/**
 * ?EVENTOS
*/

/* document.getElementsByTagName('body')[0].addEventListener('load',gato) */

window.addEventListener('load', main);

var element = document.getElementById('main').children[0];  /* Seleccionando al hijo de main  */

function main() {

    element.addEventListener('click', clic);
    gato();
}

/*Cuando se da click manda mensaje por consola y cambia el color a rojo */
function clic() {
    console.log('Hiciste click');
    element.style.backgroundColor = 'red';
}

/* Cuando se da doble click manda mensaje por consola y cambia el color a azul*/
function dblClic() {
    console.log('Hiciste doble clic');
    element.style.backgroundColor = 'blue';
}


/* debugger */
/* setTimeout(gato,2000); */


function gato() {
    document.getElementsByTagName('h1')[0].innerHTML = 'Gato :3';
}

/* Se aplica cuando pasas el mouse sobre el elemento*/
function onOver() {
    console.log('over');
}

/* Se aplica cuando entras y sales del elemento */
function onOut() {
    console.log('Out');
}

/* Se aplica cuando estás dentro del elemento  y se mueve el mouse dentro del elemento */
/* function onMove() {
    console.log('move');
} */

function onLeave() {
    console.log('Leave')
}


function onEnter() {
    console.log('Enter')
}


function onUp () {
    console.log('onUp')
}



function onContext() {
    console.log('context')
}


/* Se aplica con la bolita del mouse */
function onWeel() {
    console.log('bolita')
}