let fruits = ['apple', 'orange', 'melon'];

let ret = fruits.push('waterMelon');

console.log(fruits); //[ 'apple', 'orange', 'melon', 'waterMelon' ]
console.log(ret); //4
console.log(fruits.length); //4

ret = fruits.pop();

console.log(fruits); //[ 'apple', 'orange', 'melon' ]
console.log(ret); //waterMelon
console.log(fruits.length); //3
