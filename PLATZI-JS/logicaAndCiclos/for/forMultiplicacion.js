const numeroTabla = prompt ('Ingresa la tabla de multiplicar que deseas ver')

for(let i = 1; i <= 10; i++ ){
    resultado = numeroTabla * i
    console.log(numeroTabla + 'x' + i + '=' + resultado)
}