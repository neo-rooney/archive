//Stack() : 생성자 함수
function Stack(array) {
  this.array = array ? array : [];
}

//getBuffer() : 객체 내 데이터 셋 반환
Stack.prototype.getButter = function () {
  return this.array.slice();
};

//isEmpty() : 객체 내 데이터 o/x
Stack.prototype.isEmpty = function () {
  return this.array.length === 0;
};

//push()
Stack.prototype.push = function (element) {
  return this.array.push(element);
};

//pop()
Stack.prototype.pop = function () {
  return this.array.pop();
};

// peek() :  가장 끝 데이터 반환
Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
};

// size() : 스텍 내 데이터 개수 확인
Stack.prototype.size = function () {
  return this.array.length;
};

// indexOf() : 데이터 위치 값 조회
Stack.prototype.indexOf = function (element, position) {
  return this.array.indexOf(element, position);
};

// includes() : 데이터 존재 여부 확인
Stack.prototype.includes = function (element) {
  for (let i = 0; i < this.array.length; i++) {
    if (element === this.array[i]) return true;
  }
  return false;
};

export { Stack };

let stack = new Stack([1, 2]);
console.log(stack);
console.log(stack.push(3));
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.peek());
console.log(stack.size());
console.log(stack.indexOf(1));
console.log(stack.includes(111));
