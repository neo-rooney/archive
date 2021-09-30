/*** 2. 두 수 사이 숫자 ***/

/* user code */
function answer(x, y) {
  let result = [];
  let max;
  let min;
  if (x > y) {
    max = x;
    min = y;
  } else {
    max = y;
    min = x;
  }

  // 코드 구현 시작 영역
  for (let i = min; i < max + 1; i++) {
    result.push(i);
  }
  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  [3, 7],
  // TC: 2
  [8, 3],
  // TC: 3
  [12, 10],
  [3, 3],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
