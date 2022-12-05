let str = 'hello, world!!!';
let changed_text = '';

changed_text = str.replace('l', '*');
// console.log(changed_text);

changed_text = str.replace(/l/g, '*');
// console.log(changed_text);

let str_2 = '123456789';

// console.log(str_2.slice(0, 4)); //1234
// console.log(str_2.substr(0, 3)); //123
// console.log(str_2.slice(15, 2)); //1234
// console.log(str_2.substr(15, 2)); //1234
// console.log(str_2.substr(0, 6)); //123456

console.log(str_2.split('5'));
console.log(str_2.split(''));
console.log(str_2.split('', 3));
