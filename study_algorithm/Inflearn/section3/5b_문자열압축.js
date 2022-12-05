const fs = require("fs");
const str = fs.readFileSync("./example.txt").toString().trim();

let target = str[0];
let count = 0;
let answer = "";
for (let i = 0; i <= str.length; i++) {
  if (str[i] === target) {
    count++;
  } else {
    answer = answer + str[i - 1] + (count > 1 ? count : "");
    target = str[i];
    count = 0;
  }
}

console.log(answer);
