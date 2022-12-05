const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map((item) => Number(item));

const cards = input[1].split(' ').map((item) => Number(item));

let sums = new Set();

for (let i = 0; i < cards.length; i++) {
  for (let j = i + 1; j < cards.length; j++) {
    for (let k = j + 1; k < cards.length; k++) {
      sums.add(cards[i] + cards[j] + cards[k]);
    }
  }
}

let arr = Array.from(sums).sort((a, b) => b - a);
console.log(arr[k - 1]);
