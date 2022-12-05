+# SCSS

## SCSS

## Variables

`_이름.scss`형식의 파일이름을 scss 디렉토리 안에 생성하게 되면 해당 파일은 css로 컴파일 되지 않는다.

```scss
// _variables.scss
$bg: #e7473c;
```

위와 같은 형식으로 변수를 지정한 후에

```scss
//styles.scss
@import "_variables";

body {
  background: $bg;
}
```

위와 같이 import 후 사용 할 수 있다. 프로젝트에서 자주 사용되는 색을 지정 한 후 이렇게 사용하다가 시간이 지나서 색을 변경하려는 경우 하나의 코드만 변경해주면 될 것이므로 매우 유용 할 것이다.

## Nesting

Nesting은 HTML 태그를 작성하듯 SCSS 코드를 작성 할 수 있게 해주는 것이다.
아래 코드와 같은 HTML 코드가 있다면

```HTML
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="dist/css/styles.css" />
  <title>SCSS</title>
</head>
<body>
  <h2>Title</h2>
  <div class="box">
    <h2>Another Title</h2>
    <button>button</button>
  </div>
  <button>button</button>
</body>

</html>
```

아래 코드와 같이 부모 자식 태그의 레벨에 맞춰 SCSS 코드를 작성 할 수 있다.

```scss
@import "_variables";

.box {
  &:hover {
    background: $bg;
  }
  button {
    color: blue;
  }
}
```

불필요한 class 설정 등을 줄일 수 있고, 코드 가독성이 높아진다는 장점을 갖는다.

## mixins

mixins은 프로그래밍 로직을 구성하는데 사용 할 수 있다.

mixins은 Variables와 비슷하게 `_이름.scss` 형식으로 파일을 만들면 된다.

아래와 같은 HTML 코드가 있는 경우

```HTML
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="dist/css/styles.css" />
  <title>SCSS</title>
</head>
<body>
  <a href="#">Github</a>
  <a href="#">Github</a>
  <a href="#">Github</a>
  <a href="#">Github</a>
  <a href="#">Github</a>
  <a href="#">Github</a>
</body>
</html>
```

아래와 같이 mixins 코드를 구성한다음

```scss
//_mixins.scss
@mixin myLink($color) {
  text-decoration: none;
  display: block;
  color: $color;
}
```

아래와 같이 a 태그에 관한 스타일을 한꺼번에 지정 할 수 있다. 여기서 주목 할 점은 mixins은 함수처럼 매개변수를 전달 할 수 있다는 점이다.

```scss
//styles.scss
@import "_mixins";

a {
  &:nth-child(odd) {
    @include myLink(red);
  }
  &:nth-child(even) {
    @include myLink(blue);
  }
}
```

심지어 아래 코드와 같이 조건문을 사용 할 수도 있다.

```scss
//styles.scss
@import "_mixins";

a {
  &:nth-child(odd) {
    @include myLink("odd");
  }
  &:nth-child(even) {
    @include myLink("even");
  }
}
```

```scss
//_mixin.scss
@mixin myLink($word) {
  text-decoration: none;
  display: block;
  @if $word == "odd" {
    color: yellow;
  } @else {
    color: olive;
  }
}
```

## Extends

Extends는 코드를 재사용 할 수 있게 해준다. 프로젝트에서 반복적으로 사용되는 css 스타일이 있는 경우 이를 미리 지정해놓고, 불러서 계속 사용 할 수 있게 하는 것이다. 이는 코드의 일관성을 유지하고, 가독성을 높이는데 유용할 것이다.

Extends 역시 `_이름.scss`형식으로 파일을 만들어 사용한다.

아래와 같은 HTML 코드가 있고, a태그와 button 태그를 동일한 모양으로 하고 싶은 경우

```HTML
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="dist/css/styles.css" />
  <title>SCSS</title>
</head>
<body>
  <a href="#">BUTTON</a>
  <button>BUTTON</button>
</body>
</html>
```

`%`기호를 사용하여 extends를 정의하도록 한다.

```scss
//_button.scss
%button {
  font-size: 30px;
  background: khaki;
  font-weight: bold;
  border-radius: 6px;
  padding: 5px;
  color: #fff;
}
```

그런 후 이를 `extend`키워드를 사용하여 각 태그에 적용해주게되면, `%button`extends에 정의한 스타일이 공통적으로 적용되게 된다. 이 후 다른 부분만 조금씩 변경해주면 동일한 스타일을 지정할 수 있다.

```scss
@import "_button";

a {
  @extend %button;
  text-decoration: none;
}

button {
  @extend %button;
  border: none;
  cursor: pointer;
  &:focus,
  &:active {
    outline: none;
  }
}
```
