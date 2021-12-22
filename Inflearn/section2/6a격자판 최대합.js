const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim().split('\n');

const N = Number(input[0]);
const board = [];

let answer = Number.MIN_SAFE_INTEGER;
let n = arr.length;
let sum1 = (sum2 = 0);
for (let i = 0; i < n; i++) {
  sum1 = sum2 = 0;
  for (let j = 0; j < n; j++) {
    sum1 += arr[i][j];
    sum2 += arr[j][i];
  }
  answer = Math.max(answer, sum1, sum2);
}
sum1 = sum2 = 0;
for (let i = 0; i < n; i++) {
  sum1 += arr[i][i];
  sum2 += arr[i][n - i - 1];
}
answer = Math.max(answer, sum1, sum2);

console.log(max);
