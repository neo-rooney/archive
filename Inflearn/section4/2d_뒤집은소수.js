const fs = require("fs");
let [N, ...arr] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split(/\s/);
arr = arr.map((item) => Number(item));

const reverseNum = (num) => {
  let result = 0;
  while (num) {
    const rest = num % 10;
    result = result * 10 + rest;
    num = parseInt(num / 10);
  }
  return result;
};

const checkPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

arr = arr.map((item) => reverseNum(item));
arr.map((item) => {
  if (checkPrime(item)) console.log(item);
});
