# 3.Data Type

# 개요

![jsDataTyle.png](3%20Data%20Type%20b0226d2cd7fe477b95e2e5893dd54b65/jsDataTyle.png)

자바스크립트에서 데이터 타입은 총 7개로 원시 타입과 객체 타입으로 분류된다.

# Number

## 개요

자바스크립트에서 숫자 타입은 4가지 종류가 존재한다. 

![number.png](3%20Data%20Type%20b0226d2cd7fe477b95e2e5893dd54b65/number.png)

## Number 특징

자바스크립트에서 숫자 타입의 특징은 아래와 같다.

- 하나의 숫자타입만 존재한다. C 언어에서 int, double 등과 같이 여러 종류의 숫자 타입이 있는 것과 대비된다.
- 숫자타입은 모두 배정밀도 64비트 부동소수점 형식으로 표현된다.

정수 또는 실수를 표현하기 위한 별도의 숫자 타입이 존재하지 않으므로 모두 **실수**로 처리된다. 따라서 자바스크립트에서 나눗셈을 하는 경우 정수끼리 나누더라도 실수가 나올 수 있으므로 주의해야한다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      var int = 65;
      var binary = 0b01000001;
      var octal = 0o101;
      var hex = 0x41;

      console.log('int', int);
      console.log('binary', binary);
      console.log('octal', octal);
      console.log('hex', hex);
    </script>
  </body>
</html>
```

변수에 10진수, 2진수 , 8진수, 16진수를 할당하였더라도 모두 10진수 실수로 표현된다.

![number-example.png](3%20Data%20Type%20b0226d2cd7fe477b95e2e5893dd54b65/number-example.png)

# String

자바스크립트에서 문자열은 텍스트 데이터를 표현하는데 사용한다. 

보통 작은 따옴표(''), 큰 따옴표("")로 텍스트를 감싸는 형태로 문자열을 표현하고, ES6에서 추가된 벡틱(``)으로 문자열을 표현 할 수 있다.

```jsx
var name = 'rooney';
var country = 'korea';
var city = `Seoul`;
```

# Boolean

논리적 참, 거짓을 나타내는 `true`와 `false` 표현한다. 

## javascript에서 false로 취급되는 것

자바스크립트에서 조건문이나 반복문등 Boolean 값이 필요한 곳에서 특정 값은 `false`로 취급된다.

- `NULL`
- `undefined`
- 0
- 빈 문자열
- `NaN`

빈 객체나 빈 배열은 `false`로 취급되지 않는다

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      if (0) {
        console.log('0 is true');
      } else {
        console.log('0 is false');
      }

      if (null) {
        console.log('null is true');
      } else {
        console.log('null is false');
      }

      if (undefined) {
        console.log('undefined is true');
      } else {
        console.log('undefined is false');
      }

      if ('') {
        console.log('"" is true');
      } else {
        console.log('"" is false');
      }

      if (NaN) {
        console.log('NaN is true');
      } else {
        console.log('NaN is false');
      }
    </script>
  </body>
</html>
```

# undefined

변수의 선언과 할당에서 살펴보았듯 `var` 키워드로 선언한 변수에는 암묵적으로 `undefined` 값이 할당된다. `undefined` 는 **"값이 없음"**을 의미하지만 자바스트립트 엔진에 의해 초기화 된다는 점에서 `null`과 대비된다.

개발자가 의도적으로 변수에 undefined 값을 할당하는 것은 지양해야한다.

# null

개발자에 의해  **"값이 없음"**을 의도적으로 표현(의도적 부재)하는데 사용한다.

# symbol

ES6에서 추가된 원시 타입 값으로, 다른 값과 중복되지 않는 유일무이한 값이다. 따라서 이름의 충돌 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용한다.

# 객체 타입

자바스크립트는 객체 기반의 언어이며, 앞서 살펴본 원시 타입을 제외한 모든것은 객체이다. function, object, array 모두 객체에 해당한다.

# 데이터 타입이 필요한 이유

## 1. 값을 저장 할 메모리 공간 확보

변수에 할당 된 값에 따라서 확보해야 할 메모리의 크기가 달라진다.

```jsx
var a = 65
```

위 코드의 경우는 `변수 a`에 Number 타입이 할당되었다. 자바스크립트에서 숫자는 모두 Number 타입으로 **64비트 부동 소수점 형식**을 사용하므로 **8바이트**의 메모리 공간이 확보되어야 한다. 이렇게 값을 메모리에 저장 할 공간을 확보하기 위해 데이터 타입이 필요하다.

ECMAScript에서 숫자, 문자 타입을 제외한 다른 데이터 타입의 크기를 명시적으로 규정하고 있지 않다. 따라서 숫자, 문자 타입을 제외한 다른 데이터 타입의 크기는 자바스크립트 엔진 제조사에 따라 달라 질 수 있다.

## 2.  값을 읽을 때 한번에 읽을 메모리 공간 크기를 결정

```jsx
var a = 65
console.log(a)
```

`변수 a` 의 값을 읽어들이기 위해선 한번에 읽어야 할 메모리 공간의 크기를 알아야한다. 만약 `65`라는 값이 저장된 8바이트를 모두 읽어 들이지 않으면 의도하지 않은 값을 얻게 될 것이다. 따라서 자바스크립트 엔진은 `변수 a`에 저장된 값이 숫자 타입인것을 인지하고 8바이트의 메모리를 한번에 읽어 들여야한다는것을 인지한다.

## 3.  읽어들인 값을 어떻게 해석해야하는지 판단

위 예제에서 a에는 숫자 `65` 가 저장되어있는것이 아니라 이진수 `01000001` 가 저장되어 있다. 이를 10진수로 변환하면 `65`이지만 문자열로 변환하면 `A`이다. 따라서 자바스크립트 엔진은 읽어들인 값이 숫자타입인것을 알고 65로 변환 할 것이다.

# 동적 타이핑과 정적 타이핑

## 정적 타이핑

대표적으로 C 언어에서는 변수를 선언 할 때 데이터의 타입을 선언한다. 그리고 해당 변수에는 선언한 데이터 타입에 맞는 값만 할당 할 수 있다. 만약 선언한 타입과 다른 값을 할당했다면 컴파일 시점에 타입 체크를 통과하지 못하고 프로그램 자체가 실행되지 못한다. 이렇게 변수의 선언과 동시에 데이터의 타입을 선언하는 언어를 **정적 타입 언어**라고한다.

## 정적 타이핑

자바스크립트에서는 변수를 선언 할 때 데이터의 타입을 선언하지 않는다. 다만, 변수에 할당되는 값에 따라 변수의 타입이 결정된다. 변수에 다른 타입의 값을 재 할당 하는 경우 변수의 타입은 변경된다. 즉, 자바스크립트에서 변수는 **선언이아닌 할당에 의해 타입이 결정**되는데 이런 특징을 **동적 타이핑**이라고 하며 동적 타이핑 특징을 갖는 언어를 **동적 타이핑 언어**라고 한다.