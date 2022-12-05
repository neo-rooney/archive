const fs = require("fs");

const [[N, M], [...arr]] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)));

let sum = 0;
let cnt = 0;
let lt = 0;
let answer = [];
while (lt < N) {
  for (let rt = lt; rt < N; rt++) {
    sum += arr[rt];
    if (sum <= M) {
      let temp = [];
      for (let i = lt; i <= rt; i++) {
        temp.push(arr[i]);
      }
      answer.push(temp);
      cnt++;
    } else {
      break;
    }
  }
  lt++;
  sum = 0;
}

console.log(answer);
console.log(cnt);
