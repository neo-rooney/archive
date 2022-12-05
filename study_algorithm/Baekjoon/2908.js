let input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ');

let numberA = input[0];
let numberB = input[1];

numberA = parseInt(`${input[0][2]}${input[0][1]}${input[0][0]}`);
numberB = parseInt(`${input[1][2]}${input[1][1]}${input[1][0]}`);

if (numberA > numberB) {
  console.log(numberA);
} else {
  console.log(numberB);
}
