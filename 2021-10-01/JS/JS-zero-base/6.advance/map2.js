let map = new Map([
  ['strawberry', 50],
  ['banana', 100],
  ['ice', 150],
]);

for (let item of map.keys()) {
  console.log(item);
}

for (let item of map.values()) {
  console.log(item);
}

for (let item of map) {
  console.log(item);
}
