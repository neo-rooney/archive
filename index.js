let input = require('fs')
  .readFileSync('./example.txt')
  .toString()
  .trim()
  .split('\n');

let T = input[0];

for (let i = 1; i <= T; i++) {
  let temp = input[i].split(' ');

  let H = Number(temp[0]);
  let W = Number(temp[1]);
  let N = Number(temp[2]);

  let x = 1;
  let y = 1;
  let count = 1;

  while (count < N) {
    y++;
    if (y > H) {
      y = y === 2 ? y - 1 : y % H;
      x++;
    }
    count++;
  }

  x = String(x).length < 2 ? `0${x}` : x;

  let answer = Number(`${y}${x}`);
  console.log(answer);
}
