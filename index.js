const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().trim();

let answer = "";

for (let i = 0; i < input.length; i++) {
  const code = input[i].charCodeAt();
  if (code >= 65 && code <= 90) {
    answer += String.fromCharCode(code + 32);
  } else {
    answer += String.fromCharCode(code - 32);
  }
}

console.log(answer);
