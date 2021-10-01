let fruits = ['apple', 'orange', 'melon'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

for (let key in fruits) {
  console.log(fruits[key]);
}
