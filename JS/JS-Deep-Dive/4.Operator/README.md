# 4. Operator

# 1. 산술 연산자

피연산자를 수학적으로 계산해 새로운 숫자값을 만든다. 산술연산이 불가능한 경우 , `NaN`을 반환한다.

## (1) 이항 산술 연산자

2개의 피연산자를 산술 연산한다.

- `+` : 덧셈
- `-` : 뺄셈
- `*` : 곱세
- `/` : 나누기
- `%` : 나머지

## (2)단항 산술 연산자

1개의 피연산자를 산술 연산한다.

- `++` : 증가
- `--` : 감소
- `+` : 숫자 타입이 아닌 값으 숫자 타입으로 변경
- `-` : 양수를 음수로, 음수로 양수로 반전한 값을 반환

### 증가 / 감소 연자

증가 / 감소 연자는 피연산자의 값을 연산후의 값으로 변경한다. 

```jsx
var a = 1;
a++;
console.log('a++의 결과 >>>', a); // 2
a--;
console.log('a--의 결과 >>>', a); // 1
```

증가 / 감소 연산자는 그 위치에 따라 다른 의미를 갖는다. 

- 피연산자보다 증가 / 감소 연산자가 앞에 있으면 `전위 증가 /감소 연산자`라고 한다.  선 증가 / 감소 후 할당의 특징을 갖는다.(`prefix`)
- 피연산자보다 증가 / 감소 연산자가 뒤에 있으면 `후위 증가 / 감소 연산자`라고 한다. 선 할당 후 증가 / 감소의 특징을 갖는다.(`postfix`)

```jsx
var a = 1;
var result;
result = ++a; // 선 증가 후 할당
console.log('a', a); // 2
console.log('result', result); // 2
result = a++; // 선 할당 후 증가
console.log('a', a); // 3
console.log('result', result); //2\
```

### `+` 단항 산술 연산자

숫자 타입이 아닌 값을 숫자 타입으로 변경한다.

`+` 단항 산술 연산자를 사용해서 숫자 타입으로 변경하였다하더라도, 피연산자의 값을 변경시키는것은 아님에 주의한다.

```jsx
var a = '10';
console.log('a', +a); //10
console.log('a', a);  //'10'

var b = true;
console.log('b', +b); // 1
console.log('b', b);  // true

var c = 'rooney';
console.log('c', +c); //NaN , rooney 문자를 숫자를 변경 할 수 없으므로
console.log('c', c); // 'rooney'

var d = null;
console.log('d', +d); // 0
console.log('d', d); // null

var e = undefined;
console.log('e', +e); // NaN , undefined는 변환되지 않는다.
console.log('e', e); // undefined
```

### `-` 단항 산술 연산자

- 단항 산술 연산자를 사용해서 숫자 타입으로 변경하였다하더라도, 피연산자의 값을 변경시키는것은 아님에 주의한다.

```jsx
var a = '10';
console.log('a', -a); // -10
console.log('a', a); //'10'

var b = true;
console.log('b', -b); // -1
console.log('b', b); // true

var c = 'rooney';
console.log('c', -c); //NaN
console.log('c', c); //'rooney'

var d = -17;
console.log('d', -d); // 17
console.log('d', d); // -17
```

## 문자열 연결 연산자

`+` 연산자는 피연산자 중 문자열이 하나 이상인 경우 문자열을 연결하는 연산자로 동작한다. 

```jsx
var a = 1;
var b = '1';
var c = true;
var d = null;
var e = undefined;
console.log(a + b); //'11'
console.log(a + c); // 2
console.log(a + d); // 1
console.log(a + e); // NaN
```

위 예제의 결과에서 알수 있듯 숫자, 문자 이외의 값인 경우 `undefined`를 제외한 값은 암묵적으로 숫자 타입으로 변경되여 산술 연산이 실행된다.