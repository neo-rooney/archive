const express = require("express");
const db = require("./models");
const app = express();

db.sequelize.sync();

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
    res.status(201).json(newUser)
  } catch (err) {
    console.log(error);
    next(err)
  }
});

app.listen(3085, () => {
  console.log(`백엔드 서버 ${3085}번 포트에서 작동중...`);
});
