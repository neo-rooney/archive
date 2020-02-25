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
        //참고: javascript에서 유효한 프로퍼티의 이름이 아닌 경우 대괄호를 사용하여 객체의 값을 읽는다.
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

## Refactoring vue-router code

위의 Router 코드는 모두 main.js에 작성되어있다. 코드는 기능별로 작게 쪼개서 관리하는것이 유지보수나 코드의 가독성 부분에서 나은 방법이므로 코드를 기능별로 나누는 작업을 진행한다.

먼저 router 기능에 관한 부분은 `"src/router/index.js"`로 옮기는 작업을 진행한다.

```javascript
// 'src/router/index.js'
import Vue from "vue";
import vueRouter from "vue-router";
import App from "../App.vue";

Vue.use(vueRouter);

const Login = { template: "<div>Login Page</div>" };
const NotFound = { template: "<div>Page not found</div>" };

const routes = [
  { path: "/", component: App },
  { path: "/login", component: Login },
  { path: "*", component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  routes
});
```

index.js를 보면 Component에 관한 코드들이 보인다. 이 부분들도 따로 `'src/components'`디렉토리에 `Home.vue` `Login.vue` `NotFound.vue`로 나누는 작업을 진행한다.

```vue
// Home.vue
<template>
  <div>
    Home
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
```

```vue
// Login.vue
<template>
  <div>
    Login
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
```

```vue
// NotFound.vue
<template>
  <div>
    Page not Found
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
```

최종적으로 `router/index.js`의 코드는 아래와 같이 변경해야 할 것이다.

```javascript
// 'router/index.js'
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import NotFound from "../components/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "*", component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
```

모듈로 export한 router는 `main.js`에서 import해서 사용하도록 한다.

```javascript
//main.js
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
```

`main.js`에서 render 함수를 통해 App.vue를 렌더링하게 코드를 변경하였다. 브라우저의 Root URL로 접속하게 되면 App.vue가 렌더링 될 것이다. App.vue에 다른 URL로 접속한 경우 해당 컴포넌트를 보여줄 부분이 필요하다.

```vue
//App.vue
<template>
  <div id="app">
    여기서부터 코드를 시작합니다!
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>

<style></style>
```

`router-view` 마크업 부분에 다른 URL로 접속한 경우 해당 컴포넌트가 렌더링되어 표시될 것이다. App.vue 같은 경우에는 라우팅되어도 변하지 않는 Header나 footer 등을 구성하는데 사용하면 된다.

## router-link

`router-link`는 라우터 지원 앱에서 사용자 네이게이션을 가능하게하는 컴포넌트이다. `router-link`는 다음과 같은 이유로 a태그보다 선호된다

- 히스토리 모드와 해시 모드에서 모두 동일하게 작동하므로 모드를 변경하기로 결정한 경우 링크를 변경해야하는 번거로움이 없다.
- 클릭이벤트를 차단하여 브라우저가 페이지를 다시 로드하지 않도록 한다.

위에서 말했듯 App.vue의 경우에는 라우팅되어도 변하지 않는 요소들을 구성하는데 사용된다. App.vue에서 사용할 Navbar Component를 만들어서 해당 링크를 누르면 해당 페이지가 렌더링 되는 네비게이션바를 만든다. `component/Navbar.vue`에 코드를 작성한다.

```vue
//Navbar.vue
<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
```

만든 Component를 사용하기 위해 App.vue에 해당 컴포넌드를 import하고 Component로 등록한 후 위치시킬곳에 마크업한다.

```vue
//App.vue
<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "app",
  components: {
    Navbar
  },
  data() {
    return {};
  }
};
</script>

<style></style>
```

## 동적 라우트 매칭

라우터의 링크가 정적이지 않고 동적으로 변하는 경우 동적 라우트 매칭을 해주어야 한다. 다시말해 어떠한 패턴을 가진 라우터를 동일한 컴포넌트에 매핑해야하는 경우 동적 라우트 매칭을 사용해야한다. 예를 들어 `/b/1` 과 `/b/2`를 동일한 컴포넌트에 매핑해야 하는 경우라고 생각해보자. 일단 라우터의 링크가 동적으로 변할 수 있게 만들어 준다.

```javascript
// 'router/index.js`
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import NotFound from "../components/NotFound.vue";
import Board from "../components/Board.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  //:bid의 경우 변수처럼 동적으로 변할 수 있다.
  { path: "/b/:bid", component: Board },
  { path: "*", component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
```

다음으로 어느 경우에나 매핑될 동일한 컴포넌트를 만들어준다.

```vue
//Board.vue
<template>
  <div>
    Board
    <div>bid : {{ bid }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bid: 0
    };
  },
  created() {
    this.bid = this.$route.params.bid;
  }
};
</script>

<style scoped></style>
```

`index.js`에서 Vue.use()함수를 이용하여 vue-router를 미들웨어로 사용했기 때문에 this.\$route라는 변수를 통해 라우터 정보에 접근 할 수 있다.

```vue
//Home.vue
<template>
  <div>
    Home
    <div>
      Board List:
      <ul>
        <li>
          <router-link to="/b/1">Board 1</router-link>
        </li>
        <li>
          <router-link to="/b/2">Board 2</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
```

`Home.vue`에서 다음과 같이 라우터 링크를 만든 경우 `Board 1`을 클릭하여 Board 컴포넌트에 접근하는 경우 bid = 1 이 될것이다.

## 중첩 라우트

어떤 컴포넌트의 링크가 다른 컴포넌트 링크의 하위 구조인 경우 중첩 라우트를 사용 할 수 있다. 예를 들어 `/b/1/c/1`과 같은 경우 `/c/1`의 경우 `/b/1`의 하위 링크가 된다.

```javascript
// 'router/index.js'
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import NotFound from "../components/NotFound.vue";
import Board from "../components/Board.vue";
import Card from "../components/Card.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  {
    path: "/b/:bid",
    component: Board,
    children: [{ path: "c/:cid", component: Card }]
  },
  { path: "*", component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
```

중첩라우터의 경우 `children`컴포넌트를 사용하여 구성 할 수 있다.
다음으로 하위 구조의 링크와 매핑 될 컴포넌트를 생성한다.

```vue
//Card.vue
<template>
  <div>
    Card
    <div>cid : {{ cid }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cid: 0
    };
  },
  created() {
    this.cid = this.$route.params.cid;
  }
};
</script>

<style scoped></style>
```

`Board` 컴포넌트와 마찬가지로 `$route`변수로 라우터 정보에 접근 할 수 있다.

```vue
//Board.vue
<template>
  <div>
    Board
    <div>bid : {{ bid }}</div>
    <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
    <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bid: 0
    };
  },
  created() {
    this.bid = this.$route.params.bid;
  }
};
</script>

<style scoped></style>
```

`Board`컴포넌트에 `Card`컴포넌트가 랜더링 될 `router-view`마크업을 표시해 주고 Card 컴포넌트에 접근 할 수 있는 `router-lick`마크업을 만든다. Board1 에서 Card 1을 클릭하게 되면 `/b/1/c/1`링크로 접근 하는 것을 확인 할 수 있다. 여기서 문제가 발생하게 되는데 Card 1으로 접근 한 후 Card 2를 클릭하게 되면 `/b/1/c/2`로 링크는 변하지만 화면의 숫자가 1로 유지 되는 것을 볼 수 있다. 그 이유는 `created` hook을 사용하여 `cid`변수에 현재 라우터의 정보를 저장했기 때문이다. `created` hook의 특성상 Card 1을 클릭한 경우 Card 컴포넌트가 생성되고 `cid`의 값에 1이 저장 되는데 Card 2를 다시 클릭한다고해서 Card 컴포넌트가 재 생성되는 것이 아니기 때문이다. 이런 경우 Vue에서는 `watch` 속성을 사용 할 수 있다.

```vue
//Card.vue
<template>
  <div>
    Card
    <div>cid : {{ cid }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cid: 0
    };
  },
  watch: {
    $route() {
      this.cid = this.$route.params.cid;
    }
  },
  created() {
    this.cid = this.$route.params.cid;
  }
};
</script>

<style scoped></style>
```

`watch` 속성을 사용한 경우 Vue는 `$route` 변수를 지켜보다가 그 값이 변한 경우 `cid`에 새로운 라우터 정보를 저장 할 것이다.
