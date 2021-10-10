//Node() : value와 left, right node 저장을 위한 생성자
function Node(data) {
  this.value = data;
  this.left = null;
  this.right = null;
}

//BinaryTree() : 시작 노드인 root를 저장하기 위한 생성자
function BinaryTree() {
  this.root = null;
}

//_insertNode() : 재귀로 트리를 순회하며 노드 추가(내부 사용)
BinaryTree.prototype._insertNode = function (node, value) {
  //현재값과 비교
  //작으면 왼족, 크면 오른쪽
  //왼쪽, 오른쪽에 left, right pointer 비었다면 추가할 노드를 연결
  //비어있지 않다면 하위 노드에서 다시 비교하도록 넘겨준다.

  if (node === null) {
    node = new Node(value);
  } else if (value < node.value) {
    node.left = this._insertNode(node.left, value);
  } else if (value > node.value) {
    node.right = this._insertNode(node.right, value);
  }

  return node;
};

//insert(): 노드 추가
BinaryTree.prototype.insert = function (value) {
  this.root = this._insertNode(this.root, value);
};

let tree = new BinaryTree();

tree.insert('F');
tree.insert('B');
tree.insert('A');
tree.insert('D');
tree.insert('C');
tree.insert('E');
tree.insert('G');
tree.insert('I');
tree.insert('H');

console.log(tree);
