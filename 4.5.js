const readlineSync = require("readLine-sync")
const calcDistance = (a, b) => {
    // Fonction qui donne la distance entre 2 points dans un espace 2D en prennant comme parametres 2 points dans une table
    return Math.round(Math.sqrt(Math.pow((b[0] - a[0]), 2) + Math.pow((b[1] - a[1]), 2)) * 100) / 100;
}

let x1 = new Number(readlineSync.question("x1 :  "));
let x2 = new Number(readlineSync.question("x2 :  "));
let y1 = new Number(readlineSync.question("y1 :  "));
let y2 = new Number(readlineSync.question("y2 :  "));

let pointA = [x1, x2];
let pointB = [y1, y2];
console.log(calcDistance(pointA, pointB));