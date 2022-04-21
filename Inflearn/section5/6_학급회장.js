const fs = require("fs");

const input = fs.readFileSync("./example.txt").toString().trim().split("\n");
const N = Number(input[0]);
const str = input[1];

const myMap = new Map();

for (let i = 0; i < N; i++) {
  const tmp = myMap.get(str[i]);
  if (tmp) {
    myMap.set(str[i], tmp + 1);
  } else {
    myMap.set(str[i], 1);
  }
}

const max = [...myMap].reduce((a, e) => (e[1] > a[1] ? e : a))[0];

console.log(max);
