const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim().split('\n');
const [n, k] = input[0].split(' ').map((item) => Number(item));

const cards = input[1].split(' ').map((item) => Number(item));
cards.sort((a, b) => b - a);

// 1. 3장을 뽑는 경우의 수 (같은 카드를 2번 뽑을순 없다)
let sum = 0;
let count = 0;
for (let i = 0; i < cards.length; i++) {
  for (let j = i + 1; j < cards.length; j++) {
    for (let k = j + 1; k < cards.length; k++) {
      let tmp = cards[i] + cards[j] + cards[k];
      if (count === 3) {
        break;
      }
      if (sum !== tmp) {
        sum = cards[i] + cards[j] + cards[k];
        count++;
      }
    }
  }
}

console.log(sum);

//2. 3장의 카드를 뽑은 합 중 3번째로 큰 수를 출력
