let input = require('fs').readFileSync('./example.txt').toString().trim();

let N = Number(input);

/**
1 | 1      | 1
2 | 234567 | 1 + 6 
3 | 8 ~ 19 | 1 + 6 + 12
4 | 20 ~ 37| 1 + 6 + 12 + 18
5 | 38 ~ 61| 1 + 6 + 12 + 18 + 24
 */
let i = 0;
while (1) {
  let lastNum = 1;
  for (let j = 1; j <= i; j++) {
    lastNum += 6 * j;
  }
  console.log(` i : ${i} last: ${lastNum}`);
  if (lastNum >= N) {
    break;
  } else {
    i++;
  }
}

console.log(i + 1);
