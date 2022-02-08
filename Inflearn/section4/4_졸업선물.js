const fs = require('fs');
let input = fs.readFileSync('./example.txt').toString().trim().split('\n');
input = input.map((item) => item.split(' ').map((item) => Number(item)));
// 학생수
const N = input[0][0];
// 총 예산
const M = input[0][1];
const answer = [];
//i 번째 학생의 선물가격에 할인 쿠폰을 적용한다.
for (let i = 1; i <= N; i++) {
  input[i][0] = parseInt(input[i][0] / 2);
  let sum = 0;
  let cnt = 0;
  for (let j = 1; j <= N; j++) {
    sum += input[j][0] + input[j][1];
    if (sum < M) {
      cnt++;
    } else {
      break;
    }
  }
  answer.push(cnt);
}

console.log(Math.max(...answer));
