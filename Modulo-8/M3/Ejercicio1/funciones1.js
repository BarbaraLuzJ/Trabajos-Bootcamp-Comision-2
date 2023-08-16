/* Funcion que suma solo los ingresos */
function sumarIngresos(flujoDeCaja) {
    let totalIngresos = 0;   
    for (let i = 0; i < flujoDeCaja.length; i++) {
        totalIngresos += flujoDeCaja[i].ingresos;
    }
    return totalIngresos;
    }
/* Funcion que suma solo los egresos */
function sumarEgresos(flujoDeCaja) {
    let totalEgresos = 0;    
    for (let i = 0; i < flujoDeCaja.length; i++) {
        totalEgresos += flujoDeCaja[i].egresos;
    }
    return totalEgresos;
    }
/* Funcion que calcula si hubo ganancias, perdidas o ninguna */
function calcularFlujo () {
    if (totalIngresos > totalEgresos) {
        const ganancias = totalIngresos - totalEgresos;
        console.log(`Este año hubo una ganancia de: ${ganancias}`)
        alert(`Este año hubo una ganancia de: ${ganancias}`)
        } else if (totalIngresos < totalEgresos) {
        const perdidas = totalEgresos - totalIngresos;
        console.log(`Este año se registro una perdida de: ${perdidas}`)
        alert(`Este año se registro una perdida de: ${perdidas}`)
        } else {
        console.log('No hay ganancias ni pérdidas');
        alert('No hay ganancias ni pérdidas');
        }
}
/* Funcion que trabaja suma nuevos valores a la lista */
function agregarNuevoFlujo(meses, ingresos, egresos, flujoDeCaja) {
    flujoDeCaja.push({meses, ingresos, egresos});
}
/* Funcion que pregunta si desea agregar nuevos valores y permite agregar cada mes con su ingreso u egreso, trabaja con la funcion que los suma a la lista*/
function preguntarAgregarNuevoFlujo(flujoDeCaja) {
    const respuesta = prompt("¿Desea agregar nuevos valores? (Sí/No)");
    let meses, ingresos, egresos;
    let mes = 1;
    flujoDeCaja = []
    if (respuesta.toLowerCase() === "si"){
        while (mes <= 12) {
            meses = prompt(`Ingrese el nombre del mes posición ${mes}:`);
            ingresos = parseFloat(prompt("Ingrese el monto de capital que ingreso:"));
            egresos = parseFloat(prompt("Ingrese el monto del capital que egreso:"));
            mes++;
            if (!meses || isNaN(ingresos) || isNaN(egresos)) {
                console.log("No se realizaron cambios.");
                alert("No se realizaron cambios.");
                return;
            }
            agregarNuevoFlujo(meses, ingresos, egresos, flujoDeCaja);
        }
        console.log(flujoDeCaja);}
    else {alert("Muchas gracias vuelva pronto!")}
}