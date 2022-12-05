function solution(h, w) {
  let answer = [];

  for (let i = 0; i <= h - 1; i++) {
    answer.push([]);
  }
  for (let i = 0; i <= h - 1; i++) {
    for (let j = 0; j <= w - 1; j++) {
      if (i === 0 && j === 0) {
        answer[i][j] = 0;
      }
      if (i === 0 && j !== 0) {
        answer[i][j] = 1;
      }
      if (i !== 0 && j === 0) {
        answer[i][j] = 1;
      }
      if (i > 0 && j > 0) {
        answer[i][j] = answer[i - 1][j] + answer[i][j - 1];
      }
    }
  }
  return answer[h - 1][w - 1];
}

console.log(solution(2, 3));
