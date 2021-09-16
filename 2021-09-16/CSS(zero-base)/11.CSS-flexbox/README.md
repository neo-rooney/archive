# Flexbox

# 1. 개요

CSS3에서 추가된 것으로, 요소의 배치를 조정하는데 유용하게 사용 할 수 있다.

- flebox 등장 이전에는 float 등을 이용해서 요소의 배치를 조정했다.
- 다만, float을 사용하면 부모요소의 문서 흐름에서 제거되는 등의 문제점이 있어 flexbox가 등장하게 되었다.

## flex-container

- flexbox가 놓여있는 영역을 의미한다.

## flex-item

- flex 속성에 의해 배치되는 요소들을 의미한다.

## main-axis

- 주축
- 기본값 왼쪽에서 오른쪽

## cross-axis

- 교차축
- 주축과 수직으로 만나는 축
- 기본값 위에서 아래

# flex-container의 속성

## display

- `display:flex` 를 flex-container에 해당하는 요소에 선언한다.

## flex-direction

- flexbox의 주축과 방향을 지정한다.
- 기본값 : `row` , `정방향`

### 1️⃣ row

- 주축 : 왼쪽에서 오른쪽
- 기본값

### 2️⃣ row-reverse

- 주축 : 오른쪽에서 왼쪽

### 3️⃣ column

- 주축 : 위에서 아래

### 4️⃣ column-reverse

- 주축 : 아래에서 위

## flex-wrap

- flex-item 들을 강제로 한줄로 표현 할 것인지, 줄바꿈을 허용할것인지 지정

### nowrap

- 한 줄에 요소를 배치, 요소의 가로 길이가 줄어듬
- 기본값

### wrap

- 줄 바꿈을 허용, 요소의 가로 길이가 유지

### wrap-reverse

- wrap 속성값과 동일하지만, 요소가 나열되는 시작점과 끝점의 기준이 반대로 배치

## flex-flow

- flex-direction과 flex-wrap을 한 번에 선언 할 수 있는 단축 속성

## justify-content

- 주축의 항목을 정렬하는 방식을 지정
- `flex-start` : 주축이 시작되는 위치부터 정렬
- `flex-end` : 주축이 끝나는 위치부터 정렬
- `center` : 주축의 가운데 정렬
- `space-around` : 모든 요소의 좌우 간격이 동일해 진다. 첫 번째 요소는 주축의 시작점 부터 왼쪽으로 간격이 띄어지게되고, 마지막 요소는 주축의 마지막 지점부터 오른쪽으로 간격이 띄어진다.
- `space-between` : 첫 번째는 추축의 시작점, 마지막은 주축의 마지막 지점에 위치한것을 기준으로 모든 요소간의 간격이 동일하게 띄어진다.

## align-items

- 교차축의 항목을 정렬하는 방식을 지정
- `stretch` : 기본값, item의 height를 지정하지 않으면 item의 높이는 container의 높이로 늘어난다.
- `flex-start` : 교차축의 시작 지점 부터 정렬
- `flex-end` : 교차축의  마지막 지점 부터 정렬
- `center` : 교차축의 중간 정렬

## align-content

- 여러줄에 대한 교차축 항목을 정렬하는 방식을 지정

**`flex-start`**

플렉스 항목을 한 덩어리로 뭉치고, 플렉스 컨테이너의 교차 시작점에 따라 정렬 컨테이너 모서리에 배치합니다.플렉스 레이아웃 항목에만 적용됩니다. 플렉스 컨테이너의 자식이 아닌 항목에 대해서는 `start`로 취급합니다.

**`flex-end`**

플렉스 항목을 한 덩어리로 뭉치고, 플렉스 컨테이너의 교차 끝점에 따라 정렬 컨테이너 모서리에 배치합니다.플렉스 레이아웃 항목에만 적용됩니다. 플렉스 컨테이너의 자식이 아닌 항목에 대해서는 `end`로 취급합니다.

**`center`**

플렉스/그리드 항목을 한 덩어리로 뭉쳐서 정렬 컨테이너 교차축의 중앙에 배치합니다.

**`space-between`**

정렬 컨테이너의 교차축을 따라 항목을 고르게 배치합니다. 이웃한 항목간의 거리가 동일해집니다. 첫 항목은 정렬 컨테이너 교차축의 시작점에, 마지막 항목은 정렬 컨테이너 교차축의 종료점에 붙입니다.

**`space-around`**

정렬 컨테이너의 교차축을 따라 항목을 고르게 배치합니다. 이웃한 항목간의 거리가 동일해집니다. 첫 항목 이전 여백과 마지막 항목 이후 여백은 각 항목간 거리의 절반이 됩니다.

# flex-item의 속성

## order

- 플렉스 또는 그리드 컨테이너 안에서 현재 요소의 배치 순서를 지정
- 기본값 0
- 형제 요소의 order와 비교하여 배치

## flex-grow

- flex-container 내부에 배치된 flex-item이 차지한 공간 이외에 남는 공간을 나눠갖을 비율을 지정한다.
- 기본값 0
- 0인 경우 남은 공간을 나눠갖지 않는다.
- 형제 요소로 렌더링 된 모든 flex-item 요소들이 동일한 flex-grow 값을 갖는다면, flex-container 내부에서 동일한 공간을 할당

## flex-shrink

- flex-item 요소의 크기가 flex-container 요소의 크기보다 클 때 줄어들 비율을 설정
- 기본값 1
- 0인 경우 해당 요소는 줄어들지 않는다.
- 형제 요소로 렌더링 된 모든 flex-item 요소들이 동일한 flex-shrink 값을 갖는다면, flex-container 내부에서 동일한 비율로 줄어든다.

## flex-basis

- flex-item의 초기 크기를 지정
- 기본값 : auto
- 0인 경우 flex-item의 초기 width가 없더라도 동일한 영역을 차지한다.

## flex

- flex-grow, flex-shrink flex-basis를 한번에 지정하는 단축 속성
- **값이 한 개일 때**, 그 값은 다음 중 하나여야 합니다.
    - `[<number>](https://developer.mozilla.org/ko/docs/Web/CSS/number)`를 지정하면 `<flex-grow>`입니다.
    - `[<length>](https://developer.mozilla.org/ko/docs/Web/CSS/length)` 또는 `[<percentage>](https://developer.mozilla.org/ko/docs/Web/CSS/percentage)`를 지정하면 `<flex-basis>`입니다.
    - `none`, `auto`, `initial` 중 하나를 지정할 수 있습니다.
- **값이 두 개일때**, 첫 번째 값은 `[<number>](https://developer.mozilla.org/ko/docs/Web/CSS/number)`여야 하며 `<flex-grow>`가 됩니다. 두 번째 값은 다음 중 하나여야 합니다.
    - `[<number>](https://developer.mozilla.org/ko/docs/Web/CSS/number)`를 지정하면 `<flex-shrink>`입니다.
    - `[<length>](https://developer.mozilla.org/ko/docs/Web/CSS/length)`, `[<percentage>](https://developer.mozilla.org/ko/docs/Web/CSS/percentage)`, 또는 `auto`를 지정하면 `<flex-basis>`입니다.
- **값이 세 개일 때**는 다음 순서를 따라야 합니다.
    1. `<flex-grow>`에 사용할 `[<number>](https://developer.mozilla.org/ko/docs/Web/CSS/number)`
    2. `<flex-shrink>`에 사용할 `[<number>](https://developer.mozilla.org/ko/docs/Web/CSS/number)`
    3. `<flex-basis>`에 사용할 `[<length>](https://developer.mozilla.org/ko/docs/Web/CSS/length)`, `[<percentage>](https://developer.mozilla.org/ko/docs/Web/CSS/percentage)`, 또는 `auto`

한 개 또는 두 개의 단위 없는 숫자 값을 사용할 때, <flex-basis>의 값은 auto가 아니라 0이 됩니다.

## align-self

- flex-item 중 어느 하나에 대해 align-items 정렬을 지정 할 수 있는 속성