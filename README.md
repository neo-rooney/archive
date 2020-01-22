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
