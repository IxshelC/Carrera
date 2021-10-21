const fila = document.querySelector('.contenedor-carrusel');

const flechaizq = document.getElementById('flecha-izquierda');
const flechader = document.getElementById('flecha-derecha');


// ? -------------- EVENTO PARA FLECHA DERECHA ------------

flechader.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

// ? -------------- EVENTO PARA FLECHA IZQUIERDA ------------

flechaizq.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});


// ? ------------------------ IMAGENES --------------