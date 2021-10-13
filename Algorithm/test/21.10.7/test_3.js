function solution(s) {
  var answer = 0;

  let nums = [];
  let str = [];
  let minusArr = [];

  // 1. +기호를 기준으로 문자열을 배열로 변환
  let temp = s.split('+');
  temp.map((item) => {
    if (!Number(item)) {
      // 음수가 포함된 경우 NaN으로 식별 가능하므로 별도 보관
      str.push(item);
    } else {
      // 양수인 경우 숫자로 변환해서 별도 보관
      nums.push(Number(item));
    }
  });

  // 2. - 기호를 기준으로 배열을 쪼갬
  str.map((item) => {
    item = item.split('-');
    minusArr.push(item);
  });

  // 3. 쪼갠 배열을 앞에서 부터 모두 빼서 숫자 보관 배열에 넣어줌
  minusArr.map((item) => {
    let result = item.reduce((acc, curr) => {
      return acc - curr;
    });
    nums.push(Number(result));
  });

  // 3. 숫자 배열의 모든 값을 더함
  answer = nums.reduce((acc, curr) => {
    return acc + curr;
  });

  return answer;
}

const result = solution('-3+26-7+8-7');
console.log(result);
