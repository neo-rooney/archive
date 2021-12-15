const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim().split('\n');

const N = Number(input[0]);
const students = input[1].split(' ').map((item) => Number(item));
const answer = [students[0]];
let standard = students[0];

for (let i = 1; i < students.length; i++) {
  if (standard < students[i]) {
    answer.push(students[i]);
    standard = students[i];
  }
}

console.log(answer.length);
