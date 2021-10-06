/* user code ['retry']*/
function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(n, m, k) {
  let result = [];

  // 코드 구현 시작 영역

  LinkedList.prototype.append = function (value) {
    let node = new Node(value);
    let current = this.head;

    if (!this.head) {
      this.head = node;
    } else {
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = node;
    }
    node.next = this.head;
  };

  LinkedList.prototype.removeAt = function (position = 0) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head,
      index = 0,
      prev,
      data;

    if (position === 0) {
      data = current.data;
      while (current.next != this.head) {
        current = current.next;
      }
      this.head = this.head.next;
      current.next = this.head;
    } else {
      while (index++ < position) {
        prev = current;
        current = current.next;
      }

      data = current.data;
      prev.next = current.next;
    }
    this.length--;
    return data;
  };

  let people = [];
  for (let i = 1; i <= n; i++) {
    people.push(i);
  }

  cll = new LinkedList();

  people.map((item) => cll.append(item));

  cll.length = n;

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
