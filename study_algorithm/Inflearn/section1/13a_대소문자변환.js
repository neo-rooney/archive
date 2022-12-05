const fs = require("fs");
const str = fs.readFileSync("./example.txt").toString().trim();

let answer = "";

const test = 65;

for (char of str) {
  const code = char.charCodeAt();
  if (code >= 65 && code <= 90) {
    answer += String.fromCharCode(code + 32);
  } else {
    answer += String.fromCharCode(code - 32);
  }
}

console.log(answer);
