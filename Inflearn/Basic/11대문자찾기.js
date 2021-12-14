const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim();
let answer = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i].charCodeAt(0) >= 65 && input[i].charCodeAt(0) <= 90) {
    answer++;
  }
}

console.log(answer);
