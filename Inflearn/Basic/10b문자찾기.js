const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim().split('\n');

let answer = 0;
const sentence = input[0];
const str = input[1];

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === str) {
    answer++;
  }
}

console.log(answer);
