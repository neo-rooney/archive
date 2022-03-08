const fs = require("fs");
const [[N, K], arr] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)));

const sums = new Set();

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      let sum = arr[i] + arr[j] + arr[k];
      sums.add(sum);
    }
  }
}

const sums_arr = Array.from(sums).sort((a, b) => b - a);

console.log(sums_arr);
