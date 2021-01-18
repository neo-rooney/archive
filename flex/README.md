# CSS Flex

## display attribute

display 속성에는 크게 `block` `inline` `inline-block` 그리고 `flex`가 있다. 각각의 특성들에 대해 알아본다.

#### block

특징

- 항상 새로운 라인에서 시작한다.
- width, height, margin, padding 프로퍼티의 지정이 가능하다.
- block 레벨 요소 내에 inline 레벨 요소를 포함 할 수 있다.
- 대표적인 태그로는 `<div>` `<p>` `<h1>`  
  [코드 보기](https://codesandbox.io/s/summer-grass-7915l)

#### inline`

특징

- 다른 요소와 함께 있는 경우 같은 라인에 위치한다.
- width, height, margin-top, margin-bottom 프로퍼티의 지정이 불가능하다.(지정하더라도 무시된다.)
- 따라서 width, height의 경우 content의 너비, 높이만큼 차지하게 된다.
- margin-top, margin-bottom(상하여백)의 경우 inline-height를 이용하여 조정한다.
- 대표적인 태그로는 `<span>` `<a>`  
  [코드 보기](https://codesandbox.io/s/icy-microservice-hlcms)

#### inline-block

- block의 특징과 inline의 특징을 모두 갖는 속성이다.
- inline처럼 다른 요소와 함께 한 행에 위치한다.
- width, height, margin, padding 프로퍼티의 지정이 가능하다.
- 다만 width, height를 지정하지 않는 경우 inline처럼 content의 너비, 높이만큼 차지하게 된다.  
  [코드 보기](https://codesandbox.io/s/flamboyant-greider-lnnm8)

## Why we need Flexbox

앞서 살펴본 display 속성을 이용하여 `한 줄에 동일 한 좌우 간격을 갖는 box 3개`를 생성한다고 가정해보자. `<div>태그`를 이용하여 박스를 만들고 `width`와 `height`를 줘서 박스를 생성 할 것이다. div태그의 경우 `display`의 default값이 `block` 이므로 한 열로 늘어선 box 3개가 생성 될 것이다.  
![box1](/image/box1.JPG)

한 줄에 박스 3개를 생성한다 하였으므로, `display:inline-block`을 이용 할 수 있을 것이다.  
![box2](/image/box2.JPG)

이제 박스가 한 줄에 위치했으므로 동일한 좌우 간격을 주기위해서 margine을 이용한다.  
![box3](/image/box3.JPG)

좌우 간격을 동일하게 만들었으나 창크기를 줄이거나 늘리는 경우 애써 맞춘 간격이 망가지게 된다. 항상 이런식으로 간격을 조정하며 layout을 구성 할 수는 없다. 컴퓨터의 정확한 계산 능력과 귀찮은것을 싫어하는 개발자의 요구에 탄생한것이 바로 `Flexible Box Module`이다.

## Basic of Flexbox

위에서 한 동일한 작업을 Flexbox를 이용하여 작업한다. 박스를 생성하는 것까지는 동일하다. 다만 바로 인접한 부모 태그(사진의 경우 body )에 display 속성을 주어야 하는것이 차이점이다.  
![box4](/image/box4.JPG)

부모태그에 `display:flex`속성을 주게 되면 마치 `inline-block`속성을 준 것처럼 한 줄에 박스가 늘어서게 된다. 좌우 간격을 동일하게 하기 위해서 사용 할 수 있는 속성은 `justify-content: space-around`이다.  
![box5](/image/box5.JPG)

위에서 직접 margin을 갖고 조정한것보다 훨씬 간편하게 간격을 조정 할 수 있다. 창 크기가 커지거나 줄어들어도 알아서 동일한 간격을 조정해주기도 한다.

## Main Axis and Cross Axis

앞서 사용한 `justify-content`속성의 경우 `Main Axis`을 조정하는 것이고, `align-items` 속성을 이용하여 `Cross Axis`를 조정할 수 있다. `display:flex`의 경우 정렬방향은 `row(가로)방향`이 default값이다. 즉 `flex-direction:row`의 경우에 `Main Axis`가 `row(수평)`방향이 되고, `justify-content`는 `Main Axis`(수평 방향)정렬을 조정하게 된다. `Cross Axis`는 `column수직`방향이되고, `align-items` 속성은 `Cross Axis`(수직 방향) 정렬을 결정하게 된다. 다만 상하 방향의 정렬의 경우 높이가 존재해야만 조정이가능하므로 부모태그에 높이가 있는 경우에만 적용된다.

`flex-direction: column`의 경우에는 `Main Axis`가 `column(수직)` 방향이 된다. 따라서 `justity-content`를 조정하는 경우 수직 방향의 정렬이 조정되게 된다. 위에서와 마찬가지로 수직 방향의 정렬의 경우에는 부모 태그에 높이가 존재해야만 적용이 된다. `Cross Axis`는 `row(수평)` 방향이 될것이므로 `align-items`속성을 조정하는 경우에는 수직 방향이 조정 될 것이다.

다소 햇갈릴수 있으나 쉽게 정리하면 아래와 같다.

flex-direction:row경우
- `Main Axis` = `row(수평)`
- justify-content 사용 -> 수평 간격 조정  
- align-items 사용 -> 수직 간격 조정 (부모 태그 높이 필요)

flex-direction:column경우
- `Main Axis` = `column(수직)`
- justify-content 사용 -> 수직 간격 조정 (부모 태그 높이 필요)
- align-items 사용 -> 수평 간격 조정


## flex-direction

`flex-direction: row-reverse` 와 `flex-direction: column-reverse` 에대해 알아보고자 한다. 기본적으로 브라우저의 경우 `좌 -> 우` 방향과 `상 ->하` 방향이 기본 방향이다. 모니터의 형태가 사각형이므로 `왼쪽 위 꼭지점`이 시작점이고, 그 곳을 기준으로 오른쪽 아래 방향으로 가는 구조이다. `flex-direction`의 경우 default값이 `row`이다. `row-reverse`값을 주는 경우 기본 방향이 `우 -> 좌`로 변경 될 것이다. 따라서 flex-box의 요소들의 순서가 변하게 되고 시작점이 `오른쪽 위 꼭지점`이 될 것이다.  
![box6](/image/box6.JPG)

`column-reverse`의 경우 기본 방향이 `하 -> 상`으로 변경 될 것이다. 따라서 flex-box의 요소들의 순서가 변하게 되고, 시작점이 `왼쪽 아래 꼭지점`이 될 것이다.  
![box7](/image/box7.JPG)

## flex-Wrap

Flex box의 경우 창의 크기가 늘어나거나 줄어들면 알아서 간격이 조정된다. 창의 크기가 줄어들다가 box들이 서로 겹쳐지게 되면 박스의 크기도 같이 줄어들게 된다. 우리가 지정한 width 값이 무시 되는 것이다. 이는 `flex-wrap`의 default 값이 `nowrap`이기 때문이다.  
![box8](/image/box8.JPG)

`flex-wrap`의 값을 `wrap`으로 주는 경우에는 간격이 줄어드는 경우에도 우리가 지정한 width 값을 지키게 되고 그 이하로 줄어드는 경우에는 박스가 밑으로 내려가게 된다.
![box9](/image/box9.JPG)

## align-content

`flex-wrap : wrap` 을 이용한 경우 밑으로 내려간 박스의 간격을 조절하기 위한 속성에 해당한다. `align-content`를 `space-around`로 준 경우, 밑으로 내려간 박스와 기존 박스가 위치한 줄의 위치가 `justify-content : space-around` 와 같이 동작한다.
![box9](/image/box9-1.JPG)

## flex-shrink

`flex-wrap : nowrap`인 경우(기본값) 창 크기를 줄이게 되면 박스는 동일한 비율로 줄어들게 된다.
![box9](/image/box9-2.JPG)

그러나 자식 요소에 `flex-shrink : 2` 와 같이 속성을 주게 되면 해당 자식 요소는 다른 박스들에 비해 2배로 크기가 `더` 줄어들게 된다. `flex-shrink` 속성의 기본값이 `1`이기 때문에 2를 그 값으로 줬다는것은 2배 줄여달라는 의미를 갖기 때문이다.
![box9](/image/box9-3.JPG)

## flex-grow

`flex-grow`는 `flex-shrink`와 대비되는 의미를 갖는다. 주의 할 점은 `flex-grow`의 기본값은 `0`이라는 점이다. `flex-grow:1`과 같이 특정 자식요소에 해당 속성을 주게 되면 해당 요소는 다른 요소와 다르게 빈공간을 모두 차지게하게 된다. 만약 어느 한 요소에 `flex-grow:1`을 주고 다른 요소에는 `flex-grow:2`를 주게 된다면 빈 공간을 1:2 비율로 나눠 갖게 된다.
![box9](/image/box9-4.JPG)

## align-self

align Self의 경우에는 flex-container(부모 태그)에 주는 속성이 아닌 flex-box에 직접 주는 속성이다. 앞서 axis에서 설명했는 `align`은 Cross axis를 조정하는 속성이다. 따라서 `flex-direction:row`인 경우에는 `column(수직)` 방향을 조정하고, `flex-direction:column`인 경우에는 `row(수평)` 방향을 조정 할 것이다. 

`flex-direction:row`인 경우에 특정 box에 `align-self:flex-end`속성을 주는 경우 그 box만 아래 방향으로 이동 하는 것을 볼 수 있다.  
![box10](/image/box10.JPG)

`flex-direction:column`인 경우에 특정 box에 `alin-self:flex-end`속성을 주는 경우 그 box만 왼쪽 방향으로 이동 하는 것을 볼 수 있다.  
![box11](/image/box11.JPG)
