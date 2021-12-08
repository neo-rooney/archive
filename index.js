let [n, ...arr] = require('fs')
  .readFileSync('./example.txt')
  .toString()
  .trim()
  .split('\n');
arr = arr.map((item) => Number(item));
const testCase = [];

for (let i = 0; i < n; i++) {
  testCase[i] = arr.splice(0, 2);
}

console.log(testCase);

/**
자기 앞짚과 아랫집의 합 
 */
for (let i = 0; i < testCase.length; i++) {
  if (testCase[i][1] === 1) {
    console.log(1);
  }
  const zero = [];
  for (let j = 1; j < testCase[i][1]; j++) {
    zero[i] = j;
  }
  console.log(zero);
}
