const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input.map((item) => {
  if (item === '0') {
    return;
  }
  let isSame = 'yes';

  for (let i = 0; i < item.length / 2; i++) {
    if (item[i] != item[item.length - 1 - i]) {
      isSame = 'no';
    }
  }

  console.log(isSame);
});
