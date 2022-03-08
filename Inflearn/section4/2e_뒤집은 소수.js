const fs = require("fs");
const [[N], arr] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)));

const reverseNum = (num) => {
  let res;
  let result = 0;
  while (num) {
    res = num % 10;
    result = result * 10 + res;
    num = parseInt(num / 10);
  }
  return result;
};

const checkPrime = (num) => {
  if (num === 1) {
    return false;
  }
  let result = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      result = false;
      break;
    }
  }
  return result;
};

const answer = [];
for (let i = 0; i < N; i++) {
  const reversedResult = reverseNum(arr[i]);
  if (checkPrime(reversedResult)) {
    answer.push(reversedResult);
  }
}

console.log(answer);
