//operadores de comparación

const a = 8;
const b = 9;
const animal = "caballo";

document.writeln(a > b); // false
document.writeln(a === b); // false
document.writeln(a < b); // true
document.writeln(a == b); // false
document.writeln(a >= b); // false
document.writeln(a <= b); // true
document.writeln(a != b); // true
document.writeln(a !== b); // true

document.writeln(a === b && animal === "mono"); // false
document.writeln(a !== b && animal === "caballo"); // true
document.writeln(a !== b || animal === "caballo"); // true

// Opciones adicionales
document.writeln(!(a > b)); // true
document.writeln(!(a === b)); // true
document.writeln(a > b && animal === "caballo"); // false
document.writeln(a < b && animal !== "caballo"); // false
document.writeln(a > b || animal === "caballo"); // true
document.writeln(a < b || animal !== "caballo"); // true
document.writeln(8 == "8"); // true
document.writeln(8 === "8"); // false
document.writeln(8 != "8"); // false
document.writeln(8 !== "8"); // true
