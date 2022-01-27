/* prompt para obtener el número de partidas */

do {
  var numeroPartidas = parseInt(prompt("Ingrese número de partidas"));
} while (isNaN(numeroPartidas) || numeroPartidas <= 0);

/* Bucle que repite las acciones dependiendo de el numero de partidas */

for (let i = 1; i <= numeroPartidas; i++) {
  let decisionJugador = prompt(
    "Ingrese su opción: 1- Piedra 2- Papel 3- Tijera"
  );

  if (
    decisionJugador == "piedra" ||
    decisionJugador == "papel" ||
    decisionJugador == "tijera"
  ) {
    let decisionComputador = Math.floor(Math.random() * 3 + 1); // 1- Piedra 2- Papel 3- Tijera
    switch (decisionComputador) {
      case 1:
        1;
        alert("El computador eligió Piedra");
        break;
      case 2:
        2;
        alert("El computador eligió Papel");
        break;
      case 3:
        3;
        alert("El computador eligió Tijera");
        break;
    }

    jugar(decisionJugador, decisionComputador);
  } else {
    alert("OPCIÓN INVÁLIDA");
  }
}

document.write("<h1>FIN DEL JUEGO</h1>");

/* Función que compara las opciones del jugador y el computador */
function jugar(Jugador, Computador) {
  if (
    (Jugador == "piedra" && Computador == 1) ||
    (Jugador == "papel" && Computador == 2) ||
    (Jugador == "tijera" && Computador == 3)
  ) {
    alert("Es un empate");
  } else if (
    (Jugador == "piedra" && Computador == 3) ||
    (Jugador == "tijera" && Computador == 2) ||
    (Jugador == "papel" && Computador == 1)
  ) {
    alert("Gana el jugador");
  } else if (
    (Jugador == "papel" && Computador == 3) ||
    (Jugador == "tijera" && Computador == 1) ||
    (Jugador == "piedra" && Computador == 2)
  ) {
    alert("Gana el computador");
  }
}
