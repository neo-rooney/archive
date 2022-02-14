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

const sums = new Set();

for (let i = 0; i < cards.length; i++) {
  for (let j = i + 1; j < cards.length; j++) {
    for (let k = j + 1; k < cards.length; k++) {
      sums.add(cards[i] + cards[j] + cards[k]);
    }
  }
}

const sums_arr = Array.from(sums).sort((a, b) => b - a);
console.log(sums_arr);
