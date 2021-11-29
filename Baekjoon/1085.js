let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

let x = parseInt(input[0]);
let y = parseInt(input[1]);
let w = parseInt(input[2]);
let h = parseInt(input[3]);

let arr = [];
arr[0] = h - y;
arr[1] = y - 0;
arr[2] = w - x;
arr[3] = x - 0;

let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < arr.length; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(min);
