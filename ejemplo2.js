const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function preguntarLetra() {
    return new Promise((resolve) => {
        rl.question("Introduce una letra (X o Z): ", (letra) => {
            letra = letra.toUpperCase();
            if (letra === 'X' || letra === 'Z') {
                resolve(letra);
            } else {
                console.log("Letra no válida. Debe ser 'X' o 'Z'. Inténtalo de nuevo.");
                resolve(preguntarLetra());
            }
        });
    });
}

function preguntarRepeticiones() {
    return new Promise((resolve) => {
        rl.question("Introduce el número de repeticiones (entre 1 y 15): ", (num) => {
            const repeticiones = parseInt(num);
            if (!isNaN(repeticiones) && repeticiones >= 1 && repeticiones <= 15) {
                resolve(repeticiones);
            } else {
                console.log("Número no válido. Debe estar entre 1 y 15. Inténtalo de nuevo.");
                resolve(preguntarRepeticiones());
            }
        });
    });
}

async function main() {
    const letra = await preguntarLetra();
    const repeticiones = await preguntarRepeticiones();
    const cadena = letra.repeat(repeticiones);
    console.log("Resultado: " + cadena);
    rl.close();
}

main();
