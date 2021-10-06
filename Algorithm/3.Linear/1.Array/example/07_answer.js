/* OX 퀴즈 */

/* user code */
function answer(mark) {
  let result = 0;

  // 1 -> 1점, 연속한 1인 경우 연속한 count 만큼 점수 추가
  let score = 0;
  for (let i = 0; i < mark.length; i++) {
    if (mark[i] == 1) {
      result += ++score;
    } else {
      score = 0;
    }
  }

  /**
   * 0 -> 1: result(1), score(1)
   * 1 -> 0: result(0), score(0)
   * 2 -> 1: result(2), score(1)
   * 3 -> 1: result(4), score(2)
   * 4 -> 1: result(7), score(3)
   * 5 -> 0: result(7), score(0)
   * 6 -> 1: result(8), score(1)
   * 7 -> 1: result(10), score(2)
   */

  return result;
}

/* main code */
let input = [
  // TC: 1
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],

  // TC: 2
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],

  // TC: 3
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
