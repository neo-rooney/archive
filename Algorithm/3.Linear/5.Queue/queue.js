//Queue() : 생성자 함수
function Queue(array) {
  this.array = array ? array : [];
}

//getBuffer() : 객체 내 데이터 셋 반환
Queue.prototype.getButter = function () {
  return this.array.slice();
};

//isEmpty() : 객체 내 데이터 o/x
Queue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

//enqueue()
Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

//dequeue()
Queue.prototype.dequeue = function () {
  return this.array.unshift();
};

// front() :  가장 끝 데이터 반환
Queue.prototype.front = function () {
  return this.array[0] ? undefined : this.array[0];
};

// clear() :  큐 초기화
Queue.prototype.clear = function () {
  this.array = [];
};

// size() : 스텍 내 데이터 개수 확인
Queue.prototype.size = function () {
  return this.array.length;
};

// indexOf() : 데이터 위치 값 조회
Queue.prototype.indexOf = function (element, position) {
  return this.array.indexOf(element, position);
};

// includes() : 데이터 존재 여부 확인
Queue.prototype.includes = function (element) {
  for (let i = 0; i < this.array.length; i++) {
    if (element === this.array[i]) return true;
  }
  return false;
};

let queue = new Queue([1, 2]);
console.log(queue);
console.log(queue.enqueue(3));
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.peek());
console.log(queue.size());
console.log(queue.indexOf(1));
console.log(queue.includes(111));
