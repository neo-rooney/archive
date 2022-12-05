const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim().split('\n');

const N = Number(input[0].split(' ')[0]);
const M = Number(input[0].split(' ')[1]);

let test = [];
for (let i = 1; i <= M; i++) {
  test.push(input[i].split(' ').map((item) => Number(item)));
}
let answer = 0;

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    let count = 0;
    for (let k = 0; k < M; k++) {
      let pi;
      let pj;
      for (let s = 0; s < N; s++) {
        if (test[k][s] === i) {
          pi = s;
        } else if (test[k][s] === j) {
          pj = s;
        }
      }
      if (pj > pi) {
        count++;
      }
    }
    if (count === M) {
      answer++;
    }
  }
}

console.log(answer);
