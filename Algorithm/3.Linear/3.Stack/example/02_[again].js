/* 괄호 짝 찾기 ['retry']*/

/* user code */
if (!Array.prototype.peek) {
  Array.prototype.peek = function () {
    return this[this.length - 1];
  };
}

if (!Array.prototype.isEmpty) {
  Array.prototype.isEmpty = function () {
    return this.length == 0;
  };
}
function answer(str) {
  let result = [];

  return result;
}

/* main code */
let input = [
  // TC: 1
  '(a+b)',

  // TC: 2
  '(a*(b+c)+d)',

  // TC: 3
  '(a*(b+c)+d+(e)',

  // TC: 4
  '(a*(b+c)+d)+e)',

  // TC: 5
  '(a*(b+c)+d)+(e*(f+g))',
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
