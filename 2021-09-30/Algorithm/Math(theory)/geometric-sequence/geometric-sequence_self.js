let result;

function recursive(s, t, number) {
  //s = f(1) 값, t = 간격 , number = n
  if (number === 1) {
    return s;
  }

  return recursive(s, t, number - 1) * t;
}

result = recursive(3, 2, 5);
console.log(result);
