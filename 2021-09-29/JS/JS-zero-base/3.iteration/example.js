const UNTIL_NUM = 10;
let sum = 0;

for (let i = 0; i <= UNTIL_NUM; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log(sum);
