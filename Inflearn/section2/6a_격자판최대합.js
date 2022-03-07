const fs = require("fs");
const board = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)));
const N = board.length;

let max = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < N; i++) {
  let sum_row = 0;
  let sum_column = 0;
  for (let j = 0; j < N; j++) {
    sum_row += board[i][j];
    sum_column += board[j][i];
  }
  if (sum_column > sum_row) {
    max = sum_column > max ? sum_column : max;
  } else {
    max = sum_row > max ? sum_row : max;
  }
}

let sum_c_a = 0;
let sum_c_b = 0;
for (let i = 0; i < N; i++) {
  sum_c_a += board[i][i];
  sum_c_b += board[i][N - i - 1];
}

if (sum_c_a > sum_c_b) {
  max = sum_c_a > max ? sum_c_a : max;
} else {
  max = sum_c_b > max ? sum_c_b : max;
}

console.log(max);
