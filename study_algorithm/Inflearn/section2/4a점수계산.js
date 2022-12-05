const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim().split('\n');

const N = Number(input[0]);
const ox = input[1].split(' ').map((item) => Number(item));

let totalScore = 0;
let currentScore = 0;

for (let i = 0; i < N; i++) {
  if (ox[i] === 1) {
    currentScore++;
  } else {
    currentScore = 0;
  }
  totalScore += currentScore;
}
console.log(totalScore);
