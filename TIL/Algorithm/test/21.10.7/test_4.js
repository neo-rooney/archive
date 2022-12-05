function solution(n) {
  var answer = 0;

  //1 ~ n 까지 자연수 배열을 생성
  let nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }

  let start = 0;

  while (start < n) {
    let sum = 0;
    // 반복을 통해 연속된 값의 합이 n인 경우 반복을 종료하고, start, answer 값을 증가시킴
    // 합이 n보다 큰 경우는 없는 경우이므로 , start값을 증가시킴
    for (let i = start; i < nums.length; i++) {
      sum += nums[i];
      if (sum === n) {
        answer++;
        start++;
        break;
      }

      if (sum > n) {
        start++;
        break;
      }
    }
  }
  return answer;
}

solution(15);
