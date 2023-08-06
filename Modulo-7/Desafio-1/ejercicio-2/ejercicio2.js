const montoTotal = ingresarIngresoTotal ()
const gastosNecesarios = calcularGastosNecesarios (montoTotal);
const gastosOpcionales = calcularGastosOpcionales (montoTotal);
const ahorroEInversion = calcularAhorroEInversion (montoTotal);

mostrarMontoPorCategoria (montoTotal, gastosNecesarios, gastosOpcionales, ahorroEInversion);

