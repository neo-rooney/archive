const express = require("express"); //require => node modules을 어딘가에서 가져오는 역할
const app = express(); // app에 express를 실행하고 담는것

function handleListening() {
    console.log("listening on: http://localhost:4000");
}

app.listen(4000, handleListening); //port 번호
