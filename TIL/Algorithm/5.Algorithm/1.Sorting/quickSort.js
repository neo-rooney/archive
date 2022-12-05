let accending = function (x, y) {
  return x > y;
};

let decending = function (x, y) {
  return x < y;
};

let swap = function (arr, idx_1, idx_2) {
  let temp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = temp;
};

let quickSort = function (arr, compare, s = 0, e = arr.length - 1) {
  if (s >= e) return;
  let start = s;
  let pivot = arr[e];

  for (let i = s; i <= e; i++) {
    if (compare(pivot, arr[i])) {
      swap(arr, start, i);
      start++;
    }
  }

  swap(arr, start, e);

  quickSort(arr, compare, s, start - 1);

  quickSort(arr, compare, start + 1, e);
};

let init_arr = [6, 5, 1, 3, 2, 4];
let arr = [...init_arr];
quickSort(arr, accending);
console.log('accending >>>', arr);
quickSort(arr, decending);
console.log('decending >>>', arr);
