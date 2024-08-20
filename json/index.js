let json = `{
    "empleados": [
      { "nombre": "Carlos", "apellido": "Pérez" },
      { "nombre": "Julieta", "apellido": "Calcaterra" },
      { "nombre": "Maribel", "apellido": "Roldan" }
    ]
}`;

console.log(json) //esto muestra solo la cadena de texto


const data = JSON.parse(json)
console.log(data) // esto muestra el json como objeto porque lo he convertido en un ojeto js. Con parse puedo convertir los datos


  