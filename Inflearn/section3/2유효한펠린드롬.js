const fs = require("fs");
let input = fs.readFileSync("./example.txt").toString();
input = input.toUpperCase();
let temp = "";

for (let i = 0; i < input.length; i++) {
  const charCode = input[i].charCodeAt();
  if (charCode >= 65 && charCode <= 90) {
    temp += input[i];
  }
}

const temLength = temp.length;
let isPalindrome = true;
for (let i = 0; i < (temLength / 2).toFixed(0); i++) {
  if (temp[i] !== temp[temLength - i - 1]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) console.log("YES");
else console.log("NO");
