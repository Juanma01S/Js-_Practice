/* explicita */

const string = '123';
const integer = parseInt(string);
console.log(integer); // 123
console.log(typeof integer);

console.log('-------------------');

const stringDecimal = '123.45';
const float = parseFloat(stringDecimal);
console.log(float); // 123.45
console.log(typeof float);

console.log('-------------------');

const binary = '10120';
const decimal = parseInt(binary, 2);
console.log(decimal); // 10
console.log(typeof decimal);

console.log('-------------------');

/* implicita */

const suma = 5 + '5';
console.log(suma); // 55

const sumBolean = true + '2';
console.log(sumBolean); 

const sumNumber = 5 + true;
console.log(sumNumber); // 6

console.log('****************************');

const stringValue = '5';
const numberValue = 3;
const boleanValue = true;

console.log(stringValue + stringValue) //Concatena
console.log(stringValue + numberValue) //Concatena
console.log(stringValue +  boleanValue) //Concatena

console.log('---------------------')

console.log(numberValue + stringValue) //Concatena
console.log(numberValue + numberValue) //Suma
console.log(numberValue + boleanValue) //Suma

console.log('---------------------')

console.log(boleanValue + stringValue) //Concatena
console.log(boleanValue + numberValue) //Suma
console.log(boleanValue + boleanValue) //Suma


/* EJERCICIO */
console.log('-------------')
console.log('EJERCICIO')
const numero  = '123'
const numeroConvertido = parseInt(numero)

console.log(typeof numero)
console.log(typeof numeroConvertido)