
const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const numerosMayores5 = [];

for (const numero of numeros) {
  const num = parseInt(numero, 10);
  if (num > 5) {
    numerosMayores5.push(num);
  }
}


console.log(numerosMayores5);