/* Mariana nos dice que para ella un número es de la suerte si se cumple las siguientes condiciones:
Es positivo
Es múltiplo de 2 o de 3
no es el 15

Escribe la función esNuemroDeLaSuerte()la cual recibe un número y le dice a Mariana si es un número de la suerte.
El número debe cumplir con las tres condiciones antes mencionadas.
*/

function esNumeroDeLaSuerte(num) {
    if (num > 0 && num !== 15 && (num % 2 === 0 || num % 3 === 0)) {
        document.write("Suerte");
    } else {
        document.write("Sin Suerte");
    }
}


esNumeroDeLaSuerte(12);  


/*Escribe una función que determine 
si un número es primo. Un número es primo 
si es mayor que 1 y solo es divisible por 1 
y por sí mismo.*/
function esPrimo(num) {
    if (num <= 1) return "No es Primo";
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return "No es Primo";
    }
    return "Es Primo";
}


console.log(esPrimo(7));  
console.log(esPrimo(10));

/*Escribe una función que reciba un número y
 determine si es par o impar.*/

 function esParOImpar(num) {
    if (num % 2 === 0) {
        return "Es Par";
    } else {
        return "Es Impar";
    }
}


console.log(esParOImpar(8));  
console.log(esParOImpar(7));  

/*Escribe una función que 
reciba un carácter y verifique si es una vocal (a, e, i, o, u).*/

function esVocal(letra) {
    letra = letra.toLowerCase();
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
        return "Es una vocal";
    } else {
        return "No es una vocal";
    }
}

console.log(esVocal('A'));  
console.log(esVocal('b'));  
