# what is HTML?

# HTML은 어떻게 생겼을까?

## 개요

- `태그` 라는 표기법을 작성
- 태그를 통해 어떤 요소인지 (제목, 본문, 이미지, 비디오 등) 명시
- 태그의 이름은 HTML5 웹 표준에 맞게 작성

![tag.png](what%20is%20HTML%207de6e825a2134f37a063c3b423e58f8b/tag.png)

1. **여는 태그(Opening Tag)**: <요소이름>
2. **닫는 태그(Closing Tag)**: </요소이름>
3. **내용(Content)**: 요소 내용
4. **요소(Element)**: 여는 태그 , 닫는 태그 , 내용을 통틀어 요소(Element)라고 한다.

## HTML 예시

```html
<body>
  <h1>Hello</h1>
  <p>
    Hello World!!!!!
  </p>
</body>
```

태그의 경우 대소문자를 구분하진 않지만, HTML5에서는 모두 **소문자**로 작성하는 것을 권장

---

# 빈 요소(Empty element)

- 내용이 없는 요소를 빈 요소라 부른다.
- Empty element, Self-Closing element, Void element, Single Tag 등으로 불린다.
- 이 경우 닫는 태그를 추가로 명시하지 않아도 된다.
- 단, `<br/>` 처럼 명시적으로 빈 요소임을 나타내주는것이 좋다(개인적 생각)
- 예 : `<br/>` , `<img/>`, `<hr/>`, `<input/>`

---

# 요소의 중첩(Nesting)

## 개요

- 요소 안에 다른 요소가 들어가는 **포함관계**를 성립 할 수 있다.
- **포함관계(부자관계)**를 구별하기 위해 들여쓰기를 사용한다.

## 예시

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hi! This is <strong>Title</strong>!!</h1>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</body>
</html>
```

---

# 주석(Comments)

## 개요

- 브라우저는 주석을 무시하기 때문에 사용자에 보여지지 않는다
- **코드에 메모**를 하거나, 사용하지 않는 코드를 **임시처리**하기 위해 사용한다.

## 예시

```html
<!-- <h1>Hi! This is Comments</h1> -->
```

---

# HTML 문서의 구조

## 예시

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hi! This is <strong>Title</strong>!!</h1>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</body>
</html>
```

## 설명

- `<!DOCTYPE html>` : 문서의 Type 명시 → HTML5 버전의 문서라는 의미
- `<html>` :  페이지 전체 컨텐츠를 감싸는 루트(root)요소(최 상위 요소)
- `<head>` : 웹브라우저 화면에 직접적으로 나타나진 않는 웹페이지의 정보
- `<body>` : 웹 브라우저 화면에 나타나는 모든 콘텐츠

---

# `<head>` 태그

## 개요

- [https://developer.mozilla.org/ko/docs/Web/HTML/Element/head](https://developer.mozilla.org/ko/docs/Web/HTML/Element/head)
- 기계가 식별할 수 있는 문서 정보(메타데이터)를 담는다.

## 예시

```html
<html>
  <head>
    <title>문서 제목</title>
  </head>
</html>
```

---

# `<body>`태그

## 개요

- HTML <body> 요소는 HTML 문서의 내용을 나타낸다.
- 한 문서에 하나의 <body> 요소만 존재

## 예시

```html
<html>
  <head>
    <title>문서 제목</title>
  </head>
  <body>
    <p>문단입니다</p>
  </body>
</html>
```

---

# 태그를 구분짓는 특성

## 구분을 나누는 태그

- 단독으로 사용했을 때 눈에 보이지 않는다.
- 여러가지 요소들을 묶어서 그룹화

## 그 자체로 요소인 태그

- 단독으로 사용했을 때에도 눈으로 확인할 수 있다.

---

# 블록과 인라인

## 블록(Block)

- 블록레벤 요소는 언제나 새로운 줄에서 시작하고, 좌우 양쪽으로 늘어나 가능한 모든 너비를 차지한다.
- `width`, `height` 크기 지정 가능
- `<div>`, `<p>`

## 인라인(Inline)

- 인라인 요소는 줄의 어느 곳이서나 시작 할 수 있다.
- 요소의 내용만큼만 차지
- `width`, `height` 크기 지정 불가
- `margin-top/bottom`, `padding-top/bottom` 적용불가
- `<span>`

## 포함 규칙

1. 같은 형태의 다른 요소 포함 가능
  - 블록 > 블록 , 인라인 > 인라인
2. 대부분의 블록 요소는 다른 인라인 요소도 안에 포함 가능
3. 인라인 요소 내부에 블록요소 포함 불가

---

# 콘텐츠 카테고리

- HTML5 부터 비슷한 특징을 가진 요소끼리 묶어서 7가지 카테고리로 세분화
- 하나의 HTML 요소가 여러 콘텐츠 카테고리에 포함 될 수 있다.

**[Metadata Content]**:문서의 메타 데이터(정보), 다른 문서를 가리키는 링크 등을 나타내는 요소
**[Flow Content]**:웹 페이지상에 메타데이터를 제외하고, 거의 모든 요소. 보통 텍스트나 임베디드 콘텐츠를 포함
**[Section Content]**:웹 문서의 구획(Section)을 나눌 때 사용
**[Heading Content]**:섹션의 제목(Heading)과 관련된 요소
**[Phrasing Content]**:문단에서 텍스트를 마크업 할 때 사용
**[Embedded Content]**:이미지나 비디오 등 외부 소스를 가져오거나 삽입할 때 사용되는 요소
**[Interactive Content]**:사용자와의 상호작용을 위한 컨텐츠 요소