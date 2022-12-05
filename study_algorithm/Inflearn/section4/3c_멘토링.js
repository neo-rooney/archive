const fs = require("fs");
const [[N, M], ...arr] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" ").map((item) => Number(item)));

let cnt = 0;

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    let menti = i;
    let mento = j;
    let flag = true;
    for (let k = 0; k < M; k++) {
      let menti_rank = 0;
      let mento_rank = 0;
      for (let t = 0; t < N; t++) {
        if (arr[k][t] === menti) {
          menti_rank = t;
        }

        if (arr[k][t] === mento) {
          mento_rank = t;
        }
      }
      if (menti_rank >= mento_rank) {
        flag = false;
        break;
      }
    }

    if (flag) {
      cnt++;
    }
  }
}

console.log("cnt", cnt);
