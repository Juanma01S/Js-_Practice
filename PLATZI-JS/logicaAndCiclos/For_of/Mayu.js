/*Ejercicio: Capitalizar la Primera Letra de Cada Palabra
Descripción:

Escribe un programa que tome un array de palabras y capitalice la primera letra de cada palabra.

Instrucciones:

Crea un array que contenga varias palabras en minúsculas, por ejemplo: ["hola", "mundo", "javascript", "es", "genial"].
Usa un bucle for...of para iterar sobre cada palabra en el array.
Dentro del bucle, capitaliza la primera letra de cada palabra.
Guarda las palabras modificadas en un nuevo array.
Imprime el nuevo array con las palabras capitalizadas.*/

let frases = ["hola", "mundo", "javascript", "es", "genial"]
const mayus = []

for (palabra of frases){
    palabra = palabra.toUpperCase()
    mayus.push(palabra)
}
    
console.log(mayus)

