// SE VAN A GUARDAR TODOS LOS USUARIOS
let allUsers = null;

// FUNCION PARA SACAR LA INFORMACION
const getDataLocal = () => {
    const UsersLocal = localStorage.getItem('usuariosEnLocal');
    allUsers = JSON.parse(UsersLocal);
}

// FUNCION QUE MANDA EL ARRAY AL LOCAL
const sendDataLocal = () => {
    const allUsersJSON = JSON.stringify(allUsers);
    localStorage.setItem('usuariosEnLocal', allUsersJSON);
}

// FUNCION PARA CREAR EL OBJETO DE LOS USUARIOS
const createUser = (usuario, correo) => {
    const persona = {
        usuario: null,
        correo: null
    }


    persona.usuario = usuario;
    persona.correo = correo;

    // METE COSAS AL ARRAY DE ALLUSERS
    allUsers.push(persona);
    sendDataLocal();
    uiUsuarios();

    console.log(persona);
    console.log(allUsers);



}

// FUNCION QUE PINTA TODOS LOS OBJETOS (USUARIOS)
const uiUsuarios = () => {

    const contenedor = document.getElementById('output');
    contenedor.innerHTML = ``;


    for (const iterator of allUsers) {

        console.log(iterator);
        const elemento = document.createElement('div');
        elemento.classList.add('usuario');

        elemento.innerHTML = `

        <p>${iterator.usuario} </p>
        <p>${iterator.correo} </p>
        `;


        contenedor.appendChild(elemento);

    }
}


// SACA LOS VALORES DE LOS INPUTS
const submit = () => {
    const usuario = document.getElementById('usuario').value;
    const correo = document.getElementById('correo').value;

    if (usuario != '' && correo != '') {
        console.log(usuario, correo);


        createUser(usuario, correo)


        //DESPUES DE PRESIONAR EL BOTON "GUARDAR" SE LIMPIAN LOS INPUTS
        document.getElementById('usuario').value = "";
        document.getElementById('correo').value = "";

    }



}


// FUNCION QUE PINTARÁ LOS DATOS DE LOCAL STORANGE
const home = () => {
    getDataLocal();
    if (allUsers != null)
        uiUsuarios();
}

document.getElementById('submit').addEventListener('click', submit);
window.onload = home;