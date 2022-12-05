function solve(n) {
  let answer;
  let index = 1;
  let cube = 1;
  while (cube < n) {
    cube = index * index * index;
    if (cube === n) {
      answer = cube;
      break;
    }
    if (cube > n) {
      answer = (index - 1) * (index - 1) * (index - 1);
      break;
    }
    index++;
  }

  return answer;
}
console.log(solve(15));
console.log(solve(125));
