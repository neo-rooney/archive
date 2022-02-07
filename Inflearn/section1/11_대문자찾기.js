const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim();

const checkUpperCaseNumber = (str) => {
  let ctn = 0;

  for (let element of str) {
    let charCode = element.charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      ctn++;
    }
  }

  return ctn;
};

const answer = checkUpperCaseNumber(input);
console.log(answer);
