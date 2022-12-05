let swap = function (arr, idx_1, idx_2) {
  let temp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = temp;
};

let bubbleSort_1 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > [arr[j + 1]]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let bubbleSort_2 = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > [arr[j + 1]]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let bubbleSort_3 = function (arr) {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > [arr[j + 1]]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
};

let accending = function (x, y) {
  return x > y;
};

let decending = function (x, y) {
  return x < y;
};

let bubbleSort_4 = function (arr, compare) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (compare(arr[j], arr[j + 1])) {
        swap(arr, j, j + 1);
      }
    }
  }
};

function benchmark(arr, callback) {
  let start = Date.now();
  callback(arr);
  return Date.now() - start;
}

let init_arr = [];
let max = 10000;
for (let i = 0; i < max; i++) {
  init_arr.push(Math.round(Math.random() * max));
}
let array = [...init_arr];
console.log('bubbleSort_1 : ' + benchmark(array, bubbleSort_1) + 'ms');
array = [...init_arr];
console.log('bubbleSort_2 : ' + benchmark(array, bubbleSort_2) + 'ms');
array = [...init_arr];
console.log('bubbleSort_3 : ' + benchmark(array, bubbleSort_3) + 'ms');

// let init_arr = [6, 5, 1, 4, 3];
// let arr = [...init_arr];
// bubbleSort_4(arr, decending);
// console.log(arr);
