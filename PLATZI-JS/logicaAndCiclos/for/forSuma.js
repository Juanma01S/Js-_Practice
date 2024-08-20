//Escribe un programa que sume todos los números pares del 1 al 100 e imprima el resultado en la consola.

/* 
let acumulador = 0;

if (numero < 100) {
  console.log("solo contamos hasta 100");
}

for (let numero = 0; numero < 100; numero++) {
  if (numero % 2 === 0) console.log("Numero par");
} */


let acumulador = 0;

for (let numero = 1; numero <= 100; numero++) {
    if (numero % 2 === 0) {
        acumulador += numero;
    }
}

console.log("La suma de los números pares del 1 al 100 es:", acumulador);




