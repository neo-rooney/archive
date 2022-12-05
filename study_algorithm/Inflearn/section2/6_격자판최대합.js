const fs = require('fs');
const [N, ...arr] = fs
  .readFileSync('./example.txt')
  .toString()
  .trim()
  .split('\n');

const board = arr.map((item) => item.split(' ').map((item) => Number(item)));

/**
 * 행의 합 x 고정, y 변화
 * 열의 합 y 고정, x 변화
 */
let max = Number.MIN_SAFE_INTEGER;
for (x = 0; x < N; x++) {
  let sumRow = 0;
  let sumColumn = 0;
  for (y = 0; y < N; y++) {
    sumRow += board[x][y];
    sumColumn += board[y][x];
  }
  if (sumRow > sumColumn) {
    max = max > sumRow ? max : sumRow;
  } else {
    max = max > sumColumn ? max : sumColumn;
  }
}

let sumCrossOne = 0;
let sumCrossTwo = 0;
for (x = 0; x < N; x++) {
  sumCrossOne += board[x][x];
  sumCrossTwo += board[x][N - 1 - x];
}
if (sumCrossOne > sumCrossTwo) {
  max = max > sumCrossOne ? max : sumCrossOne;
} else {
  max = max > sumCrossTwo ? max : sumCrossTwo;
}

console.log(max);
