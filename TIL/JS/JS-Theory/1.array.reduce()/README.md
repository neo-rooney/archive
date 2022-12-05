# Array.reduce()

# 개요

메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환

mdn의 `reduce` 메서드의 정의이다. 사실 정의만 보고 어떤 역할을 하는 메서드인지 한번에 와닿지 않는다. 다행이도 mdn에 `reduce` 메서드의 용처에 대해 정리되었다.

# 구문

```jsx
arr.reduce(callback,initialValue)
```

`reduce` 메서드는 위 형태로 사용한다.  `initialValue`는 넘기지 않을 수 있다.(Optional)

## callback

`reduce` 메서드 정의에서 말한 **리듀서 함수**가 바로 callback 함수이다. 콜백 함수는 다음과 같은 인자(argument)를 받을 수 있다.

- accumulator : 누산된 값, `initialValue`가 주어진 경우 `initialValue`부터 시작하며 그렇지 않은 경우 `arr[1]`부터 시작한다.
- currentValue : 현재 처리할 요소, `initialValue`가 주어진 경우 `arr[0]`부터 시작하며 그렇지 않은 경우 `arr[1]`부터 시작한다.
- currentIndex(Optional) : 현재 처리할 요소의 인덱스. `initialValue`가 주어진 경우 0부터 시작하며 그렇지 않은 경우 1부터 시작한다.
- array(Optional) : reduce()를 호출한 배열.

## initialValue

- 초기 값
- 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생

## 예제

### `initialValue` 를 넘긴 경우

 

```jsx
const arr = [1, 2, 3, 4, 5];
const reducer = (accumulator, currentValue, currentIndex, array) => {
  console.log('accumulator', accumulator);
  console.log('currentValue', currentValue);
  console.log('currentIndex', currentIndex);
  console.log('array', array);
  console.log('---------------');
  return accumulator + currentValue;
};

arr.reduce(reducer, 0);
```

![reduce1.png](Array%20reduce()%202bd554966f294095a34261882829021e/reduce1.png)

### `initialValue` 를 생략한 경우

```jsx
const arr = [1, 2, 3, 4, 5];
const reducer = (accumulator, currentValue, currentIndex, array) => {
  console.log('accumulator', accumulator);
  console.log('currentValue', currentValue);
  console.log('currentIndex', currentIndex);
  console.log('array', array);
  console.log('---------------');
  return accumulator + currentValue;
};

const sum = arr.reduce(reducer);
```

![reduce2.png](Array%20reduce()%202bd554966f294095a34261882829021e/reduce2.png)

# reduce 사용처

위에서 살펴본 대로 reduce 메서드의 가장 대표적인 사용처는 배열의 모든 요소의 합을 구하는 것이다. 그 외에도 다양한 사용처가 있는데 하나씩 살펴보도록 하겠다.

## 1. 배열의 모든 요소의 합

```jsx
const arr = [1, 2, 3, 4, 5];
const reducer = (accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
};

const sum = arr.reduce(reducer);
console.log(sum)
```

## 2. 배열의 요소가 객체인 경우 특정 프로퍼티들의 합

`initialValue` 를 생략하면 원하는 결과를 얻을 수 없다.

```jsx
const arr = [
  { name: 'a', value: 10 },
  { name: 'b', value: 20 },
  { name: 'c', value: 30 },
  { name: 'd', value: 40 },
  { name: 'e', value: 50 },
];
const reducer = (accumulator, currentValue) => {
  return accumulator + currentValue.value;
};

const sum = arr.reduce(reducer, 0);
console.log(sum);
```

## 3. 중첩 배열 펼치기

```jsx
const arr = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);

const newArr = arr.reduce(reducer, []);

console.log(newArr);
```

![reduce3.png](Array%20reduce()%202bd554966f294095a34261882829021e/reduce3.png)

## 4. 배열의 요소 갯수 카운팅

```jsx
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Alice', 'Bob'];

const reducer = (accumulator, currentValue) => {
  if (currentValue in accumulator) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
};

var countedNames = names.reduce(reducer, {});

console.log(countedNames);
```

![reduce4.png](Array%20reduce()%202bd554966f294095a34261882829021e/reduce4.png)

## 5. 객체 속성으로 분류하기

```jsx
var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (accumulator, currentValue) {
    var key = currentValue[property];
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentValue);
    return accumulator;
  }, {});
}

var groupedPeople = groupBy(people, 'age');

console.log(groupedPeople);
```

![reduce5.png](Array%20reduce()%202bd554966f294095a34261882829021e/reduce5.png)

## 6. 배열의 중복 제거

```jsx
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((accumulator, current) => {
  const length = accumulator.length;
  if (length === 0 || accumulator[length - 1] !== current) {
    accumulator.push(current);
  }
  return accumulator;
}, []);
console.log(result); //[1,2,3,4,5]
```

## 7. 그 외

- 프로미스를 순차적으로 실행하기
- 함수 구성을 위한 파이프 함수
- reduce()로 map() 구현