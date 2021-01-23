const arr = [];
for (let i = 0; i < 100; i++) {
    arr[i] = i + 1;
}
function tri(x) {
    if (x % 2 === 0) {
        return x / 2;
    } else {
        return x * 3;
    }
}
// console.log(arr);
console.log(arr.map(function(x) {
    if (x % 2 === 0) {
        return x / 2;
    } else {
        return x * 3;
    }
}));