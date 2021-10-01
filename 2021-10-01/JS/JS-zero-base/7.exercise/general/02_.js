/* 2. 제곱 구현 */

/* user code */
function answer(x, y) {
  let result = 1;

  // 코드 구현 시작 영역

  result = x ** y;

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  [2, 3],
  // TC: 2
  [4, 6],
  // TC: 3
  [1, 100],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
