// 1) 
function saludo(x) {
    x = prompt("ingrese su nombre")
    x = x.toString().toLowerCase()
    if ((x == "santino") || (x == "nahuel")) {
        alert("Bienvenido " + x + " ,acceso concedido")
    }
    else {
        alert("bienvenid@ " + x)
    }
}
// 2)
function mayorEdad(x) {
    x = prompt("Ingrese su edad")
    if (x >= 120) {
        alert("¿Usted sigue con vida?")
    }
    else if (x >= 18) {
        alert("Usted es mayor de edad")
    }
    else if (x >= 0) {
        alert("Usted es menor de edad")
    }
    else {
        alert("Usted ni siquiera nació")
    }
}
// 3)
function categoriaEdad(x) {
    x = prompt("Ingrese su edad")
    if (x >= 120) {
        alert("Muerto")
    }
    else if (x >= 60) {
        alert("Usted es un anciano")
    }
    else if (x >= 27) {
        alert("Usted es un adulto")
    }
    else if (x >= 18) {
        alert("Usted es un joven")
    }
    else if (x >= 12) {
        alert("Usted es un adolescente")
    }
    else if (x >= 6) {
        alert("Usted es un niño")
    }
    else if (x >= 0) {
        alert("Usted es un bebé")
    }
    else {
        alert("Usted ni siquiera nació")
    }
}
// 4)
function diaLaborable(x) {
    x = prompt("Ingrese un día de la semana")
    x = x.toString().toLowerCase()
    if ((x == "sabado") || (x == "domingo") || (x == "sábado")) {
        alert(x + (" es un fin de semana"))
    }
    else if ((x == "lunes") || (x == "martes") || (x == "miercoles") || (x == "miércoles") || (x == "jueves") || (x == "viernes")) {
        alert(x + " es un dia laborable")
    }
}
// 5) 
function contraseña() {
    if (document.getElementById("datos").value == "secreto") {
        document.getElementById("mensaje").innerHTML = "Acceso concedido"
    }
    else {
        document.getElementById("mensaje").innerHTML = "Acceso denegado"
    }
}
// 6)
function multiplo5(num) {
    if (num % 5 == 0) {
        return "Es multiplo de 5"
    }
    else {
        return "No es multiplo de 5"
    }
}
// 6.2)
function multiplo(x) {
    if (document.getElementById("data").value % 5 == 0) {
        document.getElementById("mensaje2").innerHTML = "Es multiplo de 5"
    }
    else {
        document.getElementById("mensaje2").innerHTML = "No es multiplo de 5"
    }
}

// 7)
function descuento(edad, precio) {
    if ((edad >= 65) && (edad < 120)) {
        precio = precio * 0.9
        return precio
    }
    else {
        return precio
    }
}
// 8)
function notas(num) {
    if (num >= 80) {
        return "MS"
    }
    else if (num >= 60) {
        return "S"
    }
    else {
        return "EP"
    }
}
// 8.2)
function notas2() {
    if (document.getElementById("nota").value >= 80) {
        document.getElementById("mensaje3").innerHTML = "Es un MS"
    }
    else if (document.getElementById("nota").value >= 60) {
        document.getElementById("mensaje3").innerHTML = "Es un S"
    }
    else {
        document.getElementById("mensaje3").innerHTML = "Es un EP"

    }
}
// 9 y de paso mejoramos el 4)
function diaSemana() {
    if (document.getElementById("menu").value == 1) {
        document.getElementById("mensaje4").innerHTML = "Es lunes, dia laborable"
    }
    else if (document.getElementById("menu").value == 2) {
        document.getElementById("mensaje4").innerHTML = "Es martes, dia laborable"

    }
    else if (document.getElementById("menu").value == 3) {
        document.getElementById("mensaje4").innerHTML = "Es miércoles, dia laborable"

    }
    else if (document.getElementById("menu").value == 4) {
        document.getElementById("mensaje4").innerHTML = "Es jueves, dia laborable"

    }
    else if (document.getElementById("menu").value == 5) {
        document.getElementById("mensaje4").innerHTML = "Es viernes, dia laborable"

    }
    else if (document.getElementById("menu").value == 6) {
        document.getElementById("mensaje4").innerHTML = "Es sábado, fin de semana"

    }
    else if (document.getElementById("menu").value == 7) {
        document.getElementById("mensaje4").innerHTML = "Es domingo, fin de semana"

    }
}
// 10)
function bisiesto(num) {
    if ((num % 400 == 0)||(num % 4 == 0) && (num % 100 != 0)) {
        return num + " Es un año bisiesto"
    }
    else {
        return num + " no es un año bisiesto"
    }
}
// 10.2)
function bisiesto2() {
    if ((document.getElementById("año").value % 400 == 0) || (document.getElementById("año").value % 4 == 0) && (document.getElementById("año").value % 100 != 0)) {
        document.getElementById("mensaje5").innerHTML = "Es un año bisiesto"
    }
    else {
        document.getElementById("mensaje5").innerHTML = "No es un año bisiesto"

    }
}
// 11)
function cadena(text, text2) {
    text = prompt("ingrese texto")
    text2 = prompt("ingrese texto")
    if (text == text2) {
        alert("Son dos textos iguales")
    }
    else {
        alert("No son dos textos iguales")
    }
}
// 12)
function edadActual(num) {
    alert((-num + 2023) + " es tu edad actual")
}
// 12.2
function edadActual2() {
    document.getElementById("mensaje6").innerHTML = 2023 - document.getElementById("añoNace").value + " es tu edad actual"
}