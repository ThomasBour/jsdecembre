const readlineSync = require("readLine-sync")
const fibo = (n, a, b) => {
    if (n === 0) {
        return a;
    } else if ( n === 1) {
        return b;
    } else {
        return fibo(n-1, b, a+b);
    }
}
const fibonacci = n => {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
const fiboSuite = n => {
    let arr = [];
    for (i = 0; i < n; i ++) {
        arr[i] = fibo(i, 0, 1);
        // arr[i] = fibonacci(i);
    }
    return arr.join(", ");
}
let num = new Number(readlineSync.question("How many number do you want ? "));
console.log("Here are the " + num + " first Fibonacci numbers : " + fiboSuite(num));