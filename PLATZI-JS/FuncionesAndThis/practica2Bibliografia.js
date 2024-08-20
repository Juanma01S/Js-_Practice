function RealMadrid (player, number, position, goals) {
    this.player = player
    this.number = number
    this.position = position
    this.goals = goals
    this.captain = false

    this.infoGeneral = function () {
        console.log(`The player is:
            Name: ${this.player},
            Number: ${this.number},
            Position: ${this.position},
            Goals: ${this.goals},
            ${this.captain ? 'Captain' : 'No captain'} 
            `)
    }

    this.setCaptain = function () {
        this.captain = true
        console.log(`The captain is ${this.player}, this player is very good and has a lot of experience`)
    }
}

const player1 = new RealMadrid('Sergio Ramos', 4, 'Defender', 100)
const player2 = new RealMadrid('Estiven Posada Jr', 10, 'Forward', 400)

player1.infoGeneral()
player2.setCaptain()
player2.infoGeneral()


