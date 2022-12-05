const fs = require('fs');
let str = fs.readFileSync('./example.txt').toString().trim();

str = str.toUpperCase();
let answer = 'YES';
for (let i = 0; i < Math.round(str.length / 2); i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    answer = 'NO';
    break;
  }
}

console.log(answer);
