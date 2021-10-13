function solution(arr) {
  var answer = 0;
  let data = {};
  // 빼지 않은 경우는 구슬의 총합이 짝수인 경우이다.
  if (arr.length % 2 === 0) {
    return 0;
  }

  // 배열을 객체로 만들어서 값이 1인 key를 찾기
  arr.forEach((x) => {
    data[x] = (data[x] || 0) + 1;
  });

  for (key in data) {
    if (data[key] === 1) {
      answer = key;
      break;
    }
  }

  return answer;
}

// 4번 구슬을 뺀 경우
const result = solution([1, 1, 2, 2, 3, 3, 4, 5, 5]);
console.log(result);
