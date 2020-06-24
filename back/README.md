# 벡엔드 구축

## 벡엔드 코딩 준비하기

1. Node 설치
1. mysql 설치
1. back디렉토리 만들기
1. yarn init
1. express 설치

```bash
yarn add express
```

6. package.json 수정

```bash
{
  "name": "back",
  "version": "1.0.0",
  "main": "app.js", #main파일 변경
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1"
  },
  "scripts": {
    "dev": "node app.js" #scripts 추가
  }
}
```

7. app.js에 서버 코드 작성

```js
// app.js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("안녕 벡엔드");
});

app.listen(3085, () => {
  console.log(`백엔드 서버 ${3085}번 포트에서 작동중...`);
});
```
8. 콘솔에 yarn dev 실행 후 localhost:3085 접속해서 확인