const readlineSync = require("readLine-sync");
const divisors = () => {
    let num = Math.abs(new Number(readlineSync.question("Enter a positive integer : ")));
    let arr = []
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    return arr.join(", ");
}
console.log(divisors());