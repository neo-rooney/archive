/*** 4. ATM 기기 ***/

/* user code */
function answer(withdraw, total) {
  let result;

  // 코드 구현 시작 영역
  result = total - withdraw - 0.5;
  if (withdraw % 5 !== 0) {
    result = total;
  } else if (result < 0) {
    result = total;
  }

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  [40, 130.0],
  // TC: 2
  [33, 130.0],
  // TC: 3
  [300, 300.0],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
