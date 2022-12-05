const fs = require('fs');
const [n, ...arr] = fs
  .readFileSync('./example.txt')
  .toString()
  .trim()
  .split('\n');

const aInfo = arr[0].split(' ').map((item) => Number(item));
const bInfo = arr[1].split(' ').map((item) => Number(item));

for (let i = 0; i < aInfo.length; i++) {
  if (aInfo[i] === bInfo[i]) {
    console.log('D');
  } else {
    if (
      (aInfo[i] === 1 && bInfo[i] === 3) ||
      (aInfo[i] === 2 && bInfo[i] === 1) ||
      (aInfo[i] === 3 && bInfo[i] === 2)
    ) {
      console.log('A');
    } else {
      console.log('B');
    }
  }
}
