const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().trim().split("\n");

// A 배열의 크기
const N = Number(input[0]);
// B 배열의 크기
const M = Number(input[2]);

const arr_a = input[1].split(" ").map((item) => Number(item));
const arr_b = input[3].split(" ").map((item) => Number(item));

//A 배열의 포인터
let pA = 0;
//B 배열의 포인터
let pB = 0;

const checkCommon = (arrA, arrB) => {
  const result = [];
  while (pA <= N && pB <= M) {
    if (pB === M) {
      pA++;
      pB = 0;
    }
    if (arrA[pA] === arrB[pB]) {
      result.push(arrA[pA]);
    }
    pB++;
  }
  return result.sort((a, b) => a - b);
};

console.log(checkCommon(arr_a, arr_b));
