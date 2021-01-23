let arr = [1,2,3,4,5];
let dupli=[];
for (let elem in arr) {
    dupli.push(arr[elem]);
};
console.log(dupli);
var dupli_b= arr.slice();
console.log(dupli_b);