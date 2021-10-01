# conditional

# 1. 조건문 if-else

- 알고리즘에서 논리적 비교를 할 때 사용되는 조건식
- `if`, `if else`, `else` 키워드를 통해 구성, 조건식에 맞을 경우 `중괄호 {}` 내에 있는 명령문을 수행
- 단, 실행 문장이 단일 문장인 경우 `{}` 생략 가능

# 2. 3항 연산자

- 3항 연산자를 통해 if-else 대체하여 사용 가능
- 3항 연산자 : 변수 =(조건식) ? 참일 때 값 : 거짓일 때 값

# 3. switch

- 표현식을 평가하여 그 값이 일치하는 case 문을 실행하는 조건문
- `switch`, `case`, `break`, `default` 키워드를 통해 구성되며, switch의 조건에 맞는 case 구문을 수행
- 일반적으로 하나의 case만 수행되도록 case 끝을 breack로 끝맺음

```jsx
let day_number = 1;
let day;

switch (day_number) {
  case 0:
    day = '일요일';
    break;
  case 1:
    day = '월요일';
    break;
  case 2:
    day = '화요일';
    break;
  case 3:
    day = '수요일';
    break;
  case 4:
    day = '목요일';
    break;
  case 5:
    day = '금요일';
    break;
  case 6:
    day = '토요일';
    break;
  default:
    day = '에러';
}

console.log(day);
```