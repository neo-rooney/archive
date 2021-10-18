function solution(arr) {
  let answer = arr[0][0];
  for (let i = 1; i < arr.length; i++) {
    let temp = [];
    for (let j = 0; j < arr[i].length; j++) {
      temp.push(answer + arr[i][j]);
    }
    let max = Number.MIN_SAFE_INTEGER;
    for (let k = 0; k < temp.length; k++) {
      if (temp[k] > max) {
        max = temp[k];
      }
    }
    answer = max;
  }
  return answer;
}

arr = [[3], [5, 10], [4, 8, 6]];
console.log(solution(arr));
