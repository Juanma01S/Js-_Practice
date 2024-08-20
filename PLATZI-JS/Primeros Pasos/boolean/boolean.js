const isActive = true;
const hasPermission = false;

/* conversion implicita */
const resultado = 5 < 3
console.log(resultado)

const name = 'Juan';
console.log(!!name)

const nameFalse = '';
console.log(!!nameFalse)

/* conversion explicita */

/* en js, toma el 0 como falso y el resto de numeros como verdaderos */

console.log('--------------------')

console.log(Boolean(2))
console.log(Boolean(0))

const valueFalse = 0
const otherValue = 1
const explicitBolean = Boolean(otherValue)
console.log(explicitBolean)