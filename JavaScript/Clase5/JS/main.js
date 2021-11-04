
/* document.getElementsByClassName('app')[0]; */


var element = document.createElement('h1');
var container = document.getElementsByTagName('div')[0];




element.innerHTML = 'Hola amiguitos';
/* container.appendChild(element); */


/*
* Definiendo función


*/


/* function closePopUp() {
	console.log('Hola mundo');
}

closePopUp(); Ejecuta función  */



function closePopUp() {

	document.getElementById('popUp').style.display = 'none';
	console.log('Hola mundo');
}


