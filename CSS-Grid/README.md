# CSS Flex Grid

## CSS Grid Basics ( Row, columns and gaps)

Grid는 Flex-box와 마찬가지로 부모 태그에 Grid속성을 주게되면 자식 태그가 영향을 받는 구조이다.  
![grid1](/image/grid1.JPG)

부모 태그에 `display: grid` 속성을 준 후 `grid-template-rows`속성과 `grid-template-columns`속성을 주도록 한다.

-   `grid-template-rows`속성에 값을 주게되면 차례대로 1행, 2행 순서의 크기를 지정하게 된다.
-   `grid-template-columns` 속성게 값을 주게되면 차례대로 1열, 2열 순서의 크기를 지정하게 된다.
-   `grid-gap`속성의 경우에는 grid-box간의 간격을 지정하는 속성이다.

## Auto columns, auto rows

![grid2](/image/grid2.JPG)  
위 사진처럼 자식요소가 여러개인 경우 `grid-template-rows`속성과 `grid-template-columns`속성에 지정한 갯수만큼의 box(2X2 개)만 화면에 표시되는 것을 볼 수 있다. 실제로 우리가 서버로부터 데이터를 가져와서 화면에 표시하는 경우 받아올 데이터의 갯수를 모두 알 수 는 없을 것이다. 이런 경우에 사용 할 수 있는 것이 `grid-auto-rows` 속성과 `grid-auto-columns` 속성이다.

![grid3](/image/grid3.JPG)  
`grid-auto-rows` 속성을 주는 경우 이미 `grid-template-rows`속성과 `grid-template-columns`속성에서 지정한 box를 제외한 나머지 박스(5 ~ 8)가 `row` 방향으로 나타나는 것을 확인 할 수 있다. `grid-auto-rows` 속성의 값으로 `20px`를 주었으므로, 나머지 박스의 세로 길이가 `20px`인 것을 볼 수 있고, 가로 길이의 경우 각 박스가 속한 열의 길이에 맞춰지는 것을 확인 할 수 있다.

![grid4](/image/grid4.JPG)  
`grid-auto-columns` 속성을 주는 경우에도 마찬가지로 `column`방향으로 나머지 박스가 나타나는 것을 확인 할 수 있다. 다만 주의할 점은 `grid-auto-flow: column;`을 지정해야하는데 `grid-auto-flow`의 default값이 `row`이기 때문이다.

위의 `grid-auto-rows`의 경우 1번다음에 2번 박스가 `row`방향으로 오게 된다. 명시적으로 지정한 `열`의 갯수가 2개이므로 3번 박스의 경우 한 행을 내려가서 생기게 되고 4번박스는 그 옆에 생기게되는 구조이다. `grid-auto-rows`로 생기게 되는 나머지 박스도 동일한 규칙에 의해 생기게 된다.

`grid-auto-flow: column`의 경우에는 1번박스가 생긴 후 2번 박스가 `column`방향으로 생기게 된다. 명시적으로 지정한 `행`의 갯수가 2개이므로 3번박스의 경우 한 열 옆으로 가서 3번박스가 생기게 되는 구조이다. `grid-auto-columns`로 생기게 되는 나머지 박스도 동일한 규칙에 의해 생기게 된다.

## Template Areas

`grid-template-areas`속성의 경우 CSS를 이용하여 화면의 레이아웃을 구성 할 수 있게 해준다.  
[코드 보기](https://codesandbox.io/s/laughing-cherry-mwuly)  
![grid5](/image/grid5.JPG)
