# function

# 1. 함수

- 함수는 다수의 명령문을 코드 블록으로 감싸고, 하나의 실행 단위로 만든 코드의 집합
- 유사한 동작을 하는 코드를 하나로 묶어, 범용성을 확대시킨 블록코드
- 함수는 정의 부분과 호출 부분으로 구성
- 함수는 가급적 한가지 일만 하며, 매개 변수는 최대 3개 이내로 작성을 권장

    ![function.png](function%20d8a73a573df3464d92e6b6ff5714d767/function.png)

## (1) 함수 선언식

```jsx
function add(x,y){
	return x + y;
};
```

## (2) 함수 표현식

```jsx
const add = function (x,y) {
	return x + y;
};
```

## (3) 화살표 함수

```jsx
const add = (x,y) => x + y;
```

# 2. 함수 호출

- 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않음

```jsx
function print_add(x, y) {
  console.log(x + y);
}

print_add(); //NaN
print_add(10); //NaN
print_add(10, 20); //30
print_add(10, 20, 30); //30
```

## (1) 기본 값 지정

- ES6에서 도입된 기본값을 통해 `undefined` 변수가 들어올 경우 값 초기화 지정 가능

```jsx
function print_add(x, y = 20) {
  console.log(x + y);
}

print_add(); //NaN
print_add(10); //30
print_add(10, 20); //30
print_add(10, 20, 30); //30
```

## (2) argument

```jsx
function print_min() {
  console.log(arguments);
}

print_min(10, 20, 30); //{ '0': 10, '1': 20, '2': 30 }
```

# 3. 재귀 함수

- 함수 스스로 자신을 참조해 호출하면서 동일한 코드가 계속적으로 수행되는 함수 호출 방법
- 재귀 함수는 특정 조건이 됐을 때 자신을 그만 호출되도록 제한하는 exit code 필요

```jsx
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(4)); //24
```

# 4. 콜백 함수

- 콜백함수란 다름 함수의 매개변수로 전달되어 수행되어지는 함수
- 고차함수란 매개변수를 통해 함수를 받아 호출하는 함수

```jsx
function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

//고차함수
function calculator(callback, x, y) {
  return callback(x, y);
}

console.log(calculator(add, 10, 20));
console.log(calculator(sub, 10, 20));
console.log(calculator(mul, 10, 20));
console.log(calculator(div, 10, 20));
```

# 5. call by

## (1) call by value

- 값에 의한 복사로 함수 내에서 매개 변수 값을 변경 시켜도 영향이 미치지 않음
- 원시 타입을 매개 변수로 넘겼을 때 발생

## (2) call by reference

- 주소에 대한 복사로 함수 내에서 매개 변수 내 값을 변경시키면 원본 데이터에도 영향을 받음
- 객체 타입을 매개 변수로 넘겼을 때 발생

# 6. method

- 객체에 저장된 값이 함수인 경우 , 이를 메서드라고 부름

```jsx
let obj = {
  name: 'rooney',
  hello_func() {
    console.log('hello');
  },
};

obj.hello_func(); //hello
```

## (1) this

- 메서드 내에서 객체 내부의 속성 값에 접근 할 수 있는 지시자

```jsx
let obj = {
  name: 'rooney',
  func: function () {
    console.log(`${this.name} hello!!`);
  },
};

obj.func(); //rooney hello!!
```