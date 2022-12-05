# 벡엔드 구축

1. [벡엔드 코딩 준비하기](#벡엔드-코딩-준비하기)
1. [시퀄라이즈 도입하기](#시퀄라이즈-도입하기)
1. [서버로 데이터 보내기](#서버로-데이터-보내기)
1. [데이터 형식 정의하기](#데이터-형식-정의하기)
1. [CORS](#CORS)
1. [bcrypt](#bcrypt)
1. [모델 수정](#모델-수정)
1. [Login 개념](#Login-개념)
1. [passport](#passport)
1. [로그인 연동](#로그인-연동)
1. [라우터 분리](#라우터-분리)
1. [로그아웃](#로그아웃)
1. [1대다 관계](#1대다-관계)
1. [다대다 관계](#다대다-관계)

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

## Login 개념

- Flow
  1. 프론트로부터 email과 password가 req.body에 실려서 넘어옴
  1. 백엔드에서 DB에 해당 이메일이 있는지, 비밀번호가 일치하는지 여부를 검사함
  1. 일치한다면 서버의 session의 cookie에 유저 정보를 저장함
  1. 만들어진 cookie를 프론트 서버로 돌려보내고 프론트 서버는 이를 저장
  1. 로그인된 유저는 앞으로 요청을 보낼 때 마다 Header에 쿠키를 넣어서 요청을 보냄
  1. 서버는 Header에 실려서온 cookie가 유효한지 여부를 검사하고 유효하다면 해당 요청에 대한 응답을 보내줌

1. passport 설치

```bash
yarn add passport passport-local
```

2. root > passport 디렉토리 생성 > index.js 생성

```js
//root > passport > index.js
const passport = require("passport");

module.exports = () => {
  passport.serializeUser(() => {});
  passport.deserializeUser(() => {});
};
```

3. app.js에 passport 인식

```js
const express = require("express");
const db = require("./models");
const cors = require("cors");
const bcrypt = require("bcrypt");
const passportConfig = require("./passport"); //내가 만든 passport 파일
const passport = require("passport"); //설치한 passport 모듈
const morgan = require("morgan");

const app = express();

db.sequelize.sync();
passportConfig(); //서버가 시작될 때 내가 생성한 passport와 연결

app.use(morgan("dev"));
app.use(cors("http://localhost:3000"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize()); //middleware로 passport 모듈 사용
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("안녕 벡엔드");
});
.
.
.
```

4. 쿠키를 저장 할 세션 middleware 추가

```js
const express = require("express");
const db = require("./models");
const cors = require("cors");
const bcrypt = require("bcrypt");
const passportConfig = require("./passport"); //내가 만든 passport 파일
const passport = require("passport"); //설치한 passport 모듈
const session = require("express-session");
const morgan = require("morgan");

const app = express();

db.sequelize.sync();
passportConfig(); //서버가 시작될 때 내가 생성한 passport와 연결

app.use(morgan("dev"));
app.use(cors("http://localhost:3000"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "cookiesecret", //쿠키를 암호화하고 복호화 하는데 사용하는 키
  })
);
app.use(passport.initialize()); //middleware로 passport 모듈 사용
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("안녕 벡엔드");
});
.
.
.
```

5. 유저 정보를 저장할 쿠키를 미들웨어로 추가

```js
const express = require("express");
const db = require("./models");
const cors = require("cors");
const bcrypt = require("bcrypt");
const passportConfig = require("./passport"); //내가 만든 passport 파일
const passport = require("passport"); //설치한 passport 모듈
const session = require("express-session");
const morgan = require("morgan");
const cookie = require("cookie-parser");


const app = express();

db.sequelize.sync();
passportConfig(); //서버가 시작될 때 내가 생성한 passport와 연결

app.use(morgan("dev"));
app.use(cors("http://localhost:3000"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie("cookiesecret"));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "cookiesecret", //쿠키를 암호화하고 복호화 하는데 사용하는 키
  })
);
app.use(passport.initialize()); //middleware로 passport 모듈 사용
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("안녕 벡엔드");
});
.
.
.
```

## passport

- id(email), password를 사용해서 login 하려는 경우 passport-local이라는 strategy를 사용해야함

1. passport > local.js파일 생성

- app.js에서 passport 가 미들웨어로 사용 될 때 passport의 미들웨어 형식으로 passport local이 실행되도록 코드를 작성한것

```js
const passport = require("passport");
const bcrypt = require("bcrypt");
const { Strategy: LocalStrategy } = require("passport-local");
const db = require("../models/");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email", //req.body.email
        passwordField: "password", //req.body.password
      },
      async (email, password, done) => {
        try {
          const exUser = await db.User.findOne({ where: { email } });
          if (!exUser) {
            return done(null, false, {
              reason: "존재하지 않는 사용자입니다.",
            }); // 에러|성공|실패
          }
          const result = await bcrypt.compare(password, exUser.password);
          if (result) {
            return done(null, exUser);
          } else {
            return done(null, false, { reason: "비밀번호가 틀립니다." });
          }
        } catch (err) {
          console.error(err);
          return done(err);
        }
      }
    )
  );
};
```

2. passport > index.js 파일 수정

- app.js에서 req.login 실행 될 때 serializeUser가 실행됨
- 유저의 모든 정보를 서버에 저장하는것은 서버에 부담이 되므로 특정 정보만 서버의 세션에 저장하기 위함

```js
const passport = require("passport");

module.exports = () => {
  passport.serializeUser((user, done) => {
    return done(null, user.id); //사용자의 정보 중 id만 세션에 저장
  });
  passport.deserializeUser(() => {});
};
```

3. app.js파일 수정

```js
const express = require("express");
const db = require("./models");
const cors = require("cors");
const bcrypt = require("bcrypt");
const passportConfig = require("./passport");
const passport = require("passport");
const session = require("express-session");
const cookie = require("cookie-parser");
const morgan = require("morgan");

const app = express();
.
.
.
app.post("/user/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, (err) => { //res.login은 passport.initialize를 미들웨서로 사용했으므로 사용하능한것
    //res.login은 백엔드의 세션에 사용자 정보를 저장해주고 프론트로 세션에 저장된 쿠키를 내려보내줌
    //이 때 serializeUser가 실행됨
      if (err) {
        console.error(err);
        return next(err);
      }
      //프론트에 쿠키를 내려보낼 때 res.body에 사용자 정보도 같이 보냄!(선택)
      return res.json(user)
    });
  })(req, res, next);
});

app.listen(3085, () => {
  console.log(`백엔드 서버 ${3085}번 포트에서 작동중...`);
});

```

## 로그인 연동

1. front의 store/user.js의 login 코드 작성

```js
//user.js
logIn({ commit }, payload) {
    this.$axios
      .post(
        "http://localhost:3085/user/login",
        {
          email: payload.email,
          password: payload.password,
        },
        {
          withCredentials: true,
        }
      )
      .then((data) => {
        console.log("data>>>", data);
        commit("setMe", payload);
      })
      .catch((err) => {
        console.error(err);
      });
  },
```

- 서버와 프론트의 주소가 다름으로 인해서 쿠키가 전송되지 않는 문제가 있음
- 이를 해결하기 위해서 프론트와 백엔드에도 모두 작업이 필요한데 프론트에서는 axios의 3번째 인자로 `withCredentials`를 `true`로 넘겨주어야함

2. back의 app.js 코드 수정

```js
.
.
.
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //credentials 옵션 추가
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie("cookiesecret"));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "cookiesecret",
    cookie: {//cookie 옵션 추가
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("안녕 벡엔드");
});

app.post("/user", async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 12);
    const exUser = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      //이미 회원가입 되어있는 경우
      return res.status(403).json({
        errorCode: 1,
        message: "이미 회원가입되어있습니다.",
      });
    }
    //회원 등록
    await db.User.create({
      email: req.body.email,
      password: hash,
      nickname: req.body.nickname,
    });
    //회원가입 후 바로 로그인 진행
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      if (info) {
        return res.status(401).send(info.reason);
      }
      return req.login(user, (err) => {
        //세션에 사용자 정보 저장
        if (err) {
          console.error(err);
          return next(err);
        }
        return res.json(user);
      });
    })(req, res, next);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});
app.post("/user/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (err) => {
      // 세션에다 사용자 정보 저장 (어떻게? serializeUser)
      if (err) {
        console.error(err);
        return next(err);
      }
      return res.json(user);
    });
  })(req, res, next);
});

app.listen(3085, () => {
  console.log(`백엔드 서버 ${3085}번 포트에서 작동중...`);
});
```

3. passport > index.js 코드 수정

```js
const passport = require("passport");
const local = require("./local");
const db = require("../models");

module.exports = () => {
  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    //로그인 후 프론트로부터 오는 모든 요청에 대해 실행된다.
    try {
      const user = await db.User.findOne({ where: { id } });
      return done(null, user); // req.user, req.isAuthenticated() === true,
    } catch (err) {
      console.error(err);
      return done(err);
    }
  });
  local();
};
```

## 라우터 분리

1. root > routes 디렉토리 생성 > user.js 파일 생성

2. user.js파일 코드 입력

```js
//  @/routes/uconst express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const db = require("../models");

const router = express.Router();
router.post("/", async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 12);
    const exUser = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      //이미 회원가입 되어있는 경우
      return res.status(403).json({
        errorCode: 1,
        message: "이미 회원가입되어있습니다.",
      });
    }
    //회원 등록
    await db.User.create({
      email: req.body.email,
      password: hash,
      nickname: req.body.nickname,
    });
    //로그인
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        console.error(err);
        return next(err);
      }
      if (info) {
        return res.status(401).send(info.reason);
      }
      return req.login(user, (err) => {
        //세션에 사용자 정보 저장
        if (err) {
          console.error(err);
          return next(err);
        }
        return res.json(user);
      });
    })(req, res, next);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (err) => {
      // 세션에다 사용자 정보 저장 (어떻게? serializeUser)
      if (err) {
        console.error(err);
        return next(err);
      }
      return res.json(user);
    });
  })(req, res, next);
});
```

3. app.js에서 불필요한 코드 삭제 및 만든 router 연결

```js
// @/app.js
const express = require("express");
const db = require("./models");
const cors = require("cors");
const passportConfig = require("./passport");
const passport = require("passport");
const session = require("express-session");
const cookie = require("cookie-parser");
const morgan = require("morgan");
const userRouter = require("./routes/user");

const app = express();

db.sequelize.sync();
passportConfig();

app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie("cookiesecret"));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "cookiesecret",
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("안녕 벡엔드");
});

app.use("/user", userRouter);

app.listen(3085, () => {
  console.log(`백엔드 서버 ${3085}번 포트에서 작동중...`);
});
```

## 로그아웃

1. routes > user.js에 로그아웃 코드 작성

```js
.
.
.
router.post("/logout", (req, res) => {
  if (req.isAuthenticated()) { //사용자가 로그인 되어있는 경우
    req.logOut();
    return res.status(200).send("로그아웃 되었습니다.");
  }
});
module.exports = router;
```

2. front의 코드와 연동

```js
// front/store/user.js
.
.
.
  logOut({ commit }) {
    this.$axios
      .post(
        "http://localhost:3085/user/logout",
        {},
        {
          withCredentials: true, //프론트와 서버의 주소가 다르므로 항상 넣어줘야함(nuxt.config.js에서 default로 설정가능한데 추후 다룰예정)
        }
      )
      .then((res) => {
        commit("setMe", null);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  .
  .
  .

```

## 1대다 관계

- 프로젝트에서 필요한 데이터의 형식을 지정한다.
- 이 때 데이터 간의 관계를 정의한다.
- 프로젝트의 post를 예로든다.

1. @/back/models/post.js 생성
1. 코드 작성

```js
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      //테이블명 posts
      content: {
        type: DataTypes.TEXT, //길이를 특정 할 수 없는 긴 글은 TEXT
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4", //한글 & 이모티콘까지 허용
      collate: "utf8mb4_general_ci",
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); //UserId
  };
  return Post;
};
```

- 하나의 Post는 한 명의 유저와 연결된다.

  3.user.js 관계 설정

```js
//@/back/models/user.js
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
  User.associate = (db) => {
    db.User.hasMany(db.Post);
  };
  return User;
};
```

- 한 명의 유저는 여러개의 Post를 갖을 수 있다.

이러한 관계가 1대다 관계에 해당한다.

## 다대다 관계

- hashtag를 예로 든다.

1. @/back/models/hashtag.js 생성
1. 코드 작성

```js
module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    "Hashtag",
    {
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4", //한글 & 이모티콘까지 허용
      collate: "utf8mb4_general_ci",
    }
  );
  Hashtag.associate = (db) => {
    db.Hashtag.belongsToMany(db.Post, { through: "PostHashtag" }); //UserId
  };
  return Hashtag;
};
```

- hashtag는 여러개의 게시물에 속 할 수 있다.
- 게시물 역시 여러개의 hashtag를 갖을 수 있다.
- 이런 관계를 다대다 관계라고 한다.
- mysql에서는 하나의 컬럼에 여러개의 외부 참조(다른 컬럼의 ID같은것)를 할 수 없다.
- 따라서 중간에 새로운 컬럼을 만들어서 다대다 관계의 데이터의 관계를 정의한다.
- 위 예에서는 중간에 만드는 새로운 컴럼은 PostHashtag에 해당한다.

3. post.js코드 수정

```js
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      //테이블명 posts
      content: {
        type: DataTypes.TEXT, //길이를 특정 할 수 없는 긴 글은 TEXT
        allowNull: false,
      },
    },
    {
      charset: "utf8mb4", //한글 & 이모티콘까지 허용
      collate: "utf8mb4_general_ci",
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); //UserId
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" }); //UserId
  };
  return Post;
};
```

- Hashtag와 동일하게 코드를 작성한다.
