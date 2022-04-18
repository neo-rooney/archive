const fs = require("fs");
const [[N], arr_a, [M], arr_b] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)));

let p_a = 0;
let p_b = 0;
let answer = [];

while (p_a < N && p_b < M) {
  if (arr_a[p_a] < arr_b[p_b]) {
    answer.push(arr_a[p_a++]);
  } else {
    answer.push(arr_b[p_b++]);
  }
}

while (p_a < N) {
  answer.push(arr_a[p_a++]);
}

while (p_b < M) {
  answer.push(arr_b[p_b++]);
}

console.log(answer);
