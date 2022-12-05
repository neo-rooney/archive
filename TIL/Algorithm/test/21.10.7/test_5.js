function solution(s) {
  var answer = 0;
  //1. 문자열을 배열로 변환
  let temp = s.split('');
  //2. 배열을 객체로 변환 숫자를 key, 갯수를 value
  const result = {};
  temp.forEach((x) => {
    result[x] = (result[x] || 0) + 1;
  });

  //3. 객체 내 value 값이 최대인 프로퍼티의 key값을 구함
  let max = Number.MIN_SAFE_INTEGER;
  let max_key;
  for (key in result) {
    if (result[key] > max) {
      max_key = key;
    }
  }
  answer = max_key;
  return answer;
}

solution('174771177');
