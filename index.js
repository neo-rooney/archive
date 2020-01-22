import express from "express";
const app = express(); // app에 express를 실행하고 담는것

const PORT = 4000;

const handleListening = () =>
    console.log(`listening on: http://localhost:${PORT}`);

// function handleListening() {
//     console.log(`listening on: http://localhost:${PORT}`);
// }

const handleHome = (req, res) => res.send("Hello from home");

// function handleHome(req, res) {
//     res.send("hello form home");
// }

const handleProfile = (req, res) => res.send("You are my profile");

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening); //port 번호
