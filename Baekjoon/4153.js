let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

let answerList = input.map((item) => {
  let sides = item.split(' ').map((item) => parseInt(item));
  if (sides[0] === 0) {
    return null;
  }
  let maxSide = Number.MIN_SAFE_INTEGER;
  let restSides;
  for (let i = 0; i < sides.length; i++) {
    if (sides[i] > maxSide) {
      maxSide = sides[i];
    }
  }
  restSides = sides.filter((item) => item !== maxSide);
  return maxSide ** 2 === restSides[0] ** 2 + restSides[1] ** 2
    ? 'right'
    : 'wrong';
});

answerList.map((item) => {
  if (item) {
    console.log(item);
  }
});
