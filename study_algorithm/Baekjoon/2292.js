let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let N = Number(input);
let i = 0;
while (1) {
  let lastNum = 1;
  for (let j = 1; j <= i; j++) {
    lastNum += 6 * j;
  }
  if (lastNum >= N) {
    break;
  } else {
    i++;
  }
}

console.log(i + 1);
