const fs = require('fs');
let [N, ...arr] = fs
  .readFileSync('./example.txt')
  .toString()
  .trim()
  .split(/\s/);
arr = arr.map((item) => Number(item));

//소수
/**
 * 1 2 3 5 7 11 13
 * 1과 자기자신 이외에 수로 나누어지지 않는 수
 * 1은 소수가 아니다.
 */
let answers = [];

const flipNumber = (num) => {
  let result = 0;
  while (num) {
    let res = num % 10;
    result = result * 10 + res;
    num = parseInt(num / 10);
  }
  return result;
};

const flipNumberByString = (num) => {
  let result = Number(num.toString().split('').reverse().join(''));
  return result;
};

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

for (x of arr) {
  let invertedNum = flipNumberByString(x);

  if (isPrime(invertedNum)) {
    answers.push(invertedNum);
  }
}

console.log(answers);
