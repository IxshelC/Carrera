var cuadros = [
    {
        width:'100px' ,
        height: '100px',
        color: 'white'
    },

    {
        width:'150px',
        height: '150px',
        color: 'blue'
    },
    {
        width:'200px',
        height: '200px',
        color: 'pink'
    }


]

var body = document.getElementById('cuadrados');


for (let index = 0; index < cuadros.length; index++) {

    var element = document.createElement('div');
    element.classList.add('cuadrados')

    body.appendChild(element);
    document.getElementsByClassName('cuadrados')[0].style.border = '2px solid black';
}

