//se define el contado y se inicializa, luego la condición y finalmente el incrmento 
for(let i = 0; i < 10; i++ ) {
    console.log(`esta es la iteración número:" ${i+1}`)
} 

//__________________________________________
for(let i = 10; i > 0; i--) {
    console.log(`esta es la iteración número:" ${i+1}`)
} 

//defino el array
const topSongs =  [ "Song1", "Song2", "Song3", "Song4", "Song5", "Song2"]

console.log(topSongs);
for(let i = 0; i < 5; i++) {
    document.writeln(`<p>${topSongs[i]}</p>`);
}


topSongs.forEach((song) => {
    document.writeln(`<p>${song}</p>`);
});

//array methods
//includes find, find, findIndex, sort, reverse, concat, join, some

const nums = [1, 10, 310, 3, 7, 701, 43, 20, 8, -4]

console.log(nums.includes(10));  // Salida: true
console.log(nums.includes(10));  // Salida: true
//método find
console.log(topSongs.find(song => song === "Song1"));
//metodo findIndex
console.log(topSongs.findIndex(song => song === "Song1"));

topSongs.sort()
topSongs.sort().reverse()

console.log(nums.sort((a, b) =>b-a)) //ordena los numeros de mayor a menor

console.log(nums.sort((a, b) =>a-b)) //ordena los numeros de menor a mayor

//CONCATENAMOS ARRAYS
const names = ["Ana", "Adriana", "Miguel"]

const combinedArray =topSongs.concat(names)
console.log(combinedArray)


//Método some, encuentra el primer valor que cumple la condición, en este caso el 40 y ya no busca
const edades = [10, 15, 4,3,9,7]
console.log(edades.some((element)=> element>18))//salida false, ningún valor satisface mayor a 18


console.log(names.join(" - ")) //esto devuelve texto, devuelve un string

//QUE HACE map???? Crea un arreglo nuevo despues de llamar a una funcion por cada elemento del array original:

const newNums = nums.map((n)=>n * 2)
console.log(newNums)
console.log(nums)

//QUE HACE FILTER????? Lo que hace es filtra, retorna un nuevo array. Muta, no es destructivo

const filteredNums = nums.filter((n)=> n > 30)
console.log(filteredNums)
console.log(nums)






















