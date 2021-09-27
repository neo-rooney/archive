const user = {
  name: 'rooney',
  sizes: {
    height: 180,
    weight: 80,
  },
};

let another = Object.assign({}, user);

another.name = 'hun';

console.log(another.name); //hun
console.log(user.name); //rooney

another.sizes.height = 190;

console.log(another.sizes); //expect : { height : 190, weight: 80 } output : { height : 190, weight: 80 }
console.log(user.sizes); //expect : { height : 180, weight: 80 } output : { height : 190, weight: 80 }
