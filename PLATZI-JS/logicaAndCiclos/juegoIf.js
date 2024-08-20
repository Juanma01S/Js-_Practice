let jugarDeNuevo = true;

while (jugarDeNuevo) {
    const numeroSecreto = Math.floor(Math.random() * 12 + 1);
    let intentosRestantes = 3;
    let adivinado = false;

    while (intentosRestantes > 0 && !adivinado) {
        const numeroUsuario = parseInt(prompt(`Tienes ${intentosRestantes} intento(s) restante(s). Ingresa un número del 1 al 12:`));

        if (numeroUsuario === null) {  // Si el usuario presiona "Cancelar"
            alert('Juego cancelado.');
            jugarDeNuevo = false;
            break;
        }
        
        if (isNaN(numeroUsuario)) {
            alert('Por favor, ingresa un número válido.');
            continue;
        }

        alert(`El número con el que jugaste es ${numeroUsuario}`);

        if (numeroSecreto === numeroUsuario) {
            alert('¡Felicidades! ¡Adivinaste el número secreto! ¡Has ganado!');
            adivinado = true;
        } else if (numeroSecreto < numeroUsuario) {
            alert('El número secreto es menor al que ingresaste.');
        } else {
            alert('El número secreto es mayor al que ingresaste.');
        }

        intentosRestantes--;
    }

    if (!adivinado && jugarDeNuevo) {
        alert(`¡Lo siento! No adivinaste el número secreto, que era ${numeroSecreto}. ¡Sigue intentando!`);
    }

    if (jugarDeNuevo) {
        let respuesta = prompt('¿Quieres jugar de nuevo? (si/no)').toLowerCase();

        if (respuesta === null) {
            alert('Juego cancelado.');
            jugarDeNuevo = false;
            break;
        }

        // Validar entrada del usuario
        while (respuesta !== 'si' && respuesta !== 'no') {
            respuesta = prompt('Respuesta no válida. ¿Quieres jugar de nuevo? (si/no)').toLowerCase();
            if (respuesta === null) {
                alert('Juego cancelado.');
                jugarDeNuevo = false;
                break;
            }
        }

        if (respuesta === 'no') {
            jugarDeNuevo = false;
            alert('¡Gracias por jugar!');
        }
    }
}
