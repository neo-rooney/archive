# Basic

# 1. 개요

- 객체기반의 스크립트 프로그래밍 언어
- ECMAScript 사양을 준수하는 범용 스크립팅 언어
- JS 엔진위에서 수행되며, 브라우저별로 여러 엔진 존재

## (1) ECMAScript

- ECMA-262 기술 규격에 따라 정의하고 있는 표준화된 스크립트 프로그래밍 언어

# 2. 기본 입출력

- 사용자가 프로그램과 상호작용하기 위한 방법으로, 입력과 출력을 아우르는 개념
- **I/O**로 줄여서 표기

# 3. 기본용어

- JS는 문법 대부분을 C, C++, Java로부터 차용하여 제작된 스크립트 기반의 언어
- 다수의 표현식(expression)으로 하나의 명령문(statement)이 만들어지며, 명령문으로 프로그램이 수행
- 하나의 명령문 끝은 개행 문자 혹은 세미콜론으로 구별

```jsx
let 안녕 = '하세요';
let hi = 'hello';
let HI = 'HELLO';

console.log(안녕);
console.log(hi);
console.log(HI);
```

- 키워드 : 자바스크립트에서 문법을 만들 때 미리 정해진 용도로 동작하기 위해 정의해 놓은 단어

    ![keyword.png](Basic%20a38dc7a38c854d9a944d919e861d0276/keyword.png)

## (1) 식별자

- 스크립트에서 변수나 함수에 이름을 붙일 때 사용하는 단어
- 대소문자를 구별하며 유니코드 문자셋을 이용
- 규칙
    - 키워드 사용 불가
    - 숫자로 시작 불가
    - 특수 문자의 경우 `_`와`$` 만 허용
    - 공백 불가

## (2) 주석

- 실제 실행 코드에 포함되지 않음

### 단일 행 주석

```jsx
// single-line comments
```

### 다중 행 주석

```jsx
/*
multi-line comments
multi-line comments
multi-line comments
*/
```

# 4. 변수와 상수

## (1) 변수

- 변경 가능한 값을 저장하기 위한 기억 공간(memory)
- 사용하기 전 선언 필요
- 중복 선언 불가
- 키워드 : let

## (2) 상수

- 변경 불가능한 값을 저장하기 위한 기억 공간
- 사용하기 전 선언 필요
- 중복 선언 불가
- 키워드 : const

## (3) 호이스팅

- 코드에 선언된 변수 및 함수를 유효한 범위의 코드 상단으로 끌어 올리는 작업
- var 키워드를 통해 선언된 변수만 호이스팅
- let/const 키워드로 선언된 변수에는 호이스팅이 일어나지 않음

# 5. 자료형

![jsDataTyle.png](Basic%20a38dc7a38c854d9a944d919e861d0276/jsDataTyle.png)

## (1) typeof

- 인수의 자료형을 반환하는 연산자

```jsx
console.log(typeof 'hello'); //string
console.log(typeof undefined); //undefined
console.log(typeof 123); //number
console.log(typeof 123n); //bigint
console.log(typeof 123.123); //number
console.log(typeof null); //object
console.log(typeof Math); //object
console.log(typeof Symbol('id')); //symbol
console.log(typeof console.log); //function
```

## (2)boolean

- 참 / 거짓의 논리적인 값을 표현하는 자료형
- 주로 조건문 등에서 동작의 기준으로 사용

## (3) null

- 값이 없다는 의미
- 개발자가 직접 할당
- typeof 의 결과값으로 object가 나오는것은 js 버그인데 하위버전과의 호환성을 이유로 고쳐지지 않고 있음

## (4) undefined

- 값이 없다는 의미
- js 엔진에 의해 값이 할당되어 있지 않은 경우 등에서 자동으로 할당
- 개발자가 직접 undefined 값을 할당 할 수 있지만 직접 할당은 지양

## (5) number

- 정수, 부동소수점 숫자를 표현하는 자료형
- 숫자 , infinity, -infinity , NaN
- 2^53 - 1 보다 큰 값을 사용할 수 없으며, 더 큰 정수를 다루고 싶다면 bigint 자료형 사용 필요

## (6) string

- 문자, 문자열을 표현하는 자료형
- `''`,`""`,```` 으로 string 표현

## (7) object

- 다수의 원시 자료형을 포함하거나 복잡한 개체(entity)를 표현 할 수 있는 자료형
- `Object()` 혹은 `{}` 를 통해 생성
- object 개체는 key: value 형태로 표현하며, 접근은 `object.key` 형태로 표현

# 6. object 복사

- 객체를 다른 변수에 할당하는 경우 어느 하나의 변경이 다른 하나에 영향을 미치는 경우가 있음. 객체를 다른 변수에 할당하는 경우 객체 자체가 아닌 객체를 가리키는 주소 값만 복사되기 때문

```jsx
const user = {
  name: 'rooney',
};

const another = user;
another.name = 'hun';

console.log(user.name);//hun
```

## (1)얕은 복사(shallow copy)

### 1) 반복문

```jsx
const user = {
  name: 'rooney',
};

let another = {};

for (let key in user) {
  another[key] = user[key];
}

another.name = 'hun';

console.log(user.name); //rooney
console.log(another.name); //hun
```

### 2) Object.assign()

```jsx
const user = {
  name: 'rooney',
};

let another = Object.assign({}, user);

another.name = 'hun';

console.log(user.name); //rooney
console.log(another.name); //hun
```

### 3) 전개 연산사(spread operator)

```jsx
const user = {
  name: 'rooney',
};

let another = { ...user };
another.name = 'hun';

console.log(user.name); //rooney
console.log(another.name); //hun
```

### 4) 얕은 복사의 문제점

- 객체 내 또 다른 객체가 해당 객체는 얕은 복사를 하였더라도 어느 하나의 변경이 다른 하나에 영향을 미치게 된다.
- 이런 경우 깊은 복사(deep copy)가 필요하다.

```jsx
const user = {
  name: 'rooney',
  sizes: {
    height: 180,
    weight: 80,
  },
};

let another = Object.assign({}, user);

another.name = 'hun';

console.log(another.name); //hun
console.log(user.name); //rooney

another.sizes.height = 190;

console.log(another.sizes); //expect : { height : 190, weight: 80 } 
                            //output : { height : 190, weight: 80 }
console.log(user.sizes); //expect : { height : 180, weight: 80 } 
                         //output : { height : 190, weight: 80 }
```

## (2)깊은 복사(deep copy)

### 1) 재귀 함수

```jsx
const user = {
  name: 'rooney',
  sizes: {
    height: 180,
    weight: 80,
  },
};

function copyObj(obj) {
  let result = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object') result[key] = copyObj(obj[key]);
    else result[key] = obj[key];
  }
  return result;
}

const another = copyObj(user);

another.sizes.height = 190;

console.log(another.sizes); //expect : { height : 190, weight: 80 } 
                            //output : { height : 190, weight: 80 }
console.log(user.sizes); //expect : { height : 180, weight: 80 } 
                         //output : { height : 180, weight: 80 }
```

### 2) JSON 객체

```jsx
const user = {
  name: 'rooney',
  sizes: {
    height: 180,
    weight: 80,
  },
};

const another = JSON.parse(JSON.stringify(user));

another.sizes.height = 190;

console.log(another.sizes); //expect : { height : 190, weight: 80 } 
                            //output : { height : 190, weight: 80 }
console.log(user.sizes); //expect : { height : 180, weight: 80 } 
                         //output : { height : 180, weight: 80 }
```

# 7. 형 변환

- 자바스크립트는 느슨한 타입 언어 혹은 동적 타입 언어로 변수의 자료형을 명시적으로 선언할 필요 없음
- 연산자로 인한 계산이나 변수에 전달되는 값은 자동으로 암묵적 형 변환 수행
- 강제적 형 변환을 위해서는 자료형 함수를 이용해 명시적 형 변환 수행

```jsx
// String() : string으로 형 변환
console.log(String(123)); //'123'
console.log(String(1 / 0)); //'infinity'
console.log(String(-1 / 0)); //'-infinity'
console.log(String(NaN)); //'NaN'
console.log(String(true)); //'true'
console.log(String(false)); //'false'
console.log(String(undefined)); //'undefined'
console.log(String(null)); //'null'
console.log(String('hello')); //'hello'
// Number() : number 으로 형 변환
console.log(Number('')); //0
console.log(Number('123')); // 123
console.log(Number('hello')); //NaN
console.log(Number('123hello')); //NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); //NaN
//parseInt() parseFloat()
console.log(parseInt('123.123')); //123
console.log(parseFloat('123.123')); //123.123
// Boolean() : boolean으로 형 변환
console.log(Boolean('')); //false
console.log(Boolean(0)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean('hello')); //true
console.log(Boolean(1)); //true
console.log(Boolean({})); //true
console.log(Boolean([])); //true
```

# 8. 연산자

- 데이터를 처리하여 결과를 산출할 목적으로 사용되는 문자
- 연산의 대상 값을 피연산자라고 하며, 피 연산자의 갯수에 따라 단항/이항/삼항 연사자의 종류 존재

## (1) 산술 연산자

- 수학적 계산을 위해 제공하는 연산자
- `+`, `-` , `*` , `/`, `%`, `**`

## (2) 대입 연산자

- 계산한 결과를 하나의 변수에 저장하기 위한 연산자
- `=`

## (3) 복합 대입 연산자

- 산술 연산자로 피연산자를 계산해 결과값을 한번에 대입시켜주는 연산자
- `+=` , `-=` , `*=` , `/=` ,`%=`

## (4) 증가 감소 연산자

- 숫자 1만큼 증가시키거나 감소시킬 때 사용되는 연산자
- `++` , `--`

## (5) 비교 연산자

- 좌항과 우항의 피연산자를 비교한 다음 결과값을 논리적 자료형으로 반환하는 연산자
- ==  동등 비교 연산자 : 형 변환까지 고려
- === 일치 비교 연산자 : 형 변환 고려하지 않고 완전 일치하는지 여부
- `>` , `>=` , `<`, `<=` , `==` , `===` , `!=` , `!==`

## (6) 논리 연산자

- 좌항과 우항의 피연산자 간 논리 값을 연산하여 참 또는 거짓을 결과로 얻는 연산자
- `&&`, `||` , `!`

# 9. Scope

- 변수 혹은 상수에 접근할 수 있는 범위
- 모듈/함수 내 코드에서 동일한 변수 사용시 간섭을 줄이는 용도로 사용
- Global Scope : 전역에 선언되어 어디에서도 접근 가능
- Local Scope(block, function level scope) : 특정 지역에 선언되어, 해당 지역 내에서만 접근 가능

```jsx
let x = 1;
let y = 2;

console.log('globel', x); //1
console.log('globel', y); //2

{
  //local scope
  let x = 3;
  let y = 4;
  console.log('block', x); //3
  console.log('block', y); //4
}

function scope() {
  //local scope
  let x = 5;
  let y = 6;
  console.log('function', x); //5
  console.log('function', y); //6
}

scope();
```

```jsx
let x = 1;
let y = 2;

console.log('globel', x); //1
console.log('globel', y); //2

{
  //local scope
  let x = 3;
  let y = 4;
  let z = 5;
  console.log('block', x); //3
  console.log('block', y); //4
}

console.log(z); //ReferenceError: z is not defined
```

```jsx
let x = 1;
let y = 2;

console.log('globel', x); //1
console.log('globel', y); //2

{
  //local scope
  let x = 3;
  let y = 4;
  console.log('block', x); //3
  console.log('block', y); //4
  {
    let x = 5;
    let y = 6;
    console.log('inner', x); //5
    console.log('inner', y); //6
  }
}
```