const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const L = Number(input[0]);
let r = 1;
const M = 1234567891;
const str = input[1];

let sum = 0;
for (let i = 0; i < str.length; i++) {
  sum += ((str[i].charCodeAt(0) - 96) * r) % M;
  sum %= M;
  r *= 31;
  r %= M;
}

console.log(sum);
