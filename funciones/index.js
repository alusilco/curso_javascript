function saludar(name = "sin nombre") {
    return("Hola " + name)
}

const despedir = (name) => {
    return ("Hasta luego " + name)
}

const intro = saludar("Maria")
const outro = despedir ("María")
console.log(intro, outro)


function sumar(a, b) {
    return a + b;
}

// Llamada a la función
let resultado = sumar(5, 3);
console.log(resultado);  // Salida: 8


const multiplicar = function(a, b) {
    return a * b;
};

// Llamada a la función
console.log(multiplicar(4, 6));  // Salida: 24


const dividir = (a, b) => a / b;

// Llamada a la función
console.log(dividir(10, 2));  // Salida: 5

function esPar(numero) {
    return numero % 2 === 0;
}

// Llamada a la función
console.log(esPar(8));  // Salida: true
console.log(esPar(7));  // Salida: false


