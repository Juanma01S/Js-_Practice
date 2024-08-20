//Esto fue ejecutado en el computador
window.name = 'batman'

function favoriteCharacter (){
    console.log(this.name)
}

favoriteCharacter()

//al ejecutar el código en el navegador, el resultado es window, es decir this se refiere al objeto window

function favoriteCharacter (){
    console.log(`Soy ${this.name}`)
}

const character = {
    name: 'batman',
    age: 'T5'
}

favoriteCharacter()