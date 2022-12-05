const http = require("http");
const fs = require("fs");
//모듈 추가
const url = require("url");
const qs = require("querystring");

const hostname = "localhost";
const port = 3000;

const parseCookies = (cookie = "") =>
  cookie
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

const server = http.createServer((req, res) => {
  const cookie = parseCookies(req.headers.cookie);
  if (req.url.startsWith("/login")) {
    //1. url 이 /loing으로 시작한다면 여기
    const { query } = url.parse(req.url);
    const { myID } = qs.parse(query);
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 5);
    res.writeHead(302, {
      Location: "/",
      "Set-Cookie": `myID=${encodeURIComponent(
        myID
      )}; Expires=${expires.toGMTString()};HttpOnly;Path=/`,
    });
    res.end();
  } else if (cookie.myID) {
    //2.쿠키가 있다면 여기!
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`${cookie.myID}님이 로그인 하셨습니다.`);
  } else {
    //3.쿠키가 없다면 여기!
    fs.readFile("./login.html", (err, data) => {
      if (err) {
        throw err;
      }
      res.writeHead(200);
      res.end(data);
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
