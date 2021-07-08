const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/user", (req, res) => {
  res.send("hello user");
});

app.listen(port, () => {
  console.log("Express listening on port", port);
});
