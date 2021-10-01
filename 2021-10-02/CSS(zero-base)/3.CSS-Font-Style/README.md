# font-style

# color

- 글자의 색상

# font-size

- 글자의 크기
- 브라우저 기본값 : 16px
- 단위 : `px`, `em`, `%`, `키워드`

# font-style

- 글자의 스타일을 적용 할 때 사용
- 대부분 `italic` 적용 할 때 사용
- 단순히 스타일을 적용 하는 것(em태그와 차이)

# font-weight

- 글자의 굵기를 적용 할 때 사용
- `normal`, `bold`, `100`, `200`, `300`, `400` 등을 값으로 사용
- 단순히 스타일을 적용 하는 것(strong 태그와의 차이)

# font-fmaily

- 글꼴을 적용 할 때 사용
- 개발자가 지정한 글꼴이 사용자의 컴퓨터에 있어야함
- 따라서 사용자의 컴퓨터에 글꼴이 없는 경우를 대비해 여러개의 글꼴을 선언함

```css
font-family: Verdana, Arial, Helvetica, sans-serif;
```

# line-height

- 줄의 간격을 조정할 때 사용
- 글꼴에 따라 다른 값을 갖는다.

# font

- 단축 속성
- 필수 : `font-size` , `font-family`
- 선택 : `font-style`, `font-variant`, `font-weight`, `line-height`

```css
font: italic 100 200px/1.7 'Times New Roman', Times, serif;
```

- `font-style`, `font-weight`, `font-size` / `line-height`, `font-family` 순서로 작성해야함
- 선택 요소 중 생략한 것은 `initial`

# letter-spacing

- 자간을 조절 할 때 사용
- 폰트에 따라 기본 값이 정해져있음(기본값이 0이 아니라 `auto`)

```css
letter-spacing: 3px;
```

- 기본 자간에 3px을 더한 다는 의미
- 음수도 사용 가능

# word-spacing

- 단어 간격을 조절 할 때 사용
- 폰트에 따라 기본 값이 정해져있음
- letter-spacing과 동일 단, letter-spacing과 달리 `%` 값 사용

# text-align

- 텍스트의 정렬을 조정 할 때 사용
- left : 왼쪽 정렬
- center : 가운데 정렬
- right : 오른쪽 정렬
- `block` 요소에서만 사용 가능

# text-indent

- 텍스트의 들여쓰기를 조정 할 때 사용
- 기본값은 0
- `block` 요소에서만 사용 가능

# text-decoration

- 텍스트의 장식을 조정하는 단축 속성 아래 4가지의 속성을 정의 할 수 있다.
- `text-decoration-line` : underline, line-through 등 장식의 종류.
- `text-decoration-color` : 장식의 색.
- `text-decoration-style` : solid, wavy, dashed 등 장식의 스타일.
- `text-decoration-thickness`  : 요소를 꾸미는데 사용되는 선의 두께를 설정
- 값을 지정하는 순서는 따로 없음, 필수 값도 없음

```css
text-decoration: underline overline #FF3028 3px;
```

# word-break

- 줄바꿈의 방식을 지정
- 기본값 : `normal`
- 언어에 따라 다르게 동작

## break-all

- 영역의 너비를 벗어나는 경우 줄바꿈이 된다.

## keep-all

- 영역의 너비를 벗어나는 경우 띄어쓰기가 없는 경우 영역을 뚫고 나간다.

# text-transform

- 사용 할 수 있는 언어가 정해져있음, (한글에는 사용할 수 없음)
- 대문자, 소문자 , 단어의 첫글자만 대문자 등을 지정 할 때 사용