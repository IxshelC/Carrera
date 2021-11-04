
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

function operacion(op) {

    screen = parseFloat(screen);

    if (clicks == 0) {
        resultado = screen;
        console.log(screen);
    } else {
        case1:
        resultado = resultado + screen;
        break;

        case2:
        resultado = resultado - screen;
        break

        case3:
        resultado = resultado * screen;
        break;

        case4:
        resultado = resultado / screen;
        break;
    }
    console.log(resultado);
}