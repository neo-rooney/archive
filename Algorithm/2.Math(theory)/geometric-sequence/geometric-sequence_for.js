let result;

function forloop(s, t, number) {
  //s = f(1) 값, t = 간격 , number = n
  let acc = 1;
  for (let i = 1; i <= number; i++) {
    if (i == 1) acc *= s;
    else acc *= t;
    console.log(`f(${i}) = ${acc}`);
  }
  return acc;
}

result = forloop(3, 2, 5);
console.log(result);
