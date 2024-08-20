const saludo = function (nombre) {
  return `Hola ${nombre}`;
};

const newSaludo = (nombre) => {
    return `Hola ${nombre}`;
};

/* Arrow function, returno implicito */

const newSaludo2 = nombre => `Hola ${nombre}`;
const newSaludo3 = (nombre, lastName) => `Hola ${nombre} ${lastName}`;


/* Enlace lexico */

const finctionalCharacter = {
    name: 'Wolverine',
    mensajeWolverine: function (message) {
        console.log(`${this.name} dice: ${message}`);
    },
    mensajeWolverineArrowFunction: (message) => {
        console.log(`${this.name} dice: ${message}`);
    }
};  

finctionalCharacter.mensajeWolverine('Hola mundo');
finctionalCharacter.mensajeWolverineArrowFunction('Hola mundo desde la flecha');