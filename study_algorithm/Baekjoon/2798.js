const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map((item) => Number(item));
let cards = input[1].split(' ').map((item) => Number(item));

let blackJeck = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < cards.length; i++) {
  for (let j = i + 1; j < cards.length; j++) {
    for (let k = j + 1; k < cards.length; k++) {
      let sum = cards[i] + cards[j] + cards[k];
      if (sum > blackJeck && sum <= M) blackJeck = sum;
    }
  }
}

console.log(blackJeck);
