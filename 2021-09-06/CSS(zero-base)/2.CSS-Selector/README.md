# CSS Selector

# Type Selector

요소 선택자

- tag 이름을 선택자로 사용
- 모든 문서에 적용된다는 점에 유의

# Id Selector

`id` 속성을 선택자로 사용

```css
#id 형태로 선택자 사용
#myId{
	color:red;
}
```

# Class Selector

`class` 속성을 선택자로 사용

```css
.class 형태로 선택자 사용
.myclass{
	color:red;
}
```

# 속성 선택자

속성은 존재여부나 그 값에 따라 요소를 선택자로 사용

```css
a[title] {
  color: purple;
}

/* <a> elements with an href matching "https://example.org" */
a[href="https://example.org"] {
  color: green;
}

/* <a> elements with an href containing "example" */
a[href*="example"] {
  font-size: 2em;
}

/* <a> elements with an href ending ".org" */
a[href$=".org"] {
  font-style: italic;
}

/* <a> elements whose class attribute contains the word "logo" */
a[class~="logo"] {
  padding: 2px;
}
```

- 속성 성택자 사용 방법 링크

[특성 선택자 - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/Attribute_selectors)

# 가상클래스 선택자(의사 클래스)

요소의 특별한 상태를 선택자로 사용

## first-child

- 첫 번째 자식요소
- 선택 되지 않는 경우가 있을 수 있음

## last-child

- 마지막 자식요소

## nth-child(n)

- n 번째 자식요소

## first-of-type

- 형제 요소 중 같은 타입 중 첫 번째 요소

## last-of-type

- 형제 요소 중 같은 타입 중 마지막 요소

## nth-of-type(n)

- 형제 요소 중 같은 타입 중 n 번째 요소