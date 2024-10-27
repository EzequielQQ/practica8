const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    return new Promise((resolve) => {
        console.log("Menú:");
        console.log("1. Escribir");
        console.log("2. Leer");
        console.log("3. Salir");
        rl.question("Elige una opción: ", (opcion) => {
            resolve(opcion);
        });
    });
}

async function ejecutarMenu() {
    let opcion;
    do {
        opcion = await mostrarMenu();
        switch (opcion) {
            case '1':
                console.log("Opción elegida: Escribir");
                break;
            case '2':
                console.log("Opción elegida: Leer");
                break;
            case '3':
                console.log("Saliendo...");
                break;
            default:
                console.log("Opción no válida, intenta de nuevo.");
        }
    } while (opcion !== '3');
    rl.close();
}

ejecutarMenu();
