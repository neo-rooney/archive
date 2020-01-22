const express = require("express"); //require => node modules을 어딘가에서 가져오는 역할
const app = express(); // app에 express를 실행하고 담는것

const PORT = 4000;

function handleListening() {
    console.log(`listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
    res.send("hello form home");
}

function handleProfile(req, res) {
    res.send("You are my profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening); //port 번호
