function ingresoEdad () {
    let edadIngresada;
    do {
        edadIngresada = parseInt(prompt("Ingrese su edad por favor: "))
    } while (!edadIngresada || edadIngresada < 0); 
    return edadIngresada;
    }
function validarEdad (edad) {
        if (edad < 18) {
        return "La edad minima es de 18 años";
    }
    else if (edad >= 18){
        return "Te damos la bienvenida!";
    }
}
function mostrarMensaje (validacion) {
    alert (validacion)
}




