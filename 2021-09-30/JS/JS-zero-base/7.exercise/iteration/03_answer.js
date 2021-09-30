/*** 3. 반 평균 ***/

/* user code */
function answer(score) {
  let average = 0;

  // 1. 반 인원만큼 시험 점수를 더하다.
  for (let i = 0; i < score.length; i++) {
    average += score[i];
  }

  // 2. 반 인원 수만큼 더한 점수를 나눠 평균을 구한다.
  average /= score.length;

  // 3. 소수 둘째자리까지 표현되도록 한다.(반올림 처리)
  average = average.toFixed(2);

  return average;
}

/* main code */
let input = [
  // TC: 1
  [80, 95, 65, 70, 100],
  // TC: 2
  [82, 77, 51, 64, 73, 90, 80],
  // TC: 3
  [100, 71, 59, 88, 72, 75, 91, 93],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
