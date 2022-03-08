const fs = require("fs");
const [[N, M], ...arr] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)));

let count = 0;
const answer = [];
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    let mento = i;
    let menti = j;
    let flag = true;
    for (let k = 0; k < M; k++) {
      let mento_orer = arr[k].indexOf(mento);
      let menti_orer = arr[k].indexOf(menti);
      if (menti_orer <= mento_orer) {
        flag = false;
        break;
      }
    }
    if (flag) {
      answer.push([mento, menti]);
    }
  }
}

console.log(answer);
