/* 프린터 출력 */

function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function (element) {
  this.array.push(element);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.front = function () {
  return this.array[0];
};

Queue.prototype.max = function () {
  return Math.max(...this.array);
};

/* user code */
function answer(priorities, select) {
  let result = -1;

  // 1. 큐 내 우선순위가 가장 높은 문서를 확인

  // 2. 그 문서가 나올 때까지, 나머지 문서는 dequeue -> enqueue (순서 바꿈)

  // 3. 문서 번호 select를 찾을때까지 계쏙 반복

  let vq = new Queue(); // index
  let pq = new Queue();
  for (let i = 0; i < priorities.length; i++) {
    vq.enqueue(i);
    pq.enqueue(priorities[i]);
  }

  let count = 0;
  while (true) {
    // 출력 부분
    if (pq.front() === pq.max()) {
      count++;
      // 확인 필요 문서
      if (vq.front() === select) {
        result = count;
        break;
      }
      // 다른 문서 제거
      else {
        vq.dequeue();
        pq.dequeue();
      }
    }
    // 순서 변경 부분
    else {
      vq.enqueue(vq.dequeue());
      pq.enqueue(pq.dequeue());
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
