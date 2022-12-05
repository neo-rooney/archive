const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);
const block = [3, 5];
let answer = -1;

let dy = Array.from({ length: N + 1 }, () => 5001);
dy[0] = 0;
for (let i = 0; i < block.length; i++) {
  for (let j = block[i]; j <= N; j++) {
    dy[j] = Math.min(dy[j], dy[j - block[i]] + 1);
  }
}
answer = dy[N] === 5001 || dy[N] === 0 ? -1 : dy[N];
console.log(answer);
