const fs = require("fs");
const input = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)));

const N = input[0];
const A = input[1];
const B = input[2];

for (let i = 0; i < N; i++) {
  if (A[i] === B[i]) {
    console.log("D");
  } else if (
    (A[i] === 1 && B[i] === 3) ||
    (A[i] === 2 && B[i] === 1) ||
    (A[i] === 3 && B[i] === 2)
  ) {
    console.log("A");
  } else {
    console.log("B");
  }
}
