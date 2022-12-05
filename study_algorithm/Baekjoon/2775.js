let [n, ...arr] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
arr = arr.map((item) => Number(item));
const testCase = [];

for (let i = 0; i < n; i++) {
  testCase[i] = arr.splice(0, 2);
}

for (let i = 0; i < testCase.length; i++) {
  let floor = [];

  for (let j = 0; j <= testCase[i][0]; j++) {
    floor[j] = [];
    for (let k = 1; k <= testCase[i][1]; k++) {
      if (j === 0) {
        floor[j][k - 1] = k;
      } else {
        if (k === 1) {
          floor[j][k - 1] = 1;
        } else {
          floor[j][k - 1] = floor[j][k - 2] + floor[j - 1][k - 1];
        }
      }
    }
  }

  console.log(floor[testCase[i][0]][testCase[i][1] - 1]);
}
