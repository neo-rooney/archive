/* 큐 만들기 */

/* user code */
function answer(cmds) {
  let result = [];

  function Queue(array) {
    this.array = array ? array : [];
  }

  Queue.prototype.enqueue = function (element) {
    this.array.push(element);
    return element;
  };

  Queue.prototype.dequeue = function () {
    return this.empty() ? -1 : this.array.shift();
  };

  Queue.prototype.empty = function () {
    return this.array.length === 0 ? 1 : 0;
  };

  Queue.prototype.size = function () {
    return this.array.length;
  };

  Queue.prototype.front = function () {
    return this.empty() ? -1 : this.array[0];
  };

  Queue.prototype.back = function () {
    return this.empty() ? -1 : this.array[this.array.length - 1];
  };

  let my_queue = new Queue();

  cmds.map((item) => {
    if (item.indexOf('enqueue') !== -1) {
      let temp = item.split(' ');
      result.push(my_queue.enqueue(temp[1]));
    } else {
      result.push(my_queue[`${item}`]());
    }
  });

  return result;
}

/* main code */
let input = [
  // TC: 1
  ['enqueue 1', 'enqueue 2', 'dequeue', 'dequeue', 'dequeue'],

  // TC: 2
  [
    'enqueue 3',
    'enqueue 4',
    'enqueue 5',
    'enqueue 6',
    'front',
    'back',
    'dequeue',
    'size',
    'empty',
  ],

  // TC: 3
  [
    'enqueue 7',
    'enqueue 8',
    'front',
    'back',
    'size',
    'empty',
    'dequeue',
    'dequeue',
    'dequeue',
    'size',
    'empty',
    'dequeue',
    'enqueue 9',
    'empty',
    'front',
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
