var url = 'https://pokeapi.co/api/v2/pokemon/';
var container = document.getElementById('app');
var inicio = 1;
var final = 5;
/* var final =898; */
pokemones();
createPagination(); /* se crea la paginacion */



function pokemones() {

    for (let index = inicio; index <= final; index++) {     /* Pinta los pokemones dependiendo del parametro index*/

        fetch(url + index)
            .then(response => response.json())   /* Promesa */
            .then(data => {
                /* console.log(data); */

                var element = document.createElement('div');
                element.classList.add('carta');
                element.innerHTML = `


                    <p class="pokemon"> Pokemon </p>
                    <p class="name">${data.name}</p>
                    <img src="${data.sprites.front_shiny}" alt="" class="img">
                    <p class="id"> Id: ${data.id}</p>
                    <p class="type"> Tipo: ${data.types[0].type.name}</p>
            `;

                container.appendChild(element);
            });

    }

}


/*  PAGINACION  */

function createPagination() {
    var btns = ['before', 'next']; /* Variable */
    for (let index = 0; index < 2; index++) { /* Para que se hagan 2 botones */
        var element2 = document.createElement('div'); /* Se Crea un div */
        element2.innerHTML = btns[index]; /* Acomoda los nombres de la variable "btns" */
        element2.id = btns[index]; /* Agrega id a los botones */
        document.getElementsByTagName('footer')[0].appendChild(element2); /* Selección del footer de HTML */

        if (index == 0) { /* boton1 */
            element2.addEventListener('click', before);
        } else {         /*boton 2 */
            element2.addEventListener('click', next); /* Evento para cuando seda click */
        }

    }
}



function next() {


    inicio = inicio + 5;
    final = final + 5;
    pokemones();
    container.innerHTML = " "; /* Limpia el contenedor */


}


function before() {
    container.innerHTML = " ";
    inicio = inicio - 5;
    final = final - 5;

    pokemones();

}









