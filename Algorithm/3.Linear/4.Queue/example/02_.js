/* 카드 뽑기 */

/* user code */
function answer(n) {
  let result = [];

  //1. 1 부터 n 까지 숫자가 들어있는 배열을 만들어 준다.
  let cards = [];
  for (let i = 1; i <= n; i++) {
    cards.push(i);
  }

  //2. 가장 위 카드를 빼고, 그 아래 요소를 맨 밑으로 순서를 변경한다.
  do {
    result.push(cards.shift());
    cards.push(cards.shift());
  } while (result.length !== n);

  return result;
}

/* main code */
let input = [
  // TC: 1
  4,

  // TC: 2
  7,

  // TC: 3
  10,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
