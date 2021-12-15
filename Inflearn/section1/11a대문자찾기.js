const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim();

let answer = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i].toUpperCase() === input[i]) {
    answer++;
  }
}

console.log(answer);
