/* Tipo de dato complejo - paso por referencia */

let frutas ={
    naranja: '🍊'
}

let vegetales = frutas

vegetales.naranja = '🥦'
console.log(frutas, vegetales)



let ropa={
    pantalon: '👖'
}

ropa.blusa = '👚'
console.log(ropa)