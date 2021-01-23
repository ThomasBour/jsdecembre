let arr1 = [1, 2, 3, 4, 5];
let arr2 = [100, 101, 102];
const average = arr => {
    let a = 0;
    let b = 0;
    for (let i of arr) {
        a += i;
        b = a / arr.length;
    }
    return Math.round(b);
}
const rand = x => Math.round(Math.random() * x);
const arr = [];
for (let i = 0; i < rand(100); i++) {
    arr[i] = rand(1000);
}
console.log(arr);
console.log(average(arr));
console.log(average(arr1));
console.log(average(arr2));