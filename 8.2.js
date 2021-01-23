const rand = n => {
    return Math.round(Math.random() * n);
}
const compare = (a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
class Rectangle {
    constructor(topLeftXPos, TopLeftYPos, width, height) {
        this.A = topLeftXPos;
        this.C = TopLeftYPos;
        this.B = topLeftXPos + width;
        this.D = TopLeftYPos + height;
        this.surface = width * height;
    }
}
let arr = [];
for (let i = 0; i < 100; i++) {
    arr[i] = new Rectangle(rand(100), rand(100), rand(100), rand(100));
}
arr.sort((a, b) => {
    return a.surface - b.surface;
})
console.log(arr);