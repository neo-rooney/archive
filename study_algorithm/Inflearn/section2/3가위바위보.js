const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim().split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map((item) => Number(item));
const B = input[2].split(' ').map((item) => Number(item));

for (let i = 0; i < N; i++) {
  //가위 바위
  if (A[i] === 1 && B[i] === 2) {
    console.log('B');
  } else if (A[i] === 2 && B[i] === 1) {
    console.log('A');
  }
  //바위 보
  if (A[i] === 2 && B[i] === 3) {
    console.log('B');
  } else if (A[i] === 3 && B[i] === 2) {
    console.log('A');
  }

  //가위 보
  if (A[i] === 3 && B[i] === 1) {
    console.log('B');
  } else if (A[i] === 1 && B[i] === 3) {
    console.log('A');
  }

  if (A[i] === B[i]) {
    console.log('D');
  }
}
