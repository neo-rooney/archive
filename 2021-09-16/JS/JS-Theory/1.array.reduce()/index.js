const arr = [1, 2, 3, 4, 5];
const reducer = (accumulator, currentValue, currentIndex, array) => {
  // console.log('accumulator', accumulator);
  // console.log('currentValue', currentValue);
  // console.log('currentIndex', currentIndex);
  // console.log('array', array);
  // console.log('---------------');
  return accumulator + currentValue;
};

const sum = arr.reduce(reducer);
console.log(sum);
