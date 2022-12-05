# 인터랙티브 웹 개발 제대로 시작하기

문서 유형: 제품 사양
작성일시: 2021년 5월 21일 오후 4:19
작성자: rooney bae
최종 편집일시: 2021년 5월 21일 오후 4:55
최종 편집자: rooney bae

# CSS 변환과 애니메이션

## Transform

- 중앙을 기준으로 조절(default , 변경 가능)
- 회전 / 비틀기 등 다양한 기능 존재
- 하드웨어 가속을 이용해서 성능상 이점이 존재한다.(GPU사용)

```css
transform: scale(1.5); /* 크기 조절 */
transform: skew(45deg); /* 비틀기 조절 */
transform: translate(30px, 10px); /* 위치 조정 */
transform: rotate(45deg); /* 회전 */
transform-origin: left top; /* 기준점 변경 */
ransform-origin: 0% 0%; /* 기준점 변경(x축, y축) */
```

## Transition

- css로 애니메이션을 부여하는 속성

```css
transition: all 1s linear 2s ; /* property name | duration | easing function | delay */
```
test