function Rocket(name, mensaje) {
  this.name = name;
  this.launchMessage = function () {
    console.log(mensaje);
  };
}

const falcon9Rocket = new Rocket('Falcon 9', 'mensaje de lanzamiento');
const falconRocket = new Rocket('Falcon ', 'hemos despegado');

console.log(falcon9Rocket.name); // Falcon 9
falcon9Rocket.launchMessage(); // mensaje de lanzamiento

const RocketFlecha = (name, mensaje) => ({
  name: name,
  launchMessage: mensaje
});

const mensajeArrowFunction = () => 'Lanzamiento exitoso';
const falcon9RocketArrow = RocketFlecha('Falcon 9', mensajeArrowFunction());

console.log(falcon9RocketArrow.name); // Falcon 9
console.log(falcon9RocketArrow.launchMessage); // Lanzamiento exitoso
