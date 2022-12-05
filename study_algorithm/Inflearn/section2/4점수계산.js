const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim().split('\n');

const N = Number(input[0]);
const ox = input[1].split(' ').map((item) => Number(item));

let currentScore = ox[0] === 1 ? 1 : 0;
let totalScore = ox[0] === 1 ? 1 : 0;

for (let i = 1; i < N; i++) {
  console.log(currentScore);
  if (ox[i - 1] === 1 && ox[i] === 1) {
    currentScore++;
  } else if (ox[i - 1] === 0 && ox[i] === 1) {
    currentScore = 1;
  } else {
    currentScore = 0;
  }

  totalScore += currentScore;
}

console.log(totalScore);
