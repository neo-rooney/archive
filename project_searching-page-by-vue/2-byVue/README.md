# Shopping mall Searching page by Vue

## MVVM 패턴

Model - View - View Model패턴의 약자

## 작업환경

-   lite-server
-   vue.js

## Vue.js install

-   npm으로 설치하는 방법
-   `CDN을 추가하는 방법` (https://kr.vuejs.org/v2/guide/installation.html)

### Vue vs Vanilla

Vue 장점

-   코드의 간결화
-   데이터 변경에 따른 DOM 처리를 Vue가 자동으로 해줌
-   이벤트 처리의 간편함

## Hello world

### index.html

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MVVM with Vue</title>
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
        <div id="app">
            <header>
                <h2 class="container">검색</h2>
            </header>

            <div class="container">
                {{msg}}
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script type="module" src="./js/app.js"></script>
    </body>
</html>
```

### app.js

```javascript
//새로운 Vue 인스턴스
new Vue({
    //html의 어느부분에 마운팅 될것인지
    el: "#app",

    //어떤 데이터를 표시 할 것인지
    data: {
        msg: "hello world"
    }
});
```

## 검색폼

### 요구사항 분석

-   [x] 검색 상품명 입력 폼이 위치한다. 검색어가 없는 경우 x 버튼은 보이지 않는다.
-   [x] 검색어를 입력하면 x 버튼이 보인다.
-   [x] 엔터를 입력하면 검색 결과가 보인다
-   [x] x 버튼을 클릭하거나, 검색어를 삭제하면 검색 결과를 삭제한다.

v-model : Vue 인스턴스와 실제 데이터를 바인딩하는것
v-show : 엘리먼트를 조건부로 표시하기 위한 옵션
v-on : DOM에서 일어나는 이벤트를 리슨하는 역할

## 검색 결과

### 요구사항 분석

-   [x] 검색 결과가 검색폼 아래 위치한다.
-   [x] 검색 결과가 보인다.
-   [x] x버튼을 클릭하면 검색폼이 초기화되고, 검색 결과가 사라진다.

v-if="x" : x의 값이 참일 경우만 렌더
v-for : 리스트를 처리하는것
v-bind : 엘리먼트의 속성을 Vue 인스턴스의 값으로 하고자 하는 경우 사용

## 탭 구현

### 요구사항 분석

-   [x] 추천 검색어, 최근 검색어 탭이 검색폼 아래 위치한다.
-   [x] 기본적으로 추천 검색어 택을 선택한다.
-   [x] 각 탭을 클릭하면 탭 아래 내용이 변경된다.

## 추천 검색어 구현

-   [x] 번호, 추천 검색어 목록이 탭 아래 위치한다.
-   [x] 목록에서 검색어를 클릭하면 선택된 검색어로 검색 결과 화면으로 이동
-   [x] 검색폼에 선택된 추천 검색어 설정

    v-for="(item, index) in keywords"
    -> index까지 가져오고 싶은 경우

## 최근 검색어 구현

-   [x] 최근 검색어, 목록이 탭 아래 위치한다.
-   [x] 목록에서 검색어를 클릭하면 선택된 검색어로 검색 결과 화면이 이동한다.
-   [x] 검색일자, 버튼 목록이 있다.
-   [x] 목록에서 x 버튼을 클릭하면 선택된 검색어가 목록에서 삭제
-   [x] 검색시마다 최근 검색어 목록에 추가된다.

v-on:click.stop
이벤트 버블링 막는것
