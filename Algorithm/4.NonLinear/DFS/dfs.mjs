
/** 방향 그래프 */
// Graph() : edge object 객체 저장을 위한 생성자
// key : vertex
// value : list 형태로 연결된 vertex를 표현하여 edge 연결 관계 표현
function Graph() {
  this.edge = {};
  this.visited = [];
}

// addVertex(): 정점(Vertex) 추가
Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
  this.visited[v] = false;
};

// addEdge(): 간선(Edge) 추가
Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);
};

//print()
Graph.prototype.print = function () {
  for (let vertex in this.edge) {
    let neighbors = this.edge[vertex];
    if (neighbors.length === 0) continue;
    process.stdout.write(`${vertex} -> `);
    for (let j = 0; j < neighbors.length; j++) {
      process.stdout.write(`${neighbors[j]} `);
    }
    console.log('');
  }
};

Graph.prototype.dfs = function (startVertex) {
  this._dfsRecursiveVisit(startVertex);
};

Graph.prototype._dfsRecursiveVisit = function (vertex) {
  //1. 종료 조건
  if (this.visited[vertex]) {
    return;
  }
  //2. 재귀를 호출하면서 수행해야 할 코드
  this.visited[vertex] = true;
  console.log(`visit ${vertex}`);

  let neighbors = this.edge[vertex];
  for (let i = 0; i < neighbors.length; i++) {
    this._dfsRecursiveVisit(neighbors[i]);
  }
};

Graph.prototype._dfsLoopVisit = function (vertex) {
  let stack = new
};

let graph = new Graph();

let vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

graph.print();

graph.dfs('A');

// graph.removeEdge('B', 'F');
// graph.removeEdge('B', 'E');
// console.log(graph);

// graph.removeVertex('D');
// console.log(graph);
