const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Alice', 'Bob'];

const reducer = (accumulator, currentValue) => {
  if (currentValue in accumulator) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
};

var countedNames = names.reduce(reducer, {});

console.log(countedNames);
