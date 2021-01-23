const readlineSync = require("readLine-sync")
let age = new Number(readlineSync.question("How old are you ? "));
if (age >= 18) {
    console.log("You're an adult.");
} else {
    console.log("You're not yet an adult.");
}