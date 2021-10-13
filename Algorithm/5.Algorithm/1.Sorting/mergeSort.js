let accending = function (x, y) {
  return x > y;
};

let decending = function (x, y) {
  return x < y;
};

let margeSort = function (arr, compare) {
  if (arr.length === 1) return arr;
  let m = (arr.length / 2).toFixed(0);
  let left = margeSort(arr.slice(0, m), compare);
  let right = margeSort(arr.slice(m), compare);

  let i = 0;
  let j = 0;
  let k = 0;
  while (i < left.length && j < right.length) {
    arr[k++] = compare(left[i], right[j]) ? right[j++] : left[i++];
  }
  while (i < left.length) arr[k++] = left[i++];
  while (j < right.length) arr[k++] = right[j++];
  console.log(arr);
  return arr;
};

let init_arr = [6, 5, 1, 3, 2, 4];
let arr = [...init_arr];
margeSort(arr, accending);
console.log('accending >>>', arr);
margeSort(arr, decending);
console.log('decending >>>', arr);
