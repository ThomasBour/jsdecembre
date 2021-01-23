const rand = n => {
    return Math.round(Math.random() * n);
}
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
let rect = [];
for (let i = 0; i < 100; i++) {
    rect[i] = new Rectangle(rand(10000), rand(10000), rand(50), rand(50));
}
let col = [];
for (let i = 0; i < rect.length; i++) {
    rec = rect[i];

    if (i < rect.length - 1) {
        for (let j = i + 1; j < rect.length - 1; j++) {
            recSuivant = rect[j];
            if (rec.collides(recSuivant)) {
                col.push({
                    rect1: rec,
                    rect2: recSuivant
                })
            }
        }
    }
}
console.log(col);