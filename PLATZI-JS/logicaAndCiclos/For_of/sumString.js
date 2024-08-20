/*Ejercicio: Sumar Longitudes de Cadenas
Descripción:

Escribe un programa que tome un array de cadenas de texto y calcule la suma total de las longitudes de todas las cadenas.

Instrucciones:

Crea un array que contenga varias cadenas de texto, por ejemplo: ["Hola", "Mundo", "JavaScript", "es", "genial"].
Usa un bucle for...of para iterar sobre cada cadena en el array.
Dentro del bucle, suma la longitud de cada cadena a una variable acumuladora.
Al final, imprime la suma total de las longitudes de todas las cadenas.*/


nombres = ["juan", "pepo", "samuel"] // 14

let acumulador = 0

for (const nombre of nombres){
    acumulador =+ nombre.length
}

console.log('la suma es', acumulador)
