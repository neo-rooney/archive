const user = {
  name: 'rooney',
};

let another = {};

for (let key in user) {
  another[key] = user[key];
}

another.name = 'hun';

console.log(user.name); //rooney
console.log(another.name); //hun
