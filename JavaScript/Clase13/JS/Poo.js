

let allTodos = [];
let contador = 0;

document.getElementById('btn').addEventListener('click', createTodo); // Botón añadir

// RECIBE LA TAREA EL CONSTRUCTOR
function todos(tarea) {

    this.tarea = tarea;

}

function createTodo() {

    let value = document.getElementsByTagName('input')[0].value;


    if (value != '') {


        allTodos[contador] = new todos(value);
        document.getElementsByTagName('input')[0].value = '';


        uiTodos(contador);

        contador++; /** Se va ir guardando cada que se va agregando algo en el input */
        console.log(contador);
        console.log(allTodos);

    }

/*     allTodos = new todos(); */

}



function uiTodos() {

    let contenedor = document.getElementById('todos');
    let elemento = document.createElement('div'); // Se crea un div que se guarda en la variable "elemento"


    elemento.innerHTML = `

        <p>${allTodos[contador].tarea}
        <select name="Select" id="Prioridad">
            <option value="value1">Alta</option>
            <option value="value1">Media</option>
            <option value="value1">Baja</option>
        </select>
        <button class="equis" id="eliminar">Eliminar</button>
        </p>



    `;


    elemento.addEventListener('dblclick', tacharTarea) /** Se ejecuta la funcion de tacharTarea */
    /* elemento.addEventListener('click', seleccionar) */
    contenedor.appendChild(elemento);
}


//FUNCION PARA LAS TAREAS QUE  YA ESTÁN HECHAS


// FUNCION PARA TACHAR
function tacharTarea() {

    this.classList.toggle('tachado'); /*Se agrega la clase cuando se da click */
    console.log('Tachado');

}

document.getElementById('borrar').addEventListener('click', borrar); // Botón de Borrar

// FUNCION SELECCIONAR



function seleccionar() {
/*
    document.querySelector('.tachado').remove('p') */
    this.classList.toggle('seleccion');

    console.log('Seleccionar');
}

// FUNCION BORRAR
function borrar(){
    document.querySelector('.seleccion').remove('p');
    document.querySelector('.tachado').remove('p');
}