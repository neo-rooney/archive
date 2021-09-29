// console.log('line\nfeed');
// console.log('line\rfeed');
// console.log('line\\feed');
// console.log('line\tfeed');
// console.log('line\u{1f60d}eed');

let str = 'hello, world!!!';

// console.log(str.charAt(0));
// console.log(str.charCodeAt(0));
// console.log(str[0]);

console.log(str.indexOf('l')); // 2
console.log(str.indexOf('l', 3)); // 3
console.log(str.indexOf('l', 4)); // 10
console.log(str.lastIndexOf('l')); // 10
console.log(str.includes('hello')); // true
console.log(str.includes('HeLlo')); // false
console.log(str.startsWith('ello')); // false
console.log(str.startsWith('hello')); // true
console.log(str.endsWith('!!!')); // true
console.log(str.endsWith('world')); // false
