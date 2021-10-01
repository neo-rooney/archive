# transition

# 개요

A 상태에서 B 상태로 변환 되는 모습을 보여줌

# transition-property

- 변화를 줄 요소를 지정
- `none` : 어떤 요소에도 변화주지 않음
- `all` : 모든 요소를 변경
- 특정 프로퍼티 : `color`, `margin-right` 등은 지정한 프로퍼티에만 변화를 주겠다는 의미

# transition-duration

- 변화가 진해되는 시간을 지정
- `<time>` 자료형 사용
    - ms : 1000 ms = 1s
    - s : 초

# transition-delay

- 변화를 지연시킬 시간을 지정
- `<time>` 자료형 사용

# transition-timing-function

- 변화하는 가속도를 지정
- 키워드 , 함수를 값으로 사용 가능

```css
/* Keyword values */
transition-timing-function: ease;
transition-timing-function: ease-in;
transition-timing-function: ease-out;
transition-timing-function: ease-in-out;
transition-timing-function: linear;
transition-timing-function: step-start;
transition-timing-function: step-end;

/* Function values */
transition-timing-function: steps(4, jump-end);
transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);

/* Steps Function keywords */
transition-timing-function: steps(4, jump-start);
transition-timing-function: steps(10, jump-end);
transition-timing-function: steps(20, jump-none);
transition-timing-function: steps(5, jump-both);
transition-timing-function: steps(6, start);
transition-timing-function: steps(8, end);

/* Multiple timing functions */
transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1);

/* Global values */
transition-timing-function: inherit;
transition-timing-function: initial;
transition-timing-function: revert;
transition-timing-function: unset;
```

# transition - shorthand

- 위 4가지 속성을 단축 속성으로 지정 가능
- 순서가 중요 , 시간을 사용하는 속성이 2개이기 때문, 따라서 time 자료형이 1개인 경우에는 duration으로 해석되고, 2개인 경우는 앞에 나오는것이 duction 뒤에 나오는 것이 delay가 된다.

```css
/* property name | duration */
transition: margin-left 4s;

/* property name | duration | delay */
transition: margin-left 4s 1s;

/* property name | duration | timing function | delay */
transition: margin-left 4s ease-in-out 1s;
```