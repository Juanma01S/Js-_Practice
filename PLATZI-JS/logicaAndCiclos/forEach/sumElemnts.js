//Escribe un programa que sume todos los números de un array utilizando el método forEach.

/* 
Instrucciones:

Crea un array con varios números, por ejemplo: [1, 2, 3, 4, 5].
Usa el método forEach para iterar sobre cada número del array.
Suma cada número a una variable acumuladora.
Imprime la suma total al final. */

numeros = [1,2,3,4,5]
acumulador= 0

numeros.forEach((item) => {
    resultado = numeros[item] + acumulador 
    acumulador = acumulador + item
});

console.log(acumulador)

