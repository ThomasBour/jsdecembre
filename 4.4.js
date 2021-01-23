const readlineSync = require('readline-sync');
function average(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        avrg = sum / arr.length;
    }
    return avrg;
}
function min(arr) {
    return (Math.min.apply(null, arr));
}
function max(arr) {
    return (Math.max.apply(null, arr));
}
function rand10() {
    return Math.floor(Math.random() * 11);
}
function multiRand(n) {
    for (let i = 0; i < n; i += 1) {
        array_new.push(rand10());
    }
    console.log("the random numbers created are " + array_new)
}
let n = readlineSync.question('give me a number');
let array_new = [];
multiRand(n); // we call the function multirand and create the random numbers
console.log("the maximum of the random numbers is " + max(array_new));
console.log("the minimum of the random numbers is " + min(array_new));
console.log("the average of the random numbers is " + average(array_new));