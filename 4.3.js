const readlineSync = require("readline-sync");
let n = readlineSync.question(
  "veuillez introduire le nombre de chiffre qui sera créé dans le tableau : "
);
let tab = [];

multiRand(n);
console.log(tab);
function multiRand(n) {
  for (let i = 0; i < n; i++) {
    tab.push(random());
  }
  return tab;
}
function random() {
  return Math.floor(Math.random() * 10 + 1);
  // 'Math.floor()' pour que 'Math.random()' soit un chiffre sans virgule
}