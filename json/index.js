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

//Vamos agregar personal a nuestra lista

data.empleados.push({nombre: "Carolina", apellido: "Stanley"})
console.log(data.empleados)
  
//Los JSON cuando ingresan a nuestra aplicación estan en formato texto, lo convertimos en un formato válido, trabajamos con el objeto y volvemos a convertir a texto

json = JSON.stringify(data)
console.log(json)