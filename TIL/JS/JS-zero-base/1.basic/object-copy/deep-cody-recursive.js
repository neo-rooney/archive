const user = {
  name: 'rooney',
  sizes: {
    height: 180,
    weight: 80,
  },
};

function copyObj(obj) {
  let result = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') result[key] = copyObj(obj[key]);
    else result[key] = obj[key];
  }
  return result;
}

const another = copyObj(user);

another.sizes.height = 190;

console.log(another.sizes); //expect : { height : 190, weight: 80 } output : { height : 190, weight: 80 }
console.log(user.sizes); //expect : { height : 180, weight: 80 } output : { height : 180, weight: 80 }
