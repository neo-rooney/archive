let input = ['a', 'b', 'c'];
let count = 0;

function permutation(arr, s, r) {
  console.log('arr = ', arr);
  console.log('s = ', s);
  console.log('r = ', r);
  //s :시작 위치 , r : 뽑을 마지막 위치
  // 1. 재귀함수를 멈춰야할 조건
  if (s == r) {
    count++;
    console.log('result = ', arr);
    return;
  }
  // 2. 재귀를 돌면서 변경되어야 될 부분 / 메인 로직
  for (let i = s; i < arr.length; i++) {
    console.log('for s = ', s);
    console.log('i = ', i);
    [arr[s], arr[i]] = [arr[i], arr[s]]; //swap
    console.log('swap = ', arr);
    console.log(`재귀 호출 -> (s:${s}, i:${i}) 원복 대기`);
    permutation(arr, s + 1, r);
    console.log('원복 s ', s);
    console.log('원복 i ', i);
    [arr[s], arr[i]] = [arr[i], arr[s]]; //원상복귀
    console.log(`(s:${s}, i:${i}) 원복 = `, arr);
  }
}

permutation(input, 0, 2); // 0번 index에서 2번 index 까지 총 3개를 뽑겠다는 의미
console.log(count);

/*
arr =  [ 'a', 'b', 'c' ]
s =  0
r =  2
for s =  0
i =  0
swap =  [ 'a', 'b', 'c' ]
재귀 호출 -> (s:0, i:0) 원복 대기
arr =  [ 'a', 'b', 'c' ]
s =  1
r =  2
for s =  1
i =  1
swap =  [ 'a', 'b', 'c' ]
재귀 호출 -> (s:1, i:1) 원복 대기
arr =  [ 'a', 'b', 'c' ]
s =  2
r =  2
result =  [ 'a', 'b', 'c' ]
원복 s  1
원복 i  1
(s:1, i:1) 원복 =  [ 'a', 'b', 'c' ]
for s =  1
i =  2
swap =  [ 'a', 'c', 'b' ]
재귀 호출 -> (s:1, i:2) 원복 대기
arr =  [ 'a', 'c', 'b' ]
s =  2
r =  2
result =  [ 'a', 'c', 'b' ]
원복 s  1
원복 i  2
(s:1, i:2) 원복 =  [ 'a', 'b', 'c' ]
원복 s  0
원복 i  0
(s:0, i:0) 원복 =  [ 'a', 'b', 'c' ]
for s =  0
i =  1
swap =  [ 'b', 'a', 'c' ]
재귀 호출 -> (s:0, i:1) 원복 대기
arr =  [ 'b', 'a', 'c' ]
s =  1
r =  2
for s =  1
i =  1
swap =  [ 'b', 'a', 'c' ]
재귀 호출 -> (s:1, i:1) 원복 대기
arr =  [ 'b', 'a', 'c' ]
s =  2
r =  2
result =  [ 'b', 'a', 'c' ]
원복 s  1
원복 i  1
(s:1, i:1) 원복 =  [ 'b', 'a', 'c' ]
for s =  1
i =  2
swap =  [ 'b', 'c', 'a' ]
재귀 호출 -> (s:1, i:2) 원복 대기
arr =  [ 'b', 'c', 'a' ]
s =  2
r =  2
result =  [ 'b', 'c', 'a' ]
원복 s  1
원복 i  2
(s:1, i:2) 원복 =  [ 'b', 'a', 'c' ]
원복 s  0
원복 i  1
(s:0, i:1) 원복 =  [ 'a', 'b', 'c' ]
for s =  0
i =  2
swap =  [ 'c', 'b', 'a' ]
재귀 호출 -> (s:0, i:2) 원복 대기
arr =  [ 'c', 'b', 'a' ]
s =  1
r =  2
for s =  1
i =  1
swap =  [ 'c', 'b', 'a' ]
재귀 호출 -> (s:1, i:1) 원복 대기
arr =  [ 'c', 'b', 'a' ]
s =  2
r =  2
result =  [ 'c', 'b', 'a' ]
원복 s  1
원복 i  1
(s:1, i:1) 원복 =  [ 'c', 'b', 'a' ]
for s =  1
i =  2
swap =  [ 'c', 'a', 'b' ]
재귀 호출 -> (s:1, i:2) 원복 대기
arr =  [ 'c', 'a', 'b' ]
s =  2
r =  2
result =  [ 'c', 'a', 'b' ]
원복 s  1
원복 i  2
(s:1, i:2) 원복 =  [ 'c', 'b', 'a' ]
원복 s  0
원복 i  2
(s:0, i:2) 원복 =  [ 'a', 'b', 'c' ]
6
*/
