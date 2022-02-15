const fs = require("fs");
const input = fs.readFileSync("./example.txt").toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[2]);

const arr_a = input[1].split(" ").map((item) => Number(item));
const arr_b = input[3].split(" ").map((item) => Number(item));

const result = [...arr_a, ...arr_b].sort((a, b) => a - b);

console.log(result);

