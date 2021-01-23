class Rectangle {
    constructor(x, y, w, h) {
        this.A = x;
        this.C = y;
        this.B = x + w;
        this.D = y + h;
    }
    collides(b) {

        return ((((b.A < this.A) && (b.C < this.C)) &&
                ((b.D > this.A) && (b.B > this.A))) ||
            (((b.A < this.A) && ((b.C > this.A) && (b.C < this.D))) && (b.B > this.A)) ||
            (((b.A >= this.A) && (b.A < this.B)) && (((b.C >= this.A) && (b.C < this.D)) || ((b.C < this.A) && (b.D > this.A)))))
    }
}
let rect1 = new Rectangle(10, 10, 5, 5);
let rect2 = new Rectangle(12, 12, 100, 100);
console.log(rect1.collides(rect2));