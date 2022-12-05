const fs = require("fs");
const [[N, K], arr] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)));

const sum_set = new Set();

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      sum_set.add(arr[i] + arr[j] + arr[k]);
    }
  }
}

const sum_arr = Array.from(sum_set).sort((a, b) => b - a);
console.log(sum_arr[K - 1]);
