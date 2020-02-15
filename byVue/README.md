# Shopping mall Searching page by Vue

## MVVM 패턴

Model - View - View Model패턴의 약자

## 작업환경

-   lite-server
-   vue.js

## Vue.js install

-   npm으로 설치하는 방법
-   `CDN을 추가하는 방법` (https://kr.vuejs.org/v2/guide/installation.html)

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

-   [] 검색 상품명 입력 폼이 위치한다. 검색어가 없는 경우 x 버튼은 보이지 않는다.
-   [] 검색어를 입력하면 x 버튼이 보인다.
-   [] 엔터를 입력하면 검색 결과가 보인다
-   [] x 버튼을 클릭하거나, 검색어를 삭제하면 검색 결과를 삭제한다.
