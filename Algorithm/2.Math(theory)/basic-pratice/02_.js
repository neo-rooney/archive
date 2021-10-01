/* 2. 잃어버린 카드 찾기 */

/* user code */
function answer(a, b, c) {
  let number = 0;

  // sort
  num = [a, b, c];
  num.sort((x, y) => x - y);

  // 코드 구현 시작 영역

  // 1. 차이 구하기
  let diff =
    num[1] - num[0] > num[2] - num[1] ? num[2] - num[1] : num[1] - num[0];

  for (let i = 0; i < 4; i++) {
    let temp = diff * i + num[0];
    if (num.indexOf(temp) === -1) {
      number = temp;
    }
  }

  // 코드 구현 종료 영역

  return number;
}

/* main code */
let input = [
  // TC: 1
  [1, 7, 10],

  // TC: 2
  [3, 8, 18],

  // TC: 3
  [2, 5, 11],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
