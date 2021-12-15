const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim().split('\n');
const N = Number(input[0]);
const uniqueWord = [];

for (let i = 1; i <= N; i++) {
  if (uniqueWord.indexOf(input[i]) === -1) {
    console.log(input[i]);
    uniqueWord.push(input[i]);
  }
}
