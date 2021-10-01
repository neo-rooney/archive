function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

function calculator(callback, x, y) {
  return callback(x, y);
}

console.log(calculator(add, 10, 20));
console.log(calculator(sub, 10, 20));
console.log(calculator(mul, 10, 20));
console.log(calculator(div, 10, 20));
