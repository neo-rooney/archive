const fs = require("fs");
const board = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)));
const N = board.length;
// 시계방향
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

let count = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    let flag = 1;
    let target = board[i][j];
    for (let k = 0; k < 4; k++) {
      let moved;
      if (i + dx[k] < 0 || j + dy[k] < 0 || i + dx[k] >= N || j + dy[k] >= N)
        moved = 0;
      else moved = board[i + dx[k]][j + dy[k]];

      if (moved >= target) {
        flag = 0;
        break;
      }
    }
    if (flag) count++;
  }
}

console.log(count);
