/* 카드 뽑기 */

function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (element) {
  this.array.push(element);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

/* user code */
function answer(n) {
  let result = [];

  // 0. 카드 초기화
  let queue = new Queue();
  for (let i = 1; i <= n; i++) {
    queue.enqueue(i);
  }

  // 1. 첫번째 카드는 분배

  // 2. 두번째 카드는 맨 아래로 다시 넣는다

  // 3. 카드가 없어질 때까지 1, 2번을 반복한다.
  while (queue.array.length != 0) {
    result.push(queue.dequeue());
    if (queue.array.length != 0) {
      queue.enqueue(queue.dequeue());
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  4,

  // TC: 2
  7,

  // TC: 3
  10,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
