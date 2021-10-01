let result;

function recursive(number) {
  if (number == 1) {
    return number;
  }
  return recursive(number - 1) * number;
}

result = recursive(5);
console.log(result);
