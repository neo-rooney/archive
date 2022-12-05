const fs = require("fs");
const input = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)));

const N = input[0][0];
const K = input[0][1];
const cards = input[1];

let sums_set = new Set();

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      sums_set.add(cards[i] + cards[j] + cards[k]);
    }
  }
}

let sums_arr = Array.from(sums_set).sort((a, b) => b - a);

console.log(sums_arr[K - 1]);
