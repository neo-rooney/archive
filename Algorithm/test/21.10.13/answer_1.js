function solution(n) {
  var answer = 0;
  let binary = [];
  let sum = 0;
  // 0 부터 n 까지 수를 2진수로 변환
  for (let i = 0; i <= n; i++) {
    binary.push(i.toString(2));
  }
  // 2진수를 10진수 취급하여 모든 이진수에 대한 총합을 구함
  /** 예)
    100
   +101
   =201
  */
  for (let i = 0; i < binary.length; i++) {
    sum += Number(binary[i]);
  }
  // 각 자리수의 합이 필요한 1(붉은 종이)의 갯수
  let sumToString = String(sum);
  for (let i = 0; i < sumToString.length; i++) {
    answer += parseInt(sumToString[i]);
  }
  return answer;
}

console.log(solution(7));
/**
0:  0
1 : 1
2: 10
3: 11
4: 100
5: 101
6: 110
7: 111
 */
