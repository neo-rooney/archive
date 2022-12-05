function solution(fruits) {
  var answer = 0;
  let max = 0;
  let sum = 0;
  fruits.map((item) => {
    sum += item;

    if (sum < 0) {
      sum = 0;
    }

    if (sum > max) {
      max = sum;
    }
  });

  answer = max;

  return answer;
}

const result = solution([-2, 5, -3, 6, 8, -1, -5, 3]);
console.log(result);
