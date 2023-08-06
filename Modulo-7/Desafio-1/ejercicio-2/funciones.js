
function ingresarIngresoTotal () {
    let ingreso;
    do {
        ingreso = parseFloat(prompt("Ingrese el monto total de ingresos: "))
    } while (!ingreso || ingreso < 0); 
    return ingreso;
}

function calcularGastosNecesarios (monto) {
    return (monto * 0.5);
}

function calcularGastosOpcionales (monto) {
    return (monto * 0.3);
}

function calcularAhorroEInversion (monto) {
    return (monto * 0.2);
}
function mostrarMontoPorCategoria (monto, gastosN, gastosO, ahorroInversion) {
    alert(`De un ingreso total de ${monto}, se destinan a:
    -Gastos necesarios: ${gastosN} 
    -Gastos opcionales: ${gastosO}
    -Ahorro e inversión: ${ahorroInversion}`)
}




