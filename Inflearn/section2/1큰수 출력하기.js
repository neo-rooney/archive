const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim().split('\n');

const N = Number(input[0]);
const nums = input[1].split(' ').map((item) => Number(item));
const answer = [nums[0]];
for (let i = 1; i < nums.length; i++) {
  if (nums[i - 1] < nums[i]) {
    answer.push(nums[i]);
  }
}

console.log(answer);
