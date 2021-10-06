/* var person = [];

var persona = 'Pato';
var edad = 25;
var soltero = true;
var estatura = 2.4;
 */

/* 
document.write(persona + '</br>');
document.write(edad + '</br>');
document.write(soltero + '</br>');
document.write(estatura + '</br></br>');
 */
/* 
person = ['Palillo', 22, false, 1.70, 'Flores']; */

/* document.write(person[1]); */ // Imprime el dato dependiendo del número que se agregue en los []

/* 
                        //las veces que se va repetir
for (let index = 0; index < person.length; index++) {
    console.log(index);
    document.write(person[index] + '</br>');

}
 */


var imgs = [
    'Dexter',
    'Coraje',
    'morty',
    'Pollito',
    'Dexter',
    
];

for (let index = 0; index < imgs.length; index++) {

    var template = '<img src="IMG/' + imgs[index] + '.png " alt="">';
    document.write(template);

    
}





/* respuestas[0] = 'Ixi';

respuestas[5] = 20; */

/* var preguntas = [

    '¿Cuál es tu Nombre? ',
    '¿Cuál es tu Edad?',
    '¿Qué signo eres?',
    '¿Color favorito?',
    '¿Frío o Calor?'
]

var respuestas = [];


//Guarda las respuestas en el array  respuestas 
for (let index = 0; index < preguntas.length; index++) {

    respuestas[index] = prompt(preguntas[index]);

}


//Imprime las respuestas y preguntas
for (let index1 = 0; index1 < respuestas.length; index1++) {
    document.write(preguntas[index1] + '<br>' + respuestas[index1] + '<br>')
}
 */