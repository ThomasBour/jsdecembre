let arr1 = [1, 2, 3, 4, 5];
let arr2 = [100, 101, 102];

const add = arr => {
    let a = 0;
    for (let i of arr) {
        a += i;
    }
    return a;
}
console.log(add(arr1));
console.log(add(arr2));