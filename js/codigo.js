// Funciones
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado = "piedra 🪨"
    } else if(jugada == 2) {
        resultado = "paple 📃"
    } else if(jugada == 3) {
        resultado = "tijera ✂️"
    } else {
        resultado = "mal elegido"
    }
    return resultado
}

function combate() {
    pc = aleatorio(1,3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")

    alert("Pc elige: " + eleccion(pc))
    alert("Tú eliges: " + eleccion(jugador))

    // COMBATE
    if(pc == jugador) {
        alert("Empate :|")
        return "empate"
    } else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        alert("¡Ganaste! ;)")
        return "victoria"
    } else {
        alert("Perdiste :(")
        return "derrota"
    }
}

// Variables -> 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let pc = 0
let victorias = 0
let perdidas = 0

// Ciclo
while(victorias < 3 && perdidas < 3) {
    let resultadoCombate = combate()

    if(resultadoCombate == "victoria") {
        victorias += 1
    } else if (resultadoCombate == "derrota") {
        perdidas += 1
    }
}

alert("Ganaste " + victorias + " veces. Perdiste " + perdidas + " veces.")