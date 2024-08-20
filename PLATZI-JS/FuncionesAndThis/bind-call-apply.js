/* const age = 20; */
const hobbie = 'Jugar videojuegos';

function introUniversidad (age, hobbie){
    console.log(`Hola, mi nombre es ${this.name}, tengo ${age} años de edad y estudio en la universidad ${this.university}. Mi hobbie es ${hobbie}`);
}

const estudiante = {
    name: 'Juan',
    university: 'Jaime Isaza Cadavid'
}

introUniversidad.call(estudiante, 20, hobbie) //se puede pasar los argumentos directamente o definirlos antes en alguna variable, por ejemplo el 20 lo pongo normal y el hobbie lo pongo en una variable

const valoresNecesarios = [21, hobbie]
introUniversidad.apply(estudiante, valoresNecesarios)

const withBind= introUniversidad.bind(estudiante, 25, hobbie)
withBind()
/* console.log(withBind()) */
