let input = [1, 2, 3, 4];
let count = 0;

function combination(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count++;
    }
  }
}

combination(input);
console.log(count);
