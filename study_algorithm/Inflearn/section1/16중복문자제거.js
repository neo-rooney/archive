const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim();

const temp = input.split('');
let answer = [];

for (let i = 0; i < temp.length; i++) {
  if (answer.indexOf(temp[i]) === -1) {
    answer.push(temp[i]);
  }
}
answer = answer.join('');
console.log(answer);
