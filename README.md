# Youtube clone cording

> Youtube clone cording wigh VanillaJS and NodeJS

1. ExpressJS
1. MongoDB
1. Webpack
1. Styling
1. User Authentication like a Boss
1. Relationships and Route Protection
1. Custom Video Player
1. Recording Video with JavaScript
1. API + AJAX

## ExpressJS

1. Create My First Express Server
1. Handlig Routes with Express
1. ES6 on NodeJS using Babel
1. Express Core: Middlewares
1. Express Core : Routing
1. MVC Pattern
1. Recap
1. Pug
1. HTML Working

---

### Create My First Express Server

```javascript
const express = require("express"); //require => node modules을 어딘가에서 가져오는 역할
const app = express(); // app에 express를 실행하고 담는것

const PORT = 4000;

function handleListening() {
    console.log(`listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening); //PORT number
```

---

### Handlig Routes with Express

라우팅은 애플리케이션 엔드 포인트(URL)의 정의, 그리고 URL가 클라이언트 요청에 응답하는 방식을 말한다.

```javascript
const express = require("express"); //require => node modules을 어딘가에서 가져오는 역할
const app = express(); // app에 express를 실행하고 담는것

const PORT = 4000;

function handleListening() {
    console.log(`listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
    res.send("hello form home");
    //클라이언트 요청에 응답하는 방식
}

function handleProfile(req, res) {
    res.send("You are my profile");
    //클라이언트 요청에 응답하는 방식
}

app.get("/", handleHome); //엔드포인트 정의

app.get("/profile", handleProfile); //엔드포인트 정의

app.listen(PORT, handleListening); //port 번호
```

---

### ES6 on NodeJS using Babel

#### Babel이란

babel은 최신 버전의 자바스크립트 문법을 브라우저가 이해할 수 있는 문법으로 변환해준다. ES6, ES7 등의 최신 문법을 사용해 코딩을 할 수 있기 때문에 생산성이 향상된다.

#### Babel install

```sh
npm install @bable/node
npm install @babel/preset-env
npm install @babel/core
```

.babelrc 파일을 프로젝트 root 폴더에 생성하고 아래와 같은 코드를 입력해준다

```
{
    "presets": ["@babel/preset-env"]
}
```

#### ES6

```javascript
import express from "express"; //ES6
const app = express();

const PORT = 4000;

const handleListening = () =>
    console.log(`listening on: http://localhost:${PORT}`);
//ES6 arrow function
//바벨을 통해 브라우저는 위의 함수를 아래와 같이 주석 처리 한 함수로 이해할것이다.
// function handleListening() {
//     console.log(`listening on: http://localhost:${PORT}`);
// }

const handleHome = (req, res) => res.send("Hello from home");
//ES6 arrow function
// function handleHome(req, res) {
//     res.send("hello form home");
// }

const handleProfile = (req, res) => res.send("You are my profile");
//ES6 arrow function

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
```

#### Nodemon

Nodemon을 설치하게되면 코드를 새로 입력한 경우 서버를 다시 껐다가 켜야하는 불편함을 해소시켜 줄 것이다.

##### Nodemon 설치

```
npm install nodemon -D
```

뒤에 -D를 붙이는것은 package.json에서 dependencies가 아닌 devDependencies에 추가되길 원하기 때문이다. dependencies는 우리가 만들 프로그램에 필요한 필수요소들이 추가되는 곳이고, devDependencies에는 프로그래밍을 할 때 편리한 도구들이 추가되는 곳이다.

package.json의 script에 아래와 같이 코드를 추가해준다.

```
"scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "nodemon --exec babel-node index.js"
    }
```

이제 콘솔창에 `npm start` 를 입력하게 되면 서버를 nodemon 과 babel을 통해 편리하게 서버를 실행시킬 수 있다.

---

### Express Core:Middlewares

#### Middleware란?

서버는 요청에서 응답까지 하나의 흐름을 갖고 있다. 이 요청과 응답사이에 실행되는 함수 목록을 `Middleware 함수` 라고 한다.

```javascript
import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
    console.log(`listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("You are my profile");

// Middleware 함수
const betweenHome = (req, res, next) => {
    console.log("Between");
    next();
};

//betweenHome이라는 함수는 모든 요청전에 한번씩 실행될것이다.
app.use(betweenHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
```

#### morgan

로깅을 하려면 morgan이라는 middleware를 사용해야한다
로깅이란 무슨일이 어디서 일어났는지 기록하는것을 의미한다.

```
npm install morgan
```

#### helmet

웹 서버에서 http 헤더설정을 바꿔주는 모듈이다.
보안에 관한 모듈로 express 프레임워크를 사용할 경우 꼭 설치해주도록 한다.

```
npm install helmet
```

#### body-parser

클라이언터POST request data의 body로부터 파라이터를 편리하게 추출할경우 사용하는 모듈이다.

```
npm install body-parser
```

#### cookie-parser

요청된 쿠키를 쉽게 추출할 수 있도록 해주는 모듈이다.

```
npm install cookie-parser
```

```javascript
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () =>
    console.log(`listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("You are my profile");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
```

---

### Express Core : Routing

#### router.js

```javascript
import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("user index"));
userRouter.get("/edit", (req, res) => res.send("user edit"));
userRouter.get("/password", (req, res) => res.send("user password"));
```

#### app.js

```javascript
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

const app = express();

const handleHome = (req, res) => res.send("Hello from home");

const handleProfile = (req, res) => res.send("You are my profile");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.use("/user", userRouter);

export default app;
```

#### init.js

```javascript
import app from "./app";

const PORT = 4000;

const handleListening = () =>
    console.log(`Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
```

---

### MVC Pattern

#### MVC Pattern 이란

MVC는 Model, View, Controller의 약자로 하나의 프로젝트를 구성할 때 그 구성요소를 세가지의 역할로 구분한 패턴이다.

Model은 데이터를 의미하고, View는 그 데이터를 어떻게 보여주는가를 의미한다. 마지막으로 Controller는 데이터를 보여주는 함수를 의미한다.

이번 Youtube Clone Cording에서는 MVC Pattern을 사용한다.

먼저 Controller를 구성해보겠다. Controller를 구성하기 전에 각 Router의 URL를 지정하기위해 Root디렉토리에 `routes.js` 파일을 만들고 사용할 URL를 지정해준다.

#### routes.js

```javascript
// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: VIDEO_DETAIL,
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
};

export default routes;
```

#### Controllers

URL를 정리했으므로, 이제 Controller에 해당하는 함수들을 각각 정의해준다. `controllers` 디렉토리를 하나 만들고 그 안에 `userController.js` `videoController.js` 파일을 만들어 준다.

##### userController.js

```javascript
export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Logout");
export const users = (req, res) => res.send("Users");
export const userDetail = (req, res) => res.send("UserDetail");
export const editProfile = (req, res) => res.send("EditProfile");
export const changePassword = (req, res) => res.send("ChangePassword");
```

##### videoController.js

```javascript
export const home = (req, res) => res.send("Home");
export const search = (req, res) => res.send("Search");
export const videos = (req, res) => res.send("Videos");
export const upload = (req, res) => res.send("Upload");
export const videoDetail = (req, res) => res.send("VideoDetail");
export const editVideo = (req, res) => res.send("EditVideo");
export const deleteVideo = (req, res) => res.send("DeleteVideo");
```

#### Routers

`Routers` 디렉토리를 하나 만들어서 그 안에 `globalRouter.js` `userRouter.js` `videoRouter.js` 를 각각 만들어 준다.

##### globalRouter.js

```javascript
import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
```

##### userRouter.js

```javascript
import express from "express";
import routes from "../routes";
import {
    users,
    userDetail,
    editProfile,
    changePassword
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
```

##### videoRouter.js

```javascript
import express from "express";
import routes from "../routes";
import {
    videos,
    upload,
    videoDetail,
    editVideo,
    deleteVideo
} from "../controllers/videoController";

const videoRouter = express.Router();
videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
```

#### app.js

URL, controller, router를 모두 정의하였으므로 `app.js`는 아래와같이 작성한다.

##### app.js

```javascript
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./Routers/globalRouter";
import userRouter from "./Routers/userRouter";
import videoRouter from "./Routers/videoRouter";
import routes from "./routes";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
```

---

### Recap

#### init.js

`init.js` 에는 app.js에서 import한 application이 있다.

```javascript
import app from "./app";

const PORT = 4000;

const handleListening = () =>
    console.log(`Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
```

#### app.js

application에 관한 코드들은 `app.js`에 담겨있다. 코드들에 대하여 간단히 설명하자면, 먼저 express를 import 하고 express의 실행 결과를 app 상수로 만들었다. 그리고 middleware들을 추가하였고, 사용할 router들도 추가하였다.

```javascript
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./Routers/globalRouter";
import userRouter from "./Routers/userRouter";
import videoRouter from "./Routers/videoRouter";
import routes from "./routes";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
```

#### Routers

라우터 디렉토리를 따로 만들어 그 안에 `globalRouter.js`, `userRouter.js`, `videoRouter.js`를 각각 만들었다.

##### gobalRouter.js

세가지의 라우터 중 `globalRouter.js`를 살펴보면, 이 안에는 URL과 controller가 담겨있다. URL은 Root 디렉토리에 따로 `routes.js` 파일을 만들어 정의해주었고, controller도 따로 디렉토리를 만들어서 정의해 주었다.

```javascript
import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
```

##### routes.js

```javascript
// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: VIDEO_DETAIL,
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
};

export default routes;
```

##### controllers > userController.js

```javascript
export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Logout");
export const users = (req, res) => res.send("Users");
export const userDetail = (req, res) => res.send("UserDetail");
export const editProfile = (req, res) => res.send("EditProfile");
export const changePassword = (req, res) => res.send("ChangePassword");
```

##### controllers > videoController.js

```javascript
export const home = (req, res) => res.send("Home");
export const search = (req, res) => res.send("Search");
export const videos = (req, res) => res.send("Videos");
export const upload = (req, res) => res.send("Upload");
export const videoDetail = (req, res) => res.send("VideoDetail");
export const editVideo = (req, res) => res.send("EditVideo");
export const deleteVideo = (req, res) => res.send("DeleteVideo");
```

---

### Pug

#### What is Pug?

Pug는 Node Express Template Engine이다. Template Engine은 HTML을 최소화시키도록 도와주는 도구를 의미한다.

#### Installing Pug

##### Install

```
npm install pug
```

##### app.js

`app.set()`을 이용하여 view engine을 설정해주도록 한다. 공식문서에 따르면 `app.set('title','value')`과 같은 형식으로 설정하고자하는 Property의 name과 value를 입력해야한다. view engine의 경우 Default값이 `N/A (undefined)이므로`, value값에 `"pug"`를 입력해준다. Pug과 Express에는 view 파일들의 위치에 관한 기본 설정이 있으므로, Root 디렉토리에 views 디렉토리를 생성하고, 그 안에 home.pug와 같이 확장자명을 html이 아닌 pug로 파일을 생성해준다.

```javascript
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./Routers/globalRouter";
import userRouter from "./Routers/userRouter";
import videoRouter from "./Routers/videoRouter";
import routes from "./routes";

const app = express();

app.set("view engine", "pug"); //pug setting
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
```

##### videoController.js

아래와 같이 `res.render()`의 괄호안에 확장자명을 제외한 views 디렉토리 안의 파일명을 입력해주면 홈화면에 home.pug 파일에 입력한 코드가 출력될것이다.

```javascript
export const home = (req, res) => res.render("home"); //res.render()
export const search = (req, res) => res.send("Search");
export const videos = (req, res) => res.send("Videos");
export const upload = (req, res) => res.send("Upload");
export const videoDetail = (req, res) => res.send("VideoDetail");
export const editVideo = (req, res) => res.send("EditVideo");
export const deleteVideo = (req, res) => res.send("DeleteVideo");
```

#### Layouts with Pug

HTML과 CSS만드로 작업을 하는경우 똑같은 코드를 반복하여 작성하는 경우가 있다. Pug의 layout을 사용하면 불필요한 반복을 줄일 수 있어 효율적으로 코드를 작성할 수 있다.
`views`디렉토리 안에 `layout`이라는 새로운 디렉토리를 생성하고 그 안에 main.pug라는 파일을 생성한다.

##### main.pug

HTML의 경우 태그로 코드를 구분하지만, pug의 경우에는 들여쓰기로 코드들의 종속관계를 구분한다. `main`안의 `block content`부분이 다른 화면들의 pug파일들의 내용들이 채워지는 곳이다.

```pug
doctyle html
html
    head
        title Youtube Clone
    body
        main
            block content //- 이 부분에 다른 pug파일들의 내용들이 채워진다.
        footer
            span &copy: Youtube
```

##### home.pug

만든 layout을 사용하기 위해서는 아래와 같이 입력하여야한다. 이렇게 입력하게되면 layout에서 입력한 `head`의 `title`과 `footer`의 `&copy: Youtube`이 출력되고, home.pug에서 입력한 내용인 `Hello`가 함께 출력된다.

```pug
extends layouts/main

block content
    p Hello
```

#### Partials with Pug

Partials는 페이지의 일부분을 의미한다. header부분이나 footer부분이 그 예가 될 것이다. `views`디렉토리에 `partials`라는 새로운 디렉토리를 생성하고, 그 안에 `header.pug`와 `footer.pug`를 만들어 작업을 진행한다.

##### header.pug

div 태그의 경우에는 태그이름을 붙이지 않고 `.className`의 형태로 작성하는것이 가능하다. header의 경우에는 로그인이 되어있는 경우와 그렇지 않은경우 그 내용이 달라질것이므로 차후 그 내용에대해 다루도록하고 일단 로그인이 되어있지 않은 상태라 생각하고 코드를 작성하였다. font awesome의 아이콘을 사용하였는데 main.pug의 head에 코드를 추가해야 정상적으로 작동할 것이다.

```pug
header.header
    .header__column
        i.fab.fa-youtube
    .header__column
        ul
            li
                a(href='#') Join
            li
                a(href='#') Log In
```

##### footer.pug

Pug에 javascript 코드를 추가하는 경우 `#{ }` 형태로 추가하는것이 가능하다.

```pug
footer.footer
    div.footer__icon
        i.fab.fa-youtube
        span.footer__text Youtube #{new Date().getFullYear()} &copy;
```

##### main.pug

Pug의 경우 일반적인 HTML코드를 사용하여도 상관없다.

```pug
doctype html
html
    head
        title Youtube Clone
        //- fontAwesom 작동 코드 ↓
        <script src="https://kit.fontawesome.com/a01f14778c.js"crossorigin="anonymous"></script>
    body
        include ../partials/header
        main
            block content
        include ../partials/footer
```

#### Local Variables in Pug

아래 `header.pug`의 a 태그 안에는 URL에 관한 정보가 담겨야한다. 앞서 우리는 `routes.js`에 URL에 관한 정보를 정리해 두었는데, 이를 Pug에서 사용하려면 URL에 관한 변수가 전역적(global)으로 사용할 수 있어야한다. 이를 위해서는 middleware를 사용해야 하는데 이에 대해서 알아보고자 한다.

```pug
header.header
    .header__column
        i.fab.fa-youtube
    .header__column
        ul
            li
                a(href='#') Join
            li
                a(href='#') Log In
```

##### What is locals ?

공식문서에 따르면 res.locals의 정의는 아래와 같다

```
An object that contains response local variables scoped to the request, and therefore available only to the view(s) rendered during that request / response cycle (if any). Otherwise, this property is identical to app.locals.
```

간단히 말하면, local변수를 global 변수로 사용하도록 만들어 주는것이다. middleware는 `app.js`에 추가했으므로, Root 디렉토리에 `middlewares.js`파일을 만들어 사용할 function을 정의해주고 `app.js`에 이를 추가하도록 하겠다.

##### middlewares.js

이 middleware는 다른 코드들 사이에 위치하므로, next를 호출 해야한다. 다음 함수로 넘어간다는 의미이다.

```javascript
import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    next();
};
```

##### app.js

middle

```javascript
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import globalRouter from "./Routers/globalRouter";
import userRouter from "./Routers/userRouter";
import videoRouter from "./Routers/videoRouter";
import routes from "./routes";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
//middleware의 위치에 신경써야한다. 우리는 globalRouter, userRouter, videoRouter 모두에서 localsMiddleware에 접근 가능해야 하므로 이 곳에 middleware를 위치시킨다.
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
```

#### Template Variables in Pug

템플릿마다 다른 정보를 갖는 경우, 그 템플릿에만 변수를 추가하는것이 가능하다.

##### main.pug

`title` 부분에 각 템플릿마다, 템플릿의 title을 표시하도록 해보겠다.

```pug
doctype html
html
    head
        <script src="https://kit.fontawesome.com/a01f14778c.js"crossorigin="anonymous"></script>
        title #{pageTitle} | #{siteName}
    body
        include ../partials/header
        main
            block content
        include ../partials/footer
```

##### videoController.js

render 함수의 첫번째 인자는 템플릿이고, 두 번째 인자는 템플릿에 추가할 정보가 담긱 객체이다. 즉, 템플릿에 전달 할 정보를 객체 형태로 각각의 템플릿에 보낼 수 있다.

```javascript
export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) =>
    res.render("search", { pageTitle: "Search" });
export const videos = (req, res) =>
    res.render("videos", { pageTitle: "Videos" });
export const upload = (req, res) =>
    res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
    res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
    res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
    res.render("deleteVideo", { pageTitle: "Delete Video" });
```

##### userController.js

```javascript
export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const logout = (req, res) =>
    res.render("logout", { pageTitle: "Logout" });
export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (req, res) =>
    res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
    res.render("editProfile", { pageTitle: "EditvProfile" });
export const changePassword = (req, res) =>
    res.render("changePassword", { pageTitle: "Change Password" });
```

---

### HTML Working

### Pages

-   [] Home
-   [] Join
-   [] Login
-   [x] Search
-   [] User Detail
-   [] Edit Profile
-   [] Change Password
-   [] Upload
-   [] Video Detail
-   [] Edit Video

## MongoDB

1. MongoDB and Mongoose
1. Video Model
1. Comment Model
1. Uploading and Creating a Video

---

### MongoDB and Mongoose

#### What is MongoDB?

MongoDB는 C++로 작성된 오픈소스 문서지향(Document-Oriented) 적 Cross-platform 데이터베이스이며, 뛰어난 확장성과 성능을 자랑한다.

##### NoSQL

NoSQL은 Not only SQL의 약자이다. 기존의 RDBMS의 한계를 극복하기 위해 만들어진 새로운 형태의 데이터저장소이다. 관계형 DB가 아니므로, RDMS 처럼 고정된 스키마 및 JSON이 존재하지 않는다.

##### Document

MongoDB는 Document-Oriented 데이터베이스이다. 여기서 말하는 Document는 데이터 구조는 한개이상의 key - value pair 으로 이루어져있다는것을 의미한다.

```
{
    "_id": ObjectId("5099803df3f4948bd2f98391"),
    "username": "velopert",
    "name": { first: "M.J.", last: "Kim" }
}
```

위의 Sample Document에서 \_id, username, name은 `key`이고 그 오른쪽 값들은 `value`이다.
\_id는 12bytes의 hexadecimal 값으로서, 각 document의 유일함을 제공한다. 이 값의 첫 4byte는 현재 timestamp, 다음 3bytes는 machin id, 다음 2byte는 MongoDB 서버의 프로세스 id, 마이막 3byte는 순차번호를 의미한다.

#### install Mongoose

Javascript에서 MongoDB와 연결하려면 Adapter를 통해야한다.

MongoDB는 데이터베이스고 이를 javascript와 연결해주는것이 mongoose이다.

```
npm install mongoose
```

#### Connecting to MongoDB

##### db.js

```javascript
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/wetube", {
    useNewUrlParser: true,
    useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = error => console.log(`Error on DB Connection : ${error}`);
db.once("open", handleOpen);
db.once("error", handleError);
```

##### init.js

```javascript
import "./db"; //기존 videoController에 import한것을 지우고!
import app from "./app";

const PORT = 4002;

const handleListening = () =>
    console.log(`Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
```

#### install dotenv

node.js 로 개발을 하면서, 포트, DB 관련 정보 등 전역으로 필요한 여러 정보들이 존재한다. node.js 에서는 dotenv 패키지를 통해 환경변수 파일을 외부에 만들고, 관리할 수 있다. 특히, 깃허브 등에 오픈소스로 프로젝트를 공개할때, DB 계정 정보를 소스코드 내에 하드코딩하지 않고, 외부 환경변수 파일에 작성하고, .gitignore 을 통해 제외하면 안전하다.

```
npm install dotenv
```

##### db.js

```javascript
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    //기존의 DB URL 주소를 .env파일에서 따로 관리한다!
    useNewUrlParser: true,
    useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = error => console.log(`Error on DB Connection : ${error}`);
db.once("open", handleOpen);
db.once("error", handleError);
```

##### init.js

```javascript
import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000; //PORT 번호도 .env파일에서 관리한다.

const handleListening = () =>
    console.log(`Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
```

---

### Video Model

MongoDB에 우리의 파일들이 어떤 식으로 생겼는지 알려줘야한다. 설정해줘야 할 것은 두 가지다. 하나는 model 즉, documnet의 name이고 다른 하나는 schema이다. schema는 형태이다.
Root 디렉토리에 models라는 디렉토리를 하나 만들고 그 안에 `Vidoe.js`파일을 생성한다.

#### Video.js

```javascript
import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required"
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    view: {
        tyle: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model("Video", VideoSchema); // Documnet의 name은 Video고 schema는 VideoSchema이다. VideoSchema는 위에 정의한것처럼 생겼다.

export default model;
```

생성한 model을 `init.js`에 import하면 mongoDB가 이제 우리의 파일들이 어떻게 생겼는지 알 수 있다.

#### init.js

```javascript
import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
    console.log(`Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
```

---

### Comment Model

동영상에 댓글을 달게되면 해당 댓글 또한 DB에 저장되어야 한다. 따라서 댓글에 대한 Model을 설정해주도록 한다. models 디렉토리에 `Comment.js` 파일을 생성한다.

##### Commnet.js

```javascript
import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type: text,
        required: "Text is required"
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});
const model = mongoose.model("Comment", CommentSchema);

export default model;
```

DB에 앞서 만든 동영상에 대한 데이터와 댓글에 관한 데이터가 저장 될 것 이다. 여기서 중요한 점은 동영상과 댓글에 대한 데이터를 연결시켜야 한다는 것이다. 어떤 댓글이 어떤 동영상에 달린것인지 DB가 인지해야 하는것이다.
아래와 같이 `Commet.js`를 작성한다.

```javascript
import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type: text,
        required: "Text is required"
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }
});
const model = mongoose.model("Comment", CommentSchema);

export default model;
```

댓글에 관한 데이터베이스에 비디오의 ID값을 갖게 해서 두 데이터를 연결시켰다.

다른 방법으로는 모든 Comment ID들을 array로 video에 넣는 방법이 있다. 아래와 같이 `Video.js`에 Comment ID의 배열을 추가한다.

#### Video.js

```javascript
import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "File URL is required"
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    view: {
        tyle: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        } //comment ID에 대한 array
    ]
});

const model = mongoose.model("Video", VideoSchema);

export default model;
```

---

### Home Controller

DB로 부터 Video에 관한 데이터를 받아와서 화면에 render해야 한다. 따라서 다음과 같이 `videoController.js`파일을 수정한다.

##### videoController.js

```javascript
import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
    //수정된 부분_시작
    try {
        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
}; // 수정된 부분_끝

export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    //const searchingBy = req.query.term ES6이전
    res.render("search", { pageTitle: "Search", searchingBy, videos }); //searchingBy: searchingBy ES6 이전
};

export const getUpload = (req, res) =>
    res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
    const {
        body: { file, title, decription }
    } = req;
    // To Do : Upload and save Video
    res.redirect(routes.videoDetail(324393));
};
export const videoDetail = (req, res) =>
    res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
    res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
    res.render("deleteVideo", { pageTitle: "Delete Video" });
```

#### async & await

async \$ await는 자바스크립트의 비동기 처리 패턴 중 하나이다. 아래 수정된 `videoController.js`코드를 살펴보자

```javascript
export const home = async (req, res) => {
    //수정된 부분_시작
    try {
        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
}; // 수정된 부분_끝
```

데이터베이스로부터 Video에 관한 정보를 받아오도록했다. 비동기 처리를 하지 않으면, 데이터베이스로부터 모든 데이터를 받아오기 전에 다음 코드로 넘어 갈 것이다. 우리가 원하는 것은 모든 데이터를 받은 후 화면에 render하기를 원하는것이므로 데이터를 다 받을 때까지 javascript가 기다려줬으면 한다. 이럴때 비동기 처리를 하면 된다.

#### async & await 예외 처리

## async & await에서 예외를 처리하는 방법은 바로 try catch이다. 프로미스에서 에러 처리를 위해 .catch()를 사용했던 것처럼 async에서는 catch {} 를 사용하시면 된다. 발견된 에러는 `error`객체에 담기기 때문에 에러의 유형에 맞게 에러 코드를 처리해주면된다.

### Uploading and Creating a Video

#### install multer

```
npm install multer
```
Multer는 파일 업로드를 위해 사용되는 `multipart/form-data` 를 다루기 위한 node.js 의 미들웨어이다.

#### middlewares.js

```javascript
import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" }); //파일이 저장 될 경로를 지정

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    next();
};

export const uploadVideo = multerVideo.single("videoFile"); //하나의 파일만 업로드하기위해 single사용 upload.pug의 type="file"의 name 입력
```

#### upload.pug

```pug
extends layouts/main

block content
    .form-container
        form(action=`/videos${routes.upload}`, method="post", enctype="multipart/form-data")
            label(for="file") Video File
            input(type="file", id="file", name="videoFile", required=true, accept="video/*") //video파일만을 업로드 가능하기 위해서 accept 사용
            input(type="text", placeholder="Title", name="title", required=true)
            textarea(name="description", placeholder="Description", required=true)
            input(type="submit", value="Upload Video")
```

#### videoRouter.js

```javascript
import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    editVideo,
    deleteVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload); // 이 곳에 uploadvideo middleware 추가하였음

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;

```
#### app.js
```javascript
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import globalRouter from "./Routers/globalRouter";
import userRouter from "./Routers/userRouter";
import videoRouter from "./Routers/videoRouter";
import routes from "./routes";

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads")); // uploads만을 위한 router필요하므로 지정
app.use(cookieParser());                        // express.static("uploads)에 의해 해당 Url로 접속하게되면 uploads파일경로로 갈것이다.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
```
#### videoController.js
```javascript
import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
    try {
        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
};

export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy, videos }); 
};

export const getUpload = (req, res) =>
    res.render("upload", { pageTitle: "Upload" });
//수정된 부분 _ 시작
export const postUpload = async (req, res) => {
    const {
        body: { title, decription },
        file: { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path.replace(/\\/g, "/"), //window 경우 파일경로를 "\"로 지정하므로 이를 "/로 변환"
        title,
        decription
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
};
//수정된 부분 _ 끝
export const videoDetail = (req, res) =>
    res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
    res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
    res.render("deleteVideo", { pageTitle: "Delete Video" });
```

#### home.pug
```pug
extends layouts/main
include mixins/videoBlock

block content
    .videos
        each item in videos
           +videoBlock({
                id:item.id,
                title:item.title,
                views:item.views,
                videoFile:item.fileUrl // 변경
            }) 
```