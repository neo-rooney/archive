const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().trim();

// 65 - 90 = A -Z
// 97 - 122  = a - z
let count = 0;
for (char of input) {
  const code = char.charCodeAt();
  if (code >= 65 && code <= 90) count++;
}

console.log(count)
