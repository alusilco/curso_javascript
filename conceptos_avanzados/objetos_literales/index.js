const persona = {
    nombre: "Luke",
    apellido: "SKylander",
    edad: 30,
    habilidades: ["pilotaje", "control", "pintor"]
}

const persona1 = {
    nombre: "Lucía",
    apellido: "Silva",
    edad: 20,
    habilidades: ["diplomacia", "programar", "enseñar"]
}

console.log(persona)
console.log(persona.edad)
console.log(persona.habilidades)
console.log(persona.habilidades[2])
console.table(persona)

persona.origen = "Tatooine"
console.table(persona)


persona.habilidades.push("programar")
console.log(persona.habilidades)


const gente = [persona1, persona]
console.log(gente)

gente.forEach(persona => console.log(persona.nombre));
