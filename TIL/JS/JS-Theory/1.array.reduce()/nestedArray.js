const arr = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);

const newArr = arr.reduce(reducer, []);

console.log(newArr);
