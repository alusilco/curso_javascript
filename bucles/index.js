//se define el contado y se inicializa, luego la condición y finalmente el incrmento 
for(let i = 0; i < 10; i++ ) {
    console.log(`esta es la iteración número:" ${i+1}`)
} 

//__________________________________________
for(let i = 10; i > 0; i--) {
    console.log(`esta es la iteración número:" ${i+1}`)
} 

const topSongs =  [ "Song1", "Song2", "Song3", "Song4", "Song5"
]

console.log(topSongs);
for(let i = 0; i < 5; i++) {
    document.writeln(`<p>${topSongs[i]}</p>`);
}


topSongs.forEach((song) => {
    document.writeln(`<p>${song}</p>`);
});
