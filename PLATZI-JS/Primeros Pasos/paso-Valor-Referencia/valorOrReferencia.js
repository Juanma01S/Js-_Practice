/* PASO POR VALOR */
let x =1
let y = "hola"
let z = null

let a = x
let b = y
let c = z

console.log(x,y,z,a,b,c)

a = 12
b = "mundo"
c = undefined



/* PASO POR REFERENCIA */

let frutas =['manzana']

frutas.push('pera')    
console.log(frutas)

let panes = ['🥐']
let copiaPanes = panes
panes.push('🍞')
console.log(panes, copiaPanes)