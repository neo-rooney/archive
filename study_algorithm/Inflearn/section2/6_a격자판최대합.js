const fs = require("fs");
const [n, ...arr] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");

const board = arr.map((item) => item.split(" ").map((item) => +item));

let max = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
  let sum_v = 0;
  let sum_h = 0;
  for (let j = 0; j < n; j++) {
    sum_h += board[i][j];
    sum_v += board[j][i];
  }
  max = Math.max(sum_h, sum_v, max);
}

let sum_c_a = 0;
let sum_c_b = 0;
for (let i = 0; i < n; i++) {
  sum_c_a += board[i][i];
  sum_c_b += board[i][n - 1 - i];
}

max = Math.max(sum_c_a, sum_c_b, max);

console.log(max);
