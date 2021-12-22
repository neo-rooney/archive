const { count } = require("console");
const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().trim().split("\n");

const N = Number(input[0]);
const doubleArray = [];
let answer = 0;
for (let i = 1; i < input.length; i++) {
  doubleArray.push(input[i].split("").map((item) => Number(item)));
}

/**
 * 행 : i
 * 열 : j
 * 상 : (0, 1)
 * 하 : (0,-1)
 * 좌 : (-1,0)
 * 우 : (0, 1)
 */

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    let flag = 0;
    for (let k = 0; k < 4; k++) {
      let x = dx[k] + i;
      let y = dy[k] + j;
      if (
        x >= 0 &&
        x < N &&
        y >= 0 &&
        y < N &&
        doubleArray[x][y] >= doubleArray[i][j]
      ) {
        flag = 1;
        break;
      }
    }
    if (!flag) answer++;
  }
}

console.log(answer);
