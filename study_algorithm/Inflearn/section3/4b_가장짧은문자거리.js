const fs = require("fs");
const [s, t] = fs.readFileSync("./example.txt").toString().trim().split(" ");

const answer = [];
let distance = 1000;
for (let i = 0; i < s.length; i++) {
  distance++;
  if (s[i] === t) {
    distance = 0;
  }
  answer[i] = distance;
}

for (let i = s.length - 1; i >= 0; i--) {
  distance++;
  if (s[i] === t) {
    distance = 0;
  }
  answer[i] = answer[i] > distance ? distance : answer[i];
}

console.log(answer);
