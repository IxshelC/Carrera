
var dataNum = '';
var clicks = 0;
var screen = '';
var resultado = '';

function nums(dataNum) {

    if (screen === '0') {
        screen = '';
    }

    screen = screen + dataNum;

    document.getElementById('screen').innerHTML = screen;
}


function borrar() {

    screen = '0';
    resultado = 0;
    document.getElementById('screen').innerHTML = screen;
}


function suma() {

    screen = parseInt(screen);

    if (clicks == 0) {

        resultado = screen;
        console.log(screen);

    } else {

        resultado = resultado + screen;
        console.log(resultado);
    }

    screen = '0';
    document.getElementById('screen').innerHTML = screen;

    document.getElementById('screen').innerHTML = resultado;
    clicks++;
    console.log('clicks ' + clicks);
}



function resta() {


}