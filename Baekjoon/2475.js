let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const sum = input.reduce((acc, current) => {
  return acc + parseInt(current) * parseInt(current);
}, 0);

const answer = sum % 10;

console.log(answer);
