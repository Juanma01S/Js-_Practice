/* funciones puras */

/* side effects - efectos secundarios */
// 1. Modificar variables globales
// 2. Modificar parametros
// 3. Solicitudes HTTP (API)
// 4. Imprimir mensaje en consola o en pantalla
// 5. Manipulacion del DOM 
// 6. Obtener fecha, hora actual

function suma (a, b) {
  return a + b
}   

//Funcion impura
function suma (a, b) {
    console.log('A: ', a)
    console.log('B: ', b)

    const resultado = a + b
    console.log('Resultado: ', resultado)
    return resultado
}   

let total = 0

function sumaEfectoSecundario(a){
    total += a
    return total
}

/* Funcion pura */
function square (x) {
    return x * x
}

function addTen (y) {
    return y + 10
}

const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)