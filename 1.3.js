const { hoppers } = require("./lateam.js");

const splitClasses = becoders => {
    const shuffled = becoders.sort(() => Math.random() - .5);
    const halflen = (becoders.length / 2) | 0;

    return [
        shuffled.slice(0, halflen),
        shuffled.slice(halflen, becoders.length)
    ]
}

splitClasses(hoppers)
.forEach((c, i) => {
    console.log(`Classe ${i+1}: ${c.join(', ')}\n\n`)
})