let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let N = Number(input);
let i = 0;
let answer;
while (i < N) {
  let temp = i;
  let indexLength = String(i).length;
  let sum = 0;
  for (let j = 0; j < indexLength; j++) {
    sum += temp % 10;
    temp = parseInt(temp / 10);
  }

  if (sum + i !== N) {
    i++;
  } else if (sum + i === N) {
    answer = i;
    break;
  }
}

console.log(answer || 0);
