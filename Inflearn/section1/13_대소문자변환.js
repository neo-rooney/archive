const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim();

const convertCharCase = (str) => {
  let result = '';
  for (let element of str) {
    element = element.charCodeAt();
    if (element >= 65 && element <= 90) {
      result += String.fromCharCode(element + 32);
    } else {
      result += String.fromCharCode(element - 32);
    }
  }
  return result;
};

console.log(convertCharCase(input));
