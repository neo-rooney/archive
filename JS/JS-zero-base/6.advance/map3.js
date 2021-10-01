let map = new Map([
  ['strawberry', 50],
  ['banana', 100],
  ['ice', 150],
]);

let obj = Object.fromEntries(map);
console.log(obj); //{ strawberry: 50, banana: 100, ice: 150 }

let key_value = Object.entries(obj);
console.log(key_value); //[ [ 'strawberry', 50 ], [ 'banana', 100 ], [ 'ice', 150 ] ]

let new_map = new Map(key_value);
console.log(new_map); //Map { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }
