const hoy = newDate()
//console.log(hoy)
console.log(hoy.getDay())


switch(key) {
    case 0:
        document.write("Domingo")
    case 1:
        document.write("lunes")
    case 2:
        document.write("Martes")
    case 3:
        document.write("Miércoles")
    case 4:
        document.write("Jueves")
    case 5:
        document.write("Viernes")
    case 6:
        document.write("Sabado")
        break;
    default:
        document.write("No es un valor válido. No es un día de la semana")
        break;
}