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

## 서버 구축 작업 요약

1. npm init > package.json 생성
1. git init > 버전 관리
1. .gitignore > node_modules, package-lock.json 제외
1. npm install express
1. script 수정 > node index.js 를 npm start로
1. babel install > script "babel-node index.js"
1. nodemon 설치 > script " nodemon --exec babel-node index.js --delay 2"
1. middleware 설치
1. MVC 패턴 적용 - Controller

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
\*HTTP 동작 방식  
get과 post 모두 서버로 클라이언트가 데이터를 보낸다는 점에서는 차이가 없다. 다만 get의 경우 URI 뒤에 query string 형식으로 데이터를 보내기 때문에 보낼 수 있는 데이터의 길이에 제한이 있다. post의 경우 body에 데이터를 담아서 보내기 때문에 길이의 제한이 없다. get과 post를 사용하는 케이스는 아래와 같다.

-   get : 서버로 부터 데이터를 읽어와 화면에 보여주는 경우
-   post : 서버로 데이터를 보내고 DB등의 데이터를 변경 할 경우

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
npm install @babel/node
npm install @babel/preset-env
npm install @babel/core
```

babel 자체는 아무것도 하지 않는다. babel/preset-env를 설치하고 .babelrc에 babel에 관한 설정 등을 넣어줘야 변환이 된다.  
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

package.json의 script에 아래와 같이 코드를 추가해준다. delay 2를 넣어주는 이유는 babel이 변환을 완료할 때 까지 기다려 주길 원하기 때문이다. delay를 생략하면 일단 재시작하고 babel이 변환을 완료한 후 다시 시작해서 서버가 2번 재시작 될 것이다.(소소한 오류)

```
"scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "nodemon --exec babel-node index.js --delay 2"
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

-   [x] Home
-   [x] Join
-   [x] Login
-   [x] Search
-   [x] User Detail
-   [x] Edit Profile
-   [x] Change Password
-   [x] Upload
-   [x] Video Detail
-   [x] Edit Video

## MongoDB

1. MongoDB and Mongoose
1. Video Model
1. Comment Model
1. Home Controller
1. Uploading and Creating a Video
1. Getting Video by ID
1. Editing a Video
1. Delete a Video
1. Searching Videos

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

async & await에서 예외를 처리하는 방법은 바로 try catch이다. 프로미스에서 에러 처리를 위해 .catch()를 사용했던 것처럼 async에서는 catch {} 를 사용하시면 된다. 발견된 에러는 `error`객체에 담기기 때문에 에러의 유형에 맞게 에러 코드를 처리해주면된다.

---

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
app.use(cookieParser()); // express.static("uploads)에 의해 해당 Url로 접속하게되면 uploads파일경로로 갈것이다.
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

---

### Getting Video by ID

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

export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path.replace(/\\/g, "/"),
        title,
        description
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id));
};
//코드 수정 _ 시작
export const videoDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id); //URL에 있는 id를 이용하여 DB로부터 데이터를 불러온다.
        res.render("videoDetail", { pageTitle: "Video Detail", video }); // 데이터를 videoDetail.pug로 전달한다.
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};
//코드 수정 _ 끝
export const editVideo = (req, res) =>
    res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
    res.render("deleteVideo", { pageTitle: "Delete Video" });
```

#### videoDetail.pug

```pug
extends layouts/main

block content
    .videp__player
        video(src=`/${video.fileUrl}`)
    .video__info
        h5.video__title=video.title
        span.video__views=video.view
        p.video__description=video.description
```

---

### Editing a Video

우선 router의 형태가 `/:id/edit` 이므로 function 형태로 router에 접근할 수 있도록 변경한다.

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
    userDetail: id => {
        if (id) {
            return `/users/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: id => {
        if (id) {
            return `/videos/${id}`;
        } else {
            return VIDEO_DETAIL;
        }
    },
    editVideo: id => {
        if (id) {
            return `/videos/${id}/edit`;
        } else {
            return EDIT_VIDEO;
        }
    },
    deleteVideo: DELETE_VIDEO
};

export default routes;
```

#### videoRouter.js

```javascript
import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    getEditVideo,
    deleteVideo,
    postEditVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();
//Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

//Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
```

#### videoController.js - getEditVideo

수정 페이지에 접속했을 때 양식이 채워져있길 바라므로 DB로 부터 수정하기 이전의 데이터를 불러와 화면에 채워넣어야 한다.

```javascript
import routes from "../routes";
import Video from "../models/Video";
.
.
.
export const getEditVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

export const postEditVideo = async (req, res) => {
};
export const deleteVideo = (req, res) =>
    res.render("deleteVideo", { pageTitle: "Delete Video" });

```

#### editVideo.pug

pug로 전달한 데이터를 이용하여 양식을 채워넣는다.

```pug
extends layouts/main

block content
    .form-container
        form(action=routes.editVideo(video.id), method="post")
            input(type="text", placeholder="Title", name="title", value=video.title)
            textarea(name="description", placeholder="Description")=video.description
            input(type="submit", value="Update Video")
        a.form-container__link.form-container__link--delete(href=`/videos${routes.deleteVideo}`) Delete Video
```

#### videoController.js - postEditVideo

```javascript
import routes from "../routes";
import Video from "../models/Video";
.
.
.
export const getEditVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};

export const postEditVideo = async (req, res) => {
    const {
        params: { id },
        body: { title, description }
    } = req;
    try {
        await Video.findOneAndUpdate({ _id: id }, { title, description }); // id로 해당 데이터를 특정한 후 새로 작성한 데이터로 변경한다.
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};
export const deleteVideo = (req, res) =>
    res.render("deleteVideo", { pageTitle: "Delete Video" });

```

---

### Delete a Video

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
.
.
.
    deleteVideo: id => {
        if (id) {
            return `/videos/${id}/delete`;
        } else {
            return DELETE_VIDEO;
        }
    }
};

export default routes;

```

#### videoRouter.js

```javascript
import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    getEditVideo,
    deleteVideo,
    postEditVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();
//Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

//Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.deleteVideo(), deleteVideo); //string이 아니므로 함수로 변경

export default videoRouter;
```

#### videoController.js

```javascript
import routes from "../routes";
import Video from "../models/Video";
.
.
.
export const deleteVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        await Video.findByIdAndRemove({ _id: id });
    } catch {
        console.log(error);
    }
    res.redirect(routes.home);
};

```

---

### Searching Videos

#### videoController.js

```javascript
import routes from "../routes";
import Video from "../models/Video";
.
.
.
export const search = async (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    let videos = [];
    try {
        videos = await Video.find({                        // regex 는 정규표현식으로 검색어를 포함하는 제목을 찾기 위함
            title: { $regex: searchingBy, $options: "i" } //i는 insensitive라는 의미로 대소문자 구분하지 않겠다는 의미
        });
    } catch (error) {
        console.log(error);
    }
    res.render("search", { pageTitle: "Search", searchingBy, videos });
};
.
.
.
```

#### search.pug

```pug
extends layouts/main
include mixins/videoBlock

block content
    .search__header
        h3 Searching by #{searchingBy}
    .search__videos
        if videos.length === 0
            h5 Videos not Found
        each item in videos
            +videoBlock({
                title:item.title,
                views:item.views,
                videoFile:item.fileUrl,
                id:item.id
            })
```

## Webpack

---

### Introduction to Webpack

#### Install

```
npm install webpack webpack-cli
npm install css-loader, postcss-loader, sass-loader
npm install autoprefixer
npm install node-sass
npm install babel-loader
npm install @babel/polyfill
```

webpack-cli 는 터미널에서 webpack을 사용할 수 있도록 하는 것

#### What is Webpack

Webpack은 module bundler이다. 우리가 어떤 파일을 Webpack에게 주면, Webpack은 여러 브라우저에서 호환되는 static 파일로 변환해준다.
예를 들어 ES6로 자바스크립트를 작성하면 브라우저가 이해 할 수 있는 javascript로 변환해주고, Sass를 Css로 변환해 준다.

#### package.json

`package.json`의 `script`부분을 아래와 같이 변경해 준다.

```
"scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev:server": "nodemon --exec babel-node init.js --delay 2",
        "dev:assets": "cross-env WEBPACK_ENV=development webpack -w", //-w 옵션은 파일들을 변경했을 때 webpack을 다시 껐다가 키는 불편함을 없애줌
        "build:assets": "cross-env WEBPACK_ENV=production webpack"
    }
```

#### webpack.config.js

webpack은 기본적으로 export configuration object를 찾는다. 따라서 `webpack.config.js`파일에 webpack에 관한 규칙들을 정해놓는다고 생각하면 된다.
우리는 앞으로 사용할 모든 파일의 형식들을 Webpack에게 알려줘야 한다.
주의할 점은 `webpack.config.js`파일 안의 코드들은 server코드와는 연관시켜서는 안된다는 점과 ES6 이전의 javascript로 작성해야한다는 것이다.

```javascript
const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV; //package.json에 쓴 이름과 동일한 이름 쓰기
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js"); //__dirname은 프로젝트의 Root폴더를 의미한다. project폴더/assets/js/main.js를 의미
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    entry: ["@babel/polyfill", ENTRY_FILE], //'파일들이 어디서 왔는가?'를 의미
    mode: MODE, //@babel/polyfill은 구름 크롬이 아직 async를 어떻게 처리해야하는지 모르기 때문에 설치
    module: {
        rules: [
            {
                test: /\.(js)$/, //정규표현식으로, 그 파일이 js파일인지 알아보는 역할
                use: [
                    {
                        //loader은 webpack에게 파일을 처리하는 방법을 알려주는 역할을 담당한다.
                        loader: "babel-loader"
                    }
                ]
            },
            {
                //webpack은 config파일에서 아래에서 위로 실행한다는 점 주의!
                test: /\.(scss)$/, //1st : scss파일 찾기
                use: ExtractCSS.extract([
                    //5th : CSS부분만 추출
                    {
                        loader: "css-loader" //4th : webpack이 CSS를 이해 할 수 있도록 알려주는 역할
                    },
                    {
                        loader: "postcss-loader", //3rd : sass-loader로 부터 받은 css를 plugin을 사용하여 호환 가능 한 css로 변환(다른 브라우져와의 호환 등)
                        options: {
                            plugins() {
                                return [
                                    autoprefixer({
                                        //브라우저의 인기도를 바탕으로 호환가능하게 만들어 주는 것
                                        overrideBrowserslist: "cover 99.5%"
                                    })
                                ];
                            }
                        }
                    },
                    {
                        loader: "sass-loader" //2nd : sass 또는 css파일을 일반 css로 바꿔주는 역할
                    }
                ])
            }
        ]
    },
    output: {
        //'변환된 파일들을 어디에다가 넣을 것인가?'를 의미
        path: OUTPUT_DIR,
        filename: "[name].js"
    },
    plugins: [new ExtractCSS("styles.css")]
};

module.exports = config;
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
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static")); // 누군가 /static 로 가려고 하면 static 폴더로 가도록 하는것
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
```

## Styling

### What is Scss

한 눈에 알아보기 쉽게 CSS코드를 작성하고자 하는 이유와 mixin과의 호환성 및 변수와 함수의 사용을 위해 Scss로 styling을 한다.

파일 구조는 아래와 같다  
`parials`에는 header, footer, Login에 관한 scss파일을 만든다.  
`pages`에는 개별 페이지에서 필요한 스타일링을 한다.  
`config`에는 필요한 변수에 관한 scss파일을 만들고, reset.scss를 넣어 styling의 편의를 도모한다.  
`main.scss`는 application에 공통으로 들어갈 styling을 한다.  
모든 scss파일은 `styles.scss`에 import되고 `styles.scss`파일은 `main.js`에서 import된다.

![photo1](https://user-images.githubusercontent.com/52039229/73718101-e607f300-475e-11ea-9561-4c4ebcbd9acd.JPG)

#### main.scss

```scss
html,
body {
    height: 100%;
}
body {
    background-color: #f5f5f5;
    color: $black;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 14px;
}

main {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    min-height: 70vh;
}
```

#### \_variagles.scss

```scss
$red: #ea232c;
$dark-red: #bb2f2a;
$grey: #f5f5f5;
$black: #444444;
$dark-grey: #e7e7e7;
```

#### header.scss

아래와 같이 HTML처럼 구조를 살려 코딩할 수 있다는 점이 편했다.  
또한 변수를 사용할 수 있는것이 장점이었다.

```scss
.header {
    background-color: $red; // _variagles.scss에서 정의한 변수 사용
    margin-bottom: 50px;
    .header__wrapper {
        padding: 5px 0px;
        width: 100%;
        margin: 0 auto;
        max-width: 1200px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        .header__column {
            i {
                color: white;
                font-size: 40px;
            }
            &:nth-child(2) {
                width: 100%;
                justify-self: center;
            }
            &:last-child {
                justify-self: end;
            }
            ul {
                display: flex;
                color: white;
                font-weight: 600;
                text-transform: uppercase;
                li:not(:last-child) {
                    margin-right: 15px;
                }
            }
            form {
                width: 100%;
                input {
                    padding: 7px 10px;
                    width: 100%;
                    border-radius: 5px;
                    font-size: 14px;
                    color: $black;
                    font-weight: 600;
                    &::placeholder {
                        font-weight: 300;
                        color: rgba(0, 0, 0, 0.7);
                    }
                }
            }
        }
    }
}
```

## User Authenication

1. PassportJS
1. Local Autentication with Passport
1. Github Log In
1. User Detail

### PassportJS

Passport는 middleware로 사용자 인증을 구현시켜준다.  
브라우저 상에 쿠키(Cookies)를 설정해주면 그 쿠키를 통해 사용자 ID 등을 알 수 있고, Passport가 브라우저에서 자동으로 쿠키를 가져와서 인증이 완료된 User Object를 Controller에 넘겨줄것이다.

쿠키(Cookies)는 브라우저에 저장할 수 있는 것들인데 모든 요청(request)에 대해서, 백엔드(back-end)로 전송될 정보들이 담겨있다.

### Local Autentication with Passport

#### Passport-local-mongoose

Password 설정, 확인 등의 작업을 자동으로 해주는것

```
npm install passport-local-mongoose
```

#### User.js

`User.js`에 해당 파일을 추가해서 db가 해당 모델을 알 수 있도로 한다.

```javascript
import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarUrl: String,
    facebookId: Number,
    githubId: Number
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" }); //usernameField를 email로 하겠다는 설정

const model = mongoose.Model("User", UserSchema);

export default model;
```

#### passport, passport-local

passport-local은 username과 password를 쓰는 사용자 인증 방식(strategy)을 의미한다.

```
npm i passport passport-local
```

#### passport.js

strategy라는 건, 로그인 하는 방식을 의미한다.  
serialization 이라는 것은, '어떤 정보를 쿠키에게 주느냐'를 의미한다.  
deserialization는 '어느 사용자인지 어떻게 찾는가?'를 의미한다.  
일반적으로 serialization을 통해서 쿠키에 user.id를 담고 그 id를 가지고 deserialization을 통해 사용자를 식별한다.

```javascript
import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

//passport-local-mongoose에서 제공하는 함수 사용
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
```

#### userController.js

```javascript
.
.
.
//postJoin을 middleware로 만듬 가입 후 바로 로그인 하기 위함
export const postJoin = async (req, res, next) => {
    const {
        body: { name, email, password, password2 }
    } = req;
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        try {
            const user = await User({
                name,
                email
            });
            await User.register(user, password); //register는 create와는 다르게 비밀번호를 암호화해서 저장
            next();
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
    }
};
export const getLogin = (req, res) =>
    res.render("login", { pageTitle: "Login" });
export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login, //로그인 실패시 로그인 화면으로
    successRedirect: routes.home //로그인 성공시 홈 화면으로
});
.
.
.
```

#### app.js

`app.js`에 `passport.js`와 passport middleware를 추가한다.

```javascript
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport"; //추가
import { localsMiddleware } from "./middlewares";
import globalRouter from "./Routers/globalRouter";
import userRouter from "./Routers/userRouter";
import videoRouter from "./Routers/videoRouter";
import routes from "./routes";

import "./passport"; //추가

const app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(passport.initialize()); //추가
app.use(passport.session()); //추가

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
```

#### express-session

```
 npm install express-session
```

`app.js`에 다음과 같은 코드 추가

```javascript
import session from "express-session";

app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: true,
        saveUninitialized: false
    })
);
```

#### connet-mongo

쿠키를 저장할 저장소를 우리의 데이터 베이스에 연결하는 역할을 함

```
npm i connect-mongo
```

mongoose를 사용하여 MongoDB와 쿠키저장소를 연결하였다. 따라서 서버를 재시작하더라도 로그인 상태가 유지 될것이다.

```javascript
import MongoStore from "connect-mongo";
import mongoose from "mongoose";

app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: true,
        saveUninitialized: false,
        store: new CokieStore({ mongooseConnection: mongoose.connection })
    })
);
```

#### new middleware -OnlyPublic and OnlyPrivate

OnlyPublic은 로그인된 상태에서는 접근 할 수 없도록 만드는 middleware
OnlyPublic은 로그인된 상태에서만 접근 할 수 있도록 만드는 middleware

각 용도에 맞게 Routers에 추가

##### middlewares.js

```javascript
import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = req.user || null;
    next();
};

export const olnyPublic = (req, res, next) => {
    if (req.user) {
        res.redirect(routes.home);
    } else {
        next();
    }
};

export const olnyPrivate = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect(routes.home);
    }
};

export const uploadVideo = multerVideo.single("videoFile");
```

##### globalRouter.js

```javascript
import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
    getJoin,
    postJoin,
    getLogin,
    postLogin,
    logout
} from "../controllers/userController";
import { olnyPublic } from "../middlewares";

const globalRouter = express.Router();
globalRouter.get(routes.join, olnyPublic, getJoin);
globalRouter.post(routes.join, olnyPublic, postJoin, postLogin);

globalRouter.get(routes.login, olnyPublic, getLogin);
globalRouter.post(routes.login, olnyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;
```

##### videoRouter.js

```javascript
import express from "express";
import routes from "../routes";
import {
    getUpload,
    postUpload,
    videoDetail,
    getEditVideo,
    deleteVideo,
    postEditVideo
} from "../controllers/videoController";
import { uploadVideo, olnyPrivate } from "../middlewares";

const videoRouter = express.Router();
//Upload
videoRouter.get(routes.upload, olnyPrivate, getUpload);
videoRouter.post(routes.upload, olnyPrivate, uploadVideo, postUpload);

//video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

//Edit Video
videoRouter.get(routes.editVideo(), olnyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), olnyPrivate, postEditVideo);

videoRouter.get(routes.deleteVideo(), olnyPrivate, deleteVideo);

export default videoRouter;
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
import { olnyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, olnyPrivate, editProfile);
userRouter.get(routes.userDetail(), olnyPrivate, userDetail);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
```

### Github Log In

github 홈페이지 > setting > Developer settings > OAuth Apps 에 등록

```
npm install passport-github
```

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

//Github

const GITHUB = "/auth/github"; //추가
const GITHUB_CALLBACK = "/auth/github/callback"; //추가

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: id => {
        if (id) {
            return `/users/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: id => {
        if (id) {
            return `/videos/${id}`;
        } else {
            return VIDEO_DETAIL;
        }
    },
    editVideo: id => {
        if (id) {
            return `/videos/${id}/edit`;
        } else {
            return EDIT_VIDEO;
        }
    },
    deleteVideo: id => {
        if (id) {
            return `/videos/${id}/delete`;
        } else {
            return DELETE_VIDEO;
        }
    },
    github: GITHUB, //추가
    githubCallback: GITHUB_CALLBACK //추가
};

export default routes;
```

#### passport.js

```javascript
import passport from "passport";
import GithubStrategy from "passport-github";
import User from "./models/User";
import { githubLoginCallback } from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(
    new GithubStrategy(
        {
            clientID: process.env.GH_ID,
            clientSecret: process.env.GH_SECRET,
            callbackURL: `http://localhost:4004${routes.githubCallback}`
        },
        githubLoginCallback
    )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
```

#### userController.js

```javascript
.
.
.
export const githubLoginCallback = async (_, __, profile, cb) => {
    const {
        _json: { id, avatar_url, name, email }
    } = profile;

    try {
        const user = await User.findOne({ email });
        if (user) {
            user.githubId = id;
            user.save();
            return cb(null, user);
        } else {
            const newUser = await User.create({
                email,
                name,
                githubId: id,
                avatarUrl: avatar_url
            });
            return cb(null, newUser);
        }
    } catch (error) {
        return cb(error);
    }
};

export const postGithubLogin = (req, res) => {
    res.redirect(routes.home);
};

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.home);
};
.
.
.
```

#### globalRouter.js

```javascript
import express from "express";
import routes from "../routes";
import passport from "passport";
import { home, search } from "../controllers/videoController";
import {
    getJoin,
    postJoin,
    getLogin,
    postLogin,
    logout,
    githubLogin,
    postGithubLogin
} from "../controllers/userController";
import { olnyPublic, olnyPrivate } from "../middlewares";

const globalRouter = express.Router();
globalRouter.get(routes.join, olnyPublic, getJoin);
globalRouter.post(routes.join, olnyPublic, postJoin, postLogin);

globalRouter.get(routes.login, olnyPublic, getLogin);
globalRouter.post(routes.login, olnyPublic, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, olnyPrivate, logout);

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
    routes.githubCallback,
    passport.authenticate("github", {
        failureRedirect: routes.login,
        successRedirect: routes.home
    }),
    postGithubLogin
);

export default globalRouter;
```

#### FLOW

1. 먼저 사용하는 깃헙 웹사이트로 이동해서 권한 승인을 누른다.
1. 깃헙 웹사이트는 사용자의 정보를 서버로 보내준다.(auth/github/callback)
1. passport가 `githubLoginCallback`함수를 호출한다.
1. `githubLoginCallback`함수에 의해 사용자의 정보를 얻는다.(id, email, name, avatar_url)
1. `githubLoginCallback`함수는 callback(cb)함수를 return 해야하는데, 이 함수에게 error의 유무와 user의 유무를 알려줘야 한다.
1. user가 있다면(=null) passport는 이 user를 취해서 ,쿠키를 만들고 쿠키를 저장한다. 그리고 저장된 쿠키를 브라우저로 보내준다.

### User Detail

로그인이 된 상태에서는 데이터베이스로부터 id값을 가지고 유저 정보를 찾을 필요 없이 바로 유저 정보를 받아 올 수 있으므로 이를 활용하여 User Detail(내 정보보기)를 만들어 본다.

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
const ME = "/me"; //추가

// Videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

//Github

const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: id => {
        if (id) {
            return `/users/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: id => {
        if (id) {
            return `/videos/${id}`;
        } else {
            return VIDEO_DETAIL;
        }
    },
    editVideo: id => {
        if (id) {
            return `/videos/${id}/edit`;
        } else {
            return EDIT_VIDEO;
        }
    },
    deleteVideo: id => {
        if (id) {
            return `/videos/${id}/delete`;
        } else {
            return DELETE_VIDEO;
        }
    },
    github: GITHUB,
    githubCallback: GITHUB_CALLBACK,
    me: ME //추가
};

export default routes;
```

#### userController.js

```javascript
export const getMe = (req, res) => {
    res.render("userDetail", { pageTitle: "User Detail", user: req.user });
};
//req.user은 현재 로그인된 유저에 관한 정보를 담고 있다. 이를 템플릿으로 user라는 이름으로 전송한다.
export const userDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const user = await User.findById(id);
        res.render("userDetail", { pageTitle: "User Detail", user });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};
//무작위로 주소창에 id 값을 입력한 경우에는 이를 가지고와서 데이터베이스에서 유저 정보를 검색한다.
//만약 있는 경우에는 user라는 변수에 담아 템플릿에 전송하고
//없는 경우에는 홈화면으로 redirect한다.
```

#### middlewares.js

기존의 user라는 이름의 전역변수의 이름을 변경한다.
user라는 이름이 중복되어 middleware에서 온 것인지, controller로 부터 온것인지 혼잡을 피하기 위함이다.

```javascript
import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null; //수정
    next();
};
.
.
.
```

#### header.pug

```pug
header.header
    .header__wrapper
        .header__column
            a(href=routes.home)
                i.fab.fa-youtube
        .header__column
            form(action=routes.search, method="get")
                input(type="text", placeholder="Search by term...", name="term")
        .header__column
            ul
                if !loggedUser
                    li
                        a(href=routes.join) Join
                    li
                        a(href=routes.login) Log In
                else
                    li
                        a(href=`/videos${routes.upload}`) Upload
                    li
                        a(href=routes.me) Profile //라우터의 주소를 변경(localhost/me)
                    li
                        a(href=routes.logout) Log Out
```

#### userDetail.pug

```pug
extends layouts/main

block content
   .user-profile
        .user-profile__header
            img.avatar(src=user.avatarUrl) //controller로 부터 받은 user
            h4.profile__username=user.name
```

### Facebook Login

https://developers.facebook.com/ 에 등록

설정 상태 : 라이브로 !

대시보드 > 제품 > Facebook 로그인 > 유요한 OAuth 리디렉션 URI에 ngrok로 변환한 주소 입력
ex)https://75b8a2ed.ngrok.io
ex)https://75b8a2ed.ngrok.io/auth/facebook/callback
위의 둘다 입력

```
npm install passport-facebook
```

#### ngrok

http주소를 https로 바꿔주기 위함
cmd 창 켜서 따로 실행

```
npm install -g ngrok
ngrok.exe http 4004
```

#### passport.js

```javascript
.
.
.
passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FB_ID,
            clientSecret: process.env.FB_SECRET,
            callbackURL: `https://75b8a2ed.ngrok.io${routes.facebookCallback}`,// 변환된 주소 입력
            profileFields: ["id", "displayName", "photos", "email"],
            scope: ["public_profile", "email"]
        },
        facebookLoginCallback
    )
.
.
.
```

그 외 나머지 부분은 github 로그인과 동일!

## Relationships and Route Protection

### Edit Profile

#### editProfile.pug

```pug
extends layouts/main

block content
    .form-container
        form(action=`/users${routes.editProfile}`, method="post",enctype="multipart/form-data")
            .fileUpload
                label(for="avatar") Avatar
                input(type="file", id="avatar", name="avatar", accept="image/*")
            input(type="text" ,placeholder="Name", name="name", value=loggedUser.name)
            input(type="email" ,placeholder="Email" ,name="email", value=loggedUser.email)
            input(type="submit", value="Update Profile" )
```

#### userController.js

```javascript
.
.
.
export const getEditProfile = (req, res) =>
    res.render("editProfile", { pageTitle: "EditvProfile" });

export const postEditProfile = async (req, res) => {
    const {
        body: { name, email },
        file
    } = req;
    try {
        await User.findByIdAndUpdate(req.user.id, {
            name,
            email,
            avatarUrl: file ? file.path : req.user.avatarUrl
        });
        res.redirect(routes.me);
    } catch (error) {
        res.render("editProfile", { pageTitle: "Edit Profile" });
    }
};
.
.
.

```

#### middlewares.js

multer middle 추가

```javascript
const multerAvatar = multer({ dest: "uploads/avatars/" });
export const uploadAvatar = multerAvatar.single("avatar");
```

#### userRouter.js

```javascript
import express from "express";
import routes from "../routes";
import {
    userDetail,
    getEditProfile,
    changePassword,
    postEditProfile
} from "../controllers/userController";
import { olnyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, olnyPrivate, getEditProfile);
userRouter.post(routes.editProfile, olnyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, olnyPrivate, changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
```

### Change Password

#### ChangePassword.pug

```pug
extends layouts/main

block content
    .form-container
        form(action=`/users${routes.changePassword}`, method="post")
            input(type="password", name="oldPassword", placeholder="Current Password")
            input(type="password", name="newPassword", placeholder="New Password")
            input(type="password", name="newPassword1", placeholder="Verify New Password")
            input(type="submit", value="Change Password")
```

#### userController.js

```javascript
.
.
.
export const getChangePassword = (req, res) =>
    res.render("changePassword", { pageTitle: "Change Password" });

export const postChangePassword = async (req, res) => {
    const {
        body: { oldPassword, newPassword, newPassword1 }
    } = req;
    try {
        if (newPassword !== newPassword1) {
            res.status(400);
            res.redirect(`/users${routes.changePassword}`);
            return;
        }
        await req.user.changePassword(oldPassword, newPassword);
        res.redirect(routes.me);
    } catch (error) {
        res.status(400);
        res.redirect(`/users${routes.changePassword}`);
    }
};
.
.
.
```

#### userRouter.js

```javascript
import express from "express";
import routes from "../routes";
import {
    userDetail,
    getEditProfile,
    postEditProfile,
    getChangePassword,
    postChangePassword
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);

userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
```

### Adding Creator to Video

#### videoController.js

```javascript
export const videoDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id).populate("creator"); //populate 객체를 가져오는 함수
        res.render("videoDetail", { pageTitle: video.title, video });
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};
```

#### videoDetail.pug

```pug
extends layouts/main

block content
    .video-detail__container
        .video__player
            video(src=`/${video.fileUrl}`)
        .video__info
            if loggedUser&&(video.creator.id === loggedUser.id) //로그인 안한상태에서도 들어갈수 있게!
                a(href=routes.editVideo(video.id))
                    button Edit video
            h5.video__title=video.title
            p.video__description=video.description
            if video.views === 1
                span.video__views 1 view
            else
                span.video__views #{video.views} views
            .video__author
                |Upload by
                a(href=routes.userDetail(video.creator.id))= video.creator.name
        .video__comments
            if video.comments.length === 1
                span.video__comment-number 1 comment
            else
                span.video__comment-number #{video.comments.length} comments
```

### Protecting Vedeo Routes

#### videoController.js

```javascript
.
.
.
export const getEditVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        if (video.creator !== req.user.id) { //올린사람만 접근 가능
            throw Error();
        } else {
            res.render("editVideo", {
                pageTitle: `Edit ${video.title}`,
                video
            });
        }
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
    }
};
.
.
.
export const deleteVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        if (video.creator !== req.user.id) { //올린 사람만 접근 가능
            throw Error();
        } else {
            await Video.findByIdAndRemove({ _id: id });
        }
    } catch (error) {
        console.log(error);
    }
    res.redirect(routes.home);
};
```

## Custom Video Player

### videoPlayer.pug

```pug
mixin videoPlayer(video = {})
    .videoPlayer#jsVideoPlayer
        video(src=`/${video.src}`)
        .videoPlayer__controls
            .videoPlayer__column
                input.videoPlayer__volume#jsVolume(type="range", min="0", max="1",step="0.1")
                span#jsVolumeBtn
                    i.fas.fa-volume-up
                span
                    span#currentTiem 00:00:00
                    |/
                    span#totalTime 00:00:00
            .videoPlayer__column
                span#jsPlayButton
                    i.fas.fa-play
            .videoPlayer__column
                span#jsFullScreen
                    i.fas.fa-expand
```

### videoPlayer.scss

```scss
.videoPlayer {
    position: relative;
    &:hover {
        .videoPlayer__controls {
            opacity: 1;
        }
    }
    video {
        width: 100%;
        max-width: 100%;
    }
    .videoPlayer__controls {
        opacity: 0;
        transition: opacity 0.4s linear;
        color: white;
        position: absolute;
        z-index: 9;
        bottom: 0px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        font-size: 16px;
        .videoPlayer__column:first-child {
            display: flex;
            align-items: center;
            i {
                margin-right: 10px;
            }
        }
        .videoPlayer__column:last-child {
            justify-self: end;
        }
        .videoPlayer__column:nth-child(2) {
            justify-self: center;
        }
        i {
            font-size: 25px;
            cursor: pointer;
        }
    }
    .videoPlayer__volume {
        position: absolute;
        padding: 0;
        opacity: 1;
        top: -60px;
        left: -25px;
        transform: rotate(-90deg);
        z-index: 10;
        width: 80px;

        input {
            background-color: rgba(0, 0, 0, 0.7);
            &::-webkit-slider-runnable-track {
                background-color: $grey;
                height: 5px;
            }
            &::-webkit-slider-thumb {
                all: unset;
                background-color: $red;
                height: 15px;
                width: 15px;
                border-radius: 50%;
                position: relative;
                top: -5px;
            }
        }
    }
    .videoPlayer__column:last-child {
        justify-self: end;
    }
}
```

### videoPlayer.js

```javascript
const videoContrainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumnBtn = document.getElementById("jsVolumeBtn");
const fullScrnBtn = document.getElementById("jsFullScreen");
const currentTime = document.getElementById("currentTiem");
const totalTime = document.getElementById("totalTime");
const volumeRange = document.getElementById("jsVolume");

function handlePlayClick() {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        videoPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function handleVolumnClick() {
    if (videoPlayer.muted) {
        videoPlayer.muted = false;
        volumnBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        volumeRange.value = videoPlayer.volume;
    } else {
        videoPlayer.muted = true;
        volumnBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        volumeRange.value = 0;
    }
}

function goSmallScreen() {
    fullScrnBtn.innerHTML = '<i class="fas fa-expand"></i>';
    fullScrnBtn.addEventListener("click", goFullScreen);
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function goFullScreen() {
    if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
    } else if (videoContainer.mozRequestFullScreen) {
        videoContainer.mozRequestFullScreen();
    } else if (videoContainer.webkitRequestFullscreen) {
        videoContainer.webkitRequestFullscreen();
    } else if (videoContainer.msRequestFullscreen) {
        videoContainer.msRequestFullscreen();
    }
    fullScrnBtn.innerHTML = '<i class="fas fa-compress"></i>';
    fullScrnBtn.removeEventListener("click", goFullScreen);
    fullScrnBtn.addEventListener("click", goSmallScreen);
}
const formatDate = seconds => {
    const secondsNumber = parseInt(seconds, 10);
    let hours = Math.floor(secondsNumber / 3600);
    let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
    let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        totalSeconds = `0${totalSeconds}`;
    }
    return `${hours}:${minutes}:${totalSeconds}`;
};

function getCurrentTime() {
    currentTime.innerHTML = formatDate(Math.floor(videoPlayer.currentTime));
}

function setTotalTime() {
    const totalTimeString = formatDate(videoPlayer.duration);
    totalTime.innerHTML = totalTimeString;
    setInterval(getCurrentTime, 1000);
}

function handleEnded() {
    videoPlayer.currentTime = 0;
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function handleDrag(e) {
    const {
        target: { value }
    } = e;
    videoPlayer.volume = value;
    if (value > 0.6) {
        volumnBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else if (value > 0.3) {
        volumnBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
    } else {
        volumnBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
    }
}

function init() {
    videoPlayer.volume = 0.5;
    playBtn.addEventListener("click", handlePlayClick);
    volumnBtn.addEventListener("click", handleVolumnClick);
    fullScrnBtn.addEventListener("click", goFullScreen);
    videoPlayer.addEventListener("loadedmetadata", setTotalTime);
    videoPlayer.addEventListener("ended", handleEnded);
    volumeRange.addEventListener("input", handleDrag);
}

if (videoContrainer) {
    init();
}
```

## Custom Video Recorder

### upload.pug

```pug
extends layouts/main

block content

    .form-container
        .record-container#jsRecordContainer
            video#jsVideoPreview
            button#jsRecordBtn Start Recording
        form(action=`/videos${routes.upload}`, method="post", enctype="multipart/form-data")
            div.fileUpload
                label(for="file") Video File
                input(type="file", id="file", name="videoFile", required=true, accept="video/*")
            input(type="text", placeholder="Title", name="title", required=true)
            textarea(name="description", placeholder="Description", required=true)
            input(type="submit", value="Upload Video")
```

### videoRecorder.scss

```scss
.record-container {
    width: 100%;
    max-width: 320px;
    margin-bottom: 50px;
    video {
        background-color: $black;
        width: 100%;
        margin-bottom: 20x;
    }
}
```

### videoRecorder.js

```javascript
const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;
let videoRecorder;

const handleVideoData = e => {
    const { data: videoFile } = e;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(videoFile);
    link.download = "recorded.webm";
    document.body.appendChild(link);
    link.click();
};

const stopRecording = () => {
    videoRecorder.stop();
    recordBtn.removeEventListener("click", stopRecording);
    recordBtn.addEventListener("click", getVideo);
    recordBtn.innerHTML = "Start Recording";
};

const startRecording = () => {
    videoRecorder = new MediaRecorder(streamObject);
    videoRecorder.start();
    videoRecorder.addEventListener("dataavailable", handleVideoData);
    recordBtn.addEventListener("click", stopRecording);
};

const getVideo = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: { width: 1280, height: 720 }
        });
        videoPreview.srcObject = stream;
        videoPreview.muted = true;
        videoPreview.play();
        recordBtn.innerHTML = "Stop recording";
        streamObject = stream;
        startRecording();
    } catch (error) {
        recordBtn.innerHTML = "Cant record";
    } finally {
        recordBtn.removeEventListener("click", getVideo);
    }
};

function init() {
    recordBtn.addEventListener("click", getVideo);
}

if (recorderContainer) {
    init();
}
```

## API + AJAX

### Videos View

#### routes.js

API로 사용할 URL 추가

```javascript
//API

const API = "/api";
const REGISTER_VIEW = "/:id/view";
Router 폴더에 `apiRouter.js` 파일 새로 생성
DB를 변경시킬것이므로 POST
```

####apiRouter.js

```javascript
import express from "express";
import routes from "../routes";
import { postRegisterView } from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);

export default apiRouter;
```

#### videoController.js

page를 rendering하지 않는 Api Controller 생성

```javascript
export const postRegisterView = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        video.view += 1;
        video.save();
        res.status(200);
    } catch (error) {
        res.status(400);
    } finally {
        res.end();
    }
};
```

#### videoPlayer.js

```javacript
const registerView = () => {
    const videoId = window.location.href.split("/videos/")[1];
    fetch(`/api/${videoId}/view`, {
        method: "POST"
    });
};
.
.
.
function handleEnded() { //비디오 재생이 끝나면 regiserView 호출
    registerView();
    videoPlayer.currentTime = 0;
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
}
```

### API Adding a Comment

HTTP request 요청을
Axios는 HTTP통신을 하는데 매우 인기있는 Javascript라이브러리
Fetch API 대신 사용

#### install

```
npm install axios
```

#### routes.js

사용 할 URL 추가

```javascript
const ADD_COMMENT = "/:id/comment";
```

#### videoController.js

```javascript
.
.
.
export const postAddComment = async (req, res) => {
    const {
        params: { id },
        body: { comment123 },
        user
    } = req;
    console.log(req.body);
    try {
        const video = await Video.findById(id);
        const newComment = await Comment.create({
            text: comment123,
            creator: user.id
        });
        video.comments.push(newComment.id);
        video.save();
    } catch (error) {
        console.log(error);
        res.status(400);
    } finally {
        res.end();
    }
};
```

#### apiRouter.js

```javascreipt
import express from "express";
import routes from "../routes";
import {
    postRegisterView,
    postAddComment
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
```

#### addComment.js

assets > js 폴더 안에 addcommet.js 생성
main.js에 추가 !!

```javascript
import axios from "axios";
const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const increaseNumber = () => {
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const addComment = comment => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = comment;
    li.appendChild(span);
    commentList.prepend(li);
    increaseNumber();
};

const sendComment = async comment => {
    const videoId = window.location.href.split("/videos/")[1];
    const response = await axios({
        //fetch 대신 사용
        url: `/api/${videoId}/comment`,
        method: "POST",
        data: {
            comment123: comment
        }
    });
    if (response.status === 200) {
        addComment(comment);
    }
};

const handleSubmit = event => {
    event.preventDefault();
    const commentInput = addCommentForm.querySelector("input");
    const comment = commentInput.value;
    sendComment(comment);
    commentInput.value = "";
};

function init() {
    addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
    init();
}
```

## AW3

AW3의 S3에 동영상과 프로필 사진 파일을 업로드 한다.

### 설치

```
npm install aws-sdk
npm install multer-s3
```

### middlewares.js

```javascript
import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_PRIVATE_KEY,
    region: "ap-northeast-1"
});

const multerVideo = multer({
    storage: multerS3({
        s3,
        acl: "public-read",
        bucket: "rooneywetube/video"
    })
});
const multerAvatar = multer({
    storage: multerS3({
        s3,
        acl: "public-read",
        bucket: "rooneywetube/avator"
    })
});
export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
    next();
};

export const onlyPublic = (req, res, next) => {
    if (req.user) {
        res.redirect(routes.home);
    } else {
        next();
    }
};

export const onlyPrivate = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect(routes.home);
    }
};
```

### videoController.js & userController.js

파일 경로를 아래와 같이 변경해준다.

#### videoController.js

```javascript
export const postUpload = async (req, res) => {
    const {
        body: { title, description },
        file: { location }
    } = req;
    const newVideo = await Video.create({
        // fileUrl: path.replace(/\\/g, "/"),
        fileUrl: location,
        title,
        description,
        creator: req.user.id
    });
    req.user.videos.push(newVideo.id);
    req.user.save();
    res.redirect(routes.videoDetail(newVideo.id));
};
```

#### userController.js

```javascript
export const postEditProfile = async (req, res) => {
    const {
        body: { name, email },
        file
    } = req;
    try {
        await User.findByIdAndUpdate(req.user.id, {
            name,
            email,
            avatarUrl: file ? file.location : req.user.avatarUrl
        });
        res.redirect(routes.me);
    } catch (error) {
        res.redirect(routes.editProfile);
    }
};
```

추가로 videoBlock.pug와 videoPlayer.pug에서 파일의 경로를 바꿔준다

```
src=video.videoFile
```

### get-blob-duration

AWS의 S3를 사용하게 되면 녹화한 파일을 올릴 경우 비디오 전체 재생 길이를 받아 오지 못하는 오류가 발생하는데 이를 해결하기 위해 아래 2가치 패키지를 설치해준다.

```
npm install get-blob-duration
npm add @babel/runtime
```

설치가 완료되면 videoPlayer.js 을 아래와 같이 변경하면 녹화해서 업로드한 파일도 재생길이를 정상적으로 받아오는 것을 확인 할 수 있다.

```javascript
import getBlobDuration from "get-blob-duration";
.
.
.
async function setTotalTime() {
    const blob = await fetch(videoPlayer.src).then(response => response.blob());
    const duration = await getBlobDuration(blob);
    const totalTimeString = formatDate(duration);
    totalTime.innerHTML = totalTimeString;
    setInterval(getCurrentTime, 1000);
}
```

## Migrating the DB to MongoLab

MongoDB Atlas 사용
Local에 DB를 저장하는것이 아닌 Cloud에 저장

## Flash Message

```
npm install express-flash
```
