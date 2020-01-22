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

라우팅은 애플리케이션 엔드 포인트(URI)의 정의, 그리고 URI가 클라이언트 요청에 응답하는 방식을 말한다.

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

MVC는 Model, View, Controller의 약자로 하나의 프로젝트를 구성할 때 그 구성요소를 세자기의 역할로 구분한 패턴이다.

Model은 데이터를 의미하고, View는 그 데이터를 어떻게 보여주는가를 의미한다. 마지막으로 Controller는 데이터를 보여주는 함수를 의미한다.

이번 Youtube Clone Cording에서는 MVC Pattern을 사용한다.

먼저 Controller를 구성해보겠다. Controller를 구성하기 전에 각 Router의 URI를 지정하기위해 Root디렉토리에 `routes.js` 파일을 만들고 사용할 URI를 지정해준다.

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

URI를 정리했으므로, 이제 Controller에 해당하는 함수들을 각각 정의해준다. `controllers` 디렉토리를 하나 만들고 그 안에 `userController.js` `videoController.js` 파일을 만들어 준다.

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
