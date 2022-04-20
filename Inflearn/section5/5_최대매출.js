const fs = require("fs");

const [[N, K], [...arr]] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)));

const solution = (n, m, arr) => {
  let max = Number.MIN_SAFE_INTEGER;
  let lt = 0;
  for (let rt = m - 1; rt < n; rt++) {
    let sum = 0;
    for (let i = lt; i <= rt; i++) {
      sum += arr[i];
    }
    if (sum > max) max = sum;
    lt++;
  }

  return max;
};

console.log(solution(N, K, arr));
