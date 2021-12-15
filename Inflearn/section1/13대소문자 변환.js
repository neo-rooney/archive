const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim();
console.log(input);
let answer = '';
for (let i = 0; i < input.length; i++) {
  let num = input[i].charCodeAt(0);
  if (num >= 65 && num <= 90) answer += String.fromCharCode(num + 32);
  else answer += String.fromCharCode(num - 32);
}

console.log(answer);
