let arr = [100, 0, 50]
function min(arr) {
    return (Math.min.apply(null, arr));
}

function max(arr) {
    return (Math.max.apply(null, arr));
}
console.log(min(arr));
console.log(max(arr));