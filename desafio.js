const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function preguntarNumero() {
    return new Promise((resolve) => {
        rl.question("Adivina el número (entre 1 y 100): ", (respuesta) => {
            const numeroUsuario = parseInt(respuesta);
            resolve(numeroUsuario);
        });
    });
}

async function adivinarNumero() {
    let numeroUsuario;
    do {
        numeroUsuario = await preguntarNumero();
        intentos++;
        
        if (numeroUsuario < numeroAleatorio) {
            console.log("El número es mayor");
        } else if (numeroUsuario > numeroAleatorio) {
            console.log("El número es menor");
        } else {
            console.log(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
        }
    } while (numeroUsuario !== numeroAleatorio);
    rl.close();
}

adivinarNumero();
