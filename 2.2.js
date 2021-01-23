const readlineSync = require("readLine-sync")
let min = new Number(readlineSync.question("Give a minimum value : "));
let max = new Number(readlineSync.question("Give a maximum value : "));
let current = new Number(readlineSync.question("Give the current value : "));

if (current > min && current < max) {
    console.log(current + " is between " + min + " and " + max);
} else if (min >= max) {
    console.log("You don't understand anything ! Bye bye !");
}
else {
    console.log(current + " is not between " + min + " and " + max);
}