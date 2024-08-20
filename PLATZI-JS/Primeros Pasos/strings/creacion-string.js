/* creacion de string */

const primeraOpcion = 'comillas simples'
const segundaOpcion = "comillas dobles"
const terceraOpcion = `comillas raras -  backtip`

/* concatenacion: opcion + */

const direccion = 'calle falsa 123'
const ciudad = 'Manchester'
const direccionCompleta = 'MI direccion completa es '  + direccion + ' ' + ciudad
console.log(direccionCompleta)

/* concatenacion: con template literals */

const nombre = 'Estiven'
const pais = 'Colombia '
const edad = 19
const presentacion = `Hola, soy ${nombre}, tengo ${edad} años y soy de ${pais}`
console.log(presentacion) 


/* concatenacion: con join() */
const primeraParte = 'me encanta '
const segundaParte = 'la fruta'
const terceraParte = '🍊'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(' '))


/* concatenacion: concat() */

const hobie1 = 'Leer'
const hobie2 = 'Jugar'
const hobie3 = 'Dormir'
const hobies = 'Mis hobies son: '.concat(hobie1, ', ', hobie2, ', ', hobie3)

console.log(hobies)

/* caracteres de escape */

/* const whatDoIDo = 'I'm a developer' */

/* 1. Escape alternativo */
const escapeAlternativo = "I'm a developer"

/* 2. Barra invertida */
const barrainvertida = 'I\'m a developer'

/* 3. templete literals */
const escapeComillaInvertida = `I'm a developer`


/* Escritura de strings largos */

/* 
las rosas son rojas,
las violetas son azules,
caracter inesperado, 
en la linea 86 
*/

const poema = 'Las rosas son rojas,\n' + 
                'Las violetas son azules,\n' +
                'Caracter inesperado,\n' +
                'En la linea 86'
console.log(poema)

console.log('--------------------------------------')

/* const poema2 = 'Las rosas son rojas,\n\
                Las violetas son azules,\n\ 
                Caracter inesperado,\n\
                En la linea 86'
console.log(poema2) */

const poema3 = `Las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
En la linea 86`
console.log(poema3)