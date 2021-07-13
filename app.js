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

app.get("/", (req, res) => {
  res.send("hello express");
});

app.use("/admin", admin);

app.listen(port, () => {
  console.log("Express listening on port", port);
});
