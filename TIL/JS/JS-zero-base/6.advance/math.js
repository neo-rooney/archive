console.log(Math.max(1, -1)); // 1
console.log(Math.min(1, -1)); //-1

console.log(Math.max(1, -1, 100, 30, 20)); //100
let num = [1, -1, 100, 30, 20];
console.log(Math.max(num)); //NaN
console.log(Math.max.apply(null, num)); //100
console.log(Math.max(...num)); //100

console.log(Math.abs(1)); //1
console.log(Math.abs(-1)); //1
console.log(Math.abs(-Infinity)); //Infinity

