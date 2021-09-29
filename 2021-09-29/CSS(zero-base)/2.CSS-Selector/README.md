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

/* 여러개의 조건 input type이 checkbox 이면서 class가 check인 요소*/
/* 띄어쓰기가 없으면 And 조건*/
input[type='checkbox'].check {
  width: 100px;
  height: 100px;
}

/* 여러개의 조건 input type이 checkbox 이거나 class가 check인 요소*/
/* , 있으면 OR 조건*/
input[type='checkbox'], .check {
  width: 100px;
  height: 100px;
}
```

- 속성 성택자 사용 방법 링크

[특성 선택자 - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/Attribute_selectors)

# 가상클래스 선택자(의사 클래스)

요소의 특별한 상태를 선택자로 사용

## first-child

- 첫 번째 자식요소

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    .number:first-child {
      color: red;
    }
  </style>
  <body>
    <ul>
      <li class="">one</li>
      <li class="number">two</li>
      <li class="number">three</li>
    </ul>
  </body>
</html>
```

- 위와 같은 경우는 어떤 요소도 스타일이 적용되지 않음. number class를 갖는 요소의 부모 요소인 ul 태그의 입장에서 첫 번째 요소이면서 number class를 갖는 것에 스타일을 적용하려고 하는것인데 첫 번째 요소에 number class가 없이 때문

## last-child

- 마지막 자식요소

## nth-child(n)

- n 번째 자식요소

## first-of-type

- 형제 요소 중 같은 타입 중 첫 번째 요소

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    .number:first-of-type {
      color: red;
    }
  </style>
  <body>
    <ul>
      <li class="number">one</li>
      <div class="number">two</div>
      <li class="number">three</li>
      <li class="number">four</li>
      <span class="number">five</span>
    </ul>
  </body>
</html>
```

- 위 코드의 경우 one, two, five의 경우가 스타일이 적용된다. number class 갖는 요소가 3가지가 있기 때문이다.

## last-of-type

- 형제 요소 중 같은 타입 중 마지막 요소

## nth-of-type(n)

- 형제 요소 중 같은 타입 중 n 번째 요소

## not

- 부정 가상 선택자

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      input:not([type='password']) {
        background: #000;
      }
    </style>
  </head>
  <body>
    <input type="text" />
    <input type="email" />
    <input type="password" />
    <input type="submit" />
  </body>
</html>
```

## link, visited

- a 태그에 사용하는 가상 선택자
- 사용자가 방문 전인지 후인지가 기준(크롬의 방문기록)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      a:link {
        color: red;
      }
      a:visited {
        color: green;
      }
    </style>
  </head>
  <body>
    <a href="https://google.com">google</a>
  </body>
</html>
```

## hover, active, focus

### hover

- 마우스를 요소 위에 올려놓은 경우

### active

- 마우스로 요소를 누르고 떼기 직전까지의 경우

### focus

- 키보드의 tab키로 요소롤 선택했을 때
- 입력창에 입력하기 위해 요소에 커서가 활성화 될 때

## enabled, disabled, checked

### enabled

- disabled속성이 없는 것에만 스타일 적용

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      input[type='text']:enabled {
        background: blue;
      }
    </style>
  </head>
  <body>
    <input type="text" />
    <input type="text" />
    <input type="text" disabled />
  </body>
</html>
```

### disabled

- disabled속성이 있는 것에만 스타일 적용

### checked

- checkbox나 radio에서 선택된것은 checked 속성을 갖는데 해당 속성이 있는 요소에만 적용할 스타일

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      input[type='radio']:checked {
        outline: 3px solid red;
      }
    </style>
  </head>
  <body>
    <div>
      <input type="radio" id="yes" name="myradio" />
      <label for="yes">Yes</label>
      <input type="radio" id="no" name="myradio" />
      <label for="no">No</label>
    </div>
  </body>
</html>
```

# 가상요소 선택자

실제 존재하지 않는 가상의 요소에 스타일 적용

## before & after

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .movie::before {
        content: 'Movie';
        color: red;
      }
      .movie::after {
        content: 'Good!';
        color: red;
      }
    </style>
  </head>
  <body>
    <div class="movie">A</div>
    <div class="movie">B</div>
    <div class="movie">C</div>
    <div class="movie">D</div>
    <div class="movie">E</div>
  </body>
</html>
```

![beforeAfter.png](CSS%20Selector%207ac64b1bb575478d80a0bb3f5b4b81be/beforeAfter.png)

- 가상 요소는 드레그해도 선택되지 않음

## first-letter

- 요소의 첫 번째 글자에 스타일 적용

## first-line

- 요소의 첫 번째 줄에 스타일 적용

## selection

- 요소가 드레그 된 경우 스타일 적용

# 선택자 결합

## 하위 선택자spacing()

```css
ul li{
	color:red
}
```

- ul 내부의 li 요소 선택

## 자식 선택자 `>`

```css
ul > li{
	color:red
}
```

- ul 내부의 직계자식 li 요소만 선택

## 형제 선택자 `~`

```css
div ~ p {
	color:red
}
```

- div 요소의 형제 요소 중 div 요소 뒤에 위치한 p 요소(들) 선택

## 인접 형제 선택자 `+`

```css
div + p {
	color:red
}
```

- div 요소의 형제 요소 중 div 요소 바로 뒤에 위치한 p 요소 선택

## 그룹화

```css
div, span{
	color:red
}
```

- div와 span 요소 둘 다 선택

# 범용 선택자

## `*`

```css
*{
	color:red
}
```

- 요든 요소에 스타일 적용
- CSS 최 상단에 작성하는것 권고

# 상속 제어

## initial

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        border: 1px solid silver;
        margin: 2px;
      }

      .parent {
        color: blue;
      }

      .child2 {
        all: initial;
      }
    </style>
  </head>
  <body>
    <div class="parent">
      parent
      <div class="child1">child1</div>
      <div class="child2">child2</div>
    </div>
  </body>
</html>
```

- child2 class의 모든 스타일을 상속 받지 않는다는 의미

## inherit

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      div {
        border: 1px solid silver;
        margin: 2px;
      }

      .child1 {
        color: red;
      }

      .parent1,
      .parent2 {
        color: blue;
      }

      .parent2 .child1 {
        color: inherit;
      }
    </style>
  </head>
  <body>
    <div class="parent1">
      parent
      <div class="child1">child1</div>
      <div class="child2">child2</div>
    </div>
    <div class="parent2">
      parent
      <div class="child1">child1</div>
      <div class="child2">child2</div>
    </div>
  </body>
</html>
```

- parent2 내부의 child 클래스의 요소는 자기만의 스타일이 있어도 부모요소의 스타일을 상속받는 다는 의미

## unset

### 부모로부터 상속받을 값이 있을 때

- inherit

### 부모로부터 상속받을 값이 없을 때

- initial

# 우선순위

1. 선언된 곳
2. 명시도(적용범위가 적을수록 명시도가 높은 것!)
3. 코드의 위치

    ![css.png](CSS%20Selector%207ac64b1bb575478d80a0bb3f5b4b81be/css.png)

# 조건 선택자

## And

- 선택자 사이에 공백이 제거되는 경우 여러 선택자를 동시에 만족하는 태그에 스타일을 적용

```css
태그이름#아이디 { 속성1:속성값; 속성2:속성값; }
태그이름.클래스명 { 속성1:속성값; 속성2:속성값; }
.클래스명#아이디 { 속성1:속성값; 속성2:속성값; }
```

## OR

- 쉼표 (,)를 통해 두 선택자 중 하나라도 만족시 적용되는 조건

```css
#아이디, .클래스명{ 속성1:속성값; 속성2:속성값; }
태그이름, .클래스명{ 속성1:속성값; 속성2:속성값; }
```