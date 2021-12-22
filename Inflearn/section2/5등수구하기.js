const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim().split('\n');

const N = Number(input[0]);
const score = input[1].split(' ').map((item) => Number(item));
const answer = new Array(N).fill(1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (score[j] > score[i]) {
      answer[i]++;
    }
  }
}

console.log(answer);
