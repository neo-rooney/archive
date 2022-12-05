const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[2]);

const arr_a = input[1].split(" ").map((item) => Number(item));
const arr_b = input[3].split(" ").map((item) => Number(item));

const solution = (arr1, arr2) => {
  const answer = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < N && p2 < M) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }

  while (p1 < N) answer.push(arr1[p1++]);
  while (p2 < M) answer.push(arr2[p2++]);

  return answer;
};

console.log(solution(arr_a, arr_b));
