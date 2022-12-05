function binarySearch_loop(arr, n) {
  let lowIndex = 0;
  let midIndex = 0;
  let heightIndex = arr.length - 1;

  while (lowIndex <= heightIndex) {
    midIndex = Math.floor((lowIndex + heightIndex) / 2);
    if (arr[midIndex] > n) {
      heightIndex = midIndex - 1;
    } else if (arr[midIndex] < n) {
      lowIndex = midIndex + 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}

function binarySearch_recursive(
  arr,
  n,
  lowIndex = 0,
  heightIndex = arr.length - 1
) {
  if (heightIndex < lowIndex) return -1;

  midIndex = Math.floor((lowIndex + heightIndex) / 2);

  if (arr[midIndex] > n) {
    return binarySearch_recursive(arr, n, lowIndex, midIndex - 1);
  } else if (arr[midIndex] < n) {
    return binarySearch_recursive(arr, n, midIndex + 1, heightIndex);
  } else {
    return midIndex;
  }
}

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch_recursive(array, 0));
console.log(binarySearch_recursive(array, 3));
console.log(binarySearch_recursive(array, 7));
console.log(binarySearch_recursive(array, 10));
