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

### 2020-01-20-월

#### Create My First Express Server

```javascript
const express = require("express"); //require => node modules을 어딘가에서 가져오는 역할
const app = express(); // app에 express를 실행하고 담는것

const PORT = 4000;

function handleListening() {
    console.log(`listening on: http://localhost:${PORT}`);
}

app.listen(PORT, handleListening); //PORT number
```

### 2020-01-22-수

#### Handlig Routes with Express

라우팅은 애플리케이션 엔드 포인트(URI)의 정의, 그리고 URI가 클라이언트 요청에 응답하는 방식을 말합니다.

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

#### ES6 on NodeJS using Babel

##### Babel이란

babel은 최신 버전의 자바스크립트 문법을 브라우저가 이해할 수 있는 문법으로 변환해준다. ES6, ES7 등의 최신 문법을 사용해 코딩을 할 수 있기 때문에 생산성이 향상된다.

##### Babel install

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

##### ES6

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

##### Nodemon

Nodemon을 설치하게되면 코드를 새로 입력한 경우 서버를 다시 껐다가 켜야하는 불편함을 해소시켜 줄 것이다.

###### Nodemon 설치

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
