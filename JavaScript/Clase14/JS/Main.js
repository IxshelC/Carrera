/*
* EVENTOS

? .target nos muestra el elemento al que se le dió click


*/

/* document.getElementsByTagName('span')[0].addEventListener('click', mensaje);
 */



/* for (let index = 0; index < document.getElementsByTagName('span').length; index++) {
    document.getElementsByTagName('span')[index].addEventListener('click', mensaje);

} */


for (let index = 0; index < document.getElementsByTagName('span').length; index++) {
    document.getElementsByTagName('span')[index].addEventListener('click', mensaje);

}

function mensaje() {


    /* if (event.target.tagname = 'SPAN' || event.target.tagname == 'DIV') {
        console.log('No diste click en el main')
    } else {
        event.target.style.backgroundColor = 'red';
    } */


    /* if (event.target.tagname == 'MAIN') {
        event.target.style.backgroundColor = 'blue';

    }
 */



    /*     this.style.backgroundColor = 'blue';  // Cambia el color de fondo del span

        console.log(this); */

    event.target.children[1].style.backgroundColor = 'blue';
    console.log(event);
}



// SE ACTIVA CUANDO SE PRESIONA UNA TECLA

let personaje = document.getElementById('char');




    let y = 0;
    let x = 0;
    let velocidad = 10;

    const keyDown = () => {


        switch (event.key) {
            case 'ArrowUp':
                y -= velocidad;
                personaje.style.top = y + 'px';
                break;
            case 'ArrowLeft':
                x -= velocidad;
                personaje.style.left = x + 'px';
                break;
            case 'ArrowRight':
                x += velocidad;
                personaje.style.left = x + 'px';
                break;
            case 'ArrowDown':
                y += velocidad;
                personaje.style.top = y + 'px';
                break;

            default:
                console.log('Tas pendejo o que? >:v');
                break;
        }



        console.log(event.key);


}




document.addEventListener('keydown', keyDown);










