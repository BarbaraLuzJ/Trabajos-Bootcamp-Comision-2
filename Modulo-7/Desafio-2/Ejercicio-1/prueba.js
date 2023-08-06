function validarEdad () {
    let edad = parseInt(prompt("Ingrese por favor su edad: "))
    if (edad>0 && edad < 18) {
        return "La edad minima es de 18 años";
    }
    else if (edad>18){
        return "Te damos la bienvenida!";
    }
    else {
        return "Usted a ingresado un dato inválido"
        
    }
}
function mostrarMensaje (validacion) {
    alert (validacion)
}


const edadValidada = validarEdad ()

mostrarMensaje (edadValidada)