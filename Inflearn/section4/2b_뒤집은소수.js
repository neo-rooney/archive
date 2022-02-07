const fs = require('fs');
const [n, ...arr] = fs
  .readFileSync('./example.txt')
  .toString()
  .trim()
  .split(/\s/);

const nums = arr.map((item) => Number(item));

const checkPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const reverseNumber = (num) => {
  let tmp = 0;
  while (num) {
    let rest = num % 10;
    tmp = tmp * 10 + rest;
    num = parseInt(num / 10);
  }
  return tmp;
};

let answer = [];
for (let i = 0; i < n; i++) {
  const reversedNum = reverseNumber(nums[i]);
  if (checkPrime(reversedNum)) {
    answer.push(reversedNum);
  }
}

console.log(answer);
