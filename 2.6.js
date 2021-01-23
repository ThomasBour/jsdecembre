const readlineSync = require("readLine-sync")
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let num = new Number(readlineSync.question("Pick a number between 1 and 7 : "));

while (num < 1 || num > 7) {
    num = new Number(readlineSync.question("Between 1 and 7 I said !!  "));
}
if (num > 0 && num < 7) {
    console.log("Day " + num + " is " + days[num-1] + ".");
} else if (num == 7) {
    console.log("It's Finally Sunday !!!");
}