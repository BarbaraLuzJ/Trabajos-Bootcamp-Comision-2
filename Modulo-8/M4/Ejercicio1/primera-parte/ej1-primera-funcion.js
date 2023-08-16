/* 
Diseñar una función que reciba un flujo de caja 
como dato de entrada y retorne -1 si hay 
pérdidas, 1 si hay ganancias, 0 si los ingresos son 
iguales a las ganancias.
 */
function calcularFlujo () {
    if (totalIngresos > totalEgresos) {
        const ganancias = totalIngresos - totalEgresos;
        console.log("1")
        alert("1")
        } else if (totalIngresos < totalEgresos) {
        const perdidas = totalEgresos - totalIngresos;
        console.log('-1')
        alert('-1')
        } else {
        console.log('0');
        alert('0');
        }
}