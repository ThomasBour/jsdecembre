const readlineSync = require('readline-sync');
const askTvSerie = () => { 
    let favTvSerie = {
        Name: readlineSync.question('give me a name '), 
        "Production year": readlineSync.question('give me a production year '), 
        "Names of the cast members": []
    }
    let numberCast = readlineSync.question('give me the number of cast ');
    for (let i = 0; i < numberCast; i += 1) {
        favTvSerie["Names of the cast members"].push(readlineSync.question('give me the name of the cast member '));
    }
    return favTvSerie
}
console.log(JSON.stringify(askTvSerie())); //ecrire l'object facTvSerie en tant que JSON dans la console