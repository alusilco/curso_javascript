/*Definir un arreglo llamado lista de compras con productos en el
Pedir al usuario por pantalla que ingrese el producto
Si el producto no esta en la lista, agregarlo y mostrar la lista por pantalla actualizada.
Si el producto ya estaba en la lista no agrega nada y muestra la lista 
¿Que sucede con las mayusculas y minusculas?
*/


const listaDeCompras = [
    "leche",
    "huevos",
    "atún",
    "harina",
    "avena",
    "café",
];

const producto = prompt("Ingrese un producto para la lista de compra").toLowerCase();

if (listaDeCompras.map(p => p.toLowerCase()).includes(producto)) {
    alert("El producto ya está en la lista y no se agregará.");
} else {
    listaDeCompras.push(producto);
    alert("Lista de compras actualizada: " + listaDeCompras.join(", "));
}
