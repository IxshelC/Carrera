
var edad = prompt('Cuál es tu edad?'); 

if (edad == 18) {
    alert('Felicidades, apenas y puedes pasar');

} else if (edad > 18 && edad < 30 ) {
    alert('Es mayor de 18 pero menor de 30');

} else  if (edad >= 30){
    alert('Tienes 30 o más de 30');

} else {
    alert('Eres menor de edad')
}