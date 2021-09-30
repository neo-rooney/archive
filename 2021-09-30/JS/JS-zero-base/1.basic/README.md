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

### 1) 지수표기법

- 아주 큰 숫자나 아주 작은 숫자를 표기하기 위해 지수 표기법(e)으로 0의 개수를 대체 표기 가능

```jsx
let billion_1 = 1000000000;
let billion_2 = 1e9;

console.log(billion_1 === billion_2);//true
```

### 2) 진법 표시

```jsx
console.log(0x0f); //16진수 , 15
console.log(0o17); // 8진수 , 15
console.log(0b1111); // 2진수 15
```

### 3) 상수 값

- 지수로 표기되는 양수 최대/최소값 : `Number.MAX_VALUE` / `Number.MIN_VALUE`
- 안전하게 표기되는 최대(양수) / 최소 (음수) 값 : `Number.MAX_SAFE_INTEGER`, `Number.MIN_SAFE_INTEGER`
- 무한대 양수 / 음수 값 : `Number.POSITIVE_INFINITY`, `Number.NEFATIVE_INFINIEY`
- 부동 소수점 산술에서 정의되지 않거나 표현할 수 없는 값으로 해석될 수 있는 숫자 데이터 유형 : `Number.NaN`

### 4) 형 변환(number → string)

```jsx
let num = 10;
console.log(num.toString()); // '10'
console.log(String(num)); //'10'
console.log(num + ''); // '10'
```

### 5) 자리 수 표현

- 소수의 자리 수 길이를 제한 : `Number.toFixed(pos)`
- 정수와 소수의 자리 수를 합한 길이로 제한 : `Number.toPrecision(pos)`

```jsx
let num_1 = 125.0;
let num_2 = 123.456;

console.log(num_1 - num_2); //1.543999999999997
console.log((num_1 - num_2).toFixed(3)); //1.544
console.log((num_1 - num_2).toPrecision(3)); //1.54
```

### 6) number 자료형 확인

- 부동 소수점 산술에서 정의되지 않거나 표현할 수 없는 값(NaN)인지 확인 : `Number.isNaN()`
- 정상적인 유한수인지 확인 : `Number.isFinite()`

```jsx
console.log(Number.isNaN(0.123)); //false
console.log(Number.isNaN(0.123 - 'hello')); // true

console.log(Number.isFinite(-123)); // true
console.log(Number.isFinite(Infinity)); //false
console.log(Number.isFinite('hello')); //false
```

## (6) string

- 문자, 문자열을 표현하는 자료형
- `''`,`""`,```` 으로 string 표현

### 1) 문자 정의 / 표기

```jsx
console.log('line\nfeed'); //line
													 //feed
console.log('line\rfeed');//line
													//feed
console.log('line\\feed'); // line\feed
console.log('line\tfeed'); // line	feed
console.log('line\u{1f60d}eed'); // line😍eed
```

### 2) 문자열 길이

- `string.length`

### 3) 문자 접급

- `String.charAt(index)`
- `String.charCode(index)`
- `String[index]`

```jsx
let str = 'hello';

console.log(str.charAt(0)); //h
console.log(str.charCodeAt(0)); //101
console.log(str[0]); //h
```

### 4) 문자열 검색

- `String.indexOf(substr, pos)` : 찾을 문자, 찾기 시작할 위치(옵션)
- `String.lastIndexOf(substr, pos)` : 찾을 문자, 찾기 시작할 위치(옵션) , 뒤에서 부터 찾음
- `String.includes(substr, pos)` :  찾을 문자, 찾기 시작할 위치(옵션), 대소문자 구별함
- `String.startsWith(substr, pos)`: 찾을 문자, 찾기 시작할 위치(옵션), 문자열해 찾을 문자로 시작하는지 여부를 반환
- `String.endsWith(substr,pos)`:찾을 문자, 찾기 시작할 위치(옵션), 문자열해 찾을 문자로 끝나는지 여부를 반환

```jsx
console.log(str.indexOf('l')); // 2
console.log(str.indexOf('l', 3)); // 3
console.log(str.indexOf('l', 4)); // 10
console.log(str.lastIndexOf('l')); // 10
console.log(str.includes('hello')); // true
console.log(str.includes('HeLlo')); // false
console.log(str.startsWith('ello')); // false
console.log(str.startsWith('hello')); // true
console.log(str.endsWith('!!!')); // true
console.log(str.endsWith('world')); // false
```

### 5) 대소문자 변환

- `String.toUpperCase()` : 대문자로 변환
- `String.toLowerCase()` : 소문자로 변환

### 6) 문자열 치환

- `String.replace(바뀔 대상 문자, 바꿀문자)` : 처음 만나는 요소 문자열 치환(치환된 문자열 반환)
- `/치환문자열/g(전체)i(대소문자 구분x)` : 치환 문자열에 정규 표현식 기입

```jsx
let str = 'hello, world!!!';
let changed_text = '';

changed_text = str.replace('l', '*');
console.log(changed_text); //he*lo, world!!!

changed_text = str.replace(/l/g, '*');
console.log(changed_text); //he**o, wor*d!!!
```

### 7) 문자열 추출

- 위치 기반 문자열 추출 : `String.slice(start, end)`, `String.substring(start,end)`
- 길이 기반 문자열 추출 : `String.substr(start, length)`

```jsx
let str_2 = '123456789';

console.log(str_2.slice(0, 4)); //1234
console.log(str_2.substr(0, 3)); //123
console.log(str_2.substr(0, 6)); //123456
```

### 8) 문자열 분할

배열로 문자열 분할 : `String.split(Separator, limit)`

```jsx
let str_2 = '123456789';
console.log(str_2.split('5')); //[ '1234', '6789' ]
console.log(str_2.split('')); 
/*
[ 
'1', '2', '3',
'4', '5', '6',
'7', '8', '9'
]
*/
console.log(str_2.split('', 3)); //[ '1', '2', '3' ]
```

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