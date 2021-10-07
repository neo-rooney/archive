/* 프린터 출력 */
function Element(data, priority) {
  this.data = data;
  this.priority = priority;
}

function PriorityQueue(array = []) {
  this.array = [];
}

PriorityQueue.prototype.getBuffer = function () {
  return this.array.map((element) => element.priority);
};

PriorityQueue.prototype.enqueue = function (data, prioriry) {
  let element = new Element(data, prioriry);
  this.array.push(element);
};

PriorityQueue.prototype.dequeue = function () {
  return this.array.shift();
};

PriorityQueue.prototype.first = function () {
  return this.array.length !== 0 ? this.array[0] : undefined;
};

PriorityQueue.prototype.size = function () {
  return this.array.length;
};

/* user code */
function answer(priorities, select) {
  let result = -1;
  let pq = new PriorityQueue();
  priorities.map((item, i) => pq.enqueue(i, item));
  let count = 0;
  let max_priority;

  while (pq.size() !== 0) {
    max_priority = Math.max(...pq.getBuffer());
    if (pq.first().data === select && pq.first().priority === max_priority) {
      result = ++count;
      break;
    }

    if (pq.first().priority === max_priority) {
      pq.dequeue();
      count++;
    } else {
      let temp = pq.dequeue();
      pq.enqueue(temp.data, temp.priority);
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [[3], 0],

  // TC: 2
  [[3, 4, 5, 6], 2],

  // TC: 3
  [[1, 1, 5, 1, 1, 1], 0],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
