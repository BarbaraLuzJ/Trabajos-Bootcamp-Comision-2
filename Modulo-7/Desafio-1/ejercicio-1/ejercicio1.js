
const costosFijos = ingresarCostosFijos ();
const precioVentas = ingresarPrecioVentas ();
const costosVariables = ingresarCostosVariables ();
const puntoDeEquilibrio = calcularPuntoEquilibrio (costosFijos, precioVentas, costosVariables);

mostrarResultado (puntoDeEquilibrio)

