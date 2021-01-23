const readlineSync = require("readLine-sync")

const rand = n => {
    return Math.round(Math.random() * n);
}
let num = rand(100);
let guessed;
let playAgain = true;
let nbVies = 10;

while (playAgain) {
    while (guessed != num && nbVies > 0) {
        guessed = new Number(readlineSync.question("Guess the number (between 0 and 100) : "));
        if (guessed < num) {
            nbVies -= 1;
            console.log("\nToo low ! You have " + nbVies + " lives left.\n");
        } else if (guessed > num) {
            nbVies -= 1;
            console.log("\nToo high ! You have " + nbVies + " lives left.\n");
        }
    }
    if (nbVies === 0) {
        console.log("\nGame over !\n");
    } else {
        console.log("\nYou win !\n");
    }
    let choix = readlineSync.question("Do you want to play again ? (Y/N) : ");
    if (String(choix.toLowerCase()) == "y") {
        playAgain = true;
        num = rand(100);
        nbVies = 10;
    } else {
        playAgain = false;
        console.log("\nByebye !");
    }
}