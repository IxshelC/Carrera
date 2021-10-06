/* var equis = 2;

switch (equis) {

    case 0:
        document.write('Equis vale: ' + equis);
        break;

    case 1:
        document.write('Equis vale: ' + equis);
        break;

    case 2:
        document.write('Equis vale: ' + equis);
        break;


    default:
        /* document.write('Ingresa un valor válido') 
        break;  */

/*

* BUCLES


*/

/* for (let contador = 0; contador < 5; contador++){
    document.write('<img src="IMG/icon.png" alt="" srcset="">');
} */


/* var contador = 0;

while (contador < 6) {
    document.write('<img src="IMG/icon.png" alt="" srcset="">');
    contador++;
} */

/* var contador = 0;

do {
    document.write('<img src="IMG/icon.png" alt="" srcset="">');
    contador++;
} while (contador < 5); */


/* for (let index = 0; index < 1; index++) {

    for (let index = 1; index < 11; index++) {
        
        document.write('Hola mundo x' + index + '</br>');

    }
    
} */
                        

var numero = prompt('Dame un número: ');


for (let index = 1; index <= numero ; index++) {
    


    for (let index2 = 1; index2 <= index; index2++) {
        
        document.write('☺');
        
    }
                        
    document.write('</br>')
}

