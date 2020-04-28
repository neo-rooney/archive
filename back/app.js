const express = require("express");
const db = require("./models");
const app = express();

db.sequelize.sync();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("안녕 시퀄라이즈");
});

app.post("/user", async (req, res, next) => {
  try {
    const newUser = await db.User.create({
      where: {
        email: req.body.email,
        password: req.body.password,
        nickname: req.body.nickname,
      },
    });
    res.status(201).json(newUser);
  } catch (err) {
    console.err(err);
    next(err);
  }
});

app.listen(3085, () => {
  console.log("백엔드 서버 3085번 포트에서 작동중.");
});
