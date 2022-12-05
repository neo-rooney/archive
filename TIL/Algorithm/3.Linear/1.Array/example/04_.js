/* 일곱 난장이 */

/* user code */
function answer(dwarf) {
  let result = [];

  // 코드 구현 시작 영역

  // 1. 배열의 총합 구하기
  let total_sum = dwarf.reduce((acc, curr) => acc + curr);
  console.log(total_sum);

  // 2. 총합과 100 차이 구하기
  let diff = total_sum - 100;

  // 3. 합이 diff가 되는 요소 2개 구하기(순열)
  let select_ele = [];

  for (let i = 0; i < dwarf.length; i++) {
    for (let j = i + 1; j < dwarf.length; j++) {
      if (dwarf[i] + dwarf[j] === diff) {
        select_ele = [dwarf[i], dwarf[j]];
      }
    }
  }

  // 3. 기존 배열에서 선택된 것 제외하기

  result = dwarf.filter((item) => !select_ele.includes(item));

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  [1, 5, 6, 7, 10, 12, 19, 29, 33],

  // TC: 2
  [25, 23, 11, 2, 18, 3, 28, 6, 37],

  // TC: 3
  [3, 37, 5, 36, 6, 22, 19, 2, 28],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
