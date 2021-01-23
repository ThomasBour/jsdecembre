const readlineSync = require("readLine-sync")
let num = new Number(readlineSync.question("What's your favorite number ? "));

while (num != 5) {
    console.log("Are you sure ?");
    num = new Number(readlineSync.question("What's your favorite number ? "));
}
if (num == 5) {
    console.log("Bien joué !");
}