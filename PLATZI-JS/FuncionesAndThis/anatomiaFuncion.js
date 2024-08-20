function calcularDescuento (precio, descuentoProcentaje) {
    const descuento = (precio * descuentoProcentaje) / 100;
    const precioDescuento = precio - descuento

    return precioDescuento;

}

const precioOriginal = 520;
const descuentoProcentaje = 15;
const precioConDescuento = calcularDescuento(precioOriginal, descuentoProcentaje);

console.log('El precio original es: $' + precioOriginal);
console.log('El descuento es: ' + descuentoProcentaje + '%');
console.log('El precio con descuento es: $' + precioConDescuento);