let map = new Map();

map.set('name', 'rooney');
map.set(123, 456);
map.set(true, 'boolean');

console.log(map);

console.log(map.get(123));
console.log(map.size);

map.delete(123);
console.log(map);
map.clear();
console.log(map);
