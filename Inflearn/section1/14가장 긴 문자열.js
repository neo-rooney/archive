const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim().split('\n');

const N = Number(input[0]);

let maxLength = Number.MIN_SAFE_INTEGER;
let maxIndex = 0;

for (let i = 1; i < input.length; i++) {
  if (input[i].length > maxIndex) {
    maxIndex = input[i].length;
    maxIndex = i;
  }
}

console.log(input[maxIndex]);
