
var nombre = prompt('¿Cual es tu nombre?');
var edad = prompt('Cuál es tu edad?');



if (edad >= 18) {
    
    if (edad == 18) {
        document.write(nombre + '. Apenas y pasaste xd');
    } else {

        if (edad <= 30) {
            document.write(nombre + '. Tienes entre 19 y 30 años');
        } else {
            document.write(nombre + '. Tienes mas de 30 años')
        }
    }
    

} else {
    document.write(nombre + '. No pasaste, eres menor de edad');
}

