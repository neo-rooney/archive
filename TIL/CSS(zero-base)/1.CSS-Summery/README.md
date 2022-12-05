# summary

# 소개

CSS(Cascading Style Sheets)는 웹 문서의 스타일 규칙을 정하는데 사용한다.

- **Cascade**

    1.**명사** 작은 폭포

    2.**명사** 폭포처럼 쏟아지는 물

    3.**동사** 폭포처럼 흐르다

- 부모요소 정의한 스타일이 자식요소에도 영향을 미친다는 의미에서 해당 용어를 사용한듯
- 룰 기반(Rule-based)의 언어이다.
- CSS를 통해 특정 요소, 혹은 특정 요소들의 집합의 스타일 규칙을 정의 할 수 있다.

# CSS를 적용하는 방법

## 내부 스타일(embedded)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>embedded style</title>
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello CSS</h1>
  </body>
</html>
```

## 인라인 스타일(inline)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>embedded style</title>
  </head>
  <body>
    <h1 style="color: red">Hello CSS</h1>
  </body>
</html>
```

인라인 스타일은 지양하는 것이 좋다.

## 외부 스타일(external)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>external style</title>
    <link rel="stylesheet" href="style/main.css" />
  </head>
  <body>
    <h1>Hello CSS</h1>
  </body>
</html>
```

```css
/* style/main.css */
h1{
  color:red
}
```

# 캐스케이딩 원칭

## 스타일 우선순위

- 사용자가 구성한 스타일 > 개발자가 선언한 스타일 > 브라우저에 의해 정의된 스타일
- 인라인 스타일 > Id 스타일 > class 스타일 > tag 스타일( **적용 범위**가 좁을 수록 우선 순위가 높다 )
- 동일한 우선 순위인 경우 코드가 가장 뒤에 씌여진것

## 스타일 상속

- 부모 요소에 있는 스타일 속성들이 자식 요소로 전달
- 자식 요소에서 스타일을 재정의 한 경우 자식 요소에서 정의한것이 적용
- 상속 되지 않는 속성(ex : 배경 이미지 , 배경 색 등)