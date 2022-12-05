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
  arrA.sort((a, b) => a - b);
  arrB.sort((a, b) => a - b);
  const result = [];
  while (pA < N && pB < M) {
    if (arrA[pA] > arrB[pB]) pB++;
    else if (arrA[pA] < arrB[pB]) pA++;
    else {
      result.push(arrA[pA]);
      pA++;
      pB++;
    }
  }

  return result;
};

console.log(checkCommon(arr_a, arr_b));
