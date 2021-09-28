let fruits = ['apple', 'orange', 'melon'];

let ret = fruits.unshift('waterMelon');

console.log(fruits); //[ 'waterMelon', 'apple', 'orange', 'melon' ]
console.log(ret); //4
console.log(fruits.length); //4

ret = fruits.shift();

console.log(fruits); //[ 'apple', 'orange', 'melon' ]
console.log(ret); //waterMelon
console.log(fruits.length); //3
