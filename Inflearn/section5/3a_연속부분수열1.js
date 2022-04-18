const fs = require("fs");

const [[N, M], [...arr]] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)));

console.log(N);
console.log(M);
console.log(arr);

let p_s = 0;
let p_e = 0;
let res = M;
let cnt = 0;
let answer = [];
while (p_s < N) {
  res -= arr[p_e];

  if (res > 0) {
    p_e++;
  } else if (res === 0) {
    cnt++;
    let temp = [];
    for (let i = p_s; i <= p_e; i++) {
      temp.push(arr[i]);
    }
    answer.push(temp);
    temp = [];
    res = M;
    p_s++;
    p_e = p_s;
  } else {
    res = M;
    p_s++;
    p_e = p_s;
  }
}

console.log(answer);
console.log(cnt);
