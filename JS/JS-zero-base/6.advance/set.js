let set = new Set();
let num = new Set([1, 2, 3, 4, 5]);
let str = new Set('hello');

console.log(set); //Set {}
console.log(num); //Set { 1, 2, 3, 4, 5 }
console.log(str); //Set { 'h', 'e', 'l', 'o' }

set.add(1).add(1).add(10);
console.log(set); //Set { 1, 10 }
console.log(set.has(10)); // true
console.log(set.has(2)); // false

set.delete(1);
set.delete(2); // 없는 값 제거 무시
console.log(set); //Set { 10 }
