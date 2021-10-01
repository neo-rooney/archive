let billion_1 = 1000000000;
let billion_2 = 1e9;

console.log(billion_1 === billion_2);

console.log(0x0f);
console.log(0o17);
console.log(0b1111);

let num = 10;
console.log(num.toString());
console.log(String(num));
console.log(num + '');

let num_1 = 125.0;
let num_2 = 123.456;

console.log(num_1 - num_2);
console.log((num_1 - num_2).toFixed(3));
console.log((num_1 - num_2).toPrecision(3));

console.log(Number.isNaN(0.123));
console.log(Number.isNaN(0.123 - 'hello'));

console.log(Number.isFinite(-123));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite('hello'));

console.log(Number.parseInt('123'));
console.log(Number.parseInt('123'));
