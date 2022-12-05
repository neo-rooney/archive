function Element(data, priority) {
  this.data = data;
  this.priority = priority;
}

//PriorityQueue(): Element 관리를 위한 생성자 함수
function PriorityQueue() {
  this.array = [];
}

//getBuffer() : 객체 내 데이터 셋 반환
PriorityQueue.prototype.getBuffer = function () {
  return this.array.map((element) => element.data);
};

//isEmpty() : 객체 내 데이터 o/x
PriorityQueue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

//enqueue() : 데이터 추가
PriorityQueue.prototype.enqueue = function (data, priority) {
  let element = new Element(data, priority);
  let added = false;

  for (let i = 0; i < this.array.length; i++) {
    if (element.priority < this.array[i].priority) {
      this.array.splice(i, 0, element);
      added = true;
      break;
    }
  }
  if (!added) {
    this.array.push(element);
  }

  return this.array.length;
};

PriorityQueue.prototype.dequeue = function () {
  return this.array.shift();
};

// front() :  가장 첫 데이터 반환
PriorityQueue.prototype.front = function () {
  return this.array[0] ? undefined : this.array[0].data;
};

// clear() :  큐 초기화
PriorityQueue.prototype.clear = function () {
  this.array = [];
};

// size() : 큐 내 데이터 개수 확인
PriorityQueue.prototype.size = function () {
  return this.array.length;
};

let pq = new PriorityQueue();

pq.enqueue('alice', 1);
pq.enqueue('bob', 2);
console.log(pq);

pq.enqueue('tom', 1);
pq.enqueue('john', 3);
console.log(pq);

console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq);
