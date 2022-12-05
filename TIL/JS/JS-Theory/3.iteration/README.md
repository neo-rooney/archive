# iteration in JS

# for...of

반복가능한 객체에 대해서 반복하고 각 개별 속성값에 대해 실행 될 사용자 정의를 할 수 있다.

Object는 `Symbol.iterator` 속성이 없으므로 for of문을 사용 할 수 없다.

- `break` 사용 가능

## 배열

```jsx
const arr = [1, 2, 3, 4, 5];

for (let ele of arr) {
  console.log(ele);
}

//1
//2
//3
//4
//5
```

## 문자

```jsx
const str = 'abcde';

for (let ele of str) {
  console.log(ele);
}

//a
//b
//c
//d
//e
```

# for...in

문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복한다.

`for...in` 은 객체 내부에 선언된 순서를 보장 할 수 없다. 따라서 순서가 중요한 배열에서 사용은 지양하는것이 좋다.

- `break` 사용 가능

## 객체

```jsx
const obj = {
  name: 'rooney',
  age: 20,
  city: 'Seoul',
  message: 'Hi',
  isStudent: false,
};

for (const ele in obj) {
  console.log(`key : ${ele}, value : ${obj[ele]}`);
}

// key name , value rooney
// key age , value 20
// key city , value Seoul
// key message, value Hi
// key isStudent, value false
```

## 배열

```jsx
const arr = [1, 2, 3, 4, 5];

for (const ele in arr) {
  console.log(`key : ${ele}, value : ${arr[ele]}`);
}

// key 0 , value 1
// key 1 , value 2
// key 2 , value 3
// key 3, value 4
// key 4, value 5
```

## 문자

```jsx
const str = 'abcde';

for (const ele in str) {
  console.log(`key : ${ele}, value : ${str[ele]}`);
}

// key 0 , value a
// key 1 , value b
// key 2 , value c
// key 3, value e
// key 4, value e
```