/* 대표 선출 ['retry'] */

const DEFAULT_SIZE = 5;

// CircularQueue(): 초기 속성값 설정을 위한 생성자 함수
function CircularQueue(array = [], size = DEFAULT_SIZE) {
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
}

//getBuffer(): 객체 내 데이터 셋 반환
CircularQueue.prototype.getBuffer = function () {
  return this.array.slice();
};

//isEmpty(): 데이터 비어 있는지 확인
CircularQueue.prototype.isEmpty = function () {
  return this.length === 0;
};
//isFull(): 데이터 꽉 차 있는지 확인
CircularQueue.prototype.isFull = function () {
  return this.length === this.size;
};

//enqueue()
CircularQueue.prototype.enqueue = function (element) {
  if (this.isFull()) return false;
  this.array[this.tail % this.size] = element;
  this.tail = (this.tail + 1) % this.size;
  this.length++;
};

//dequeue()
CircularQueue.prototype.dequeue = function () {
  if (this.isEmpty()) return undefined;
  let element = this.array[this.head % this.size];
  delete this.array[this.head % this.size];
  this.head = (this.head + 1) % this.size;
  this.length--;
  return element;
};

// front() :  가장 첫 데이터 반환
CircularQueue.prototype.front = function () {
  return this.array[0] ? undefined : this.array[this.head];
};

// getHead() :  헤드
CircularQueue.prototype.getHead = function () {
  return this.head;
};

// clear() :  큐 초기화
CircularQueue.prototype.clear = function (size = DEFAULT_SIZE) {
  this.array = [];
  this.size = size;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
};

// size() : 큐 내 데이터 개수 확인
CircularQueue.prototype.dataSize = function () {
  return this.length;
};

/* user code */
function answer(n, m, k) {
  let result = [];
  let people = [];
  for (let i = 1; i <= n; i++) {
    people.push(i);
  }

  let cq = new CircularQueue(people);

  //m번째 사람 빼주기
  while (!cq.isEmpty()) {
    if (cq.getHead() !== m - 1) {
      let temp = cq.dequeue();
      cq.enqueue(temp);
    } else {
      result.push(cq.dequeue());
      break;
    }
  }
  /**
    h = 2 
    t = 1
   */
  //n번째 사람 뺴주기
  while (!cq.isEmpty()) {
    if (cq.getHead() !== n - 1) {
      let temp = cq.dequeue();
      cq.enqueue(temp);
    } else {
      result.push(cq.dequeue());
      break;
    }
  }

  // 코드 구현 시작 영역

  // …

  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  [8, 2, 3],

  // TC: 2
  [10, 2, 3],

  // TC: 3
  [20, 5, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}
