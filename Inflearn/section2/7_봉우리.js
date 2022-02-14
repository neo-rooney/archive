const fs = require("fs");
const [N, ...arr] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n");

const board = arr.map((item) => item.split(" ").map((item) => Number(item)));

console.log(board);

// 상하좌우
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

let count = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    let flag = 0;
    for (let k = 0; k < 4; k++) {
      let x = dx[k] + i;
      let y = dy[k] + j;
      if (x >= 0 && x < N && y >= 0 && y < N && board[x][y] >= board[i][j]) {
        flag = 1;
        break;
      }
    }
    if (!flag) {
      count++;
    }
  }
}

console.log(count);
