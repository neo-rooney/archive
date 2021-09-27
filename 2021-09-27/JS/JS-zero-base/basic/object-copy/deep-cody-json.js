const user = {
  name: 'rooney',
  sizes: {
    height: 180,
    weight: 80,
  },
};

const another = JSON.parse(JSON.stringify(user));

another.sizes.height = 190;

console.log(another.sizes); //expect : { height : 190, weight: 80 } output : { height : 190, weight: 80 }
console.log(user.sizes); //expect : { height : 180, weight: 80 } output : { height : 180, weight: 80 }
