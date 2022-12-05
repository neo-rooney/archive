const fs = require('fs');
const [n, arr] = fs.readFileSync('./example.txt').toString().trim().split('\n');

const nums = arr.split(' ').map((item) => Number(item));

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

const reverseNum = (num) => {
  let result = 0;
  while (num) {
    let res = num % 10;
    result = 10 * result + res;
    num = parseInt(num / 10);
  }
  return result;
};

const reverseNumByString = (num) => {
  return Number(num.toString().split('').reverse().join(''));
};

for (const element of nums) {
  let reversedNum = reverseNumByString(element);
  if (checkPrime(reversedNum)) console.log(reversedNum);
}
