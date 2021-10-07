//Queue() : 생성자 함수
function Queue(array) {
  this.array = array ? array : [];
  this.tail = array ? array.length : 0;
  this.head = 0;
}

//enqueue()는 성능차이는 별로 없다
Queue.prototype.enqueue = function (element) {
  return (this.array[this.tail++] = element);
};

//dequeue()는 성능차이가 많이난다.
Queue.prototype.dequeue = function () {
  if (this.tail === this.head) return undefined;

  let element = this.array[this.head];
  delete this.array[this.head++];
  return element;
};
