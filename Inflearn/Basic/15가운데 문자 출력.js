const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim();

if (input.length % 2 !== 0) {
  const middleIndex = Math.floor(input.length / 2);
  console.log(input[middleIndex]);
} else {
  let answer = '';
  const middleIndex = Math.floor(input.length / 2);
  answer = input[middleIndex - 1] + input[middleIndex];
  console.log(answer);
}
