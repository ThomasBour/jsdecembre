const readlineSync = require("readLine-sync");

let n = new Number(readlineSync.question("How many number do you want to add ? "));
let a = 0;

for (let i = 0; i < n; i++) {
    let b = new Number(readlineSync.question("Pick another number : "));
    a = a + b;
}
console.log(a);