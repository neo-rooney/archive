# 벡엔드 구축

1. [벡엔드 코딩 준비하기](#벡엔드-코딩-준비하기)
1. [시퀄라이즈 도입하기](#시퀄라이즈-도입하기)
1. [서버로 데이터 보내기](#서버로-데이터-보내기)
1. [데이터 형식 정의하기](#데이터-형식-정의하기)
1. [CORS](#CORS)
1. [bcrypt](#bcrypt)
1. [모델 수정](#모델-수정)

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

- mysql 5.7 이상의 버전에서는 홈페이지에서 다운로드 후 설치 완료 시점에서 임시 비밀번호 팝업이 뜬다.
- 터미널에서 임시 비밀번호를 이용하여 mysql에 들어가준다. 이 때 mysql 명령어가 입력되지 않을 수 있는데 이는 환경설정이 되어있지 않아서이다.
- mysql -u root -p 명령어를 입력해서 mysql에 들어가준다.
  -set password=password('비밀번호'); 를 입력하여 임시 비밀번호를 변경해준다.
- 변경된 비밀번호를 사용한다.

출처: https://jlblog.me/163 [JLBlog]

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

## 데이터 형식 정의하기

1. models > user.js 만들기
1. user.js

```js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING(40), //DB 데이터 타입 지정
        allowNull: false, //DB 데이터 필수여부 설정
      },
      nickname: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      charset: "utf8", //DB에서 한글 사용에 대한 환경설정
      collate: "utf8_general_ci", //DB에서 한글 사용에 대한 환경설정
    }
  );
  User.associate = (db) => {};
  return User;
};
```

3. index.js에서 설정한 데이터 형식 가져오기

```js
//index.js
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

db.User = require("./user")(sequelize, Sequelize); //위치 중요!

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
```

4. DB 생성하기

- 콘솔에서 아래와 같이 입력(back 디렉토리에서!)

```js
npx sequelize db:create
```

5. app.js에서 db 불러오기

```js
const express = require("express");
const db = require("./models");
const app = express();

db.sequelize.sync(); //DB 불러와서 실행

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("안녕 벡엔드");
});

app.post("/user", async (req, res, next) => {
  try {
    const newUser = await db.User.create({
      emai: req.body.email,
      password: req.body.password,
      nickname: req.body.nicknamel,
    });
    res.status(201).json(newUser);
  } catch (err) {
    console.log(error);
    next(err);
  }
});

app.listen(3085, () => {
  console.log(`백엔드 서버 ${3085}번 포트에서 작동중...`);
});
```

## CORS

1. front 코드 axios url 변경

```js
export const state = () => ({
  me: null,
  followings: [],
  followers: [],
  hasMoreFollowers: true,
  hasMoreFollowings: true,
});
.
.
.
export const actions = {
  signUp({ commit }, payload) {
    this.$axios
      .post("http://localhost:3085/user", { //백엔드 주소로 변경
        email: payload.email,
        nickname: payload.nickname,
        password: payload.password,
      })
      .catch((err) => {
        console.error(err);
      });
    commit("setMe", payload);
  },
.
.
.
```

2. cors 설치

```bash
yarn add cors
```

3. app.js에 cors 추가

```js
const express = require("express");
const db = require("./models");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

db.sequelize.sync();

app.use(cors("http://localhost:3000"));//localhost:3000(프론트 주소)에서 오는 요청은 허용하겠다는 의미
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("안녕 벡엔드");
});
.
.
.
```

## bcrypt

- 프론트의 req.body, 백앤드의 res에서 비밀번호가 그대로 노출되는 문제가 있음
- 따라서 비밀번호를 db에 저장하기 전에 암호화하는 과정이 필요, 이 때 사용하는것이 bcrypt

1. bcrypt 설치

```bash
yarn add bcrypt
```

2. app.js에서 비밀번호 암호화

```js
const express = require("express");
const db = require("./models");
const cors = require("cors");
const bcrypt = require("bcrypt");
.
.
.
app.post("/user", async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 12);//비밀번호 암호화, 12는 salt로 높을수록 암호화되는 정도가 강해지지만 서버가 느려질 수 있음
    const newUser = await db.User.create({
      email: req.body.email,
      password: hash,
      nickname: req.body.nickname,
    });
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return next(error)
  }
});
.
.
.
```

## 모델 수정

- 회원가입시 중복된 이메일 있는지 여부를 확인해야한다.

1. app.js에서 db에 데이터 저장하기 전에 검증하는 로직 추가

```js
const express = require("express");
const db = require("./models");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
.
.
.
app.post("/user", async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 12);

    const exUser = await db.User.findOne({
      email: req.body.email,
    })
    if(exUser){//이미 회원가입 되어있는 경우
      return res.status(403).json({ //403 금지 에러
        errorCode: 1,
        message:'이미 회원가입되어있습니다.'
      })
    }
    const newUser = await db.User.create({ //
      email: req.body.email,
      password: hash,
      nickname: req.body.nickname,
    });
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});
.
.
.
```

2. 서버단에서 중복여부를 감지 못할 수도 있으므로 user.js의 DB 모델 수정
```js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: true, //중복금지
      },
      nickname: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  User.associate = (db) => {};
  return User;
};
```

3. DB 모델을 수정하는 경우 자동으로 반영되는것이 아니므로 app.js에 코드 추가해야됌
```js
const express = require("express");
const db = require("./models");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

db.sequelize.sync({ force: true }); //추가된 부분
.
.
.
```
- force: true 한 경우 기존의 DB데이터 모두 초기화되므로 실서버에서는 사용하지 않음
- 실 서버에서는 migration 사용해야함

