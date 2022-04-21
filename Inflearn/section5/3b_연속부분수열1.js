const fs = require("fs");

const [[N, M], [...arr]] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)));

const solution = (n, m, arr) => {
  let cnt = 0,
    lt = 0,
    sum = 0;

  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    if (sum === m) cnt++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) cnt++;
    }
  }

  return cnt;
};

console.log(solution(N, M, arr));
