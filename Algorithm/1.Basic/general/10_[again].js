/* 10. 2차원 배열의 곱셈 합 [retry]*/

/* user code */
function answer(arr) {
  let product = 1;

  // 코드 구현 시작 영역
  let new_arr = arr.reduce((acc, curr) => acc.concat(curr));
  product = new_arr.reduce((acc, curr) => acc * curr);

  // 코드 구현 종료 영역

  return product;
}

/* main code */
let input = [
  // TC: 1
  [[1], [2], [3]],
  // TC: 2
  [
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ],
  // TC: 3
  [
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
