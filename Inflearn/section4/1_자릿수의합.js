const fs = require("fs");
let input = fs.readFileSync("./example.txt").toString().trim().split("\n");
const N = Number(input[0]);
const Numbers = input[1].split(" ").map((item) => Number(item));
let answer;
let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < N; i++) {
  let number = Numbers[i];
  const digit = number.toString().length;
  let sum = 0;
  for (let j = digit - 1; j >= 0; j--) {
    let tmp = Math.floor(number / 10 ** j);
    sum += tmp;
    number %= 10 ** j;
  }

  if (sum > max) {
    max = sum;
    answer = Numbers[i];
  } else if (sum === max) {
    answer = answer > Numbers[i] ? answer : Numbers[i];
  }
}
