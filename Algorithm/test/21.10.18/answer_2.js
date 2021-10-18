let swap = function (arr, idx_1, idx_2) {
  let tmp = arr[idx_1];
  arr[idx_1] = arr[idx_2];
  arr[idx_2] = tmp;
};

function solve(str) {
  let answer = '';
  let arr = str.split('');
  let obj = {};

  for (let i = 0; i < 10; i++) {
    obj[i] = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] += 1;
  }

  var sortable = [];
  for (var key in obj) {
    sortable.push([key, obj[key]]);
  }

  for (let i = 0; i < sortable.length - 1; i++) {
    for (let j = 0; j < sortable.length - i - 1; j++) {
      if (sortable[j][1] < sortable[j + 1][1]) {
        swap(sortable, j, j + 1);
      }
      if (sortable[j][1] === sortable[j + 1][1]) {
        if (sortable[j][0] > sortable[j + 1][0]) {
          swap(sortable, j, j + 1);
        }
      }
    }
  }

  for (let i = 0; i < sortable.length; i++) {
    answer += `${sortable[i][0]} `;
  }

  return answer;
}

console.log(solve('221123'));
console.log(solve('1235670089006427894100'));
