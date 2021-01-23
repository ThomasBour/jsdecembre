class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = new Number(xPos);
        this.yPos = new Number(yPos);
        this.radius = radius;
    }
    move(xOffset, yOffset) {
        this.xPos = this.xPos + new Number(xOffset);
        this.yPos = this.yPos + new Number(yOffset);
    }
    get surface() {
        return Math.round(3.14159 * (this.radius * this.radius) * 100) / 100;
    }
}
let a = new Circle;
a.xPos = 1;
a.yPos = 1;
a.radius = 30;
console.log(a.xPos + ", " + a.yPos + ", " + a.radius);
a.move(50, -50);
console.log(a.xPos + ", " + a.yPos + ", " + a.radius);