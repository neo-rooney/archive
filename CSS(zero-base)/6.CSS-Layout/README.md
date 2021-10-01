# layout

# display

## inline

- `<span>`
- 영역의 크기가 내부 콘텐츠 크기로 정해진다.
- margin, padding의 top과 bottom을 지정 할 수 없다.(좌/우만 가능)
- 여러 요소가 가로 배치가 된다.

## block

- `<div>`
- 영역의 크기를 width와 height로 지정 할 수 있다.
- margin, padding 적용에 제한이 없다.
- 여러 요소가 세로 배치된다.

## inline-block

- `<input>`
- 영역의 크기를 width와 height로 지정 할 수 있다.
- margin, padding 적용에 제한이 없다.
- 여러 요소가 가로 배치된다.

# 요소를 없애는 법

## display : none

- 문서의 레이아웃에서 제외
- 즉, 요소가 문서 내에 차지하는 영역도 사라짐

## visibility: hidden

- 문서의 레이아웃에서 제외되진 않지만 보이지는 않음
- 즉, 요소가 문서 내에 차지하는 영역은 그대로 존재

# float

- **보통 흐름(normal flow)**으로부터 빠져 텍스트 및 인라인(inline) 요소가 그 주위를 감싸는 **자기 컨테이너**의 좌우측을 따라 배치(컨테이너를 넘어 갈 수 없음)
- `flex` 등장 이전에 많이 사용되었지만 현재 `flex`를 많이 사용

# position

- 문서 상에 요소를 배치하는 방법을 지정
- `Normal Flow` : block 요소와 inline 요소의 성질에 따라 문서에 요소가 배치되는 형태

## static

- Normal Flow에 따라 요소가 배치

## relative

- Normal Flow에 따라 요소가 배치
- **자기 자신을 기준**으로 `top`, `right`, `left`, `bottom`의 값에 따라 요소 배치 가능
- `top&bottom` 또는 `right&left`를 동시에 쓰면 `top`, `left`가 우선 적용된다.

## absolute

- Normal Flow에서 제외
- **가장 가까운 부모요소를 기준**으로 `top`, `right`, `left`, `bottom`의 값에 따라 요소 배치 가능
- 가장 가까운 부모요소는 **position: static이 아닌 경우**이고, 그 어떤 부모요소도 position: static이 아니라면 **body 태그**가 기준이 된다.

## fixed

- Normal Flow에서 제외
- **뷰포트(viewport)를 기준**으로 `top`, `right`, `left`, `bottom`의 값에 따라 요소 배치 가능

## sticky

- Normal Flow에 따라 요소가 배치
- 스크롤 되는 부묘요소를 기준으로 `top`, `right`, `left`, `bottom`의 값에 따라 지정한 값이 되면 position : fixed 처럼 동작
- 스크롤 되는 부모요소의 직계자손에 sticky 속성을 지정해야 동작한다. 즉 부모요소가 스크롤이 되는 요소여야 한다.

# overflow

- 단축 속성 : overflow-x overflow-y 지정 가능
- 요소에 지정한 크기보다 내용의 크기가 더 큰 경우 넘치는 부분을 어떻게 처리 할지 정하는 속성

## visible

- 기본값
- 넘치는대로 보여짐

## hidden

- 넘치는 부분이 잘림

## scroll

- 넘치는 부분만큼 스크롤 영역이 생김

## auto

- 사용자 에이전트에 따라 넘치지 않으면 visible 처럼 동작하나 넘치는 경우 scroll이 생김

# z-index

- 요소의 Z 축 순서를 지정
- 기본값 auto, 정수로 쌓임 순서를 지정(..., -1,0,1 , ...)
- position:static 값이 static이 아닌 값 보다 쌓임 맥락의 후순위가 된다.
- position:static 인 경우 z-index를 지정해도 적용되지 않는다.