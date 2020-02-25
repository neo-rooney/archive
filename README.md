# lecture-vue-trello

> Clone Cording Trello

인프런 사이트의 김정환 강사님의 강의를 듣고 그 내용을 정리한 README입니다.

[강의 바로가기](https://www.inflearn.com/course/vuejs#)

[Trello 바로가기](https://trello.com/)

## Setup

```bash
# install vue-cli
npm install -g vue-cli
```

작업할 디렉토리를 생성한 후 그 디렉토리에서 작업 진행

```bash
# vue init
vue init webpack-simple

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## Router

웹 서비스는 여러개의 페이지로 구성되어있다. 각 페이지는 주소에 따라 식별되는데 이것을 `Routing` 이라고 한다. Routing을 하는 주체는 서버가 될 수도 있고, 브라우져가 될 수도 있다.

서버 라우팅

- 서버가 라우팅 하는 경우를 서버 라우팅이라고 한다.
- 서버 라우팅의 경우 매번 주소를 요청 할 때 마다 화면이 갱신된다.
- 네이버, 구글 등

브라우져 라우팅

- 브라우져가 라우팅하는 경우를 브라우져 라우팅 이라고 한다.
- 브라우져 라우팅의 경우 매번 주소를 요청 하더라도 화면이 갱신되지 않는다.
- 서버 라우팅과 비교하여 상대적으로 효율적으로 화면을 갱신한다는 장점을 갖고 있다.
- 구글메일, 트렐로 등

## Router 직접 만들기

Vue 어플리케이션이 동작 할 때 맨 처음 실행되는 부분은 `main.js` 이다. `webpack.config.js`에서 entry 포인트가 `'./src/main.js'` 로 지정되 있기 때문이다.

```javascript
//webpack.config.js
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js', //entry point
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  .
  .
  .
```

Routing 기능을 구현하기 위해서는 entry point인 main.js에서 작업을 진행 하여야 한다.

```javascript
//main.js
import Vue from "vue";
import App from "./App.vue";

new Vue({
  el: "#app",
  render: h => h(App)
});
```

기존의 main.js를 보면 `App.vue`를 render 함수를 통해 화면에 출력하고 있는 것을 확인 할 수 있다. `localhost:8080/login`으로 라우팅 한 경우 Login Page가 출력되도록 코드를 수정한다.

```javascript
import Vue from "vue";
import App from "./App.vue";

//template 만을 갖는 Component 생성
const Login = { template: "<div>Login Page</div>" };

//엔드포인트를 값으로 갖는 routes 객체 생성
const routes = {
  "/": App,
  "/login": Login
};

new Vue({
  el: "#app",
  //엔드포인트에 따라 다른 값을 반환하는 computed 속성
  computed: {
    VueComponent() {
      return (
        //참고: javascript에서 유효한 프로퍼티의 이름의 경우 대괄호를 사용하여 객체의 값을 읽는다.
        routes[window.location.pathname] || {
          template: "<div>Page not found</div>"
        }
      );
    }
  },
  render(h) {
    return h(this.VueComponent);
  }
});
```

콘솔창에서 `window.location.pathname`를 입력해보면 해당 Url의 엔드포인트가 반환되는 것을 확인 할 수 있다. 위의 코드대로 실행해보면 "localhost:8080/" 의 경우 App.vue가 렌더링 되는것을 확인 할 수 있고, "localhost:8080/login"의 경우 Login 컴포넌트가 렌더링 되는 것을 확인 할 수 있다. 그 이외의 엔드포인트를 입력하는 경우 "Page not found" 컴포넌트가 렌더링 된다.

## Vue-router

만약 query 전달해야 한다거나 좀 더 복잡한 인증플로우 등을 구현하기 위해서는 Vue-router을 사용하는 것이 바람직하다. Vue-router를 이용하여 라우팅하는 것은 `브라우져 라우팅`이다. 브라우져 라우팅을 하는 어플리케이션을 `SPA(Single Page App)`이라고 한다.

```bash
# install vue-router
npm i vue-router
```

위에서 Vanilla JS로 구현한 Router를 Vue-router를 사용하여 재구성한다.

```javascript
import Vue from "vue";
import App from "./App.vue";
//1. 설치한 vue-router를 import 한다.
import vueRouter from "vue-router";

//2. middleware로 vue-router를 사용한다.
Vue.use(vueRouter);

const Login = { template: "<div>Login Page</div>" };
const NotFound = { template: "<div>Page not found</div>" };

//3. routes 배열을 정의한다.
//   routes 배열은 코드 작성 순서에 영향을 받는다.
//   따라서 "/","/logon"이 아닌 모든 경우에는 NotFound가 렌더링된다.
const routes = [
  { path: "/", component: App },
  { path: "/login", component: Login },
  { path: "*", component: NotFound }
];

//4. 새로운 vue-router 객체를 생성한다.
//   history mode를 사용한다.
const router = new VueRouter({
  mode: "history",
  routes
});

//5.render함수를 템플릿에 'router-view'마크업을 전달한다.
//  router-view'마크업부분에 렌더링되는 템플릿이 표시된다.
new Vue({
  el: "#app",
  router,
  render: h => h({ template: "<router-view></router-view>" })
});
```

참고로 Vue-router의 기본 설정은 hash모드다. URL 해시를 사용하기 때문에 URL이 변경될 때 페이지가 다시 로드되지 않는다. 따라서 해시를 제거하기 위해 history모드를 사용한다.
