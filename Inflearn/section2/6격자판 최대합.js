const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim().split('\n');

const N = Number(input[0]);
const board = [];

for (let i = 1; i <= N; i++) {
  board.push(input[i].split(' ').map((item) => Number(item)));
}

let max = Number.MIN_SAFE_INTEGER;
let answer = [];
// 행의 합
for (let i = 0; i < N; i++) {
  let sum = 0;
  for (let j = 0; j < N; j++) {
    sum += board[i][j];
  }
  answer.push(sum);
}

// 열의 합
for (let i = 0; i < N; i++) {
  let sum = 0;
  for (let j = 0; j < N; j++) {
    sum += board[j][i];
  }
  answer.push(sum);
}

// 대각선1 합
let cross1 = 0;
for (let i = 0; i < N; i++) {
  cross1 += board[i][i];
}
answer.push(cross1);

// 대각선2 합
let cross2 = 0;
for (let i = 0; i < N; i++) {
  cross2 += board[i][N - i - 1];
}
answer.push(cross2);
console.log(answer);
