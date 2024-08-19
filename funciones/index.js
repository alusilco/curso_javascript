function saludar(name = "sin nombre") {
    document.write("Hola " + name);
}

saludar("Maria");

function saludar(name) {
    return("Hola " + name)
}

const resultado = saludar("Maria")
console.log(resultado)