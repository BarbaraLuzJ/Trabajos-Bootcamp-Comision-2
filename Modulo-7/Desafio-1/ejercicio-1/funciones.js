function ingresarCostosFijos () {
    let cFijos;
    do {
        cFijos = parseFloat(prompt("Ingrese el monto total de costos fijos al dia de la fecha: "))
    } while (!cFijos || cFijos<0); 
    return cFijos;
}

function ingresarPrecioVentas () {
    let pVentas;
    do {
        pVentas = parseFloat(prompt("Ingrese el monto final de ventas al dia de la fecha: "))
    } while (!pVentas || pVentas<0); 
    return pVentas;
    }


function ingresarCostosVariables () {
    let cVar;
    do {
        cVar = parseFloat(prompt("Ingrese el monto total de costos variables al dia de la fecha: "))
    } while (!cVar || cVar<0);
    return cVar;
}

function calcularPuntoEquilibrio(fijos, ventas, variables) {
    if (ventas - variables !== 0) {
        return (fijos / (ventas - variables));
    } else {
        return "Error. No se puede dividir por cero.";
    }
}
function mostrarResultado(resultado) {
    alert(`Punto de equilibrio: ${resultado}`);
}