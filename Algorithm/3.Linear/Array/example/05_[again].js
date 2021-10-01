/* 나무 그리기 [retry]*/

/* user code */
function answer(height) {
  let str = '';

  // 코드 구현 시작 영역

  //1. 최대 별 갯수
  let max_star_num = 2 * height - 1;
  for (let i = 1; i <= height; i++) {
    //2. i번째 줄에서 별의 갯수
    let row_star_num = 2 * i - 1;
    //3. i번째 줄에서 별 시작 지점
    let row_star_at = height - i;
    //4. i번째 줄에서 별 끝 지점
    let row_star_end = row_star_at + row_star_num - 1;
    let temp = [];
    for (let j = 0; j < max_star_num; j++) {
      if (j >= row_star_at && j <= row_star_end) {
        temp.push('*');
      } else {
        temp.push(' ');
      }
    }
    str += '\n' + temp.join('');
  }

  return str;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  7,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
