const user = {
  name: 'rooney',
};

let another = { ...user };
another.name = 'hun';

console.log(user.name); //rooney
console.log(another.name); //hun
