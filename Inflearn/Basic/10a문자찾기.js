const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim().split('\n');

let answer;
const sentence = input[0];
const str = input[1];

let temp = sentence.split('');
temp = temp.filter((item) => item === str);
answer = temp.length;
console.log(answer);
