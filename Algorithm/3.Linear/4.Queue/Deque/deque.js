function Deque(array = []) {
  this.array = array;
}

//getButter()
Deque.prototype.getButter = function () {
  return this.array.slice();
};

//isEmpty()
Deque.prototype.isEmpty = function () {
  return this.array.length === 0;
};

//pushFront() : 앞쪽 데이터 추가
Deque.prototype.pushFront = function (element) {
  return this.array.unshift(element);
};

//popFront() : 앞쪽 데이터 삭제
Deque.prototype.popFront = function () {
  return this.array.shift();
};

//pushBack() : 뒤쪽 데이터 추가
Deque.prototype.pushBack = function (element) {
  return this.array.push(element);
};

//popBack() : 앞쪽 데이터 삭제
Deque.prototype.popBack = function () {
  return this.array.pop();
};

//front() : 앞쪽 데이터 반환
Deque.prototype.front = function () {
  return this.array.length === 0 ? undefined : this.array[0];
};

//back() : 뒤쪽 데이터 반환
Deque.prototype.back = function () {
  return this.array.length === 0
    ? undefined
    : this.array[this.array.length - 1];
};

// size()
Deque.prototype.size = function () {
  return this.array.length;
};

// clear()
Deque.prototype.clear = function () {
  this.array = [];
};

let dq = new Deque([1, 2, 3]);

dq.pushFront(0);
dq.pushBack(4);

console.log(dq);

dq.popFront();
dq.popBack();
console.log(dq);
