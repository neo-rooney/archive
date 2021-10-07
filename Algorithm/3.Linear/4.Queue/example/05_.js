/* 데크 만들기 */
function Deque(array = []) {
  this.array = array;
}

Deque.prototype.empty = function () {
  return this.array.length === 0 ? 1 : 0;
};

Deque.prototype.push_front = function (element) {
  return this.array.unshift(element);
};

Deque.prototype.push_back = function (element) {
  return this.array.push(element);
};

Deque.prototype.pop_front = function () {
  return this.empty() ? -1 : this.array.unshift();
};

Deque.prototype.pop_back = function () {
  return this.empty() ? -1 : this.array.pop();
};

Deque.prototype.size = function () {
  return this.array.length;
};

Deque.prototype.front = function () {
  return this.empty() ? -1 : this.array[0];
};

Deque.prototype.back = function () {
  return this.empty() ? -1 : this.array[this.array.length - 1];
};

/* user code */
function answer(cmds) {
  let result = [];
  let dq = new Deque();
  cmds.map((item) => {
    if (item.indexOf('push') !== -1) {
      let temp = item.split(' ');

      result.push(dq[`${temp[0]}`](Number(temp[1])));
    } else {
      result.push(dq[`${item}`]());
    }
  });

  return result;
}

/* main code */
let input = [
  // TC: 1
  ['push_back 1', 'push_front 2', 'pop_front', 'pop_back', 'pop_front'],

  // TC: 2
  [
    'push_back 3',
    'push_front 4',
    'push_back 5',
    'push_front 6',
    'front',
    'back',
    'pop_front',
    'size',
    'empty',
  ],

  // TC: 3
  [
    'push_back 7',
    'push_front 8',
    'front',
    'back',
    'size',
    'empty',
    'pop_front',
    'pop_back',
    'pop_front',
    'size',
    'empty',
    'pop_back',
    'push_front 9',
    'empty',
    'front',
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
