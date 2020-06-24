# 벡엔드 구축

1. [벡엔드 코딩 준비하기](#벡엔드-코딩-준비하기)
1. [시퀄라이즈 도입하기](#시퀄라이즈-도입하기)
1. [서버로 데이터 보내기](#서버로-데이터-보내기)

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

## 시퀄라이즈 도입하기

1. sequelize, mysql 설치

```bash
yarn add sequelize mysql2
```

- squelize는 자바스크립트 언어를 이용하여 sql 표현하기 위함
- mysql2는 mysql DB를 설치한 것이 아님. DB는 mysql 홈페이지에서 받는 것이고, mysql2는 node와 mysql DB를 연결하기 위한 드라이버임.

2. sequelize-cli 설치

```bash
yarn add -D sequelize-cli
```

3. 콘솔에 npx sequlize init

- config, migrations, models, seeders 폴더 생성됨
- node와 mysql을 연결하는데 필요한 설정들을 위한 폴더들임

4. models > index.js 파일 수정

```js
// models > index.js
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
```

5. config > config.json 수정하기

```bash
{
  "development": {
    "username": "root", #mysql 아이디 넣기
    "password": null, #mysql 비밀번호 넣기
    "database": "database_development", #db 이름 넣기
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
```

## 서버로 데이터 보내기

1. app.js에 회원가입 코드 작성

```js
const express = require("express");

const app = express();

app.use(express.json()); // express.json이 프론트로부터 json데이터를 해석해서 req.body에 넣어준다.
app.use(express.urlencoded({ extended: false })); // express.urlencoded이 프론트로부터온 form 데이터를 해석해서 req.body에 넣어준다.
app.get("/", (req, res) => {
  res.send("안녕 벡엔드");
});

app.post("/user", (req, res) => {
  req.body.email;
  req.body.password;
  req.body.nicknamel;
});

app.listen(3085, () => {
  console.log(`백엔드 서버 ${3085}번 포트에서 작동중...`);
});
```
