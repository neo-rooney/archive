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
  if (arr_a[p_a] > arr_b[p_b]) {
    console.log(p_b);
    answer.push(arr_b[p_b++]);
  } else {
    console.log(p_a);
    answer.push(arr_a[p_a++]);
  }
}

if (p_a < N) {
  for (let i = p_a; i < N; i++) {
    answer.push(arr_a[i]);
  }
} else if (p_b < M) {
  for (let i = p_b; i < M; i++) {
    answer.push(arr_b[i]);
  }
}

console.log(answer);
