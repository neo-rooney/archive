const fs = require("fs");
const [str, char] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split(" ");

const result = [];
let range = 1000;
for (const item of str) {
  if (item !== char) {
    range++;
  } else {
    range = 0;
  }
  result.push(range);
}

for (let i = str.length - 1; i >= 0; i--) {
  if (str[i] !== char) {
    range++;
  } else {
    range = 0;
  }

  if (result[i] >= range) {
    result[i] = range;
  }
}

console.log(result);
