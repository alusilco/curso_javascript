function saludar(name = "sin nombre") {
    return("Hola " + name)
}

const despedir = (name) => {
    return ("Hasta luego " + name)
}

const intro = saludar("Maria")
const outro = despedir ("María")
console.log(intro, outro)


