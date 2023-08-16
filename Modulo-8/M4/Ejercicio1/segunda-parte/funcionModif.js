
/* Mejorar la usabilidad del código que hiciste en 
el segundo desafío del módulo 3. 
Crear una función que reciba el array
de inversiones y retorne un array. Agregar a 
cada ítem el campo “interés” con la fórmula 
correspondiente */

// funcion para realizar solo el calculo del interes
function formula(capital, plazo, tasa) {
    const interes = (capital * plazo * tasa) / 100;
    return interes;
}
function agregarInteresAlObjeto(listaPlanes, interes) {
    listaPlanes.forEach(objeto => {
    objeto.interes = interes;
});
}
/* la mejora que realice es que esta funcion devuelve la lista pero sumandole a los objetos ya vigentes en la lista el item interes y su valor corresponmdiente */
function calculoInteresPlanes(listaPlanes) {
    for (let i = 0; i < listaPlanes.length; i++) {
        const plan = listaPlanes[i];
        const interes = formula(plan.capital, plan.plazo, plan.tasa);
        console.log(`El interés por la toma del crédito ${plan.nombre} va a ser de: ${interes}`);
        alert(`El interés por la toma del crédito ${plan.nombre} va a ser de: ${interes}`);
        agregarInteresAlObjeto([plan], interes);
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
    if (respuesta === "si" || respuesta === "si") {
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
