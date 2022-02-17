const fs = require("fs");

const [[N, M], [...arr]] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)));

const solution = (n, m, arr) => {
  let cnt = 0;
  let lt = 0;
  let sum = 0;

  let answer = [];
  let tmp = [];

  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    while (sum >= m) {
      if (sum === m) {
        for (let i = lt; i <= rt; i++) {
          tmp.push(arr[i]);
        }
        answer.push(tmp);
        tmp = [];
        cnt++;
      }
      sum -= arr[lt++];
    }
  }

  console.log(answer);
  return cnt;
};

console.log(solution(N, M, arr));
