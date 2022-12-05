/* 접시 꺼내기 */

/* user code */
function answer(str) {
  let result = [];

  return result;
}

/* main code */
let input = [
  // TC: 1
  'bacd',

  // TC: 2
  'dabc',

  // TC: 3
  'edcfgbijha',
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
