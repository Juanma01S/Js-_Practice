/* let contadorVocales = 0
const palabra = prompt('Ingresa tu palabra a evaluar').toLocaleLowerCase

for ( let i= 0; i < palabra.length; i++ ){
    if( palabra = ['a', 'e', 'i', 'o', 'u'] ){
        contadorVocales ++
        console.log(contadorVocales)
    }    
} */

let contadorVocales = 0;
const palabra = prompt("Ingresa tu palabra a evaluar").toLowerCase();
const vocales = ["a", "e", "i", "o", "u"];

for (let i = 0; i < palabra.length; i++) {
  if (vocales.includes(palabra[i])) {
    contadorVocales++;
  }
}
console.log("La cantidad de vocales en la palabra es:", contadorVocales);

