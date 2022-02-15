const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().trim().split("\n");

const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]);

let test = [];
for (let i = 1; i <= M; i++) {
  test.push(input[i].split(" ").map((item) => Number(item)));
}

let cnt = 0;
for (let mento = 1; mento < 5; mento++) {
  for (let menti = 1; menti < 5; menti++) {
    let flag = 1;
    for (let i = 0; i < M; i++) {
      let mento_rank;
      let menti_rank;
      for (let j = 0; j < N; j++) {
        if (test[i][j] === mento) mento_rank = j;
        if (test[i][j] === menti) menti_rank = j;
      }
      if (menti_rank >= mento_rank) {
        flag = 0;
        break;
      }
    }
    if (flag) cnt++;
  }
}

console.log(cnt);
