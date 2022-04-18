const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().trim();

let count = 1;
let answer = "";
for (let i = 0; i < input.length; i++) {
  if (input[i] === input[i + 1]) {
    count++;
  } else {
    count > 1 ? (answer += `${input[i]}${count}`) : (answer += `${input[i]}`);
    count = 1;
  }
}

console.log(answer);
