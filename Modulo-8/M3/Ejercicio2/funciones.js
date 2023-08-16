// funcion para realizar solo el calculo del interes
function formula(capital, plazo, tasa) {
    const interes = (capital * plazo * tasa) / 100;
    return interes;
}

// funcion para recibir una propuesta y calcular el interes
function calculoInteresPlanes(listaPlanes) {
    let interes;
    for (let i = 0; i < listaPlanes.length; i++) {
        const plan = listaPlanes[i];
        interes = formula(plan.capital, plan.plazo, plan.tasa);
        console.log((`El interés por la toma del crédito ${plan.nombre} va a ser de: ${interes}`))
        alert(`El interés por la toma del crédito ${plan.nombre} va a ser de: ${interes}`);
    }
}

function agregarPropuesta(nombre, capital, plazo, tasa, listaPlanes) {
    listaPlanes.push({ nombre, capital, plazo, tasa });
    const interes = formula(capital, plazo, tasa);
    console.log(`El interés por la toma del crédito ${nombre} va a ser de: ${interes}`);
    alert(`El interés por la toma del crédito ${nombre} va a ser de: ${interes}`);
}

function preguntarAgregarPropuesta(listaPlanes) {
    const respuesta = prompt("¿Desea agregar una propuesta? (Sí/No)");
    if (respuesta === "si" || respuesta === "SI") {
        let nombre, capital, plazo, tasa;
        do {
            nombre = prompt("Ingrese el nombre del plan:");
            capital = parseInt(prompt("Ingrese el capital del plan:"));
            plazo = parseInt(prompt("Ingrese el plazo del plan:"));
            tasa = parseFloat(prompt("Ingrese la tasa del plan:"));
        } while (!nombre || isNaN(capital) || isNaN(plazo) || isNaN(tasa));

        agregarPropuesta(nombre, capital, plazo, tasa, listaPlanes);
        console.log("Propuesta agregada exitosamente.");
        alert("Propuesta agregada exitosamente.");
    } else {
        console.log("No se agregó ninguna propuesta.");
        alert("No se agregó ninguna propuesta.");
    }
}



