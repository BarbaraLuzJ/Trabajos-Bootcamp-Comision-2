
function ingresoUsuario () {
    let usuario = prompt ('Ingrese su usuario por favor')
return usuario;
}

function ingresoClave () {
    let clave = prompt ('Ingrese su clave de 4 digitos por favor')
return clave;
}    

function validacionCredenciales(user, password) {
    const usuarioCorrecto = "admin";
    const claveCorrecta = "1234";

    if (user === usuarioCorrecto && password === claveCorrecta) {
        alert("¡Bienvenido al sistema!");
    } 
    else {
        alert("Usted ha ingresado uno o mas datos incorrectos.");
    }
}



