const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim();

const compressionString = (s) => {
  let answer = '';
  let cnt = 1;
  s = s + ' ';
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
};

console.log(compressionString(input));
