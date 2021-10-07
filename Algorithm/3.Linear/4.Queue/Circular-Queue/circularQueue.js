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

let cq = new CircularQueue([1, 2, 3, 4]);
cq.enqueue(5);
cq.enqueue(6);

cq.dequeue();
console.log(cq);

cq.enqueue(6);

console.log(cq);
