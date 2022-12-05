const fs = require('fs');
const [s, t] = fs.readFileSync('./example.txt').toString().trim().split(' ');

const checkMinDestance = (str, t) => {
  let answer = [];
  let distance = 1000;
  for (let element of str) {
    if (element !== t) {
      distance++;
      answer.push(distance);
    } else {
      distance = 0;
      answer.push(distance);
    }
  }
  distance = 1000;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== t) {
      distance++;
      if (answer[i] > distance) answer[i] = distance;
    } else {
      distance = 0;
    }
  }

  return answer;
};

console.log(checkMinDestance(s, t));
