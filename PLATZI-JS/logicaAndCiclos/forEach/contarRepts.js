/* scribe un programa que cuente cuántas veces aparece un número específico en un array utilizando el método forEach.

Instrucciones:

Crea un array con varios números, incluyendo algunos repetidos, por ejemplo: [1, 2, 3, 4, 5, 1, 2, 1].
Usa el método forEach para iterar sobre cada número del array.
Lleva un conteo de cuántas veces aparece un número específico (por ejemplo, el número 1).
Imprime la cantidad de veces que aparece el número en el array. */


const numeroDigitado = parseInt(prompt('Digita el numero a contar para saber si esta repitido'))
let contador = 0
array = [1,2,5,6,3,7,5,8,8,2,5,9,6,3,4,7,5],

array.forEach((number) => {
    if(numeroDigitado === number){
        contador++
    }
});


console.log('su numero se repitio ' + contador)