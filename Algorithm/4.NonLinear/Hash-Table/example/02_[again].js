/* 백신 접종 ['retry']*/

/* user code */
function Element(key, value) {
  this.key = key;
  this.value = value;
}

function HashTable(size) {
  this.size = size;
  this.table = new Array(this.size);
  this.length = 0;
}

function Node(data) {
  this.next = null;
  this.data = data;
}

function LinkedList() {
  this.head = null;
  this.length;
}

LinkedList.prototype.append = function (data) {
  let node = new Node(data);
  let current = this.head;

  if (this.head == null) {
    this.head = node;
  } else {
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  this.length++;
};

LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

HashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.size;
};

HashTable.prototype.put = function (key) {
  let index = this.hashCode(key);
  if (this.table[index] === undefined) {
    this.table[index] = new LinkedList();
  }
  this.table[index].append(new Element(key));
  this.length++;
  return true;
};

HashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  let order = index + 1;
  if (this.table[index] !== undefined && !this.table[index].isEmpty()) {
    let current = this.table[index].head;
    do {
      if (current.data.key === key) {
        return order;
      }
      current = current.next;
      order++;
    } while (!current);
  }
  return undefined;
};

/* user code */
function answer(name) {
  let result = [];

  let ht = new HashTable(name.length);
  // 코드 구현 시작 영역

  // 1. for loop: push
  name.map((item) => ht.put(item));

  // 2. for loop: get
  result = name.map((item) => ht.get(item));
  // 코드 구현 종료 영역

  return result;
}

/* main code */
let input = [
  // TC: 1
  ['Mana', 'Naomi', 'Lelia', 'Morris', 'Madonna'],

  // TC: 2
  ['Oliver', 'Mabel', 'Nero', 'Rei', 'Kara', 'Jordan', 'Nami'],

  // TC: 3
  [
    'Ruby',
    'Robin',
    'Jordan',
    'Kori',
    'Rei',
    'Madonna',
    'Justin',
    'Maya',
    'Lakia',
    'Kali',
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
