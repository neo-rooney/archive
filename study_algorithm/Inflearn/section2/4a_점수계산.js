const fs = require("fs");
const result = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split(" ")
  .map((item) => Number(item));

const N = result.length;

let score = 0;
let totalScore = 0;
for (let i = 0; i < N; i++) {
  if (result[i] === 0) {
    score = 0;
  } else {
    score++;
  }

  totalScore += score;
}

console.log(totalScore);
