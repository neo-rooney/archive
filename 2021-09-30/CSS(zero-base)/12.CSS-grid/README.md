# Grid

# 개요

웹페이지를 위한 이차원 레이아웃 시스템

# container

## display : grid

- display 속성에 grid 값을 사용해서 그리드를 규정
- `inline-gird` 와 같이 display 속성의 값을 중복으로 적용하는 것도 가능

## grid-template-rows

- container가 몇개의 행을 갖을지 지정
- 행의 높이를 지정하여 원하는 행의 갯수 만큼 값을 할당
- fr 단위의 값을 할당 가능, fr 단위는 비율을 설정
- `repeat(4, 1fr)` 으로 작성 가능 = `1fr 1fr 1fr 1fr` 과 동일

## grid-template-columns

- container가 몇개의 열을 갖을지 지정
- 열의 너비를 지정하여 원하는 열의 갯수 만큼 값을 할당
- fr 단위의 값을 할당 가능

## grid-template-areas

- 요소가 container에서 차지하는 영역을 직접 지정 할 수 있다.

```css
#page {
  display: grid;
  width: 100%;
  height: 250px;
  grid-template-areas: "head head"
                       "nav  main"
                       "nav  foot";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
}

#page > header {
  grid-area: head;
  background-color: #8ca0ff;
}

#page > nav {
  grid-area: nav;
  background-color: #ffa08c;
}

#page > main {
  grid-area: main;
  background-color: #ffff64;
}

#page > footer {
  grid-area: foot;
  background-color: #8cffa0;
}
```

## row-gap

- 행의 간격

## column-gap

- 열의 간격

## gap

- 단축 속성
- 앞이 row-gap, 뒤의 값이 column-gap

## grid-auto-rows

- grid-template-rows , grid-template-columns 로 이미 만들어진 요소 이외의 요소가 추가되는 경우 요소의 높이를 암시적으로 지정한다.

## grid-auto-columns

- grid-template-rows , grid-template-columns 로 이미 만들어진 요소 이외의 요소가 추가되는 경우 요소의 너비를 암시적으로 지정한다.

## grid-auto-flow

- grid 아이템들의 흐름 방향을 지정한다.
- row: 기본값 , 왼쪽에서 오른쪽으로 아이템의 흐름 지정
- column: 위에서 아래로 아이템의 흐름 지정
- row dense : 특정 아이템이 줄바꿈이 된 경우 빈 영역을 채우는 형식으로 아이템의 흐름 지정
- column dense : 특정 아이템이 줄바꿈이 된 경우 빈 영역을 채우는 형식으로 아이템의 흐름 지정

## grid

- 단축 속성

## justify-content

- 메인축을 기준으로 그리드 아이템 집합의 정렬을 지정
- flex에서 사용한것과 동일

## align-content

- 교차축을 기준으로 그리드 아이템 집합의 정렬을 지정

## justify-items

- gird로 구획된 공간에 들어간 요소가 공간보다 작을 경우 공간 안에서 어떻게 정렬될지를 지정
- 메인축 방향의 정렬을 지정

## align-items

- gird로 구획된 공간에 들어간 요소가 공간보다 작을 경우 공간 안에서 어떻게 정렬될지를 지정
- 교차축 방향의 정렬을 지정

# item

## gird-row

- 단축 속성
- item이 차지할 행의 영역을 지정
- 시작과 끝을 지정 , 1/4 형태로 지정, 앞이 시작 뒤가 끝
- 1/4 형태로 지정, 앞이 시작 뒤가 끝
- 1 / span 2 로 지정하면 1부터 2칸

## column-row

- 단축 속성
- item이 차지할 열의 영역을 지정
- 시작과 끝을 지정
- 1/4 형태로 지정, 앞이 시작 뒤가 끝
- 1 / span 2 로 지정하면 1부터 2칸

## grid-area

- grid-template-areas를 사용 할 때 사용 할 영역의 이름을 지정 할 때 사용
- 2 / 1 / 2 / 4 형태로 사용하면 gird-row, column-row의 단축 속성
- grid-row-start / grid-column-start / grid-row-end / grid-column-end 순서로 사용해야함

## order

- 아이템의 상대적 순서를 지정
- 기본값 0

## z-index

- 그리드 아이템이 겹칠 경우 z 축의 순서를 명시적으로 지정

# grid의 단위

## fr

- 비율을 지정 1fr 2fr = 1 : 2

## min-content

- 요소의 크기까지 줄어듬

## max-content

- 요소의 크기까지 커짐

## auto-fill

- grid 영역의 크기에 따라 채워지는 아이템의 갯수가 달라짐
- 남는 공간 생김

## auto-fit

- grid 영역의 크기에 따라 채워지는 아이템의 갯수가 달라짐
- 남는 공간 없음