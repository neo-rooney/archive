const fs = require("fs");
let [[N], arr_a, [M], arr_b] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)));

arr_a = arr_a.sort((a, b) => a - b);
arr_b = arr_b.sort((a, b) => a - b);

let p_a = 0;
let p_b = 0;
let answer = [];
while (p_a < N && p_b < M) {
  if (arr_a[p_a] === arr_b[p_b]) {
    answer.push(arr_a[p_a]);
    p_a++;
    p_b++;
  } else if (arr_a[p_a] > arr_b[p_b]) {
    p_b++;
  } else {
    p_a++;
  }
}

console.log(answer);
