/*** 5. 네번째 좌표 ***/

/* user code */
function answer(x_arr, y_arr) {
  let result = [];

  // 코드 구현 시작 영역

  let x = new Set(x_arr);
  let y = new Set(y_arr);

  console.log('x>>', x);
  console.log('y>>', y);

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  [
    [5, 5, 8],
    [5, 8, 5],
  ],
  // TC: 2
  [
    [3, 1, 1],
    [2, 1, 2],
  ],
  // TC: 3
  [
    [7, 7, 3],
    [4, 1, 1],
  ],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
