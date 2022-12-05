const fs = require("fs");
let input = fs.readFileSync("./example.txt").toString();
input = input.toUpperCase();
let isRoundSting = true;
for (let i = 0; i < (input.length / 2).toFixed(0); i++) {
  if (input[i] !== input[input.length - i - 1]) {
    isRoundSting = false;
    break;
  }
}

if (isRoundSting) console.log("YES");
else console.log("NO");
