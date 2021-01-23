const readlineSync = require("readline-sync");
let longeur = readlineSync.question(" Entrer la largeur du rectangle en 'cm' ");
let largeur = readlineSync.question(" Entrer la longeur du rectangle en 'cm' ");

console.log(" La surface est de " + calcSurface(longeur, largeur) + " cm");
function calcSurface(longeur, largeur) {
  let surface = 0;
  surface = longeur * largeur;
  return surface;
}