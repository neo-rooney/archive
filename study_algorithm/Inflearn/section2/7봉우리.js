const { count } = require("console");
const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().trim().split("\n");

const N = Number(input[0]);
const doubleArray = [];
let answer = 0;
for (let i = 1; i < input.length; i++) {
  doubleArray.push(input[i].split("").map((item) => Number(item)));
}

doubleArray.map((item) => {
  item.unshift(0);
  item.push(0);
});
doubleArray.unshift(new Array(N + 1).fill(0));
doubleArray.push(new Array(N + 1).fill(0));
console.log(doubleArray);
/**
 * 행 : i
 * 열 : j
 * 상 : i - 1
 * 하 : i + 1
 * 좌 : j - 1
 * 우 : j + 1
 */

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    if (
      doubleArray[i][j] > doubleArray[i - 1][j] &&
      doubleArray[i][j] > doubleArray[i + 1][j] &&
      doubleArray[i][j] > doubleArray[i][j - 1] &&
      doubleArray[i][j] > doubleArray[i][j + 1]
    ) {
      answer++;
    }
  }
}

console.log(answer);
