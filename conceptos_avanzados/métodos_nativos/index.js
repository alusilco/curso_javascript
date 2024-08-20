//setTimeout es una función que ejecuta una función o una porción de código después de un período de tiempo especificado en milisegundos.


const timer = setTimeout(() => {
    console.log("Mundo");
}, 2000); // Retraso de 2000 milisegundos (2 segundos)

console.log("Hola");

// Si se quisiera cancelar el timeout antes de que ejecute, se usaría:
clearTimeout(timer);



//setInterval es una función que ejecuta una función o una porción de código repetidamente, con un intervalo de tiempo especificado en milisegundos. Ejecuta repetidamente

const intervalo = setInterval(() => {
    console.log("Esto es un bucle infinito detenido por el tiempo")
    
}, 1000)
 //ejemplo de uso

 let contador = 0
 const intervalo1 = setInterval(() => {
    console.log("Esto es un contador", contador)
    contador++
    if (contador === 5) {
        clearInterval(intervalo1)
    }
}, 1000)