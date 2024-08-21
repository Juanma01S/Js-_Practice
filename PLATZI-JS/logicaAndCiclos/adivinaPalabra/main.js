let numIntentos = 4;

const palabrasOcultas_pistas = {
  liverpol: "juega normalmente de rojo",
  manchester_united:
    "juega normalmente de rojo, el equipo con mas premier league",
  everton: "normalmente juega de azul y tiene mas de 4 premier league",
  norwich: "los pajaritos juegan normalmente de amarillo",
  arsenal: "unico equipo en ganar la premier sin perder un partido",
  chelsea:
    "juegan normalmente de azul y es de los equipos con mayor fair play financiero",
  fullham:
    "juegan normalmente de blanco y negro, ascendio hace dos temporadas a al premier league",
  aston_vila: "juega de vinotinto normalmente y tiene una champions",
  newcastle: "se apoda por hurracas",
  nottingham: "juegan normalmente de rojo y tiene mas de 1 champions",
};

while (numIntentos > 0) {
  for (const equipo in palabrasOcultas_pistas) {
    let pista = palabrasOcultas_pistas[equipo];
    console.log(pista, equipo);

    let equipoDig = prompt(
      "Ingrese su equipo a adivinar" + " " + "su pista es: " + palabrasOcultas_pistas[equipo]
    );

    numIntentos--;

    if (equipoDig === equipo) {
      alert("Adivinaste el equipo, se gano un pollo");
      break;
    } else {
      alert("lastima no has adivinado");
      continue;
    }
  }

 
}

/* while (numIntentos > acumulador) {
  let equipoDig = prompt(
    'Bienvenido al juego "Adivina el equipo de Inglaterra" '
  ).toLowerCase();


 

  if (equipoDig === null) {
    alert("Porfis ingresa un equipo");
    continue;
  }

  numIntentos += acumulador;

  if (equipoDig === palabrasOcultas_pistas) {
    alert("Felicitaciones, adivinaste el equipo");
    break;
  } else {
    numIntentos--;
    alert(`No adivinaste, tienes ${numIntentos}`);
  }
}
 */
