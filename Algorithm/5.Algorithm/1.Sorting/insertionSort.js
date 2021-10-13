let accending = function (x, y) {
  return x > y;
};

let decending = function (x, y) {
  return x < y;
};

let insertionSort = function (arr, compare) {
  for (let i = 1; i < arr.length; i++) {
    let tmp = arr[i]; // 6
    let j; 
    for (j = i - 1; j >= 0; j--) { //j = 0  
      arr[j + 1] = arr[j];
      if (compare(tmp, arr[j])) {
        break;
      }
    }
    arr[j + 1] = tmp;
  }
};

let init_arr = [6, 5, 1, 3, 2, 4];
let arr = [...init_arr];
insertionSort(arr, accending);
console.log('accending >>>', arr);
insertionSort(arr, decending);
console.log('decending >>>', arr);
