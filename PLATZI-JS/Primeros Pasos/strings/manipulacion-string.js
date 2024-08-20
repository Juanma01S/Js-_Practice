/* String Primitivos */
const stringPrimitivo = 'soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivo2 = String('soy un string primitivo2')
console.log(typeof stringPrimitivo2)

/* String Objetos */
const stringObjeto = new String('soy un string objeto')
console.log(typeof stringObjeto)


/* Acceder a caracteres */
const saludo = 'hola, como estas?'

console.log(saludo[0])
console.log(saludo.length)
console.log(saludo.charAt(0))
console.log(saludo.charCodeAt(0))
console.log(saludo.indexOf(','))
console.log(saludo.indexOf('como'))
console.log(saludo.indexOf('salir'))
console.log(saludo.lastIndexOf('a'))
console.log(saludo.slice(0,5))
console.log(saludo.toLocaleUpperCase())
console.log(saludo.toLocaleLowerCase())

const saludoDivido = saludo.split(',')
console.log(saludoDivido)
console.log(saludoDivido[1])

const saludoConEspacio = ' hola, como estas? '
const saludoSinEspacio = saludoConEspacio.trim()
console.log(saludoSinEspacio)

const saludOriginal = 'hola mundo'
const nuevoSaludo = saludOriginal.replace('mundo', 'amigo')
console.log(nuevoSaludo)

