const express = require("express");
const admin = require("./routes/admin");
const nunjucks = require("nunjucks");
const logger = require("morgan");
// const bodyParser = require("body-parser");

const app = express();
const port = 3000;

/**
 * 폴더명
 * autoescapte : true 하면 <script> 태그를 쓰는 등의 보안이 자동으로 설정된다.
 */
nunjucks.configure("template", {
  autoescape: true,
  express: app,
});

// 미들웨어 셋팅
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/uploads", express.static("uploads"));

app.use((req, res, next) => {
  app.locals.isLogin = false;
  app.locals.req_path = req.path;
  next();
});

app.get("/", (req, res) => {
  res.send("hello express");
});

app.use("/admin", admin);

app.use((req, res, _) => {
  res.status(400).render("common/404.html");
});

app.use((req, res, _) => {
  res.status(500).render("common/500.html");
});

app.listen(port, () => {
  console.log("Express listening on port", port);
});
