
const flujoDeCajaAnual = [
    { mes: "Enero", ingresos: 1500, egresos: 1500 },
    { mes: "Febrero", ingresos: 2500, egresos: 2500 },
    { mes: "Marzo", ingresos: 84683, egresos: 1155 },
    { mes: "Abril", ingresos: 135353, egresos: 1533 },
    { mes: "Mayo", ingresos: 1535, egresos: 5434 },
    { mes: "Junio", ingresos: 4343354, egresos: 5434543 },
    { mes: "Julio", ingresos: 435453, egresos: 4543 },
    { mes: "Agosto", ingresos: 78351, egresos: 7816 },
    { mes: "Septiembre", ingresos: 1878, egresos: 95634 },
    { mes: "Octubre", ingresos: 48483, egresos: 9433 },
    { mes: "Noviembre", ingresos: 35483, egresos: 53133 },
    { mes: "Diciembre", ingresos: 3843, egresos: 348133 }
];

let totalIngresos = sumarIngresos(flujoDeCajaAnual);
let totalEgresos = sumarEgresos(flujoDeCajaAnual);
calcularFlujo ()
preguntarAgregarNuevoFlujo(flujoDeCajaAnual)
    


