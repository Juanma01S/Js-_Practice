/* tipo entero y decimal */
const entero = 10;
const decimal = 10.5;
console.log(typeof entero, typeof decimal);


/* notacion cientifica */
const cientifica = 5e6;
console.log(cientifica);


/* infinitos y NaN */
const infinito = Infinity
const noEsUnNumero = NaN    
console.log(infinito, noEsUnNumero);


console.log('-----------------------')
console.log('Operaciones aritmeticas')

/* operaciones aritmeticas */

/* suma, resta, multipliacion y division */
const suma = 10 + 20;
console.log(suma);

const resta = 10 - 20;
console.log(resta);

const multiplicacion = 10 * 20;
console.log(multiplicacion);

const division = 10 / 20;
console.log(division);

/* modulo y exponenciacion*/
console.log('-----------------------')
console.log('modulo y exponienciacion')

const modulo = 10 % 3;
console.log(modulo);

const exponenciacion = 10 ** 3;
console.log(exponenciacion);

/* precision */
const resultado = 0.1 + 0.2;
console.log(resultado);
console.log(resultado.toFixed(2));
console.log(resultado === 0.3);

console.log('-----------------------')
/* operaciones avanzadas */

const raizCuadrada = Math.sqrt(144);
console.log(raizCuadrada);

const valorAbsoluto = Math.abs(-10);
console.log(valorAbsoluto);

const redondear = Math.round(5.5);
console.log(redondear);

const redondearHaciaArriba = Math.ceil(6.1);
console.log(redondearHaciaArriba);

const redondearHaciaAbajo = Math.floor(5.9);
console.log(redondearHaciaAbajo);

const random = Math.random();
console.log(random);

