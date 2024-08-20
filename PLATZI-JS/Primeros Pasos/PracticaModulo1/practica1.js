/* red social */

/* 1. Informacion del usuario */
const username = 'Alias.J.J'
const nombre = 'Juan'
const age = 19
const isStudent = true

/* 2. Direccion */

const direccion = {
    calle: 'Calle 123',
    ciudad: 'Medallo',
    codigoPostal: '050012'
}

/* 3. Hobbies */

const hobbies = ['Futbol', 'Videojuegos', 'Programar ']

/* 4. texto personalizado biografia */

const biografia = `Hola, mi nombre es ${nombre}, soy una persona de ${age} años, me caracterizo por ser una persona que le gusta mucho el deporte, en especial el Futbol; vale destacar que tengo otros hobbies como lo son ${hobbies.join(', ')}. Actualente vivo en ${direccion.calle}, en la ciudad de ${direccion.ciudad}, la cual me gusta mucho y he vivido toda mi vida alli. Me dedico actualmente a estudiar y tengo un alias en mis redes sociales, el cual es ${username}, y asi mucha gente me reconoce.`

console.log(biografia)