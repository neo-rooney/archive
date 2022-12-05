const fs = require("fs");

const [str1, str2] = fs
  .readFileSync("./inflearn/section5/example/7.txt")
  .toString()
  .trim()
  .split("\n");

const myMap = new Map();
let answer = "YES";
for (let i = 0; i < str1.length; i++) {
  const tmp = myMap.get(str1[i]);
  if (tmp) {
    myMap.set(str1[i], tmp + 1);
  } else {
    myMap.set(str1[i], 1);
  }
}

for (let i = 0; i < str2.length; i++) {
  const tmp = myMap.get(str2[i]);
  if (tmp) {
    myMap.set(str1[i], tmp - 1);
  } else {
    answer = "NO";
    break;
  }
}

console.log(answer);
