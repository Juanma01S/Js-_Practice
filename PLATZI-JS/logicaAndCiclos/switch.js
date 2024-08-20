/* 
Base del switch
switch(expresion){
    case valor1: 
        //codigo a ejecutar
        break
    case valor2:
        //codigo a ejecutar
        break
    default:
        //codigo a ejecutar
        break
} */

/* EJEMPLO PRACTICO */

const otherTeam = false

const equipoFutbol = prompt('Ingresa tu equipo de futbol favorito y te diremos de qué país es').toLowerCase();

switch(equipoFutbol){
    case 'barcelona':
    case 'real madrid':
    case 'atletico de madrid':
    case 'sevilla':
    case 'valencia':
    case 'villareal':
    case 'real sociedad':
    case 'athletic de bilbao':
        alert('Tu equipo de futbol es de España');
        break;
    
    case 'manchester united':
    case 'manchester city':
    case 'liverpool':
    case 'chelsea':
    case 'arsenal':
    case 'tottenham':
    case 'leicester':
    case 'everton':
        alert('Tu equipo de futbol es de Inglaterra');
        break;
    
    case 'juventus':
    case 'inter de milan':
    case 'milan':
    case 'roma':
    case 'napoli':
    case 'lazio':
    case 'atalanta':
    case 'fiorentina':
        alert('Tu equipo de futbol es de Italia');
        break;
    
    case 'bayern munich':
    case 'borussia dortmund':
    case 'bayer leverkusen':
    case 'rb leipzig':
    case 'wolfsburgo':
    case 'stuttgart':
    case 'hoffenheim':
    case 'eintracht frankfurt':
        alert('Tu equipo de futbol es de Alemania');
        break;

    case 'psg':
    case 'olympique de marsella':
    case 'lyon':
    case 'monaco':
    case 'lille':
    case 'nantes':
    case 'stade de reims':
    case 'rennes':
        alert('Tu equipo de futbol es de Francia');
        break;
    
    default:
        alert('Tu equipo de futbol no está en nuestra base de datos');
        break;

    }
    otherTeam = confirm('¿Quieres ingresar otro equipo de futbol?');
