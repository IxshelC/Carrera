
let element = document.getElementById('sec1').children[1];
/* let element2 = document.getElementsById('sec2'); */
let element3 = document.getElementsByTagName('input')[0];

element.addEventListener('click', span);


function span() {
    console.log('Hiciste click en span');
    element.style.color = 'red';

    element3 = document.createElement('h1');
}


