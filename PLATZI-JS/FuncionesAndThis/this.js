//Enlace implicíto o implicit binding
const house = {
    dogName: 'channel',
    dogGreeting: function() {
        console.log(`Hello, I'm ${this.dogName}`);
    }
}

house.dogGreeting(); // Hello, I'm channel

//Enlace explicíto o explicit binding


function dogGreeting() {
    console.log(`Hello, I'm ${this.dogName}`);
}

const newHouse = {
    dogName: 'Frosty',
    dogGAge: 3
}

dogGreeting.call (newHouse)

function newDogGreeting(owner, addres) {
    console.log(`Hello, I'm ${this.dogName} and I live with ${owner} on ${addres}`);
}

const owner = 'Juan'
const addres = 'Calle 123'

newDogGreeting.call(newHouse, owner, addres)

