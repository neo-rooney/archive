/* 9. 문자 교정 [retry]*/

/* user code */
function answer(str) {
  let fix_str = '';

  // 코드 구현 시작 영역

  let temp = str.split(' ');
  for (let i = 0; i < temp.length; i++) {
    let aplhabet;
    aplhabet = [...temp[i]];
    aplhabet[0] = aplhabet[0].toUpperCase();
    temp[i] = aplhabet.join('');
  }
  fix_str = temp.join(' ');
  // 코드 구현 종료 영역

  return fix_str;
}

/* main code */
let input = [
  // TC: 1
  'Hello, My name is john',
  // TC: 2
  'This week is closed due to COVID-19',
  // TC: 3
  'fifty percent off this week',
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
