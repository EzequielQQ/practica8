const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contador = 0;

function preguntarLetra() {
    rl.question("Introduce una letra (escribe 'salir' para terminar): ", (letra) => {
        if (letra !== 'salir') {
            contador++;
            preguntarLetra(); // Llamada recursiva para seguir preguntando
        } else {
            console.log("Letras introducidas: " + contador);
            rl.close();
        }
    });
}

preguntarLetra();
