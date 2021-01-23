const calculator = (a, b, c) => {
    return c(a, b);
}
const power = (a, b) => a ** b;
const add = (a, b) => a + b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

console.log(calculator(2, 11, div));