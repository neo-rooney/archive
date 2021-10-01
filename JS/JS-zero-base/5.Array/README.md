# Array

# 개요

- 여러 개체 값을 순차적으로 나열한 자료 구조
- 배열 내 값을 요소라고 하며, 배열 요소는 index로 접근

# 배열 선언/접근/속성

- `new Array()` 혹은 `[]`을 통해 선언, 사이즈 혹은 값을 입력하여 초기화도 가능

```jsx
let arr_1 = new Array(10);
let arr_2 = [];

console.log(arr_1);
console.log(arr_2);

let fruits = ['apple', 'orange', 'melon'];

console.log(fruits);
console.log(fruits.length);
```

# 배열의 실체

- 자바스크립트에서 배열은 다른 언어에서 말하는 일반적인 배열이 아닌 Hash 기반의 객체
- 메모리가 연속적인 밀집 배열이 아닌 비 연속적인 희소 배열

```jsx
let nums = [];

nums[0] = 'one';
nums[1] = 'two';

console.log(nums.length);
console.log(nums);

console.log(Object.getOwnPropertyDescriptors(nums));
```

# 배열 타입 확인

- `Array.isArray()`

```jsx
let str = 'hello';
let fruits = ['apple', 'orange', 'melon'];

console.log(Array.isArray(str)); //false
console.log(Array.isArray(fruits)); //true
```

# 배열 추가/삭제

## push & pop

```jsx
let fruits = ['apple', 'orange', 'melon'];

let ret = fruits.push('waterMelon');

console.log(fruits); //[ 'apple', 'orange', 'melon', 'waterMelon' ]
console.log(ret); //4
console.log(fruits.length); //4

ret = fruits.pop();

console.log(fruits); //[ 'apple', 'orange', 'melon' ]
console.log(ret); //waterMelon
console.log(fruits.length); //3
```

## unshift & shift

```jsx
let fruits = ['apple', 'orange', 'melon'];

let ret = fruits.unshift('waterMelon');

console.log(fruits); //[ 'waterMelon', 'apple', 'orange', 'melon' ]
console.log(ret); //4
console.log(fruits.length); //4

ret = fruits.shift();

console.log(fruits); //[ 'apple', 'orange', 'melon' ]
console.log(ret); //waterMelon
console.log(fruits.length); //3
```

## splice

- `Array.splice(시작 위치 , 자를 갯수(옵션), 추가할 데이터(옵션))`
- 자를 갯수 없으면 시작 위치 부터 배열 끝까지 자름
- 원본에 영향을 미침

```jsx
let fruits = ['apple', 'orange', 'melon'];

let ret;

ret = fruits.splice(1);

console.log(ret); //[ 'orange', 'melon' ]
console.log(fruits); //[ 'apple' ]
```

## slice

- `Array.slice(시작 위치, 끝 위치)`
- 끝 위치 전까지 자름
- 원본에 영향을 주지 않음

```jsx
let fruits = ['apple', 'orange', 'melon'];

let ret;

ret = fruits.slice(1, 2);

console.log(ret); //[ 'orange' ]
console.log(fruits); //[ 'apple', 'orange', 'melon' ]
```

## concat

- 다중 배열 병합
- 원본에 영향을 주지 않음

```jsx
let fruits_1 = ['apple', 'orange', 'melon'];
let fruits_2 = ['kiwi', 'waterMelon'];

console.log(fruits_1.concat(fruits_2)); //[ 'apple', 'orange', 'melon', 'kiwi', 'waterMelon' ]
console.log(fruits_1); //[ 'apple', 'orange', 'melon' ]
```

# 배열의 반복

```jsx
let fruits = ['apple', 'orange', 'melon'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

for (let key in fruits) {
  console.log(fruits[key]);
}
```

# 배열의 탐색

- index 탐색(앞에서부터) : `Array.indexOf(item, from)`
- index 탐색(뒤에서부터) : `Array.lastIndexOf(item, from)`
- 값 포함 여부 확인 : `Array.includes(item, from)`

```jsx
let fruits = ['apple', 'orange', 'melon', 'orange'];

console.log(fruits.indexOf('orange')); //1
console.log(fruits.indexOf('banana')); // -1

console.log(fruits.lastIndexOf('orange')); //3
console.log(fruits.lastIndexOf('banana')); // -1

console.log(fruits.includes('orange')); // true
console.log(fruits.includes('banana')); // false
```

# 배열 정렬

- 내림차순 정렬 : `Array.sort()`
- 오름차순 정렬 : `Array.reverse()`

```jsx
let arr = [9, 5, 7, 1, 4];

console.log(arr.sort()); //[ 1, 4, 5, 7, 9 ]
console.log(arr.reverse()); //[ 9, 7, 5, 4, 1 ]

let arr_2 = ['orange', 'banana', 'apple', 'melon'];

console.log(arr_2.sort()); //[ 'apple', 'banana', 'melon', 'orange' ]
console.log(arr_2.reverse()); //[ 'orange', 'melon', 'banana', 'apple' ]
```

# 배열 변환

- 배열 값을 문자열로 변환

```jsx
let arr = ['orange', 'banana', 'apple', 'melon'];

console.log(arr.join()); //orange,banana,apple,melon
console.log(arr.join('')); //orangebananaapplemelon
console.log(arr.join(';')); //orange;banana;apple;melon
```