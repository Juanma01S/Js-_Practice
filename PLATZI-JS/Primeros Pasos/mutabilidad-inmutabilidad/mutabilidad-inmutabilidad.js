/* tipo de dato primitivo - Inmutable */

let numero = 23
numero = numero + 10

console.log(numero) 

let esVerdadero = true
esVerdadero = false

console.log(esVerdadero)


/* tipo de dato compuesto - Mutable */ /* si modifica el valor original */

let usuario = {nombre: 'Juan', edad: 30}
usuario.edad = 25
console.log(usuario)

let frutas = ['manzana', 'pera', 'uva']
frutas[1] = 'banana'
console.log(frutas)


function cambiarName (objeto) {
    objeto.nombre = 'Pedro'
}

let persona = {nombre: 'Juan'}
cambiarName(persona)

console.log(persona)