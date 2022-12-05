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
let answer = [];
for (let i = 0; i < N; i++) {
  const temp = Number(arr[i].toString().split('').reverse().join(''));
  let flag = temp === 1 ? 1 : 0;
  for (let j = 2; j < temp; j++) {
    if (temp % j === 0) {
      flag = 1;
      break;
    }
  }
  if (!flag) {
    answer.push(temp);
  }
}

console.log(answer);
