//Este código demuestra cómo se puede usar una promesa para manejar 
//la asincronía, permitiendo que el código se ejecute sin bloquearse 
//mientras espera que se completen las operaciones.

let json = `{
    "empleados": [
      { "nombre": "Carlos", "apellido": "Pérez" },
      { "nombre": "Julieta", "apellido": "Calcaterra" },
      { "nombre": "Maribel", "apellido": "Roldan" }
    ]
}`;

function getData(recurso) {
    let data;
    const error = false; // Puedes cambiar esto a `true` para simular un error
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) { 
                reject("Error al obtener los datos"); // Manejo del error
            } else {
                data = JSON.parse(recurso); // Asume que el JSON es válido
                resolve(data); // Resuelve la promesa con los datos
            }
        }, 3000);
    });
}

getData(json)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));







    

/* OTRA FORMA

let json = `{
    "empleados": [
      { "nombre": "Carlos", "apellido": "Pérez" },
      { "nombre": "Julieta", "apellido": "Calcaterra" },
      { "nombre": "Maribel", "apellido": "Roldan" }
    ]
}`;

function getData(recurso) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                let data = JSON.parse(recurso); 
                resolve(data);
            } catch (error) {
                reject("Error al parsear el JSON: " + error.message);
            }
        }, 1000); 
    });
}


getData(json)
    .then(data => console.log(data))
    .catch(error => console.error(error)); */
