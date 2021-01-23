let i = 0;
const arr =[];
for (let y = 0; y < 100; y++) {
    arr[y] = y + 1;
}
const estPair = x => x % 2 === 0;
const estImpair = x => x % 2 !== 0;
const auCarre = x => x ** 2;
console.log(arr.map(x => x * x));