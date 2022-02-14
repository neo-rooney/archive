const fs = require("fs");
const [n, ...results] = fs
  .readFileSync("./example.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map((item) => Number(item));

let test = [];
let current_scroe = 0;
let total = 0;
for (let i = 0; i < results.length; i++) {
  if (results[i]) {
    current_scroe++;
  } else {
    current_scroe = 0;
  }
  test.push(current_scroe);
  total += current_scroe;
}

console.log(test);
