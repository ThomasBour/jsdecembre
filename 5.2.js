const readlineSync = require("readLine-sync");

const askTvSerie = () => {
    let name = readlineSync.question("What's the name of your favorite serie ? ");
    let year = new Number(readlineSync.question("What's the year of production ? "));
    let numOfActors = new Number(readlineSync.question("How many people are playing in this show ? "));
    let actors = [];
    for (let i = 0; i < numOfActors; i++) {
        actors[i] = readlineSync.question("Enter the name of an actor : ");
    }
    let tvSerie = {
        Seriesname: name,
        yearOfProduction: year,
        casting: actors
    };
    return tvSerie;
}

const shuffle = arr => {
    let currentIndex = arr.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }
    return arr;
}
const randomizeCast = () => {
    let serie = askTvSerie();
    let num = Math.floor(Math.random() * serie.casting.length);
    let cast = shuffle(serie.casting);

    let newCast = shuffle(serie.casting).slice(num);
    return newCast;
}
console.log("This new casting should interesting you ! " + randomizeCast());