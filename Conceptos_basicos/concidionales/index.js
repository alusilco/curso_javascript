const hoy = new Date();
// console.log(hoy)
console.log(hoy.getDay());

switch (hoy.getDay()) {
    case 0:
        document.write("Domingo");
        break;
    case 1:
        document.write("Lunes");
        break;
    case 2:
        document.write("Martes");
        break;
    case 3:
        document.write("Miércoles");
        break;
    case 4:
        document.write("Jueves");
        break;
    case 5:
        document.write("Viernes");
        break;
    case 6:
        document.write("Sábado");
        break;
    default:
        document.write("No es un valor válido. No es un día de la semana");
        break;
}
