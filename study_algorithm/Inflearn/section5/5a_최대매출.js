const fs = require("fs");

const [[N, K], [...arr]] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)));

const solution = (n, k, arr) => {
  let max;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  max = sum;

  for (let i = k; i < n; i++) {
    sum = sum - arr[i - k] + arr[i];
    if (sum > max) max = sum;
  }

  return max;
};

console.log(solution(N, K, arr));
