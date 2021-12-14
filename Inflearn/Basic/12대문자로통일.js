const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim();

let answer = input.toUpperCase();

console.log(answer);
