const arr = [
  { name: 'a', value: 10 },
  { name: 'b', value: 20 },
  { name: 'c', value: 30 },
  { name: 'd', value: 40 },
  { name: 'e', value: 50 },
];
const reducer = (accumulator, currentValue) => {
  return accumulator + currentValue.value;
};

const sum = arr.reduce(reducer, 0);
console.log(sum);
