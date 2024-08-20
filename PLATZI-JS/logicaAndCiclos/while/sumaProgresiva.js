/* Escribe un programa que continúe pidiendo al usuario que ingrese números hasta que la suma acumulada de esos números supere un valor objetivo especificado (por ejemplo, 100). Una vez que se supere ese valor, el programa debe imprimir la suma total y el número de entradas que tomó llegar a esa suma.

Instrucciones:

Pide al usuario que ingrese un número objetivo (por ejemplo, 100) que la suma debe alcanzar o superar.
Usa un bucle while que continúe pidiendo al usuario que ingrese números y sume esos números.
El bucle debe continuar hasta que la suma de los números ingresados sea mayor o igual al número objetivo.
Lleva un registro del número de entradas que el usuario ha proporcionado.
Cuando se supere el valor objetivo, imprime:
La suma total.
El número de entradas que tomó alcanzar esa suma.
Ejemplo de Flujo del Programa:

El usuario establece el objetivo en 100.
El usuario ingresa 25 → Suma acumulada: 25.
El usuario ingresa 30 → Suma acumulada: 55.
El usuario ingresa 40 → Suma acumulada: 95.
El usuario ingresa 10 → Suma acumulada: 105.
El programa responde: "Has alcanzado la suma objetivo de 105 en 4 entradas." */

let sumaAcumulada = 0;
const max = 100;

while (sumaAcumulada < max) {
  // Solicita un número al usuario
  let numDig = parseInt(prompt("Ingrese un número, hasta que la suma supere 100"), 10);

  // Verifica si el valor ingresado no es un número
  if (isNaN(numDig)) {
    alert("Ingrese un número, campo vacío o inválido.");
    continue;
  }

  // Verifica si el número ingresado es negativo o mayor que el máximo permitido
  if (numDig < 0 || numDig > max) {
    alert("Número inválido. Debe estar entre 0 y 100.");
    continue;
  }

  // Actualiza la suma acumulada
  sumaAcumulada += numDig;

  // Verifica si la suma acumulada ha superado o alcanzado el máximo
  if (sumaAcumulada >= max) {
    sumaAcumulada = max; // Esto asegura que la suma no supere el máximo
    alert(`La suma ha alcanzado o superado 100: ${sumaAcumulada}`);
    alert('La suma ya ha llegado o pasado los 100');
    break;
  }

  // Muestra la suma acumulada actual
  alert(`La suma va en ${sumaAcumulada}`);
}
